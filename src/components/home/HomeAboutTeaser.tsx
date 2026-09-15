import IndexRail from "@/components/ui/IndexRail";
import SignalLink from "@/components/ui/SignalLink";
import { aboutIntro } from "@/data/aboutPage";
import FadeUp from "@/components/motion/FadeUp";
export default function HomeAboutTeaser() {
  return (
    <section
      aria-labelledby="about-teaser-heading"
      className="section-standard border-t border-ink-border"
    >
      <div className="container-page">
        <div className="grid grid-cols-12 gap-x-4 lg:gap-x-8">
          <div className="col-span-12 mb-4 lg:col-span-1 lg:mb-0">
            <IndexRail number="06" />
          </div>

          <FadeUp className="col-span-12 lg:col-span-8">
            <h2
              id="about-teaser-heading"
              className="font-display text-display-md text-paper text-balance"
            >
              The person behind the work
            </h2>
            <p className="mt-6 max-w-measure text-body-lg text-paper-muted">
              {aboutIntro[0]}
            </p>
            <div className="mt-8">
              <SignalLink href="/about" className="group text-body-md">
                Read the full story
                <span aria-hidden className="hover-nudge-x">
                  →
                </span>
              </SignalLink>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
