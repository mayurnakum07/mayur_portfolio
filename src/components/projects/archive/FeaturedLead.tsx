import ArtifactFrame from "@/components/ui/ArtifactFrame";
import type { Project } from "@/data/projects";
import Link from "next/link";

interface FeaturedLeadProps {
  project: Project;
  index?: number;
  priority?: boolean;
}

/** Dominant featured project — large artifact, editorial type. */
export default function FeaturedLead({
  project,
  index = 1,
  priority = false,
}: FeaturedLeadProps) {
  const isProduction = project.status === "Production";
  const metric = project.metrics?.[0];
  const platforms = project.platforms.join(" · ");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border-b border-ink-border no-underline transition-opacity duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
    >
      <div className="grid grid-cols-12 gap-x-4 gap-y-8 py-10 lg:gap-x-8 lg:items-start lg:py-14">
        <div className="col-span-12 lg:col-span-7">
          <div className="artifact-frame-slot">
            <ArtifactFrame
              src={project.images.card}
              alt={project.imageAlt}
              sizes="(max-width: 1024px) 100vw, 720px"
              interactive
              priority={priority}
              aspectClass="aspect-[16/10]"
              caption={`${project.category} · ${platforms}`}
            />
          </div>
        </div>

        <div className="col-span-12 flex flex-col lg:col-span-5 lg:pt-1">
          <div className="flex items-baseline gap-3">
            <span className="index-rail shrink-0">
              {String(index).padStart(2, "0")}
            </span>
            <span className="font-mono text-meta-sm text-paper-faint">
              Lead selection
            </span>
          </div>

          <h3 className="ledger-row__name-link mt-4 font-display text-display-md text-paper">
            {project.name}
          </h3>

          <p className="mt-4 max-w-prose text-body-lg text-paper-muted">
            {project.tagline}
          </p>

          <dl className="mt-8 space-y-3 border-t border-ink-border pt-6">
            {project.role && (
              <div className="grid grid-cols-[5.5rem_1fr] gap-3 sm:grid-cols-[6.5rem_1fr]">
                <dt className="font-mono text-meta-sm text-paper-faint">Role</dt>
                <dd className="font-mono text-meta-sm text-paper-muted">
                  {project.role}
                </dd>
              </div>
            )}
            <div className="grid grid-cols-[5.5rem_1fr] gap-3 sm:grid-cols-[6.5rem_1fr]">
              <dt className="font-mono text-meta-sm text-paper-faint">Status</dt>
              <dd className="inline-flex items-center gap-1.5 font-mono text-meta-sm text-paper-muted">
                {isProduction && (
                  <span className="status-dot status-dot--live" aria-hidden />
                )}
                {project.status} · {project.year}
              </dd>
            </div>
            {metric && (
              <div className="grid grid-cols-[5.5rem_1fr] gap-3 sm:grid-cols-[6.5rem_1fr]">
                <dt className="font-mono text-meta-sm text-paper-faint">
                  Signal
                </dt>
                <dd className="font-mono text-meta-sm text-paper-muted">
                  <span className="text-paper">{metric.value}</span>{" "}
                  {metric.label}
                </dd>
              </div>
            )}
          </dl>

          <p className="mt-8 font-mono text-meta-sm text-paper-faint transition-colors duration-200 group-focus-within:text-signal [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-signal">
            Read case study →
          </p>
        </div>
      </div>
    </Link>
  );
}
