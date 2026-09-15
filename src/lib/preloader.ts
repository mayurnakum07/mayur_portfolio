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

let resolveReady: (() => void) | undefined;

/**
 * Created eagerly at module load so a component can await it before the
 * preloader has mounted — the race is real and silent if this is lazy.
 */
let readyPromise: Promise<void> = new Promise((resolve) => {
  resolveReady = resolve;
});

let settled = false;

/** Called by the preloader when the curtain starts lifting. */
export function markReady() {
  if (settled) return;
  settled = true;
  resolveReady?.();
}

/**
 * Ensure a waiter exists for the next intro cycle. Safe no-op after the first
 * successful markReady — client navigations should not re-block the gate.
 */
export function ensureReadyGate() {
  if (settled) return;
  if (!resolveReady) {
    readyPromise = new Promise((resolve) => {
      resolveReady = resolve;
    });
  }
}

export function whenReady(): Promise<void> {
  return readyPromise;
}
