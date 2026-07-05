"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  contributions,
  primaryExperience,
} from "@/data/experience";
import ContributionCard from "./ContributionCard";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="w-full overflow-x-clip border-t border-border/40"
    >
      <div className="container-page py-[100px] md:py-[120px] lg:py-[140px]">
        <motion.header
          {...fadeUp(0)}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
        >
          <p className="mb-4 text-[10px] uppercase tracking-widest text-accent-cyan/80">
            Experience
          </p>

          <h2
            id="experience-heading"
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
          >
            Building Production Software Every Day.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Real-world experience developing scalable web and mobile applications
            used by businesses and customers.
          </p>
        </motion.header>

        <motion.div
          {...fadeUp(0.08)}
          className="rounded-[24px] border border-border/50 bg-surface-1 p-6 md:p-10 lg:p-12"
        >
          {/* Top row */}
          <div className="flex flex-col gap-6 border-b border-border/40 pb-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <div className="min-w-0">
              <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                {primaryExperience.title}
              </h3>

              <Link
                href={primaryExperience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-base font-medium text-foreground/90 transition-colors hover:text-foreground"
              >
                {primaryExperience.company}
              </Link>

              <p className="mt-1 text-sm text-muted-foreground">
                {primaryExperience.location}
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-1 lg:text-right">
              <p className="text-sm font-medium text-foreground">
                {primaryExperience.employmentType}
              </p>
              <p className="text-sm text-muted-foreground">
                {primaryExperience.duration}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {primaryExperience.description}
          </p>

          {/* Key contributions */}
          <div className="mt-10">
            <h4 className="mb-5 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Key Contributions
            </h4>

            <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {contributions.map((contribution, index) => (
                <ContributionCard
                  key={contribution.id}
                  contribution={contribution}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div className="mt-10 border-t border-border/40 pt-8">
            <h4 className="mb-4 text-sm font-medium text-foreground">
              Technologies Used
            </h4>

            <ul
              className="flex flex-wrap gap-2"
              aria-label="Technologies used in this role"
            >
              {primaryExperience.technologies.map((tech) => (
                <li key={tech}>
                  <span className="inline-block rounded-full border border-border/60 bg-surface-2/40 px-3 py-1 text-sm text-muted-foreground transition-all duration-[250ms] hover:-translate-y-px hover:border-border-hover hover:text-foreground/80">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business impact */}
          <div className="mt-8 border-t border-border/40 pt-8">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {primaryExperience.impact.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <Check
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 text-foreground/60"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
