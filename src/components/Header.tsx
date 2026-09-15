"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
] as const;

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const menu = menuRef.current;
    const menuButton = menuButtonRef.current;

    const focusables = () =>
      menu
        ? Array.from(menu.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
            (el) => !el.hasAttribute("disabled")
          )
        : [];

    requestAnimationFrame(() => {
      focusables()[0]?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const items = focusables();
      if (!items.length) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      const cycle = menuButton ? [menuButton, ...items] : items;
      const firstCycle = cycle[0];
      const lastCycle = cycle[cycle.length - 1];

      if (event.shiftKey) {
        if (active === firstCycle || active === first) {
          event.preventDefault();
          lastCycle.focus();
        }
      } else if (active === lastCycle || active === last) {
        event.preventDefault();
        firstCycle.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      menuButton?.focus();
    };
  }, [menuOpen]);

  return (
    <header className={cn("site-header", menuOpen && "site-header--menu-open")}>
      <div className="container-page flex h-14 items-center justify-between lg:h-16">
        <Link
          href="/"
          className="relative z-[120] font-display text-lg font-bold tracking-tight text-paper"
          onClick={() => setMenuOpen(false)}
          tabIndex={menuOpen ? -1 : undefined}
        >
          Mayur<span className="text-signal">.</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "nav-link",
                pathname === href && "nav-link--active"
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={cn(
              "signal-link signal-link--always text-body-sm",
              pathname === "/contact" && "text-paper"
            )}
          >
            Get in touch
            <span aria-hidden>→</span>
          </Link>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="relative z-[120] flex h-11 w-11 items-center justify-center font-mono text-meta-lg text-paper lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-haspopup="dialog"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "✕" : "≡"}
        </button>
      </div>

      {menuOpen && (
        <nav
          ref={menuRef}
          id={menuId}
          className="mobile-menu lg:hidden"
          aria-label="Mobile"
          role="dialog"
          aria-modal="true"
        >
          <ul className="flex flex-1 flex-col justify-center gap-6 sm:gap-8">
            {[...NAV, { href: "/contact", label: "Get in touch" }].map(
              ({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "block min-h-[48px] font-display text-[clamp(1.75rem,8vw,2.5rem)] text-paper",
                      pathname === href && "text-signal"
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
