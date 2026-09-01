"use client";

import { useCallback, useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import { isStaticTier } from "@/lib/motion";
import { markReady } from "@/lib/preloader";

/** How long the curtain exit runs before the overlay unmounts. */
const EXIT_MS = 900;

/**
 * Full-screen loader shown from the first server paint until the browser
 * `load` event fires (all subresources done). Entrance animations behind it
 * await `markReady()` so they do not play under the overlay.
 *
 *  - SSR-visible: starts active so there is no flash before hydration.
 *  - skipped on reduced motion / Data Saver.
 *  - client-side navigations do not replay it — layout mounts once per load.
 */
export default function Preloader() {
  const [active, setActive] = useState(true);
  const [leaving, setLeaving] = useState(false);

  const finish = useCallback(() => {
    setLeaving(true);
    markReady();
    document.documentElement.classList.remove("is-loading");
    document.body.style.overflow = "";
    window.setTimeout(() => setActive(false), EXIT_MS);
  }, []);

  useEffect(() => {
    if (isStaticTier()) {
      document.documentElement.classList.remove("is-loading");
      document.body.style.overflow = "";
      setActive(false);
      markReady();
      return;
    }

    document.documentElement.classList.add("is-loading");
    document.body.style.overflow = "hidden";

    const onLoad = () => finish();

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      window.removeEventListener("load", onLoad);
      document.documentElement.classList.remove("is-loading");
      document.body.style.overflow = "";
      markReady();
    };
  }, [finish]);

  if (!active) return null;

  return (
    <div
      className={`preloader ${leaving ? "is-leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-busy={!leaving}
    >
      <span className="sr-only">Loading</span>

      <div className="preloader__panel preloader__panel--top" aria-hidden />
      <div className="preloader__panel preloader__panel--bottom" aria-hidden />

      <div className="preloader__inner" aria-hidden>
        <p className="preloader__name">{siteConfig.name}</p>
        <p className="preloader__role">{siteConfig.title}</p>

        <div className="preloader__spinner">
          <span className="preloader__spinner-ring" />
          <span className="preloader__spinner-core" />
        </div>

        <span className="preloader__rail">
          <span className="preloader__rail-shimmer" />
        </span>
      </div>
    </div>
  );
}
