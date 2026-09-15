import InvertedInterlude from "@/components/ui/InvertedInterlude";
import IndexRail from "@/components/ui/IndexRail";
import SignalLink from "@/components/ui/SignalLink";
import { siteConfig } from "@/lib/site";

export default function HomeContactBridge() {
  return (
    <InvertedInterlude id="contact-bridge" aria-labelledby="contact-bridge-heading">
      <div className="grid grid-cols-12 gap-x-4 lg:gap-x-8">
        <div className="col-span-12 mb-6 lg:col-span-1 lg:mb-0">
          <IndexRail number="07" invert />
        </div>

        <div className="col-span-12 text-left sm:text-center lg:col-span-10 lg:col-start-2 lg:text-left">
          <h2
            id="contact-bridge-heading"
            className="font-display text-display-md text-invert-fg text-balance"
          >
            Have a product to ship?
          </h2>

          <div className="mt-8 flex flex-col items-start gap-4 sm:items-center sm:gap-6 lg:items-start lg:gap-8 sm:flex-row">
            <SignalLink
              href="/contact"
              variant="invert"
              underline="always"
              className="group text-body-md"
            >
              Get in touch
              <span aria-hidden className="hover-nudge-x">
                →
              </span>
            </SignalLink>
            <SignalLink
              href={siteConfig.resumePath}
              variant="invert"
              className="text-body-md text-invert-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download résumé
            </SignalLink>
          </div>
        </div>
      </div>
    </InvertedInterlude>
  );
}
