import MaskReveal from "@/components/motion/MaskReveal";
import type { ProjectMetric } from "@/data/projects";

interface CaseStudyImpactProps {
  metrics: ProjectMetric[];
  index: string;
  /** Optional outcome body paragraphs already rendered elsewhere — metrics only here. */
}

export default function CaseStudyImpact({
  metrics,
  index,
}: CaseStudyImpactProps) {
  return (
    <section id="impact" className="scroll-mt-28 border-t border-ink-border pt-10">
      <div className="mb-4 flex items-baseline gap-3">
        <span className="index-rail">{index}</span>
        <span aria-hidden className="h-px flex-1 bg-ink-border" />
      </div>

      <MaskReveal as="h2" className="font-display text-heading-md text-paper">
        <span className="line-mask">
          <span>Results & impact</span>
        </span>
      </MaskReveal>

      <dl className="mt-8 grid grid-cols-1 gap-8 border-t border-ink-border pt-8 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="min-w-0">
            <dt className="sr-only">{metric.label}</dt>
            <dd>
              <p className="font-display text-heading-lg text-paper">
                {metric.value}
              </p>
              <p className="mt-1 text-body-sm text-paper-muted">{metric.label}</p>
              {metric.source && (
                <p className="mt-2 font-mono text-meta-xs text-paper-faint">
                  {metric.source}
                </p>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
