"use client";

import { useRef, type ReactNode } from "react";
import useScrollFx from "./useScrollFx";
import { SCRUB, TIER_FULL } from "@/lib/motion";

interface ParallaxProps {
  children: ReactNode;
  /**
   * Relative drift. 1 is the reference layer; below 1 trails the scroll and
   * reads as further away, above 1 leads it and reads as closer.
   */
  speed?: number;
  className?: string;
}

/**
 * Depth through speed, not blur — `filter: blur()` repaints every frame and
 * will not hold 50fps on a mid-range phone.
 *
 * Desktop only. Parallax against touch momentum reads as lag, not depth.
 * Three layers per section is the ceiling; past that it turns to noise.
 */
export default function Parallax({
  children,
  speed = 1,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useScrollFx(
    ref,
    ({ gsap, mm, scope }) => {
      mm.add(TIER_FULL, () => {
        gsap.to(scope, {
          yPercent: (speed - 1) * -18,
          ease: "none",
          scrollTrigger: {
            trigger: scope.closest("section") ?? scope,
            start: "top bottom",
            end: "bottom top",
            scrub: SCRUB,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    [speed]
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
