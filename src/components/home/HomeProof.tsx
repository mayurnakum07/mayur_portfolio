import InvertedInterlude from "@/components/ui/InvertedInterlude";
import MarginNote from "@/components/ui/MarginNote";
import SignalLink from "@/components/ui/SignalLink";
import WordScrub from "@/components/motion/WordScrub";
import IndexRail from "@/components/ui/IndexRail";
import { getProofStats } from "@/data/projects";
import { siteConfig } from "@/lib/site";

const WORDS: Record<string, string> = {
  "3": "Three",
  "4": "Four",
  "5": "Five",
  "6": "Six",
  "7": "Seven",
  "8": "Eight",
  "9": "Nine",
  "10": "Ten",
};

function spell(value: string) {
  return WORDS[value] ?? value;
}

export default function HomeProof() {
  const { products, platforms, onStores } = getProofStats();

  const sentence = `${spell(products)} products in production. ${spell(platforms)} platforms. ${spell(onStores)} of them live on the App Store and Google Play.`;

  return (
    <InvertedInterlude id="proof" aria-labelledby="proof-heading">
      <div className="grid grid-cols-12 gap-x-4 lg:gap-x-8">
        <div className="col-span-12 mb-6 lg:col-span-1 lg:mb-0">
          <IndexRail number="02" invert />
        </div>

        <div className="col-span-12 lg:col-span-8 lg:col-start-2">
          <h2 id="proof-heading" className="sr-only">
            Production proof
          </h2>
          <WordScrub
            as="p"
            text={sentence}
            from={0.35}
            className="mx-auto max-w-measure text-balance text-left font-sans text-[clamp(1.25rem,3.8vw,2.125rem)] font-medium leading-[1.35] text-invert-fg sm:text-center lg:mx-0 lg:text-left"
          />

          <p className="mt-8 text-left font-mono text-meta-sm text-invert-muted sm:text-center lg:text-left">
            {siteConfig.availability} · Surat · Freelance since Jan 2026
          </p>
        </div>

        <div className="col-span-12 mt-6 lg:col-span-3 lg:col-start-10 lg:mt-0 lg:pt-2">
          <MarginNote invert className="text-left sm:text-center lg:text-left">
            Every number is checkable on the{" "}
            <SignalLink
              href="/projects"
              variant="invert"
              className="inline min-h-0 text-meta-xs"
            >
              projects page
            </SignalLink>
            .
          </MarginNote>
        </div>
      </div>
    </InvertedInterlude>
  );
}
