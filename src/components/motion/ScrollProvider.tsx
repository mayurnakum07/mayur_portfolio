"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { isStaticTier } from "@/lib/motion";

/**
 * Owns the scroll engine for the whole site.
 *
 * Scrolling itself is deliberately native — no smooth-scroll library. A
 * hijacked scrollbar is the thing visitors notice and dislike first, and
 * ScrollTrigger reads native scroll perfectly well without one. Scrubbed
 * animations use `scrub: 1` so they catch up smoothly against raw wheel input.
 *
 * GSAP is imported dynamically here, so it never lands in the First Load
 * bundle — nothing in this file can run before hydration anyway.
 */
export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Reduced motion and Data Saver get no engine at all.
    if (isStaticTier()) {
      document.documentElement.classList.add("motion-static");
      return;
    }

    let destroyed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (destroyed) return;

      gsap.registerPlugin(ScrollTrigger);

      // Late-loading images change page height; stale trigger positions follow.
      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);

      cleanup = () => window.removeEventListener("load", onLoad);
    })();

    return () => {
      destroyed = true;
      cleanup?.();
    };
  }, []);

  /**
   * A new route renders different content at the same scroll offset, so every
   * trigger's start/end has to be recomputed against the new document.
   */
  useEffect(() => {
    let cancelled = false;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      if (!cancelled) ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return <>{children}</>;
}
