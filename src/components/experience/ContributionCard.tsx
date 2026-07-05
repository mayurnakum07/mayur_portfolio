"use client";

import { motion } from "framer-motion";
import type { Contribution } from "@/data/experience";

interface ContributionCardProps {
  contribution: Contribution;
  index: number;
}

export default function ContributionCard({
  contribution,
  index,
}: ContributionCardProps) {
  const Icon = contribution.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: 0.2 + index * 0.08,
        ease: "easeOut",
      }}
      className="group flex h-full flex-col rounded-[20px] border border-border/40 bg-surface-2/30 p-5 transition-all duration-[250ms] hover:-translate-y-1 hover:border-border-hover md:p-6"
    >
      <Icon
        size={18}
        strokeWidth={1.75}
        className="mb-3 text-muted-foreground"
        aria-hidden
      />

      <h4 className="text-base font-semibold tracking-tight text-foreground">
        {contribution.title}
      </h4>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {contribution.description}
      </p>
    </motion.article>
  );
}
