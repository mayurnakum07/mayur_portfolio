"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { FeaturedProject } from "@/data/featuredProjects";

interface FeaturedProjectCardProps {
  project: FeaturedProject;
  index: number;
}

function isGithubUrl(url?: string) {
  return url?.includes("github.com") ?? false;
}

export default function FeaturedProjectCard({
  project,
  index,
}: FeaturedProjectCardProps) {
  const showGithub = isGithubUrl(project.githubUrl);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
      className="group flex flex-col rounded-xl border border-border/50 bg-surface-1 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-border-hover sm:p-4"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-surface-2">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 50vw, 400px"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col pt-3 sm:pt-4">
        <span className="mb-1.5 text-[10px] uppercase tracking-wider text-accent-cyan/80">
          {project.category}
        </span>

        <h3 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
          {project.title}
        </h3>

        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {project.description}
        </p>

        <div className="mt-2.5 flex flex-wrap gap-1">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border/60 bg-surface-2/80 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
          {project.metrics.map((metric, i) => (
            <span
              key={metric}
              className="flex items-center gap-1.5 text-[10px] font-medium text-foreground/65"
            >
              {i > 0 && (
                <span aria-hidden className="text-border">
                  ·
                </span>
              )}
              {metric}
            </span>
          ))}
        </div>

        <div className="mt-3 border-t border-border/40 pt-3 lg:border-0 lg:pt-0">
          <div className="flex flex-col gap-2 lg:flex-row lg:opacity-0 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100">
            <Link
              href={project.liveUrl}
              target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
              rel={
                project.liveUrl.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-lg bg-foreground px-3 text-xs font-medium text-background transition-colors hover:bg-foreground/90 lg:h-8 lg:flex-1 lg:rounded-md"
            >
              Live Demo
              <ArrowUpRight size={13} className="shrink-0" />
            </Link>
            <Link
              href={project.caseStudyUrl}
              className="inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-lg border border-border/80 px-3 text-xs font-medium text-foreground transition-colors hover:border-border-hover hover:bg-surface-2/50 lg:h-8 lg:flex-1 lg:rounded-md"
            >
              Case Study
            </Link>
          </div>

          {showGithub && project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-8 w-full items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground lg:mt-2 lg:opacity-0 lg:transition-opacity lg:duration-300 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100"
            >
              <Github size={13} />
              Github
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
