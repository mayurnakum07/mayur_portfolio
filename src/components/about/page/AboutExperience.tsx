import Link from "next/link";
import IndexRail from "@/components/ui/IndexRail";
import FadeUp from "@/components/motion/FadeUp";
import SignalLink from "@/components/ui/SignalLink";
import { contributions, primaryExperience } from "@/data/experience";

export default function AboutExperience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-28 border-t border-ink-border pt-12 lg:pt-16"
    >
      <div className="mb-4 flex items-baseline gap-3">
        <IndexRail number="04" />
        <span aria-hidden className="h-px flex-1 bg-ink-border" />
      </div>

      <FadeUp>
        <h2
          id="experience-heading"
          className="font-display text-heading-lg text-paper"
        >
          Experience
        </h2>

        <div className="mt-8 border-t border-ink-border pt-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div>
              <h3 className="font-display text-heading-md text-paper">
                {primaryExperience.title}
              </h3>
              <p className="mt-1 text-body-md text-paper-muted">
                <Link
                  href={primaryExperience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="signal-link signal-link--muted min-h-0"
                >
                  {primaryExperience.company}
                </Link>
                <span className="text-paper-faint"> · </span>
                {primaryExperience.location}
              </p>
            </div>
            <p className="font-mono text-meta-sm text-paper-faint shrink-0">
              {primaryExperience.duration}
              <span className="text-paper-faint"> · </span>
              {primaryExperience.employmentType}
            </p>
          </div>

          <p className="mt-5 max-w-prose text-body-md text-paper-muted">
            {primaryExperience.description}
          </p>

          <p className="mt-6 font-mono text-meta-xs text-paper-faint">
            Stack
          </p>
          <p className="mt-2 max-w-prose font-mono text-meta-sm leading-relaxed text-paper-muted">
            {primaryExperience.technologies.join(" · ")}
          </p>
        </div>

        <ul className="mt-10 space-y-6 border-t border-ink-border pt-8">
          {contributions.map((item, i) => (
            <li key={item.id} className="grid grid-cols-[2rem_1fr] gap-4">
              <span className="font-mono text-meta-sm text-paper-faint tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-body-md font-medium text-paper">
                  {item.title}
                </h3>
                <p className="mt-1 max-w-prose text-body-sm text-paper-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <SignalLink href="/projects" variant="muted" className="group text-body-sm">
            View projects from this role
            <span
              aria-hidden
              className="hover-nudge-x"
            >
              →
            </span>
          </SignalLink>
        </div>
      </FadeUp>
    </section>
  );
}
