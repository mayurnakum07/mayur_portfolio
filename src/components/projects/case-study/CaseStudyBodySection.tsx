import MaskReveal from "@/components/motion/MaskReveal";
import type { CaseStudySection } from "@/data/projects";

interface CaseStudyBodySectionProps {
  id: string;
  index: string;
  heading: string;
  section: CaseStudySection;
}

export default function CaseStudyBodySection({
  id,
  index,
  heading,
  section,
}: CaseStudyBodySectionProps) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-ink-border pt-10">
      <div className="mb-4 flex items-baseline gap-3">
        <span className="index-rail">{index}</span>
        <span aria-hidden className="h-px flex-1 bg-ink-border" />
      </div>

      <MaskReveal as="h2" className="font-display text-heading-md text-paper">
        <span className="line-mask">
          <span>{heading}</span>
        </span>
      </MaskReveal>

      {section.body.map((paragraph) => (
        <p
          key={paragraph.slice(0, 48)}
          className="mt-4 max-w-prose text-body-md text-paper-muted"
        >
          {paragraph}
        </p>
      ))}

      {section.bullets && section.bullets.length > 0 && (
        <ul className="mt-6 max-w-prose space-y-3">
          {section.bullets.map((bullet) => (
            <li
              key={bullet.slice(0, 48)}
              className="flex gap-3 text-body-md text-paper-muted"
            >
              <span className="font-mono text-meta-sm text-paper-faint" aria-hidden>
                ·
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
