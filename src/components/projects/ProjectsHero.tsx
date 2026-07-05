"use client";

import { motion } from "framer-motion";

export default function ProjectsHero() {
  return (
    <section className="pb-20 pt-8 md:pb-28 md:pt-12 lg:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="mx-auto max-w-[900px] px-6 text-center md:px-12"
      >
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Projects
        </p>

        <h1 className="text-[36px] font-semibold leading-[1.1] tracking-tight text-foreground md:text-[48px] lg:text-[64px]">
          Products I&apos;ve Built.
          <br />
          Problems I&apos;ve Solved.
        </h1>

        <p className="mx-auto mt-6 max-w-[720px] text-[17px] leading-relaxed text-muted-foreground md:mt-8">
          A curated collection of production-ready applications across AI, web
          and mobile, built to solve real-world business problems through
          thoughtful engineering.
        </p>
      </motion.div>
    </section>
  );
}
