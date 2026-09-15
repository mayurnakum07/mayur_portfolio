import IndexRail from "@/components/ui/IndexRail";
import FadeUp from "@/components/motion/FadeUp";
import MarginNote from "@/components/ui/MarginNote";
import { currentlyLearning } from "@/data/aboutPage";
import { currentFocus } from "@/data/journey";

export default function AboutFocus() {
  return (
    <section
      id="learning"
      aria-labelledby="learning-heading"
      className="scroll-mt-28 border-t border-ink-border pt-12 lg:pt-16"
    >
      <div className="mb-4 flex items-baseline gap-3">
        <IndexRail number="08" />
        <span aria-hidden className="h-px flex-1 bg-ink-border" />
      </div>

      <FadeUp>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2
              id="learning-heading"
              className="font-display text-heading-lg text-paper"
            >
              Current focus
            </h2>

            <p className="mt-4 font-mono text-meta-sm text-paper-faint">
              {currentFocus.join(" · ")}
            </p>

            <ol className="mt-8 space-y-5">
              {currentlyLearning.items.map((item, i) => (
                <li key={item.slice(0, 40)} className="flex gap-4">
                  <span className="font-mono text-meta-sm text-paper-faint tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="max-w-prose text-body-md text-paper-muted">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-3 lg:col-start-10 lg:pt-1">
            <MarginNote>As of {currentlyLearning.asOf}</MarginNote>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
