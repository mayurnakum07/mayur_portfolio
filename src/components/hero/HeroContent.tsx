"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "8+", label: "Technologies" },
] as const;

const SOCIALS = [
  { href: "https://github.com/mayurnakum07", label: "GitHub", icon: Github },
  {
    href: "https://linkedin.com/in/mayur-nakum-178777250",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "mailto:mayurnakum07@gmail.com", label: "Email", icon: Mail },
] as const;

export default function HeroContent() {
  return (
    <div className="flex min-w-0 flex-col items-center gap-5 text-center sm:gap-6 md:items-start md:gap-5 md:text-left lg:gap-6 [@media(max-height:800px)]:md:gap-4">
      {/* Badge */}
      <motion.div {...fadeUp(0)}>
        <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface-1/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
          Available for AI Product Development
        </span>
      </motion.div>

      {/* Heading — natural line breaks, no ch constraint */}
      <motion.div {...fadeUp(0.06)} className="w-full min-w-0">
        <h1 className="font-semibold tracking-[-0.02em] text-foreground">
          <span className="mb-2 block text-base font-medium text-muted-foreground md:text-lg">
            Hi, I&apos;m
          </span>

          <span
            className="block text-[clamp(2rem,5vw,4.25rem)] leading-[1.1] md:text-[clamp(2.25rem,4vw,4rem)] lg:text-[clamp(2.5rem,3.5vw,4.75rem)] [@media(max-height:800px)]:lg:text-[clamp(2rem,3vw,3.5rem)]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, hsl(0 0% 98%) 0%, hsl(187 85% 75%) 55%, hsl(258 90% 78%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Mayur Nakum
          </span>

          <span className="mt-2 block text-[clamp(1.75rem,4.5vw,3.75rem)] leading-[1.12] md:mt-2 lg:text-[clamp(1.875rem,3vw,3.5rem)] [@media(max-height:800px)]:lg:text-[clamp(1.5rem,2.5vw,2.75rem)]">
            AI Software Engineer
          </span>

          <span className="mt-2 block text-[clamp(1.125rem,2.5vw,1.75rem)] font-medium leading-snug text-foreground/85 md:mt-3">
            Building Intelligent Digital Products.
          </span>
        </h1>
      </motion.div>

      {/* Description */}
      <motion.p
        {...fadeUp(0.12)}
        className="w-full max-w-lg text-base leading-relaxed text-foreground/80 md:text-lg"
      >
        I design and ship intelligent digital products — blending modern web
        stacks with AI to build fast, reliable software.
      </motion.p>

      {/* Buttons */}
      <motion.div
        {...fadeUp(0.18)}
        className="flex w-full max-w-md flex-col gap-3 sm:flex-row md:max-w-none"
      >
        <Link
          href="/projects"
          className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90 sm:w-auto"
        >
          Explore Projects
        </Link>
        <Link
          href="/contact"
          className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-border/80 px-5 text-sm font-medium text-foreground transition-colors hover:border-border-hover hover:bg-surface-2/50 sm:w-auto"
        >
          Book a Call
        </Link>
      </motion.div>

      {/* Social */}
      <motion.div {...fadeUp(0.24)} className="flex items-center gap-4">
        {SOCIALS.map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon size={18} strokeWidth={1.75} />
          </Link>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        {...fadeUp(0.3)}
        className="flex w-full flex-wrap items-center justify-center gap-6 border-t border-border/50 pt-5 md:justify-start md:gap-8 md:pt-6 lg:gap-10"
      >
        {STATS.map(({ value, label }) => (
          <div key={label}>
            <p className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              {value}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
