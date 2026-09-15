import IndexRail from "@/components/ui/IndexRail";
import FadeUp from "@/components/motion/FadeUp";
import { howIWork } from "@/data/aboutPage";

/** Remaining principles — how products get scoped and shipped. */
const APPROACH = howIWork.slice(3);

export default function AboutApproach() {
  return (
    <section
      id="working-methods"
      aria-labelledby="approach-heading"
      className="scroll-mt-28 border-t border-ink-border pt-12 lg:pt-16"
    >
      <div className="mb-4 flex items-baseline gap-3">
        <IndexRail number="06" />
        <span aria-hidden className="h-px flex-1 bg-ink-border" />
      </div>

      <FadeUp>
        <h2
          id="approach-heading"
          className="font-display text-heading-lg text-paper"
        >
          How I approach building products
        </h2>
        <p className="mt-4 max-w-prose text-body-md text-paper-muted">
          Constraints, honesty, and where native work actually belongs.
        </p>

        <ol className="mt-10 space-y-8">
          {APPROACH.map((principle, i) => (
            <li key={principle.title} className="grid grid-cols-[2rem_1fr] gap-4">
              <span className="font-mono text-meta-sm text-paper-faint tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-heading-md text-paper">
                  {principle.title}
                </h3>
                <p className="mt-2 max-w-prose text-body-md text-paper-muted">
                  {principle.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </FadeUp>
    </section>
  );
}
