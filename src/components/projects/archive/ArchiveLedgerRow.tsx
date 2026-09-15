import ArtifactFrame from "@/components/ui/ArtifactFrame";
import type { Project } from "@/data/projects";
import { homeSelectedSlugs } from "@/data/home";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ArchiveLedgerRowProps {
  project: Project;
  index: number;
}

export default function ArchiveLedgerRow({
  project,
  index,
}: ArchiveLedgerRowProps) {
  const isProduction = project.status === "Production";
  const selected = (homeSelectedSlugs as readonly string[]).includes(
    project.slug
  );
  const platforms = project.platforms.slice(0, 3).join(" · ");
  const stackPreview = project.stack.slice(0, 3).join(", ");
  const outcome =
    project.metrics?.[0]
      ? `${project.metrics[0].value} ${project.metrics[0].label}`
      : project.highlights[0];

  return (
    <Link
      href={`/projects/${project.slug}`}
      data-archive-row={project.slug}
      data-archive-image={project.images.card}
      data-archive-alt={project.imageAlt}
      className={cn("ledger-row group block no-underline")}
    >
      <span className="index-rail pt-0.5">
        {String(index).padStart(2, "0")}
      </span>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="ledger-row__name ledger-row__name-link">
            {project.name}
          </span>
          {selected && (
            <span className="font-mono text-meta-xs text-paper-faint">
              — selected
            </span>
          )}
        </div>

        <p className="mt-1.5 max-w-prose text-body-md text-paper-muted">
          {project.tagline}
        </p>

        {/* Compact mobile meta — expand panel is desktop-only */}
        <p className="mt-2 font-mono text-meta-sm text-paper-faint lg:hidden">
          {project.category} · {project.year}
          {isProduction ? " · Production" : ` · ${project.status}`}
        </p>

        {/* Mobile / tablet: show project image inline in the list */}
        <div className="mt-4 max-w-[200px] artifact-frame-slot lg:hidden">
          <ArtifactFrame
            src={project.images.card}
            alt={project.imageAlt}
            sizes="200px"
            aspectClass="aspect-[4/3]"
          />
        </div>

        <div className="ledger-row__expand">
          <dl className="mb-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-meta-sm text-paper-muted">
            {project.role && (
              <div>
                <span className="text-paper-faint">Role </span>
                {project.role}
              </div>
            )}
            <div>
              <span className="text-paper-faint">Platforms </span>
              {platforms}
            </div>
            <div>
              <span className="text-paper-faint">Stack </span>
              {stackPreview}
              {project.stack.length > 3 ? "…" : ""}
            </div>
            {outcome && (
              <div>
                <span className="text-paper-faint">Outcome </span>
                {outcome}
              </div>
            )}
          </dl>

        </div>
      </div>

      <div className="ledger-row__meta">
        <span>{project.category}</span>
        <span className="hidden lg:inline">{platforms}</span>
        <span>{project.year}</span>
        <span className="inline-flex items-center gap-1.5">
          {isProduction && (
            <span className="status-dot status-dot--live" aria-hidden />
          )}
          {project.status}
        </span>
        <span
          className="text-paper-faint transition-colors duration-200 group-focus-within:text-signal [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-signal"
          aria-hidden
        >
          →
        </span>
      </div>
    </Link>
  );
}
