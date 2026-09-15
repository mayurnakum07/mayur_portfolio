import IndexRail from "@/components/ui/IndexRail";
import FadeUp from "@/components/motion/FadeUp";
import MarginNote from "@/components/ui/MarginNote";
import { beyondCode } from "@/data/aboutPage";
import { siteConfig } from "@/lib/site";

export default function AboutBeyond() {
  return (
    <section
      id="beyond"
      aria-labelledby="beyond-heading"
      className="scroll-mt-28 border-t border-ink-border pt-12 lg:pt-16"
    >
      <div className="mb-4 flex items-baseline gap-3">
        <IndexRail number="07" />
        <span aria-hidden className="h-px flex-1 bg-ink-border" />
      </div>

      <FadeUp>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <h2
              id="beyond-heading"
              className="font-display text-heading-lg text-paper"
            >
              Beyond code
            </h2>
            <p className="mt-6 max-w-prose text-body-md text-paper-muted">
              {beyondCode}
            </p>
          </div>
          <div className="lg:col-span-3 lg:col-start-10 lg:pt-1">
            <MarginNote>
              Based in {siteConfig.location}. Remote across timezones.
            </MarginNote>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
