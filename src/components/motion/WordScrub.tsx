"use client";

import { useRef, type ElementType } from "react";
import useScrollFx from "./useScrollFx";
import { SCRUB, TIER_FULL, TIER_LITE } from "@/lib/motion";

interface WordScrubProps {
  /** Plain text. Split on whitespace, so no markup inside. */
  text: string;
  as?: ElementType;
  className?: string;
  /** Resting opacity of a word that has not been read yet. */
  from?: number;
}

/**
 * Word-by-word reading scrub: the paragraph starts dim and each word lights up
 * as it passes the reading line, so the eye is pulled through at scroll speed.
 *
 * Accessibility notes, because this effect is easy to get wrong:
 *  - words render at full opacity and are dimmed by GSAP, so reduced-motion and
 *    no-JS readers see normal, contrast-compliant prose
 *  - each word is an inline span, not a restructured DOM, so selection and
 *    screen-reader output are unchanged
 *
 * Use at most twice per page. Past that it stops being a signal.
 */
export default function WordScrub({
  text,
  as: Tag = "p",
  className = "",
  from = 0.18,
}: WordScrubProps) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useScrollFx(ref, ({ gsap, mm, scope }) => {
    const targets = scope.querySelectorAll<HTMLElement>(".scrub-word");
    if (!targets.length) return;

    mm.add(`${TIER_FULL}, ${TIER_LITE}`, () => {
      gsap.fromTo(
        targets,
        { opacity: from },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.08,
          scrollTrigger: {
            trigger: scope,
            start: "top 78%",
            end: "bottom 55%",
            scrub: SCRUB,
          },
        }
      );
    });
  });

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="scrub-word">{word}</span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
