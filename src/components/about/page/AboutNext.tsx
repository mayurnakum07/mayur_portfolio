import IndexRail from "@/components/ui/IndexRail";
import SignalLink from "@/components/ui/SignalLink";
import InvertedInterlude from "@/components/ui/InvertedInterlude";

export default function AboutNext() {
  return (
    <div id="next" className="scroll-mt-28">
      <InvertedInterlude>
        <div className="grid grid-cols-12 gap-x-4 lg:gap-x-8">
          <div className="col-span-12 mb-6 lg:col-span-1 lg:mb-0">
            <IndexRail number="09" invert />
          </div>

          <div className="col-span-12 lg:col-span-8 lg:col-start-2">
            <h2 className="font-display text-display-md text-invert-fg text-balance">
              See what this looks like in production.
            </h2>
            <p className="mt-5 max-w-measure text-body-lg text-invert-muted">
              The archive is the evidence. If you want to talk about a product,
              a role, or a hard constraint, start there or get in touch.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <SignalLink
                href="/projects"
                variant="invert"
                underline="always"
                className="group text-body-md"
              >
                View project archive
                <span
                  aria-hidden
                  className="hover-nudge-x"
                >
                  →
                </span>
              </SignalLink>
              <SignalLink
                href="/contact"
                variant="invert"
                className="text-body-md text-invert-muted"
              >
                Get in touch
              </SignalLink>
            </div>
          </div>
        </div>
      </InvertedInterlude>
    </div>
  );
}
