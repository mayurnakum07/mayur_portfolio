"use client";

import Reveal from "@/components/motion/Reveal";
import {
  aboutIntro,
  beyondCode,
  currentlyLearning,
  howIWork,
} from "@/data/aboutPage";
import { siteConfig } from "@/lib/site";

export default function AboutIntro() {
  return (
    <section className="w-full overflow-x-clip">
      <div className="container-page py-[50px] md:py-[70px]">
        {/* Intro */}
        <Reveal variant="left" className="max-w-3xl">
          <p className="mb-4 text-[10px] uppercase tracking-widest text-accent-cyan/80">
            About
          </p>

          <h1 className="text-[clamp(2rem,5.5vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground">
            {siteConfig.name}
          </h1>

          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            {siteConfig.title} · {siteConfig.location}
          </p>

          <div className="mt-8 space-y-5">
            {aboutIntro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-muted-foreground md:text-[17px] md:leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        {/* How I work */}
        <div className="mt-20 border-t border-border/40 pt-14 md:mt-24">
          <Reveal
            as="h2"
            variant="blur-up"
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            How I work
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
            {howIWork.map((principle, index) => (
              <Reveal key={principle.title} variant="up" delay={index * 0.05}>
                <h3 className="text-base font-medium text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Currently learning */}
        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-border/40 pt-14 md:mt-24 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="right">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Currently learning
            </h2>
            <p className="mt-2 text-sm text-muted-foreground/70">
              As of {currentlyLearning.asOf}
            </p>

            <ul className="mt-6 space-y-4">
              {currentlyLearning.items.map((item) => (
                <li
                  key={item.slice(0, 40)}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-muted-foreground"
                >
                  <span
                    aria-hidden
                    className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-accent-cyan/70"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="scale" delay={0.08}>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Beyond code
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground md:text-base">
              {beyondCode}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
