import IndexRail from "@/components/ui/IndexRail";
import FadeUp from "@/components/motion/FadeUp";
import { careerArc } from "@/data/aboutSections";

export default function AboutJourney() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="scroll-mt-28 border-t border-ink-border pt-12 lg:pt-16"
    >
      <div className="mb-4 flex items-baseline gap-3">
        <IndexRail number="03" />
        <span aria-hidden className="h-px flex-1 bg-ink-border" />
      </div>

      <FadeUp>
        <h2
          id="journey-heading"
          className="font-display text-heading-lg text-paper"
        >
          How I got here
        </h2>
        <p className="mt-4 max-w-prose text-body-md text-paper-muted">
          Not a ladder of job titles. The problems that changed how I work.
        </p>

        <ol className="mt-10 space-y-10">
          {careerArc.map((beat, i) => (
            <li key={beat.title}>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-meta-sm text-paper-faint tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-heading-md text-paper">
                  {beat.title}
                </h3>
              </div>
              <p className="mt-3 max-w-prose text-body-md text-paper-muted lg:pl-11">
                {beat.body}
              </p>
            </li>
          ))}
        </ol>
      </FadeUp>
    </section>
  );
}
