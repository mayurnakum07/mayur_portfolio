"use client";

import Reveal from "@/components/motion/Reveal";
import { aboutCards } from "@/data/aboutCards";
import AboutCard from "./AboutCard";

export default function About() {
  return (
    <section
      id="about"
      className="w-full overflow-x-clip border-t border-border/40"
    >
      <div className="container-page py-[50px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[45fr_55fr] lg:gap-20">
          {/* Left — content first in DOM for mobile. Enters from its own side. */}
          <Reveal
            variant="left"
            stagger={0.09}
            className="flex flex-col text-center lg:text-left"
          >
            <p className="mb-4 text-[10px] uppercase tracking-widest text-accent-cyan/80">
              About
            </p>

            <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground md:text-[40px] lg:text-[56px]">
              Building software that solves{" "}
              <span
                className="text-foreground"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, hsl(0 0% 98%) 0%, hsl(187 85% 75%) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                real problems
              </span>
              .
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground lg:max-w-none">
              I&apos;m a Software Engineer focused on creating scalable web,
              mobile, and AI-powered products. I enjoy transforming complex
              ideas into intuitive experiences with clean architecture,
              thoughtful design, and modern technologies.
            </p>

            <div className="mt-10 border-t border-border/50 pt-8">
              <p className="text-sm font-medium text-foreground">Mayur Nakum</p>
              <p className="mt-1 text-sm text-muted-foreground">
                AI Software Engineer
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Surat, India
              </p>
            </div>
          </Reveal>

          {/* Right — feature cards */}
          <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {aboutCards.map((card, index) => (
              <AboutCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
