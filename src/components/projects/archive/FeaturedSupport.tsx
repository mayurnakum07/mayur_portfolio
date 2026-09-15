import ArtifactFrame from "@/components/ui/ArtifactFrame";
import type { Project } from "@/data/projects";
import Link from "next/link";

interface FeaturedSupportProps {
  project: Project;
  index: number;
  /** Flip image/text rhythm on desktop for visual variety. */
  reverse?: boolean;
}

/** Compact supporting featured project — for paired editorial rhythm. */
export default function FeaturedSupport({
  project,
  index,
  reverse = false,
}: FeaturedSupportProps) {
  const isProduction = project.status === "Production";
  const platforms = project.platforms.slice(0, 3).join(" · ");
  const metric = project.metrics?.[0];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col border-b border-ink-border no-underline transition-opacity duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal lg:border-b-0"
    >
      <div
        className={
          reverse
            ? "flex flex-col gap-6 py-8 lg:flex-col-reverse lg:py-0"
            : "flex flex-col gap-6 py-8 lg:py-0"
        }
      >
        <div className="artifact-frame-slot">
          <ArtifactFrame
            src={project.images.card}
            alt={project.imageAlt}
            sizes="(max-width: 1024px) 100vw, 480px"
            interactive
            aspectClass="aspect-[16/10]"
          />
        </div>

        <div>
          <div className="flex items-baseline gap-3">
            <span className="index-rail shrink-0">
              {String(index).padStart(2, "0")}
            </span>
            <span className="font-mono text-meta-sm text-paper-faint">
              {project.category}
            </span>
          </div>

          <h3 className="ledger-row__name-link mt-3 font-display text-heading-lg text-paper">
            {project.name}
          </h3>

          <p className="mt-3 max-w-prose text-body-md text-paper-muted">
            {project.tagline}
          </p>

          <p className="mt-4 font-mono text-meta-sm text-paper-faint">
            {platforms}
            {isProduction ? " · Production" : ` · ${project.status}`}
            {metric ? ` · ${metric.value} ${metric.label}` : ""}
          </p>

          <p className="mt-5 font-mono text-meta-sm text-paper-faint transition-colors duration-200 group-focus-within:text-signal [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-signal">
            Case study →
          </p>
        </div>
      </div>
    </Link>
  );
}
