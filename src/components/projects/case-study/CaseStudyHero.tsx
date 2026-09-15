import Link from "next/link";
import ArtifactFrame from "@/components/ui/ArtifactFrame";
import MaskReveal from "@/components/motion/MaskReveal";
import type { Project } from "@/data/projects";

interface CaseStudyHeroProps {
  project: Project;
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const isProduction = project.status === "Production";
  const platforms = project.platforms.join(" · ");

  return (
    <header className="section-standard border-b border-ink-border">
      <div className="container-page">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-meta-sm text-paper-faint">
            <li>
              <Link
                href="/projects"
                className="signal-link signal-link--muted min-h-0 text-meta-sm"
              >
                Projects
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-paper-muted">
              {project.name}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-12 gap-x-4 gap-y-6 lg:gap-x-8">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-meta-sm text-paper-muted">
              <span>{project.category}</span>
              <span aria-hidden className="text-paper-faint">
                ·
              </span>
              <span className="inline-flex items-center gap-1.5">
                {isProduction && (
                  <span className="status-dot status-dot--live" aria-hidden />
                )}
                {project.status}
              </span>
              <span aria-hidden className="text-paper-faint">
                ·
              </span>
              <span>{project.year}</span>
            </div>

            <MaskReveal as="div" immediate delay={0.05} className="mt-5">
              <span className="line-mask">
                <h1 className="font-display text-display-lg text-paper">
                  {project.name}
                </h1>
              </span>
              <span className="line-mask mt-3">
                <p className="max-w-measure text-body-lg text-paper-muted">
                  {project.tagline}
                </p>
              </span>
            </MaskReveal>

            <p className="mt-6 max-w-measure text-body-lg text-paper-muted">
              {project.summary}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:pt-1">
            <dl className="space-y-4">
              {project.role && (
                <div>
                  <dt className="font-mono text-meta-sm text-paper-faint">
                    Role
                  </dt>
                  <dd className="mt-1.5 font-mono text-meta-sm text-paper-muted">
                    {project.role}
                  </dd>
                </div>
              )}
              {project.client && (
                <div>
                  <dt className="font-mono text-meta-sm text-paper-faint">
                    Client
                  </dt>
                  <dd className="mt-1.5 font-mono text-meta-sm text-paper-muted">
                    {project.client}
                  </dd>
                </div>
              )}
              <div>
                <dt className="font-mono text-meta-sm text-paper-faint">
                  Platforms
                </dt>
                <dd className="mt-1.5 font-mono text-meta-sm text-paper-muted">
                  {platforms}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="artifact-frame-slot mt-10 lg:mt-16">
          <ArtifactFrame
            src={project.images.hero}
            alt={project.imageAlt}
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
            aspectClass="aspect-[16/10] sm:aspect-[16/9]"
            caption={`${platforms} · ${project.year}`}
          />
        </div>
      </div>
    </header>
  );
}
