"use client";

import { useRef } from "react";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroPortrait from "./HeroPortrait";
import useScrollFx from "@/components/motion/useScrollFx";
import { SCRUB, TIER_FULL } from "@/lib/motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  /**
   * The hero recedes rather than scrolling away flat: content drifts up faster
   * than the page and dims, so the next section reads as arriving over it. The
   * portrait trails slightly behind the text, which is what sells the depth.
   */
  useScrollFx(ref, ({ gsap, mm, scope }) => {
    mm.add(TIER_FULL, () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: scope,
          start: "top top",
          end: "bottom top",
          scrub: SCRUB,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(
          scope.querySelector("[data-hero-text]"),
          { yPercent: -14, opacity: 0.15, ease: "none" },
          0
        )
        .to(
          scope.querySelector("[data-hero-portrait]"),
          { yPercent: -7, opacity: 0.25, ease: "none" },
          0
        );
    });
  });

  return (
    <section ref={ref} className="relative w-full overflow-x-clip">
      <HeroBackground />

      <div
        className="
          container-page relative grid
          grid-cols-1 items-center
          gap-10 py-12
          sm:gap-12
          md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:py-8
          md:min-h-[calc(100svh-7rem)]
          lg:gap-12
          xl:gap-16
          [@media(max-height:800px)]:md:gap-6
          [@media(max-height:800px)]:md:py-6
        "
      >
        <div data-hero-text className="order-1 min-w-0 md:order-none">
          <HeroContent />
        </div>

        <div
          data-hero-portrait
          className="order-2 flex min-w-0 justify-center md:order-none md:justify-end"
        >
          <HeroPortrait />
        </div>
      </div>
    </section>
  );
}
