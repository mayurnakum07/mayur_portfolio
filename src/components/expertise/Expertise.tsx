"use client";

import Reveal from "@/components/motion/Reveal";
import { expertiseCategories } from "@/data/expertiseCategories";
import ExpertiseCard from "./ExpertiseCard";

export default function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="w-full overflow-x-clip border-t border-border/40"
    >
      <div className="container-page py-16 md:py-[100px] lg:py-[120px]">
        <Reveal
          as="header"
          variant="blur-up"
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
        >
          <p className="mb-4 text-[10px] uppercase tracking-widest text-accent-cyan/80">
            Expertise
          </p>

          <h2
            id="expertise-heading"
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
          >
            Engineering Expertise
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            What I know — and what I ship for teams: AI features, web platforms,
            mobile apps, and cloud-backed products without repeating the same
            stack twice.
          </p>
        </Reveal>

        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {expertiseCategories.map((category, index) => (
            <ExpertiseCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
