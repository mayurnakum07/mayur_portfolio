"use client";

import { useEffect, type RefObject } from "react";
import type { gsap as GsapType } from "gsap";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";
import { isStaticTier } from "@/lib/motion";
import { whenReady } from "@/lib/preloader";

export interface ScrollFxApi {
  gsap: typeof GsapType;
  ScrollTrigger: typeof ScrollTriggerType;
  /**
   * Register per-tier animation. Every callback is reverted automatically when
   * the query stops matching or the component unmounts.
   */
  mm: ReturnType<typeof GsapType.matchMedia>;
  scope: HTMLElement;
}

/**
 * Registers scroll-driven animation for one component subtree.
 *
 * Handles the four things that are easy to forget and expensive to get wrong:
 *  - GSAP is imported dynamically, so it stays out of the First Load bundle
 *  - reduced motion / Data Saver skip registration entirely, leaving the DOM in
 *    its authored (final) state rather than an animated-from state
 *  - every tween is scoped to `ref` via gsap.context and reverted on unmount
 *  - matchMedia handles the responsive tiers, so no component reads innerWidth
 *
 * Callers must author markup in its *finished* state and animate from there —
 * otherwise the static tier renders content that never appears.
 */
export default function useScrollFx(
  ref: RefObject<HTMLElement | null>,
  register: (api: ScrollFxApi) => void,
  deps: unknown[] = [],
  options: { awaitIntro?: boolean } = {}
) {
  const { awaitIntro = false } = options;

  useEffect(() => {
    const scope = ref.current;
    if (!scope || isStaticTier()) return;

    let destroyed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (destroyed) return;

      /*
       * Entrance animations that play "on load" must not play behind the intro
       * overlay — the visitor would watch the curtain lift onto a hero that has
       * already finished animating. Resolves immediately when no intro runs.
       */
      if (awaitIntro) {
        await whenReady();
        if (destroyed) return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();
      const ctx = gsap.context(() => {
        register({ gsap, ScrollTrigger, mm, scope });
      }, scope);

      cleanup = () => {
        mm.revert();
        ctx.revert();
      };
    })();

    return () => {
      destroyed = true;
      cleanup?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
