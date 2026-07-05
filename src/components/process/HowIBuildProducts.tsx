"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/processSteps";
import ProcessCard from "./ProcessCard";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function HowIBuildProducts() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="w-full overflow-x-clip border-t border-border/40"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 py-[100px] md:px-12 md:py-[120px] lg:py-[140px]">
        <motion.header
          {...fadeUp(0)}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
        >
          <p className="mb-4 text-[10px] uppercase tracking-widest text-accent-cyan/80">
            Process
          </p>

          <h2
            id="process-heading"
            className="text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground md:text-[40px] lg:text-[56px]"
          >
            How I Build
            <br />
            Modern Digital Products.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Every successful product begins with understanding the problem
            before writing a single line of code.
          </p>
        </motion.header>

        <ol className="grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-3 md:gap-x-6 md:gap-y-8">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.id}
              step={step}
              index={index}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
