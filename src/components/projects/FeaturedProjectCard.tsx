"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectImage from "./ProjectImage";

interface FeaturedProjectCardProps {
  project: Project;
  index: number;
}

export default function FeaturedProjectCard({
  project,
  index,
}: FeaturedProjectCardProps) {
  /** Card badges come from the data, never from literals in JSX. */
  const badges = project.metrics?.length
    ? project.metrics.slice(0, 3).map((m) => `${m.value} ${m.label}`)
    : [project.status, ...project.platforms.slice(0, 2)];

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
      className="group flex flex-col rounded-xl border border-border/50 bg-surface-1 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover sm:p-4"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border/40 bg-surface-2 p-2">
        <ProjectImage
          src={project.images.card}
          alt={project.imageAlt}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          className="rounded-md transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col pt-3 sm:pt-4">
        <span className="mb-1.5 text-[10px] uppercase tracking-wider text-accent-cyan/80">
          {project.category}
        </span>

        <h3 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
          {project.name}
        </h3>

        <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {project.summary}
        </p>

        <div className="mt-2.5 flex flex-wrap gap-1">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border/60 bg-surface-2/80 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
          {badges.map((badge, i) => (
            <span
              key={badge}
              className="flex items-center gap-1.5 text-[10px] font-medium text-foreground/65"
            >
              {i > 0 && (
                <span aria-hidden className="text-border">
                  ·
                </span>
              )}
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-3">
          <div className="flex flex-col gap-2 border-t border-border/40 pt-3 lg:flex-row lg:border-0 lg:pt-0">
            {project.links.live && (
              <Link
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-lg bg-foreground px-3 text-xs font-medium text-background transition-colors hover:bg-foreground/90 lg:h-9 lg:flex-1"
              >
                Live Demo
                <ArrowUpRight size={13} className="shrink-0" />
              </Link>
            )}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-lg border border-border/80 px-3 text-xs font-medium text-foreground transition-colors hover:border-border-hover hover:bg-surface-2/50 lg:h-9 lg:flex-1"
            >
              Read case study
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
