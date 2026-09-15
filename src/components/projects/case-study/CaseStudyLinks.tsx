import MaskReveal from "@/components/motion/MaskReveal";
import SignalLink from "@/components/ui/SignalLink";

interface CaseStudyLinksProps {
  links: { label: string; href: string }[];
  index: string;
}

export default function CaseStudyLinks({ links, index }: CaseStudyLinksProps) {
  return (
    <section id="links" className="scroll-mt-28 border-t border-ink-border pt-10">
      <div className="mb-4 flex items-baseline gap-3">
        <span className="index-rail">{index}</span>
        <span aria-hidden className="h-px flex-1 bg-ink-border" />
      </div>

      <MaskReveal as="h2" className="font-display text-heading-md text-paper">
        <span className="line-mask">
          <span>Links</span>
        </span>
      </MaskReveal>

      <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
        {links.map((link, i) => (
          <li key={link.label}>
            <SignalLink
              href={link.href}
              underline={i === 0 ? "always" : "hover"}
              className="group text-body-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
              <span
                aria-hidden
                className="hover-nudge-ext"
              >
                ↗
              </span>
            </SignalLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
