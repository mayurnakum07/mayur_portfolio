/**
 * Programmatic scrolling, with the fixed header accounted for.
 *
 * Scrolling on this site is native — no smooth-scroll library — so this is a
 * thin wrapper over `window.scrollTo` whose only real job is the header offset
 * and honouring reduced motion.
 */

import { prefersReducedMotion } from "./motion";

export type ScrollTarget = number | string | HTMLElement;

export interface ScrollOptions {
  /** Pixels to stop short of the target, for the fixed header. Negative. */
  offset?: number;
  immediate?: boolean;
}

export function smoothScrollTo(target: ScrollTarget, options?: ScrollOptions) {
  const behavior: ScrollBehavior =
    options?.immediate || prefersReducedMotion() ? "auto" : "smooth";

  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior });
    return;
  }

  const element =
    typeof target === "string" ? document.querySelector(target) : target;

  if (!element) return;

  const top =
    element.getBoundingClientRect().top +
    window.scrollY +
    (options?.offset ?? 0);

  window.scrollTo({ top: Math.max(0, top), behavior });
}
