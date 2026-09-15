"use client";

import { useRef } from "react";
import useScrollFx from "./useScrollFx";
import { TIER_FULL, TIER_LITE } from "@/lib/motion";

/**
 * Reading progress for long-form pages: a 2px signal bar that fills as the
 * article is read. Decorative — aria-hidden. M4: case study only.
 */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useScrollFx(ref, ({ gsap, mm, scope }) => {
    const bar = scope.firstElementChild;
    if (!bar) return;

    mm.add(`${TIER_FULL}, ${TIER_LITE}`, () => {
      gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });
  });

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-x-0 z-[60] h-0.5 bg-ink-border top-[calc(3.5rem+env(safe-area-inset-top,0px))] lg:top-[calc(4rem+env(safe-area-inset-top,0px))]"
    >
      <div className="h-full origin-left scale-x-0 bg-signal" />
    </div>
  );
}
