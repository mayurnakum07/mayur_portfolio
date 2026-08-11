"use client";

import { useRef, type ElementType } from "react";
import useScrollFx from "./useScrollFx";
import { TIER_FULL, TIER_LITE } from "@/lib/motion";

interface CounterProps {
  /** Display value exactly as it should end up, e.g. "5,000+", "4.8★", "9". */
  value: string;
  as?: ElementType;
  className?: string;
}

/** Splits "5,000+" into "", 5000, "+" — keeping decimals and grouping intact. */
function parse(value: string) {
  const match = value.match(/^(\D*?)([\d,]+(?:\.\d+)?)([\s\S]*)$/);
  if (!match) return null;

  const [, prefix, digits, suffix] = match;
  const numeric = Number(digits.replace(/,/g, ""));
  if (!Number.isFinite(numeric)) return null;

  const decimals = digits.includes(".") ? digits.split(".")[1].length : 0;

  return {
    prefix,
    suffix,
    numeric,
    decimals,
    grouped: digits.includes(","),
  };
}

/**
 * Counts up once when the number enters the viewport.
 *
 * The final value is what renders on the server, so a reduced-motion or no-JS
 * reader sees the real number immediately rather than a zero that never moves.
 * Fires once — a counter that re-runs every time you scroll past reads as a
 * glitch.
 */
export default function Counter({
  value,
  as: Tag = "span",
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLElement>(null);

  useScrollFx(
    ref,
    ({ gsap, mm, scope }) => {
      const parsed = parse(value);
      if (!parsed) return;

      const { prefix, suffix, numeric, decimals, grouped } = parsed;

      mm.add(`${TIER_FULL}, ${TIER_LITE}`, () => {
        const state = { n: 0 };

        gsap.to(state, {
          n: numeric,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: scope, start: "top 88%", once: true },
          onUpdate: () => {
            const shown = grouped
              ? state.n.toLocaleString("en-US", {
                  minimumFractionDigits: decimals,
                  maximumFractionDigits: decimals,
                })
              : state.n.toFixed(decimals);

            scope.textContent = `${prefix}${shown}${suffix}`;
          },
          onComplete: () => {
            // Land on the authored string, never on a rounding artefact.
            scope.textContent = value;
          },
        });
      });
    },
    [value],
    // Counters above the fold would otherwise run to 100 behind the intro.
    { awaitIntro: true }
  );

  return (
    <Tag ref={ref} className={className}>
      {value}
    </Tag>
  );
}
