import WordScrub from "@/components/motion/WordScrub";
import { siteConfig } from "@/lib/site";

/** "9" → "Nine". Numerals read as data; words read as a claim. */
const WORDS: Record<string, string> = {
  "3": "Three",
  "4": "Four",
  "5": "Five",
  "9": "Nine",
};

function spell(value: string) {
  return WORDS[value] ?? value;
}

function statValue(label: string) {
  return siteConfig.stats.find((stat) => stat.label === label)?.value ?? "";
}

/**
 * The restraint is the effect: one sentence, nothing else in the viewport, read
 * to the visitor a word at a time as they scroll.
 *
 * Every number is pulled from siteConfig.stats rather than typed here, so this
 * claim cannot drift out of sync with the counters in the hero or the project
 * list it is describing.
 */
export default function Statement() {
  const products = spell(statValue("Products in Production"));
  const platforms = spell(statValue("Platforms Shipped"));
  const stores = spell(statValue("Live on App Store & Google Play"));

  const sentence = `${products} products in production. ${platforms} platforms. ${stores} of them live on the App Store and Google Play.`;

  return (
    <section className="container-page py-28 md:py-40 lg:py-48">
      <WordScrub
        as="p"
        text={sentence}
        className="mx-auto max-w-4xl text-balance text-center text-[clamp(1.5rem,4vw,3rem)] font-semibold leading-[1.25] tracking-tight text-foreground"
      />

      <p className="mx-auto mt-8 max-w-xl text-center text-sm text-muted-foreground">
        Every number here is checkable on the projects page. That is the point.
      </p>
    </section>
  );
}
