"use client";

import { useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Github, Linkedin, Mail } from "lucide-react";
import MaskReveal from "@/components/motion/MaskReveal";
import Counter from "@/components/motion/Counter";
import useScrollFx from "@/components/motion/useScrollFx";
import { TIER_FULL, TIER_LITE } from "@/lib/motion";

const STATS = siteConfig.stats;

const SOCIALS = [
  { href: siteConfig.github, label: "GitHub", icon: Github },
  { href: siteConfig.linkedIn, label: "LinkedIn", icon: Linkedin },
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail },
] as const;

export default function HeroContent() {
  const ref = useRef<HTMLDivElement>(null);

  /**
   * The hero's entrance, held until the intro curtain lifts — otherwise it
   * plays out behind the overlay and the reveal lands on a finished hero.
   *
   * GSAP rather than Framer here because the timing has to be coordinated with
   * something outside React's render cycle, and because the headline beside it
   * is already GSAP: one engine per element, one engine per section.
   */
  useScrollFx(
    ref,
    ({ gsap, mm, scope }) => {
      const items = scope.querySelectorAll<HTMLElement>("[data-hero-item]");
      if (!items.length) return;

      mm.add(`${TIER_FULL}, ${TIER_LITE}`, () => {
        gsap.fromTo(
          items,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.09,
            delay: 0.35,
            ease: "power3.out",
          }
        );
      });
    },
    [],
    { awaitIntro: true }
  );

  return (
    <div
      ref={ref}
      className="flex min-w-0 flex-col items-center gap-5 text-center sm:gap-6 md:items-start md:gap-5 md:text-left lg:gap-6 [@media(max-height:800px)]:md:gap-4"
    >
      <div data-hero-item>
        <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border/60 bg-surface-1/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
          <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-emerald-400" />
          Available for AI Product Development
        </span>
      </div>

      {/* Lines rise from behind their masks once the curtain is gone. */}
      <MaskReveal
        as="h1"
        immediate
        delay={0.2}
        className="w-full min-w-0 font-semibold tracking-[-0.02em] text-foreground"
      >
        <span className="line-mask mb-2 text-base font-medium text-muted-foreground md:text-lg">
          <span>Hi, I&apos;m</span>
        </span>

        <span className="line-mask">
          <span
            className="text-[clamp(2rem,5vw,4.25rem)] leading-[1.1] md:text-[clamp(2.25rem,4vw,4rem)] lg:text-[clamp(2.5rem,3.5vw,4.75rem)] [@media(max-height:800px)]:lg:text-[clamp(2rem,3vw,3.5rem)]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, hsl(0 0% 98%) 0%, hsl(187 85% 75%) 55%, hsl(258 90% 78%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {siteConfig.name}
          </span>
        </span>

        <span className="line-mask mt-2 md:mt-2">
          <span className="text-[clamp(1.75rem,4.5vw,3.75rem)] leading-[1.12] lg:text-[clamp(1.875rem,3vw,3.5rem)] [@media(max-height:800px)]:lg:text-[clamp(1.5rem,2.5vw,2.75rem)]">
            {siteConfig.title}
          </span>
        </span>

        <span className="line-mask mt-2 md:mt-3">
          <span className="text-[clamp(1.125rem,2.5vw,1.75rem)] font-medium leading-snug text-foreground/85">
            {siteConfig.tagline}
          </span>
        </span>
      </MaskReveal>

      <p
        data-hero-item
        className="w-full max-w-lg text-base leading-relaxed text-foreground/80 md:text-lg"
      >
        I design and ship intelligent digital products — blending modern web
        stacks with AI to build fast, reliable software.
      </p>

      <div
        data-hero-item
        className="flex w-full max-w-md flex-col gap-3 sm:flex-row md:max-w-none"
      >
        <Link
          href="/projects"
          className="inline-flex h-11 min-h-[44px] w-full items-center justify-center rounded-lg bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90 sm:w-auto"
        >
          Explore Projects
        </Link>
        <Link
          href="/contact"
          className="inline-flex h-11 min-h-[44px] w-full items-center justify-center rounded-lg border border-border/80 px-5 text-sm font-medium text-foreground transition-colors hover:border-border-hover hover:bg-surface-2/50 sm:w-auto"
        >
          Book a Call
        </Link>
      </div>

      <div data-hero-item className="flex items-center gap-4">
        {SOCIALS.map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/40"
          >
            <Icon size={18} strokeWidth={1.75} />
          </Link>
        ))}
      </div>

      <div
        data-hero-item
        className="grid w-full grid-cols-2 gap-x-6 gap-y-5 border-t border-border/50 pt-5 text-left sm:grid-cols-4 md:pt-6"
      >
        {STATS.map(({ value, label }) => (
          <div key={label}>
            <Counter
              as="p"
              value={value}
              className="text-xl font-semibold tracking-tight text-foreground md:text-2xl"
            />
            <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
