/**
 * Handoff between the preloader and the entrance animations behind it.
 *
 * Without this, a hero authored to animate "on load" plays underneath the
 * overlay and is simply, statically, already there when the curtain lifts —
 * which is the one thing the intro is supposed to deliver.
 *
 * Anything that wants to play as the site is revealed awaits `whenReady()`.
 * It resolves immediately when no preloader is running (reduced motion, Data
 * Saver, or a client-side navigation), so callers never need to know which
 * case they are in.
 */

/** Time the counter takes to reach 100 before the curtain starts lifting. */
export const PRELOADER_DURATION_MS = 3000;

let resolveReady: (() => void) | undefined;

/**
 * Created eagerly at module load so a component can await it before the
 * preloader has mounted — the race is real and silent if this is lazy.
 */
const readyPromise: Promise<void> = new Promise((resolve) => {
  resolveReady = resolve;
});

let settled = false;

/** Called by the preloader when the curtain starts lifting. */
export function markReady() {
  if (settled) return;
  settled = true;
  resolveReady?.();
}

export function whenReady(): Promise<void> {
  return readyPromise;
}
