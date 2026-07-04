"use client";

import Menubar from "./Menubar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AlignJustify, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (menuOpen && target && !target.closest("#site-nav")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="nav-floating">
      <div id="site-nav" className="container-page relative">
        <div
          className={`nav-glass grid grid-cols-[1fr_auto_1fr] items-center gap-3 ${menuOpen ? "nav-glass-open" : ""}`}
        >
          <Link href="/" className="nav-logo justify-self-start">
            Mayur<span className="text-accent-cyan">.</span>
          </Link>

          <div className="justify-self-center hidden md:block">
            <Menubar home={true} variant="header" />
          </div>

          <div className="nav-actions justify-self-end col-start-3">
            <Link
              href="/contact"
              className={`hidden md:inline-flex btn-accent text-sm px-4 py-2 ${
                pathname === "/contact" ? "ring-1 ring-accent-cyan/40" : ""
              }`}
            >
              Get In Touch
            </Link>

            <button
              className="md:hidden btn-icon h-9 w-9 p-0 col-start-3"
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={18} /> : <AlignJustify size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="nav-mobile-menu">
            <nav>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="/"
                    className={`nav-link block ${pathname === "/" ? "nav-link-active" : ""}`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className={`nav-link block ${pathname === "/projects" ? "nav-link-active" : ""}`}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`nav-link block ${pathname === "/about" ? "nav-link-active" : ""}`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`nav-link block ${pathname === "/contact" ? "nav-link-active" : ""}`}
                  >
                    Get In Touch
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
