"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/featuredProjects";
import FeaturedProjectCard from "./FeaturedProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="border-t border-border/40 py-16 md:py-20 lg:py-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-2xl text-center md:mb-12"
        >
          <p className="mb-2 text-[10px] uppercase tracking-widest text-accent-cyan/80">
            FEATURED WORK
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Building AI Products,
            <br className="hidden sm:block" />
            Not Just Applications.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Products built with AI, modern web tech and scalable architecture.
          </p>
        </motion.div>

        {/* 3 columns · 1 row on desktop */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex justify-center md:mt-12"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View all projects
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
