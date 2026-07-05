"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Mail } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const AVAILABILITY_ITEMS = [
  "Full-Time Opportunities",
  "Freelance Projects",
  "AI Product Development",
] as const;

const RESUME_URL = "https://mayurnakum-portfolio.vercel.app/mayurResume.pdf";

export default function ContactHero() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="relative w-full overflow-x-clip"
    >
      <div className="container-page py-[50px]">
        <div className="relative mx-auto flex max-w-[900px] flex-col items-center text-center">
          {/* Subtle radial glow behind heading */}
          <div
            className="pointer-events-none absolute left-1/2 top-[18%] h-[320px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 md:h-[400px] md:w-[600px]"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(0 0% 100% / 0.04) 0%, transparent 70%)",
            }}
            aria-hidden
          />

          <motion.p
            {...fadeUp(0)}
            className="relative mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            Contact
          </motion.p>

          <motion.h1
            id="contact-heading"
            {...fadeUp(0.08)}
            className="relative text-[clamp(2.25rem,5.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground"
          >
            Let&apos;s Build Something
            <br />
            Meaningful Together.
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="relative mt-6 max-w-[640px] text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed"
          >
            Whether you&apos;re looking to build an AI-powered application, a
            scalable web platform, or a cross-platform mobile experience,
            I&apos;d love to hear about your idea.
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="relative mt-8 flex max-w-full flex-col items-center gap-2 rounded-2xl border border-border/60 bg-surface-1/50 px-5 py-3.5 text-sm text-muted-foreground backdrop-blur-md sm:inline-flex sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-3 sm:gap-y-2 sm:rounded-full sm:py-3"
          >
            <span className="inline-flex items-center gap-2 font-medium text-foreground/90">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-emerald-400"
                aria-hidden
              />
              Available for
            </span>
            <span className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              {AVAILABILITY_ITEMS.map((item, index) => (
                <span key={item} className="inline-flex items-center gap-3">
                  {index > 0 && (
                    <span className="text-border-hover" aria-hidden>
                      •
                    </span>
                  )}
                  <span>{item}</span>
                </span>
              ))}
            </span>
          </motion.div>

          <motion.div
            {...fadeUp(0.32)}
            className="relative mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="mailto:mayurnakum07@gmail.com"
                className="inline-flex h-12 w-full min-w-[160px] items-center justify-center gap-2 rounded-xl bg-foreground px-6 text-sm font-medium text-background transition-colors duration-300 hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
              >
                <Mail size={16} strokeWidth={1.75} aria-hidden />
                Email Me
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full min-w-[160px] items-center justify-center gap-2 rounded-xl border border-border/80 bg-transparent px-6 text-sm font-medium text-foreground transition-all duration-300 hover:border-border-hover hover:bg-surface-2/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-hover focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
              >
                <Eye size={16} strokeWidth={1.75} aria-hidden />
                View my CV
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
