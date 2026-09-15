import IndexRail from "@/components/ui/IndexRail";
import MaskReveal from "@/components/motion/MaskReveal";
import MarginNote from "@/components/ui/MarginNote";
import { countProductionProjects, projects } from "@/data/projects";

export default function ProjectsArchiveHeader() {
  const total = projects.length;
  const production = countProductionProjects();

  return (
    <section
      aria-labelledby="archive-heading"
      className="section-major border-b border-ink-border"
    >
      <div className="container-page">
        <div className="grid grid-cols-12 gap-x-4 gap-y-6 lg:gap-x-8">
          <div className="col-span-12 lg:col-span-1">
            <IndexRail number="01" />
          </div>

          <div className="col-span-12 lg:col-span-7">
            <MaskReveal as="div" immediate delay={0.05}>
              <span className="line-mask mb-4">
                <span className="font-mono text-meta-lg text-paper-muted">
                  Project archive
                </span>
              </span>
              <span className="line-mask">
                <h1
                  id="archive-heading"
                  className="font-display text-display-lg text-paper"
                >
                  Products shipped.
                </h1>
              </span>
              <span className="line-mask mt-2">
                <span className="font-display text-display-md text-paper-muted">
                  Problems solved.
                </span>
              </span>
            </MaskReveal>

            <p className="mt-8 max-w-measure text-body-lg text-paper-muted">
              A curated catalog of production software across AI, web, and
              mobile — featured pieces first, then the full indexed archive.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:pt-2">
            <MarginNote>
              {total} products · {production} in production
            </MarginNote>
          </div>
        </div>
      </div>
    </section>
  );
}
