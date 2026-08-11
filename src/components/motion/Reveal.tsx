"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import useScrollFx from "./useScrollFx";
import { TIER_FULL, TIER_LITE } from "@/lib/motion";

/**
 * Direction carries meaning: content enters from where it conceptually comes
 * from. Sections pick the variant that matches their content, so scrolling the
 * page does not feel like watching the same fade eight times.
 */
export type RevealVariant =
  | "up"
  | "down"
  | "left"
  | "right"
  | "scale"
  | "blur-up"
  | "rise";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  /** Passed through to the rendered element — id, aria-*, role, and so on. */
  [attribute: `aria-${string}`]: unknown;
  id?: string;
  /**
   * Animate direct children one after another instead of the container as a
   * whole. Use for grids and lists.
   */
  stagger?: number;
  /** Viewport position that triggers the reveal, as a ScrollTrigger start. */
  start?: string;
}

const FROM: Record<RevealVariant, gsap.TweenVars> = {
  up: { opacity: 0, y: 32 },
  down: { opacity: 0, y: -28 },
  left: { opacity: 0, x: -48 },
  right: { opacity: 0, x: 48 },
  scale: { opacity: 0, scale: 0.92 },
  "blur-up": { opacity: 0, y: 24, filter: "blur(10px)" },
  rise: { opacity: 0, y: 64 },
};

const TO: Record<RevealVariant, gsap.TweenVars> = {
  up: { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
  down: { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
  left: { opacity: 1, x: 0, duration: 0.85, ease: "power3.out" },
  right: { opacity: 1, x: 0, duration: 0.85, ease: "power3.out" },
  scale: { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
  "blur-up": {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 0.9,
    ease: "power3.out",
  },
  rise: { opacity: 1, y: 0, duration: 1, ease: "expo.out" },
};

/**
 * Scroll-triggered entrance for a block of content.
 *
 * Authored in its finished state and animated *from* the variant's offset, so
 * reduced-motion and no-JS readers get the page fully composed rather than a
 * blank column waiting for an event that never fires.
 *
 * `blur-up` is the one variant that touches a filter. It animates once, briefly,
 * on entry — never tied to scroll position, where it would repaint every frame.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  variant = "up",
  delay = 0,
  stagger,
  start = "top 85%",
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useScrollFx(
    ref,
    ({ gsap, mm, scope }) => {
      const targets = stagger
        ? Array.from(scope.children)
        : ([scope] as Element[]);

      if (!targets.length) return;

      mm.add(`${TIER_FULL}, ${TIER_LITE}`, () => {
        gsap.fromTo(targets, FROM[variant], {
          ...TO[variant],
          delay,
          stagger: stagger ?? 0,
          scrollTrigger: { trigger: scope, start, once: true },
        });
      });
    },
    [variant, delay, stagger, start]
  );

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
