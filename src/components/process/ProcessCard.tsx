"use client";

import { motion } from "framer-motion";
import type { ProcessStep } from "@/data/processSteps";

interface ProcessCardProps {
  step: ProcessStep;
  index: number;
  isLast: boolean;
}

export default function ProcessCard({ step, index, isLast }: ProcessCardProps) {
  const Icon = step.icon;

  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: 0.12 + index * 0.08,
        ease: "easeOut",
      }}
      className={`group relative list-none pl-10 md:pl-0 ${
        isLast ? "pb-0" : "pb-8 md:pb-0"
      }`}
    >
      {/* Mobile vertical connector */}
      <span
        className="absolute left-[15px] top-2 z-10 h-2 w-2 rounded-full bg-foreground ring-2 ring-background md:hidden"
        aria-hidden
      />
      {!isLast && (
        <span
          className="absolute left-[18px] top-5 z-0 w-px bg-foreground md:hidden"
          style={{ height: "calc(100% - 8px)" }}
          aria-hidden
        />
      )}

      <article className="flex h-full flex-col rounded-[20px] border border-border/50 bg-surface-1 p-6 transition-all duration-[250ms] hover:-translate-y-1 hover:border-border-hover md:p-7">
        <span className="text-xs font-medium tracking-widest text-muted-foreground">
          {step.step}
        </span>

        <Icon
          size={18}
          strokeWidth={1.75}
          className="mt-4 text-muted-foreground"
          aria-hidden
        />

        <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
          {step.title}
        </h3>

        <p className="mt-2 text-base leading-relaxed text-muted-foreground">
          {step.description}
        </p>
      </article>
    </motion.li>
  );
}
