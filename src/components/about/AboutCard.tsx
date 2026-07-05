"use client";

import { motion } from "framer-motion";
import type { AboutCard as AboutCardData } from "@/data/aboutCards";

interface AboutCardProps {
  card: AboutCardData;
  index: number;
}

export default function AboutCard({ card, index }: AboutCardProps) {
  const Icon = card.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: 0.15 + index * 0.1,
        ease: "easeOut",
      }}
      className="group flex h-full flex-col rounded-[20px] border border-border/50 bg-surface-1 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover md:p-7"
    >
      <Icon
        size={18}
        strokeWidth={1.75}
        className="mb-4 text-muted-foreground"
        aria-hidden
      />

      <h3 className="text-xl font-semibold tracking-tight text-foreground">
        {card.title}
      </h3>

      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
        {card.description}
      </p>
    </motion.article>
  );
}
