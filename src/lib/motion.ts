/**
 * Shared motion contract.
 *
 * Everything scroll-driven on this site resolves to one of three tiers, decided
 * once in ScrollProvider and read everywhere else. Components never sniff
 * `window.innerWidth` themselves — they ask for the tier.
 */

export type MotionTier = "full" | "lite" | "static";

/** Desktop, motion allowed: pins, scrubs, parallax, cursor effects. */
export const TIER_FULL = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";

/** Touch/small screens: reveals and scrubs only. Never pin — see §7 of the brief. */
export const TIER_LITE = "(max-width: 1023px) and (prefers-reduced-motion: no-preference)";

/** Reduced motion: the complete site, static. Not a degraded one. */
export const TIER_STATIC = "(prefers-reduced-motion: reduce)";

/**
 * Data Saver is treated as a reduced-motion signal. Not in the type because it
 * is not a media query — ScrollProvider folds it into the static tier.
 */
export function prefersSaveData(): boolean {
  if (typeof navigator === "undefined") return false;

  const connection = (
    navigator as Navigator & { connection?: { saveData?: boolean } }
  ).connection;

  return connection?.saveData === true;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(TIER_STATIC).matches;
}

/** True when animation should be skipped entirely and final state applied. */
export function isStaticTier(): boolean {
  return prefersReducedMotion() || prefersSaveData();
}

/** Standard scrub smoothing. `true` reads stepped; 1s catch-up reads intentional. */
export const SCRUB = 1;
