import Link from "next/link";
import SignalLink from "@/components/ui/SignalLink";
import type { Project } from "@/data/projects";

interface CaseStudyNavProps {
  prev?: Project;
  next?: Project;
}

export default function CaseStudyNav({ prev, next }: CaseStudyNavProps) {
  return (
    <div className="border-t border-ink-border pt-10">
      <nav
        aria-label="Project navigation"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2"
      >
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="group block min-h-[44px] no-underline"
          >
            <span className="font-mono text-meta-xs text-paper-faint">
              ← Previous
            </span>
            <span className="mt-2 block font-display text-heading-md text-paper relative w-fit after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-100 after:bg-signal after:transition-transform after:duration-200 sm:after:scale-x-0 sm:group-focus-visible:after:scale-x-100 [@media(hover:hover)_and_(pointer:fine)]:sm:group-hover:after:scale-x-100">
              {prev.name}
            </span>
            <span className="mt-1 block font-mono text-meta-sm text-paper-muted">
              {prev.category}
            </span>
          </Link>
        ) : (
          <span />
        )}

        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className="group block min-h-[44px] text-left no-underline sm:text-right"
          >
            <span className="font-mono text-meta-xs text-paper-faint">
              Next →
            </span>
            <span className="mt-2 block font-display text-heading-md text-paper relative ml-0 w-fit after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-100 after:bg-signal after:transition-transform after:duration-200 sm:ml-auto sm:after:scale-x-0 sm:group-focus-visible:after:scale-x-100 [@media(hover:hover)_and_(pointer:fine)]:sm:group-hover:after:scale-x-100">
              {next.name}
            </span>
            <span className="mt-1 block font-mono text-meta-sm text-paper-muted">
              {next.category}
            </span>
          </Link>
        )}
      </nav>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SignalLink href="/projects" variant="muted" className="text-body-sm">
          ← Back to archive
        </SignalLink>
        <SignalLink
          href="/contact"
          underline="always"
          className="group text-body-sm"
        >
          Want to build something like this?
          <span
            aria-hidden
            className="hover-nudge-x"
          >
            →
          </span>
        </SignalLink>
      </div>
    </div>
  );
}
