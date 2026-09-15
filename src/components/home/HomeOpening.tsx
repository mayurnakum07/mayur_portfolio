"use client";

import { useRef } from "react";
import Image from "next/image";
import IndexRail from "@/components/ui/IndexRail";
import SignalLink from "@/components/ui/SignalLink";
import useScrollFx from "@/components/motion/useScrollFx";
import { siteConfig } from "@/lib/site";
import { TIER_FULL, TIER_LITE } from "@/lib/motion";

/** Path, not a static import: the custom loader resolves it against the manifest. */
const PROFILE_SRC = "/profile.jpg";

function Portrait({
  sizes,
  className,
}: {
  sizes: string;
  className?: string;
}) {
  return (
    <figure data-hero-item className={`artifact-frame-slot ${className ?? ""}`}>
      <div className="artifact-frame artifact-frame--static relative aspect-[3/4] w-full">
        <Image
          src={PROFILE_SRC}
          alt={`${siteConfig.name} — ${siteConfig.title}`}
          fill
          priority
          sizes={sizes}
          className="object-cover object-[center_18%]"
        />
      </div>
    </figure>
  );
}

export default function HomeOpening() {
  const ref = useRef<HTMLElement>(null);

  useScrollFx(
    ref,
    ({ gsap, mm, scope, ScrollTrigger }) => {
      const items = scope.querySelectorAll<HTMLElement>("[data-hero-item]");
      if (!items.length) return;

      mm.add(`${TIER_FULL}, ${TIER_LITE}`, () => {
        // Opacity-only for copy — y transforms raster-clip Syne descenders (g/p).
        const copy = scope.querySelectorAll<HTMLElement>(
          "[data-hero-item]:not(figure)"
        );
        const media = scope.querySelectorAll<HTMLElement>(
          "figure[data-hero-item]"
        );

        if (copy.length) {
          gsap.fromTo(
            copy,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.7,
              stagger: 0.07,
              delay: 0.04,
              ease: "power2.out",
            }
          );
        }

        if (media.length) {
          gsap.fromTo(
            media,
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: 0.12,
              ease: "power3.out",
              onComplete: () => {
                gsap.set(media, { clearProps: "transform" });
                ScrollTrigger.refresh();
              },
            }
          );
        }
      });
    },
    [],
    { awaitIntro: true }
  );

  return (
    <section
      ref={ref}
      aria-labelledby="home-opening-heading"
      className="section-major flex items-center min-h-0 py-14 sm:min-h-[78svh] lg:min-h-[calc(100svh-4rem)] lg:py-16"
    >
      <div className="container-page w-full">
        <div className="grid grid-cols-12 items-start gap-x-4 gap-y-8 lg:gap-x-8">
          <div className="col-span-12 lg:col-span-1">
            <IndexRail number="01" />
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-2">
            <div
              data-hero-item
              className="mb-6 inline-flex items-center gap-2.5 font-mono text-meta-sm text-paper-muted sm:mb-8"
            >
              <span className="status-dot status-dot--live" aria-hidden />
              Available for new work
            </div>

            <div className="grid grid-cols-12 items-start gap-x-4 gap-y-6">
              <div className="col-span-8 sm:col-span-9 lg:col-span-12">
                <p
                  data-hero-item
                  className="pb-[0.2em] font-display text-[clamp(1.5rem,4.5vw,3rem)] leading-[1.25] tracking-[-0.03em] text-paper text-balance"
                >
                  Intelligent products,
                  <br />
                  <span className="text-paper-muted">
                    shipped for production.
                  </span>
                </p>
              </div>

              <div className="col-span-4 sm:col-span-3 lg:hidden">
                <Portrait sizes="120px" />
              </div>
            </div>

            <div data-hero-item className="mt-8 max-w-measure sm:mt-10">
              <h1
                id="home-opening-heading"
                className="font-display text-heading-lg text-paper"
              >
                {siteConfig.name}
              </h1>
              <p className="mt-2 font-mono text-meta-lg text-paper-muted">
                {siteConfig.title}
              </p>
              <p className="mt-4 text-body-lg text-paper-muted sm:mt-5">
                Web, mobile, and AI-native systems — designed around real
                constraints, not demos.
              </p>
            </div>

            <div
              data-hero-item
              className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-8"
            >
              <SignalLink
                href="#selected-work"
                underline="always"
                className="group text-body-md"
              >
                View selected work
                <span aria-hidden className="hover-nudge-x">
                  →
                </span>
              </SignalLink>
              <SignalLink
                href="/about"
                variant="muted"
                className="text-body-md"
              >
                About {siteConfig.name.split(" ")[0]}
              </SignalLink>
            </div>

            <p
              data-hero-item
              className="mt-10 font-mono text-meta-sm text-paper-faint"
            >
              {siteConfig.location} · IST
            </p>
          </div>

          <div className="hidden lg:col-span-3 lg:col-start-10 lg:block lg:pt-10">
            <Portrait sizes="280px" />
            <p
              data-hero-item
              className="mt-3 font-mono text-meta-sm text-paper-faint"
            >
              {siteConfig.location.split(",")[0]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
