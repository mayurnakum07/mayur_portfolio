import SectionHeader from "@/components/ui/SectionHeader";
import { homeCapabilities } from "@/data/home";
import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";

export default function HomeCapabilities() {
  return (
    <section
      aria-labelledby="capabilities-heading"
      className="section-standard border-t border-ink-border"
    >
      <div className="container-page">
        <SectionHeader
          index="04"
          title={<span id="capabilities-heading">What I build</span>}
          description="Open the archive by category — each row leads to a case study."
        />

        <FadeUp className="mt-12 lg:mt-16">
          <nav aria-label="Capabilities">
            <ul>
              {homeCapabilities.map((row) => (
                <li key={row.id}>
                  <Link href={row.href} className="capability-row group block">
                    <span className="capability-row__label font-display text-heading-md text-paper-muted transition-colors duration-200">
                      {row.label}
                    </span>
                    <span className="flex shrink-0 items-center gap-3 font-mono text-meta-sm text-paper-faint sm:gap-4">
                      {row.count !== undefined && (
                        <span>{row.count} projects</span>
                      )}
                      <span className="capability-row__arrow" aria-hidden>
                        →
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </FadeUp>
      </div>
    </section>
  );
}
