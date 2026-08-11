/**
 * Hero foreground sparkle.
 *
 * The grid, colour wash and crawling gradient lines are global now — they live
 * in the fixed `.ambient` layer behind every page, so the hero no longer paints
 * its own blurred blobs on top of them. What is left here is only what should
 * be specific to the hero: a field of stars that twinkle out of phase.
 */

const STARS = Array.from({ length: 34 }, (_, i) => ({
  id: i,
  x: `${(i * 17 + 7) % 100}%`,
  y: `${(i * 23 + 11) % 100}%`,
  size: i % 3 === 0 ? 2 : 1,
  opacity: 0.12 + (i % 5) * 0.06,
  delay: `${(i % 7) * 0.9}s`,
  duration: `${4 + (i % 5)}s`,
}));

export default function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {STARS.map((star) => (
        <span
          key={star.id}
          className="hero-star absolute rounded-full bg-white"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}
