import Link from "next/link";
import IndexRail from "@/components/ui/IndexRail";
import FadeUp from "@/components/motion/FadeUp";
import { expertiseCategories } from "@/data/expertiseCategories";

const CATEGORY_HREF: Record<string, string> = {
  ai: "/projects?category=AI",
  frontend: "/projects?category=Web",
  mobile: "/projects?category=Mobile",
  backend: "/projects?category=Platform",
};

export default function AboutStrengths() {
  return (
    <section
      id="strengths"
      aria-labelledby="strengths-heading"
      className="scroll-mt-28 border-t border-ink-border pt-12 lg:pt-16"
    >
      <div className="mb-4 flex items-baseline gap-3">
        <IndexRail number="05" />
        <span aria-hidden className="h-px flex-1 bg-ink-border" />
      </div>

      <FadeUp>
        <h2
          id="strengths-heading"
          className="font-display text-heading-lg text-paper"
        >
          Technical strengths
        </h2>
        <p className="mt-4 max-w-prose text-body-md text-paper-muted">
          What I ship for teams. Open the archive to see it live.
        </p>

        <ul className="mt-10 border-t border-ink-border">
          {expertiseCategories.map((category) => {
            const href = CATEGORY_HREF[category.id] ?? "/projects";
            return (
              <li key={category.id}>
                <Link href={href} className="capability-row group block">
                  <div className="min-w-0 pr-4">
                    <span className="capability-row__label font-display text-heading-md text-paper-muted transition-colors duration-200">
                      {category.title}
                    </span>
                    <p className="mt-1 max-w-prose text-body-sm text-paper-faint">
                      {category.description}
                    </p>
                    <p className="mt-2 font-mono text-meta-xs text-paper-faint">
                      {category.technologies.join(" · ")}
                    </p>
                  </div>
                  <span className="capability-row__arrow shrink-0" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </FadeUp>
    </section>
  );
}
