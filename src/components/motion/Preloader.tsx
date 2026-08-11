"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";
import { isStaticTier } from "@/lib/motion";
import { markReady, PRELOADER_DURATION_MS } from "@/lib/preloader";

/**
 * The intro: a full-screen count from 00 to 100, then the curtain splits and
 * the hero plays behind it.
 *
 * Deliberate constraints:
 *  - plays on every full page load. It lives in the layout, so client-side
 *    navigation between pages does not replay it — only a real load does.
 *  - skipped entirely on reduced motion / Data Saver — an unskippable three
 *    second animation is exactly what that setting is asking you not to do.
 *  - the count is aria-hidden and the whole overlay is inert to the reader; a
 *    single polite "Loading" is all a screen reader gets.
 *  - a CSS failsafe removes it after 4s even if this component never runs.
 */
export default function Preloader() {
  const [active, setActive] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [count, setCount] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    if (isStaticTier()) {
      markReady();
      return;
    }

    setActive(true);
    document.body.style.overflow = "hidden";

    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / PRELOADER_DURATION_MS);
      // Ease-out so the number sprints early and settles on 100.
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * 100));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      // Curtain lifts and the entrance animations behind it are released.
      setLeaving(true);
      markReady();
      document.body.style.overflow = "";

      window.setTimeout(() => setActive(false), 900);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.body.style.overflow = "";
      markReady();
    };
  }, []);

  if (!active) return null;

  return (
    <div
      className={`preloader ${leaving ? "is-leaving" : ""}`}
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading</span>

      {/* Two panels that split apart to reveal the page. */}
      <div className="preloader__panel preloader__panel--top" aria-hidden />
      <div className="preloader__panel preloader__panel--bottom" aria-hidden />

      <div className="preloader__inner" aria-hidden>
        <p className="preloader__name">{siteConfig.name}</p>
        <p className="preloader__role">{siteConfig.title}</p>

        <p className="preloader__count">
          {String(count).padStart(3, "0")}
        </p>

        <span className="preloader__rail">
          <span
            className="preloader__rail-fill"
            style={{ transform: `scaleX(${count / 100})` }}
          />
        </span>
      </div>
    </div>
  );
}
