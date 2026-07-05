"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projectData";
import TechChips from "./TechChips";
import ProjectMetaRow from "./ProjectMetaRow";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isAI = project.category === "AI";
  const imageFirst = index % 2 === 0;

  const buttons = [
    project.liveUrl && {
      label: "Visit Product",
      href: project.liveUrl,
      primary: true,
    },
    project.githubUrl && {
      label: "Source Code",
      href: project.githubUrl,
      primary: false,
    },
    project.appStoreUrl && {
      label: "App Store",
      href: project.appStoreUrl,
      primary: false,
    },
    project.playStoreUrl && {
      label: "Google Play",
      href: project.playStoreUrl,
      primary: false,
    },
  ].filter(Boolean) as { label: string; href: string; primary: boolean }[];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.25, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={[
        "group mx-auto max-w-[1200px] rounded-3xl border p-8 transition-[border-color,box-shadow] duration-[250ms] md:p-12",
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
          <div className="relative overflow-hidden rounded-2xl bg-surface-2">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-auto w-full object-cover transition-transform duration-[250ms] ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 540px"
              loading="lazy"
            />
          </div>
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

          <h2 className="text-[34px] font-semibold leading-tight tracking-tight text-foreground">
            {project.title}
          </h2>

          <p className="mt-2 text-lg text-muted-foreground">{project.tagline}</p>

          <p className="mt-5 line-clamp-4 text-[17px] leading-relaxed text-muted-foreground/90">
            {project.description}
          </p>

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

          <div className="mt-8">
            <TechChips technologies={project.technologies} />
          </div>

          <div className="mt-6">
            <ProjectMetaRow project={project} />
          </div>

          {buttons.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {buttons.map((button) => (
                <Link
                  key={button.label}
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    "inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-[250ms]",
                    button.primary
                      ? "bg-foreground text-background hover:bg-foreground/90"
                      : "border border-border/80 text-foreground hover:border-border-hover hover:bg-surface-2/50",
                  ].join(" ")}
                >
                  {button.label}
                  <ArrowUpRight
                    size={14}
                    className="opacity-70 transition-opacity duration-[250ms] group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
