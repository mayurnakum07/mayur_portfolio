"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
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
  const isLive = project.status === "Production";

  /** One primary action; every external destination is a secondary link. */
  const externalLinks = [
    project.links.live && { label: "Visit product", href: project.links.live },
    project.links.appStore && {
      label: "App Store",
      href: project.links.appStore,
    },
    project.links.playStore && {
      label: "Google Play",
      href: project.links.playStore,
    },
    project.links.source && { label: "Source code", href: project.links.source },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <motion.article
      id={project.slug}
      /* Alternating layout, so each card enters from its own image side. */
      initial={{ opacity: 0, y: 24, x: imageFirst ? -32 : 32 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={[
        // No overflow-hidden: it would make this a scroll container and the
        // sticky image column inside would stop sticking.
        "group relative mx-auto max-w-[1200px] scroll-mt-28 rounded-2xl border p-5 transition-[border-color,box-shadow] [transition-duration:250ms] hover:shadow-soft-lg sm:rounded-3xl sm:p-8 md:p-12",
        isAI
          ? "border-border-hover/70 bg-surface-1 bg-[radial-gradient(ellipse_at_top_right,hsl(210_70%_55%_/_0.07),transparent_65%)] hover:border-accent-cyan/30"
          : "border-border/60 bg-surface-1 hover:border-border-hover",
      ].join(" ")}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-border-hover to-transparent opacity-0 transition-opacity [transition-duration:250ms] group-hover:opacity-100"
      />

      <div
        className={`flex flex-col gap-10 lg:gap-14 ${
          imageFirst ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        {/*
          The screenshot holds at the top of the viewport while the case
          content beside it scrolls, and releases when the card ends — sticky
          is bounded by its flex parent, so no JS and nothing to unpin.
        */}
        <div className="w-full shrink-0 lg:sticky lg:top-28 lg:w-[45%] lg:self-start">
          <Link
            href={`/projects/${project.slug}`}
            className="relative block aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/50 bg-surface-2 p-2.5 shadow-soft transition-colors [transition-duration:250ms] group-hover:border-border-hover sm:p-3.5"
            tabIndex={-1}
            aria-hidden
          >
            <ProjectImage
              src={project.images.card}
              alt={project.imageAlt}
              sizes="(max-width: 1024px) 100vw, 540px"
              className="rounded-lg transition-transform [transition-duration:250ms] ease-out group-hover:scale-[1.02]"
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
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-surface-2/60 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-muted-foreground">
              <span
                aria-hidden
                className={`h-1.5 w-1.5 rounded-full ${
                  isLive ? "bg-emerald-400/90" : "bg-muted-foreground/50"
                }`}
              />
              {isLive ? "Live" : project.status}
            </span>
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
            <ul className="mt-7 flex flex-wrap items-stretch gap-x-8 gap-y-4 rounded-xl border border-border/40 bg-surface-2/30 px-5 py-4">
              {project.metrics.map((metric) => (
                <li key={metric.label} title={metric.source}>
                  <p className="text-xl font-semibold tracking-tight text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {metric.label}
                  </p>
                </li>
              ))}
            </ul>
          )}

          {project.highlights.length > 0 && (
            <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {project.highlights.slice(0, 4).map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2.5 text-[14px] leading-snug text-foreground/85"
                >
                  <span
                    aria-hidden
                    className="mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-cyan/10 text-accent-cyan"
                  >
                    <Check size={11} strokeWidth={3} />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-7">
            <TechChips technologies={project.stack} max={6} />
          </div>

          <div className="mt-6 border-t border-border/40 pt-5">
            <ProjectMetaRow project={project} />
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-3">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors [transition-duration:250ms] hover:bg-foreground/90 sm:flex-none"
            >
              Read case study
              <ArrowUpRight size={14} className="opacity-70" />
            </Link>

            {externalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-border/80 px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors [transition-duration:250ms] hover:border-border-hover hover:bg-surface-2/50 hover:text-foreground"
              >
                {link.label}
                <ArrowUpRight size={14} className="opacity-60" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
