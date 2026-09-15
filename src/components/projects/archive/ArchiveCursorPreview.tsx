"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PreviewImage {
  src: string;
  alt: string;
}

interface ArchiveCursorPreviewProps {
  children: React.ReactNode;
}

/**
 * Desktop-only cursor-following project preview for the archive list.
 * Fine pointer + lg breakpoint; hidden on touch and reduced motion.
 */
export default function ArchiveCursorPreview({
  children,
}: ArchiveCursorPreviewProps) {
  const [active, setActive] = useState<PreviewImage | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const lastSlug = useRef<string | null>(null);

  const handleMouseOver = useCallback((e: React.MouseEvent) => {
    const row = (e.target as HTMLElement).closest<HTMLElement>(
      "[data-archive-row]"
    );
    if (!row) return;

    const slug = row.dataset.archiveRow;
    const src = row.dataset.archiveImage;
    const alt = row.dataset.archiveAlt;
    if (!slug || !src || !alt) return;

    if (slug !== lastSlug.current) {
      lastSlug.current = slug;
      setActive({ src, alt });
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    lastSlug.current = null;
    setActive(null);
  }, []);

  return (
    <div
      className="relative"
      onMouseOver={handleMouseOver}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      <div
        aria-hidden
        className={cn(
          "pointer-events-none fixed z-50 hidden [@media(hover:hover)_and_(pointer:fine)]:lg:block",
          "transition-opacity duration-200 motion-reduce:transition-none",
          active ? "opacity-100" : "opacity-0"
        )}
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(24px, -50%)",
        }}
      >
        {active && (
          <div className="artifact-frame artifact-frame--static relative aspect-[4/3] w-[220px] overflow-hidden border border-ink-border bg-ink-surface shadow-artifact">
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="220px"
              className="object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}
