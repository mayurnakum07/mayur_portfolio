import IndexRail from "@/components/ui/IndexRail";
import FadeUp from "@/components/motion/FadeUp";
import { aboutIntro } from "@/data/aboutPage";

export default function AboutIntroduction() {
  return (
    <section
      id="introduction"
      aria-labelledby="introduction-heading"
      className="scroll-mt-28 border-t border-ink-border pt-12 lg:pt-16"
    >
      <div className="mb-4 flex items-baseline gap-3">
        <IndexRail number="01" />
        <span aria-hidden className="h-px flex-1 bg-ink-border" />
      </div>

      <FadeUp>
        <h2
          id="introduction-heading"
          className="font-display text-heading-lg text-paper"
        >
          Introduction
        </h2>

        <div className="mt-6 max-w-measure space-y-6">
          {aboutIntro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-body-lg text-paper-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
