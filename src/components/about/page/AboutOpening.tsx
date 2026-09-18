import Image from "next/image";
import IndexRail from "@/components/ui/IndexRail";
import MaskReveal from "@/components/motion/MaskReveal";
import { siteConfig } from "@/lib/site";

/** Path, not a static import: the custom loader resolves it against the manifest. */
const PROFILE_SRC = "/profile.jpg";

export default function AboutOpening() {
  return (
    <section
      aria-labelledby="about-opening-heading"
      className="section-major border-b border-ink-border"
    >
      <div className="container-page">
        <div className="grid grid-cols-12 gap-x-4 gap-y-10 lg:gap-x-8">
          <div className="col-span-12 lg:col-span-1">
            <IndexRail number="01" />
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-2">
            <p className="font-mono text-meta-lg text-paper-muted">About</p>

            <div className="mt-5 grid grid-cols-12 items-start gap-x-4 gap-y-6">
              <div className="col-span-8 sm:col-span-9 lg:col-span-12">
                <MaskReveal as="div" immediate delay={0.05}>
                  <span className="line-mask">
                    <span className="font-display text-[clamp(1.75rem,5.5vw,3.75rem)] leading-[1.15] tracking-[-0.03em] text-paper">
                      The person behind
                    </span>
                  </span>
                  <span className="line-mask">
                    <span className="font-display text-[clamp(1.75rem,5.5vw,3.75rem)] leading-[1.15] tracking-[-0.03em] text-paper">
                      the shipped work.
                    </span>
                  </span>
                </MaskReveal>
                <h1 id="about-opening-heading" className="sr-only">
                  The person behind the shipped work.
                </h1>
              </div>

              <div className="col-span-4 sm:col-span-3 lg:hidden">
                <figure className="artifact-frame-slot">
                  <div className="artifact-frame artifact-frame--static relative aspect-[3/4] w-full">
                    <Image
                      src={PROFILE_SRC}
                      alt={`${siteConfig.name}, ${siteConfig.title}`}
                      fill
                      priority
                      sizes="120px"
                      className="object-cover object-top"
                    />
                  </div>
                </figure>
              </div>
            </div>

            <p className="mt-8 max-w-measure text-body-lg text-paper-muted">
              {siteConfig.tagline} Previously full time at DI Solutions in
              Surat (August 2023 to August 2026). Now freelancing and open to
              full-time roles, building for clients across the US, Taiwan, and
              India.
            </p>
          </div>

          <div className="hidden lg:col-span-3 lg:col-start-10 lg:block lg:pt-8">
            <figure className="artifact-frame-slot">
              <div className="artifact-frame artifact-frame--static relative aspect-[3/4] w-full">
                <Image
                  src={PROFILE_SRC}
                  alt={`${siteConfig.name}, ${siteConfig.title}`}
                  fill
                  priority
                  sizes="280px"
                  className="object-cover object-top"
                />
              </div>
            </figure>
          </div>

          <div className="col-span-12 border-t border-ink-border pt-8 lg:col-span-7 lg:col-start-2 lg:pt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
              <div>
                <p className="font-mono text-meta-sm text-paper-faint">Name</p>
                <p className="mt-1.5 font-display text-heading-md text-paper">
                  {siteConfig.name}
                </p>
              </div>
              <div>
                <p className="font-mono text-meta-sm text-paper-faint">Role</p>
                <p className="mt-1.5 text-body-md text-paper-muted">
                  {siteConfig.title}
                </p>
              </div>
              <div>
                <p className="font-mono text-meta-sm text-paper-faint">
                  Based in
                </p>
                <p className="mt-1.5 text-body-md text-paper-muted">
                  {siteConfig.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
