"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface SideIndexItem {
  id: string;
  label: string;
  index: string;
}

interface SideIndexProps {
  sections: SideIndexItem[];
  label?: string;
}

/**
 * Sticky desktop side index with IntersectionObserver scroll spy (M4).
 * Hidden on mobile — section Index Rails carry orientation.
 */
export default function SideIndex({
  sections,
  label = "On this page",
}: SideIndexProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    if (!sections.length) return;
    if (typeof window === "undefined") return;

    // Side index is desktop-only; skip observer work on smaller viewports.
    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches) return;

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  if (!sections.length) return null;

  return (
    <nav
      aria-label={label}
      className="hidden lg:sticky lg:top-24 lg:block lg:self-start"
    >
      <p className="font-mono text-meta-xs text-paper-faint">{label}</p>
      <ol className="mt-4 space-y-3">
        {sections.map((section) => {
          const active = activeId === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={cn(
                  "group flex items-baseline gap-2.5 font-mono text-meta-sm transition-colors duration-200",
                  active
                    ? "text-paper"
                    : "text-paper-faint [@media(hover:hover)_and_(pointer:fine)]:hover:text-paper-muted"
                )}
              >
                <span
                  className={cn(
                    "tabular-nums",
                    active ? "text-signal" : "text-paper-faint"
                  )}
                >
                  {section.index}
                </span>
                <span
                  className={cn(
                    "relative after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-full after:origin-left after:bg-signal after:transition-transform after:duration-200",
                    active
                      ? "after:scale-x-100"
                      : "after:scale-x-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100"
                  )}
                >
                  {section.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
