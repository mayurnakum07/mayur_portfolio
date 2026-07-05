"use client";

import { motion } from "framer-motion";
import type { Capability } from "@/data/capabilities";

interface CapabilityCardProps {
  capability: Capability;
  index: number;
}

export default function CapabilityCard({
  capability,
  index,
}: CapabilityCardProps) {
  const Icon = capability.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: 0.1 + index * 0.08,
        ease: "easeOut",
      }}
      className="group flex h-full flex-col rounded-[22px] border border-border/50 bg-surface-1 p-7 transition-all duration-[250ms] hover:-translate-y-[5px] hover:border-border-hover md:p-8"
    >
      <Icon
        size={18}
        strokeWidth={1.75}
        className="mb-5 text-muted-foreground transition-transform duration-[250ms] group-hover:rotate-6"
        aria-hidden
      />

      <h3 className="text-xl font-semibold tracking-tight text-foreground">
        {capability.title}
      </h3>

      <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
        {capability.description}
      </p>

      <ul
        className="mt-6 flex flex-wrap gap-2"
        aria-label={`${capability.title} technologies`}
      >
        {capability.technologies.map((tech) => (
          <li key={tech}>
            <span className="inline-block rounded-full border border-border/60 bg-surface-2/40 px-3 py-1 text-sm text-muted-foreground">
              {tech}
            </span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
