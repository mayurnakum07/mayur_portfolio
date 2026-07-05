"use client";

import { motion } from "framer-motion";
import type { JourneyMilestone } from "@/data/journey";

interface JourneyMilestoneItemProps {
  milestone: JourneyMilestone;
  index: number;
  isLast: boolean;
}

export default function JourneyMilestoneItem({
  milestone,
  index,
  isLast,
}: JourneyMilestoneItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: 0.15 + index * 0.1,
        ease: "easeOut",
      }}
      className={`group relative pl-8 transition-transform duration-[250ms] hover:-translate-y-[3px] ${
        isLast ? "" : "pb-10 md:pb-12"
      }`}
    >
      <span
        className="absolute left-0 top-2 z-10 h-2 w-2 rounded-full bg-foreground ring-2 ring-background"
        aria-hidden
      />

      {!isLast && (
        <span
          className="absolute left-[3px] top-5 z-0 w-px bg-foreground"
          style={{ height: "calc(100% - 12px)" }}
          aria-hidden
        />
      )}

      <h3 className="text-xl font-semibold tracking-tight text-foreground">
        {milestone.title}
      </h3>

      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
        {milestone.description}
      </p>
    </motion.li>
  );
}
