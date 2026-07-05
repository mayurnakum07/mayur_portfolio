"use client";

import { motion } from "framer-motion";
import type { ExpertiseCategory } from "@/data/expertiseCategories";

interface ExpertiseCardProps {
  category: ExpertiseCategory;
  index: number;
}

export default function ExpertiseCard({ category, index }: ExpertiseCardProps) {
  const Icon = category.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: 0.1 + index * 0.1,
        ease: "easeOut",
      }}
      className="group flex h-full flex-col rounded-[20px] border border-border/50 bg-surface-1 p-7 transition-all duration-[250ms] hover:-translate-y-1 hover:border-border-hover md:p-8"
    >
      <Icon
        size={18}
        strokeWidth={1.75}
        className="mb-5 text-muted-foreground"
        aria-hidden
      />

      <h3 className="text-[22px] font-semibold tracking-tight text-foreground">
        {category.title}
      </h3>

      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
        {category.description}
      </p>

      <ul
        className="mt-6 flex flex-wrap gap-2"
        aria-label={`${category.title} technologies`}
      >
        {category.technologies.map((tech) => (
          <li key={tech}>
            <span className="inline-block rounded-full border border-border/60 bg-surface-2/40 px-3 py-1 text-sm text-muted-foreground transition-all duration-[250ms] hover:-translate-y-px hover:border-border-hover hover:text-foreground/80">
              {tech}
            </span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
