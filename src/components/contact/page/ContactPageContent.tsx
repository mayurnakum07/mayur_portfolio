import Link from "next/link";
import MaskReveal from "@/components/motion/MaskReveal";
import IndexRail from "@/components/ui/IndexRail";
import SignalLink from "@/components/ui/SignalLink";
import { siteConfig } from "@/lib/site";

const REACH = [
  {
    label: "LinkedIn",
    href: siteConfig.linkedIn,
    note: "Professional context",
    external: true,
  },
  {
    label: "GitHub",
    href: siteConfig.github,
    note: "Code and commits",
    external: true,
  },
  {
    label: "Résumé",
    href: siteConfig.resumePath,
    note: "PDF download",
    external: true,
  },
] as const;

/** Prefills a draft email — intentional contact paths, no unfinished form. */
const CONVERSATIONS = [
  {
    label: "A role or hire",
    note: "Full-time or long-term",
    subject: "Role enquiry — portfolio",
    body: "Hi Mayur,\n\nI'm reaching out about a role.\n\nWhat we're building:\n\nTimeline / location:\n\n",
  },
  {
    label: "A product to ship",
    note: "Contract or project",
    subject: "Project enquiry — portfolio",
    body: "Hi Mayur,\n\nI'm working on a product and need help shipping it.\n\nWhat it is:\n\nThe hard constraint:\n\n",
  },
  {
    label: "A quick hello",
    note: "No brief required",
    subject: "Hello from your portfolio",
    body: "Hi Mayur,\n\n",
  },
] as const;

function mailtoHref(subject: string, body: string) {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactPageContent() {
  return (
    <main className="w-full min-w-0">
      {/* 01 — Closing statement with email as primary action */}
      <section
        aria-labelledby="contact-heading"
        className="section-major border-b border-ink-border"
      >
        <div className="container-page">
          <div className="grid grid-cols-12 gap-x-4 gap-y-8 lg:gap-x-8">
            <div className="col-span-12 lg:col-span-1">
              <IndexRail number="01" />
            </div>

            <div className="col-span-12 lg:col-span-8 lg:col-start-2">
              <p className="font-mono text-meta-lg text-paper-muted">Contact</p>

              <MaskReveal as="div" immediate delay={0.05} className="mt-5">
                <span className="line-mask">
                  <h1
                    id="contact-heading"
                    className="max-w-[14ch] font-display text-display-lg text-paper text-balance"
                  >
                    Let&apos;s build something that holds up.
                  </h1>
                </span>
              </MaskReveal>

              <p className="mt-8 max-w-measure text-body-lg text-paper-muted">
                If you have a product to ship, a hard constraint to design
                around, or a role that needs someone who has done this before —
                write directly.
              </p>

              <div className="mt-10 sm:mt-12">
                <p className="font-mono text-meta-sm text-paper-faint">
                  Primary — email
                </p>
                <SignalLink
                  href={`mailto:${siteConfig.email}`}
                  underline="always"
                  className="group mt-3 max-w-full break-email font-display text-[clamp(1.375rem,4.5vw,2.75rem)] leading-snug"
                >
                  {siteConfig.email}
                  <span
                    aria-hidden
                    className="ml-2 inline-block font-sans text-body-lg hover-nudge-ext"
                  >
                    ↗
                  </span>
                </SignalLink>
                <p className="mt-4 inline-flex items-center gap-2 font-mono text-meta-sm text-paper-muted">
                  <span className="status-dot status-dot--live" aria-hidden />
                  Usually replies within 24 hours · {siteConfig.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-page section-major">
        <div className="grid grid-cols-12 gap-x-4 gap-y-16 lg:gap-x-8">
          {/* 02 — Start a conversation */}
          <section
            id="start"
            aria-labelledby="start-heading"
            className="col-span-12 scroll-mt-28 lg:col-span-8 lg:col-start-2"
          >
            <div className="mb-4 flex items-baseline gap-3">
              <IndexRail number="02" />
              <span aria-hidden className="h-px flex-1 bg-ink-border" />
            </div>

            <h2
              id="start-heading"
              className="font-display text-heading-lg text-paper"
            >
              Start a conversation
            </h2>
            <p className="mt-3 max-w-prose text-body-md text-paper-muted">
              Pick a path — opens a short draft in your mail client so you can
              write without starting from a blank subject line.
            </p>

            <ul className="mt-8 border-t border-ink-border">
              {CONVERSATIONS.map((item) => (
                <li key={item.label}>
                  <a
                    href={mailtoHref(item.subject, item.body)}
                    className="capability-row group block"
                  >
                    <span className="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
                      <span className="capability-row__label font-display text-heading-md text-paper-muted transition-colors duration-200">
                        {item.label}
                      </span>
                      <span className="font-mono text-meta-sm text-paper-faint">
                        {item.note}
                      </span>
                    </span>
                    <span className="capability-row__arrow" aria-hidden>
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* 03 — Availability */}
          <section
            id="availability"
            aria-labelledby="availability-heading"
            className="col-span-12 scroll-mt-28 border-t border-ink-border pt-12 lg:col-span-8 lg:col-start-2 lg:pt-16"
          >
            <div className="mb-4 flex items-baseline gap-3">
              <IndexRail number="03" />
              <span aria-hidden className="h-px flex-1 bg-ink-border" />
            </div>

            <h2
              id="availability-heading"
              className="font-display text-heading-lg text-paper"
            >
              Availability
            </h2>

            <dl className="mt-8 space-y-6 border-t border-ink-border pt-8">
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="font-mono text-meta-sm text-paper-faint">
                  Status
                </dt>
                <dd className="inline-flex items-start gap-2 text-body-md text-paper">
                  <span
                    className="status-dot status-dot--live mt-2"
                    aria-hidden
                  />
                  <span>
                    Open to full-time roles, contract work, and AI product
                    development
                  </span>
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="font-mono text-meta-sm text-paper-faint">
                  Response
                </dt>
                <dd className="text-body-md text-paper-muted">
                  Within 24 hours
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="font-mono text-meta-sm text-paper-faint">
                  Location
                </dt>
                <dd className="text-body-md text-paper-muted">
                  {siteConfig.location} · IST (UTC+5:30) · remote-first
                </dd>
              </div>
            </dl>
          </section>

          {/* 04 — Elsewhere */}
          <section
            id="reach"
            aria-labelledby="reach-heading"
            className="col-span-12 scroll-mt-28 border-t border-ink-border pt-12 lg:col-span-8 lg:col-start-2 lg:pt-16"
          >
            <div className="mb-4 flex items-baseline gap-3">
              <IndexRail number="04" />
              <span aria-hidden className="h-px flex-1 bg-ink-border" />
            </div>

            <h2
              id="reach-heading"
              className="font-display text-heading-lg text-paper"
            >
              Elsewhere
            </h2>

            <ul className="mt-8 border-t border-ink-border">
              {REACH.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="capability-row group block"
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <span className="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
                      <span className="capability-row__label font-display text-heading-md text-paper-muted transition-colors duration-200">
                        {item.label}
                      </span>
                      <span className="font-mono text-meta-sm text-paper-faint">
                        {item.note}
                      </span>
                    </span>
                    <span className="capability-row__arrow" aria-hidden>
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* 05 — Final CTA */}
      <section
        aria-labelledby="final-cta-heading"
        className="interlude section-standard"
      >
        <div className="container-page">
          <div className="grid grid-cols-12 gap-x-4 lg:gap-x-8">
            <div className="col-span-12 mb-4 lg:col-span-1 lg:mb-0">
              <IndexRail number="05" invert />
            </div>
            <div className="col-span-12 lg:col-span-8 lg:col-start-2">
              <h2
                id="final-cta-heading"
                className="font-display text-heading-lg text-invert-fg"
              >
                Looking forward to hearing from you.
              </h2>
              <SignalLink
                href={`mailto:${siteConfig.email}`}
                variant="invert"
                underline="always"
                className="group mt-8 break-email text-body-md"
              >
                {siteConfig.email}
                <span aria-hidden className="hover-nudge-x">
                  →
                </span>
              </SignalLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
