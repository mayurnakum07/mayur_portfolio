import MaskReveal from "@/components/motion/MaskReveal";

interface CaseStudyStackProps {
  stack: string[];
  index: string;
}

export default function CaseStudyStack({ stack, index }: CaseStudyStackProps) {
  return (
    <section id="stack" className="scroll-mt-28 border-t border-ink-border pt-10">
      <div className="mb-4 flex items-baseline gap-3">
        <span className="index-rail">{index}</span>
        <span aria-hidden className="h-px flex-1 bg-ink-border" />
      </div>

      <MaskReveal as="h2" className="font-display text-heading-md text-paper">
        <span className="line-mask">
          <span>Technologies</span>
        </span>
      </MaskReveal>

      <p className="mt-4 max-w-prose font-mono text-meta-lg leading-relaxed text-paper-muted">
        {stack.join(" · ")}
      </p>
    </section>
  );
}
