"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/data/capabilities";
import CapabilityCard from "./CapabilityCard";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function WhatIBuild() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="w-full overflow-x-clip border-t border-border/40"
    >
      <div className="container-page py-[100px] md:py-[120px] lg:py-[140px]">
        <motion.header
          {...fadeUp(0)}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
        >
          <p className="mb-4 text-[10px] uppercase tracking-widest text-accent-cyan/80">
            Capabilities
          </p>

          <h2
            id="capabilities-heading"
            className="text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground md:text-[40px] lg:text-[56px]"
          >
            Building Products
            <br />
            That Scale.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I help startups, founders and businesses transform ideas into fast,
            scalable and AI-powered digital products.
          </p>
        </motion.header>

        <div className="grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={capability.id}
              capability={capability}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
