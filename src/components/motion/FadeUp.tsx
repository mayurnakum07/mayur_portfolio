"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import useScrollFx from "./useScrollFx";
import { TIER_FULL, TIER_LITE } from "@/lib/motion";

interface FadeUpProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}

/**
 * Lite-tier section entry — 12px fade-up. Full tier uses the same
 * (Mask Reveal is reserved for headlines).
 */
export default function FadeUp({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: FadeUpProps) {
  const ref = useRef<HTMLElement>(null);

  useScrollFx(ref, ({ gsap, mm, scope }) => {
    mm.add(`${TIER_FULL}, ${TIER_LITE}`, () => {
      gsap.fromTo(
        scope,
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: scope,
            start: "top 90%",
            once: true,
          },
          onComplete: () => {
            // Avoid compositor-layer clipping of display-font descenders.
            gsap.set(scope, { clearProps: "transform" });
          },
        }
      );
    });
  });

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
