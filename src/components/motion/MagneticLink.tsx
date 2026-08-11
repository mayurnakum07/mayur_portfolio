"use client";

import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";
import { isStaticTier } from "@/lib/motion";

interface MagneticLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  /** Maximum pull toward the cursor, in pixels. */
  strength?: number;
}

/**
 * The primary CTA leans toward the cursor and springs back on leave.
 *
 * Pointer-driven, so it is gated on a fine pointer rather than a breakpoint —
 * a hover effect on a touchscreen either never fires or fires stuck. Uses a CSS
 * transform directly instead of GSAP; one interpolated property does not
 * justify pulling the library into this component.
 */
export default function MagneticLink({
  href,
  children,
  className = "",
  target,
  rel,
  strength = 8,
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || isStaticTier()) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;

    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
        const y = (event.clientY - (rect.top + rect.height / 2)) / rect.height;

        el.style.transform = `translate(${x * strength * 2}px, ${
          y * strength * 2
        }px)`;
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(frame);
      el.style.transform = "";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      el.style.transform = "";
    };
  }, [strength]);

  return (
    <Link
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </Link>
  );
}
