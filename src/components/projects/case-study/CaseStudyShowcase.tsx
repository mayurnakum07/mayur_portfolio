import ArtifactFrame from "@/components/ui/ArtifactFrame";
import MaskReveal from "@/components/motion/MaskReveal";
import type { Project } from "@/data/projects";

interface CaseStudyShowcaseProps {
  project: Project;
  index: string;
}

/**
 * Visual break mid-narrative. Uses gallery when present; otherwise
 * re-presents the primary artifact with highlights as captions — never invents images.
 */
export default function CaseStudyShowcase({
  project,
  index,
}: CaseStudyShowcaseProps) {
  const gallery = project.images.gallery;
  const highlights = project.highlights.slice(0, 4);

  return (
    <section
      id="showcase"
      className="scroll-mt-28 border-t border-ink-border pt-10"
    >
      <div className="mb-4 flex items-baseline gap-3">
        <span className="index-rail">{index}</span>
        <span aria-hidden className="h-px flex-1 bg-ink-border" />
      </div>

      <MaskReveal as="h2" className="font-display text-heading-md text-paper">
        <span className="line-mask">
          <span>Visual showcase</span>
        </span>
      </MaskReveal>

      {gallery && gallery.length > 0 ? (
        <div className="mt-8 space-y-10">
          {gallery.map((shot) => (
            <div key={shot.src} className="artifact-frame-slot">
              <ArtifactFrame
                src={shot.src}
                alt={shot.alt}
                sizes="(max-width: 1024px) 100vw, 800px"
                aspectClass="aspect-[16/10]"
                caption={shot.caption}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="artifact-frame-slot lg:col-span-8">
            <ArtifactFrame
              src={project.images.card}
              alt={project.imageAlt}
              sizes="(max-width: 1024px) 100vw, 640px"
              aspectClass="aspect-[16/10]"
              caption={`${project.platforms.join(" · ")} · ${project.year}`}
            />
          </div>

          {highlights.length > 0 && (
            <div className="lg:col-span-3 lg:col-start-10 lg:pt-2">
              <p className="font-mono text-meta-xs text-paper-faint">
                Product focus
              </p>
              <ul className="mt-4 space-y-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="border-b border-ink-border pb-3 font-mono text-meta-sm text-paper-muted last:border-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
