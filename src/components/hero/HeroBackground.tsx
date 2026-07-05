"use client";

import { motion } from "framer-motion";

const STARS = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: `${(i * 17 + 7) % 100}%`,
  y: `${(i * 23 + 11) % 100}%`,
  size: i % 3 === 0 ? 2 : 1,
  opacity: 0.12 + (i % 5) * 0.06,
}));

export default function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(hsl(240 4% 16% / 0.2) 1px, transparent 1px),
            linear-gradient(90deg, hsl(240 4% 16% / 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 45%, black 15%, transparent 80%)",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full blur-[80px] md:h-[400px] md:w-[400px] md:blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, hsl(187 85% 53% / 0.06) 0%, transparent 70%)",
        }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/2 h-[240px] w-[240px] translate-x-1/2 rounded-full blur-[70px] md:right-1/4 md:h-[350px] md:w-[350px] md:translate-x-1/2 md:blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, hsl(258 90% 66% / 0.05) 0%, transparent 70%)",
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {STARS.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}
