"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import useScrollFx from "./useScrollFx";
import { TIER_FULL, TIER_LITE } from "@/lib/motion";

interface MaskRevealProps {
  children: ReactNode;
  /** Element to render. Headings should pass their real tag, not a div. */
  as?: ElementType;
  className?: string;
  /** Seconds between each line. */
  stagger?: number;
  delay?: number;
  /** Play on load rather than on scroll — for above-the-fold content. */
  immediate?: boolean;
}

/**
 * Lines rise from behind an invisible edge. The mask is what separates this
 * from a plain fade — the text appears to come from somewhere.
 *
 * Consumers author lines as `<span className="line-mask"><span>…</span></span>`
 * so the markup keeps its semantics (a heading stays a heading) and renders
 * correctly with no JS. GSAP sets the starting offset itself, so nothing is
 * hidden unless it is actually going to be animated.
 */
export default function MaskReveal({
  children,
  as: Tag = "div",
  className = "",
  stagger = 0.08,
  delay = 0,
  immediate = false,
}: MaskRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useScrollFx(
    ref,
    ({ gsap, mm, scope }) => {
      const lines = scope.querySelectorAll<HTMLElement>(".line-mask > *");
      if (!lines.length) return;

      mm.add(`${TIER_FULL}, ${TIER_LITE}`, () => {
        gsap.fromTo(
          lines,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 0.9,
            stagger,
            delay,
            ease: "expo.out",
            scrollTrigger: immediate
              ? undefined
              : { trigger: scope, start: "top 85%", once: true },
          }
        );
      });
    },
    [],
    // On-load reveals wait for the intro curtain; scroll reveals never need to.
    { awaitIntro: immediate }
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
