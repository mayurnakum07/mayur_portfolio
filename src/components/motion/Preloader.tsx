"use client";

import { useCallback, useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import { isStaticTier } from "@/lib/motion";
import { ensureReadyGate, markReady } from "@/lib/preloader";

/** M4 — Typographic Mark Fade exit duration. */
const EXIT_MS = 420;

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
    ensureReadyGate();

    if (isStaticTier()) {
      document.documentElement.classList.remove("is-loading");
      document.body.style.overflow = "";
      setActive(false);
      markReady();
      return;
    }

    document.documentElement.classList.add("is-loading");
    document.body.style.overflow = "hidden";

    let finished = false;
    const runFinish = () => {
      if (finished) return;
      finished = true;
      finish();
    };

    const holdTimer = window.setTimeout(runFinish, 450);

    const onLoad = () => {
      window.clearTimeout(holdTimer);
      // Brief hold after load so the mark is readable, then lift.
      window.setTimeout(runFinish, 180);
    };

    if (document.readyState === "complete") {
      window.clearTimeout(holdTimer);
      window.setTimeout(runFinish, 280);
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      window.clearTimeout(holdTimer);
      window.removeEventListener("load", onLoad);
      /*
       * Do NOT markReady() here. React Strict Mode remounts effects; releasing
       * the gate in cleanup lets hero entrance play under the curtain.
       */
      document.body.style.overflow = "";
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
      <div className="preloader__inner" aria-hidden>
        <p className="preloader__name">{siteConfig.name}</p>
        <p className="preloader__role">{siteConfig.title}</p>
      </div>
    </div>
  );
}
