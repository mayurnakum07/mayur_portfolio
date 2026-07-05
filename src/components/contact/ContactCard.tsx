"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ContactCardData } from "@/data/contactCards";

interface ContactCardProps {
  card: ContactCardData;
  index: number;
}

export default function ContactCard({ card, index }: ContactCardProps) {
  const Icon = card.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: 0.1 + index * 0.08,
        ease: "easeOut",
      }}
      className="group flex h-full flex-col rounded-[22px] border border-border/50 bg-surface-1 p-7 transition-all duration-300 hover:-translate-y-[4px] hover:border-border-hover md:p-8"
    >
      <Icon
        size={18}
        strokeWidth={1.75}
        className="text-muted-foreground"
        aria-hidden
      />

      <h3 className="mt-5 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {card.title}
      </h3>

      {card.value && (
        <p className="mt-3 text-lg font-semibold tracking-tight text-foreground md:text-xl">
          {card.type === "email" ? (
            <Link
              href={card.href!}
              className="transition-colors duration-200 hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-hover focus-visible:ring-offset-2 focus-visible:ring-offset-surface-1 rounded-sm"
            >
              {card.value}
            </Link>
          ) : (
            card.value
          )}
        </p>
      )}

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
        {card.description}
      </p>

      {card.type === "link" && card.href && card.buttonLabel && (
        <Link
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-lg border border-border/60 px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-border-hover hover:bg-surface-2/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-hover focus-visible:ring-offset-2 focus-visible:ring-offset-surface-1"
        >
          {card.buttonLabel}
          <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden />
        </Link>
      )}
    </motion.article>
  );
}
