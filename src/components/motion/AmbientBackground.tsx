/**
 * The site's ambient backdrop — one fixed layer behind every page.
 *
 * Fixed to the viewport rather than the document, so the grid stays locked to
 * the screen while content scrolls over it. That is also why it replaces
 * `background-attachment: fixed` on the body: the fixed-attachment version
 * forces the browser to repaint the whole background on every scroll frame,
 * which is one of the most reliable ways to lose 60fps on a phone. A fixed
 * element is composited once and simply does not move.
 *
 * The lines crawl *behind* the grid: thin gradients that travel a track,
 * bright in the middle and transparent at both ends, so they read as a pulse
 * moving along a circuit rather than as a bar sliding across.
 *
 * Server component — pure CSS, no JS, nothing to hydrate. Every animation is
 * transform-only and disabled wholesale under `prefers-reduced-motion`.
 */

/** x position, travel duration, delay. Spaced off the 64px grid rhythm. */
const VERTICAL_LINES = [
  { left: "12%", duration: "11s", delay: "0s" },
  { left: "28%", duration: "16s", delay: "3.5s" },
  { left: "54%", duration: "13s", delay: "1.6s" },
  { left: "71%", duration: "18s", delay: "6s" },
  { left: "88%", duration: "14s", delay: "8.5s" },
];

const HORIZONTAL_LINES = [
  { top: "22%", duration: "19s", delay: "2s" },
  { top: "58%", duration: "15s", delay: "7s" },
  { top: "81%", duration: "22s", delay: "11s" },
];

export default function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden>
      {/* Crawling pulses — behind the grid. */}
      <div className="ambient__lines">
        {VERTICAL_LINES.map((line) => (
          <span
            key={`v-${line.left}`}
            className="ambient__line ambient__line--v"
            style={{
              left: line.left,
              animationDuration: line.duration,
              animationDelay: line.delay,
            }}
          />
        ))}

        {HORIZONTAL_LINES.map((line) => (
          <span
            key={`h-${line.top}`}
            className="ambient__line ambient__line--h"
            style={{
              top: line.top,
              animationDuration: line.duration,
              animationDelay: line.delay,
            }}
          />
        ))}
      </div>

      {/* Grid, in front of the pulses so they read as travelling underneath. */}
      <div className="ambient__grid" />

      {/* Colour wash, keeping the corners from going flat black. */}
      <div className="ambient__wash" />
    </div>
  );
}
