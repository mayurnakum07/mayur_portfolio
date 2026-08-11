"use client";

import { useRef } from "react";
import useScrollFx from "./useScrollFx";
import { TIER_FULL, TIER_LITE } from "@/lib/motion";

/**
 * Reading progress for long-form pages: a hairline that fills as the article is
 * read. Decorative and duplicated by the scrollbar, so it is aria-hidden.
 *
 * Scaled on the X axis rather than sized, so it never triggers layout.
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
            scrub: 0.3,
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
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5"
    >
      <div className="h-full origin-left scale-x-0 bg-gradient-to-r from-accent-cyan to-accent-purple" />
    </div>
  );
}
