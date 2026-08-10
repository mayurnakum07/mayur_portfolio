"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import TechChips from "./TechChips";
import ProjectMetaRow from "./ProjectMetaRow";
import ProjectImage from "./ProjectImage";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isAI = project.category === "AI";
  const imageFirst = index % 2 === 0;

  const buttons = [
    {
      label: "Read case study",
      href: `/projects/${project.slug}`,
      primary: true,
      external: false,
    },
    project.links.live && {
      label: "Visit product",
      href: project.links.live,
      primary: false,
      external: true,
    },
    project.links.appStore && {
      label: "App Store",
      href: project.links.appStore,
      primary: false,
      external: true,
    },
    project.links.playStore && {
      label: "Google Play",
      href: project.links.playStore,
      primary: false,
      external: true,
    },
    project.links.source && {
      label: "Source code",
      href: project.links.source,
      primary: false,
      external: true,
    },
  ].filter(Boolean) as {
    label: string;
    href: string;
    primary: boolean;
    external: boolean;
  }[];

  return (
    <motion.article
      id={project.slug}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.25, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={[
        "group mx-auto max-w-[1200px] scroll-mt-28 rounded-2xl border p-5 transition-[border-color,box-shadow] [transition-duration:250ms] sm:rounded-3xl sm:p-8 md:p-12",
        isAI
          ? "border-border-hover/70 bg-surface-1 bg-[radial-gradient(ellipse_at_top_right,hsl(210_70%_55%_/_0.07),transparent_65%)]"
          : "border-border/60 bg-surface-1",
      ].join(" ")}
    >
      <div
        className={`flex flex-col gap-10 lg:gap-14 ${
          imageFirst ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        <div className="w-full shrink-0 lg:w-[45%]">
          <Link
            href={`/projects/${project.slug}`}
            className="relative block aspect-[16/10] w-full overflow-hidden rounded-2xl bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/40"
            tabIndex={-1}
            aria-hidden
          >
            <ProjectImage
              src={project.images.card}
              alt={project.imageAlt}
              sizes="(max-width: 1024px) 100vw, 540px"
              className="transition-transform [transition-duration:250ms] ease-out group-hover:scale-[1.03]"
            />
          </Link>
        </div>

        <div className="flex w-full flex-col lg:w-[55%]">
          <div className="mb-5 flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-border/70 px-3 py-1 text-xs font-medium text-foreground/80">
              {project.category}
            </span>
            {isAI && (
              <span className="rounded-full border border-border/50 bg-surface-2/60 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-muted-foreground">
                AI Powered
              </span>
            )}
          </div>

          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-[30px] md:text-[34px]">
            <Link
              href={`/projects/${project.slug}`}
              className="transition-colors hover:text-foreground/80"
            >
              {project.name}
            </Link>
          </h2>

          <p className="mt-2 text-base text-muted-foreground sm:text-lg">
            {project.tagline}
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground/90 sm:mt-5 sm:text-[17px]">
            {project.summary}
          </p>

          {project.metrics && project.metrics.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {project.metrics.map((metric) => (
                <li key={metric.label} title={metric.source}>
                  <p className="text-lg font-semibold tracking-tight text-foreground">
                    {metric.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                </li>
              ))}
            </ul>
          )}

          {project.highlights.length > 0 && (
            <ul className="mt-8 space-y-2.5">
              {project.highlights.slice(0, 4).map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2.5 text-[15px] text-foreground/85"
                >
                  <span className="mt-0.5 text-muted-foreground" aria-hidden>
                    ✓
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8">
            <TechChips technologies={project.stack.slice(0, 6)} />
          </div>

          <div className="mt-6">
            <ProjectMetaRow project={project} />
          </div>

          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
            {buttons.map((button) => (
              <Link
                key={button.label}
                href={button.href}
                target={button.external ? "_blank" : undefined}
                rel={button.external ? "noopener noreferrer" : undefined}
                className={[
                  "inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-all [transition-duration:250ms]",
                  button.primary
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "border border-border/80 text-foreground hover:border-border-hover hover:bg-surface-2/50",
                ].join(" ")}
              >
                {button.label}
                <ArrowUpRight size={14} className="opacity-70" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
