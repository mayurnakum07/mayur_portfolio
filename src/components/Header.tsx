"use client";

import Image from "next/image";
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

      if (menuOpen && target && !target.closest("#mobile-menu")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className={`nav-header ${menuOpen ? "bg-surface-1" : ""}`}>
      <main className="container-page py-4">
        <section className="flex justify-between items-center">
          <Link href="/" className="text-foreground text-xl font-bold tracking-tight">
            Mayur<span className="text-accent-cyan">.</span>
          </Link>

          <button
            className="lg:hidden md:hidden btn-icon"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? <X size={20} /> : <AlignJustify size={20} />}
          </button>

          <Menubar home={true} />

          <Link
            href="/contact"
            className={`hidden md:block lg:block btn-icon ${
              pathname === "/contact" ? "border-accent-cyan/40 bg-accent-cyan/10" : ""
            }`}
          >
            <Image
              src="https://framerusercontent.com/images/y7AJDvszhzacJVCt3lE8xkNyDY.svg"
              alt="contact"
              width={20}
              height={20}
              className="invert"
            />
          </Link>
        </section>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="absolute top-16 left-0 w-full card-glass p-6 md:hidden lg:hidden z-50 mx-0 rounded-none border-x-0"
          >
            <nav>
              <ul className="flex flex-col space-y-4 text-lg">
                <Link
                  href="/"
                  className={`nav-link ${pathname === "/" ? "nav-link-active" : ""}`}
                >
                  <li>Home</li>
                </Link>
                <Link
                  href="/projects"
                  className={`nav-link ${pathname === "/projects" ? "nav-link-active" : ""}`}
                >
                  <li>Projects</li>
                </Link>
                <Link
                  href="/about"
                  className={`nav-link ${pathname === "/about" ? "nav-link-active" : ""}`}
                >
                  <li>About</li>
                </Link>
                <Link
                  href="/contact"
                  className={`nav-link ${pathname === "/contact" ? "nav-link-active" : ""}`}
                >
                  <li>Get In Touch</li>
                </Link>
              </ul>
            </nav>
          </div>
        )}
      </main>
    </header>
  );
};

export default Header;
