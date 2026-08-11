"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import FeaturedProjectCard from "./FeaturedProjectCard";
import StackedProjectCard from "./StackedProjectCard";
import MaskReveal from "@/components/motion/MaskReveal";
import useScrollFx from "@/components/motion/useScrollFx";
import { SCRUB, TIER_FULL } from "@/lib/motion";

/** Matches the `lg:top-24` sticky offset below. */
const STICKY_OFFSET = 96;

export default function FeaturedProjects() {
  const stackRef = useRef<HTMLDivElement>(null);

  /**
   * Sticky stacking deck.
   *
   * The stacking itself is CSS `position: sticky` — no pinning, so it survives
   * resize, never fights touch momentum, and simply stops existing below the
   * `lg` breakpoint where the markup falls back to a grid.
   *
   * GSAP only adds the depth cue: each card scales down and dims as the next
   * one travels up over it, so the deck reads as layered rather than as cards
   * that happen to overlap.
   */
  useScrollFx(stackRef, ({ gsap, mm, scope }) => {
    mm.add(TIER_FULL, () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-stack-card]", scope);

      cards.forEach((card, index) => {
        const next = cards[index + 1];
        if (!next) return;

        gsap.to(card, {
          scale: 0.94,
          opacity: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: next,
            start: "top bottom",
            end: () => `top top+=${STICKY_OFFSET}`,
            scrub: SCRUB,
            invalidateOnRefresh: true,
          },
        });
      });
    });
  });

  return (
    <section className="border-t border-border/40 py-16 md:py-20 lg:py-24">
      <div className="container-page">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <p className="mb-2 text-[10px] uppercase tracking-widest text-accent-cyan/80">
            FEATURED WORK
          </p>

          <MaskReveal
            as="h2"
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
          >
            <span className="line-mask">
              <span>Building AI Products,</span>
            </span>
            <span className="line-mask">
              <span>Not Just Applications.</span>
            </span>
          </MaskReveal>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Products built with AI, modern web tech and scalable architecture.
          </p>
        </div>

        {/*
          Desktop: the deck. Every card is sticky at the same offset, so each new
          one comes to rest on top of the last. The bottom margin is the scroll
          distance a card gets on its own before the next arrives — without it,
          a card is covered before it can be read.
        */}
        <div ref={stackRef} className="hidden lg:block">
          {featuredProjects.map((project, index) => (
            <div
              key={project.slug}
              data-stack-card
              className={`sticky top-24 ${
                index < featuredProjects.length - 1 ? "mb-[38vh]" : ""
              }`}
              style={{ zIndex: index + 1 }}
            >
              <StackedProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Below lg: no stacking, no pinning — the grid it always was. */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:hidden">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
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
        </div>
      </div>
    </section>
  );
}
