"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface menuInterface {
  home?: boolean;
  isContactVisible?: boolean;
  variant?: "header" | "footer";
}

const Menubar = ({
  isContactVisible = false,
  variant = "footer",
}: menuInterface) => {
  const pathname = usePathname();
  const linkClass = variant === "header" ? "nav-link" : "footer-nav-link";
  const activeClass =
    variant === "header" ? "nav-link-active" : "footer-nav-link-active";
  const listClass =
    variant === "header"
      ? "flex items-center gap-1"
      : "flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2";

  return (
    <nav>
      <ul className={listClass}>
        <li>
          <Link
            href="/"
            className={`${linkClass} ${pathname === "/" ? activeClass : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={`${linkClass} ${pathname === "/projects" ? activeClass : ""}`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${linkClass} ${pathname === "/about" ? activeClass : ""}`}
          >
            About
          </Link>
        </li>
        {isContactVisible && (
          <li>
            <Link
              href="/contact"
              className={`${linkClass} ${pathname === "/contact" ? activeClass : ""}`}
            >
              {variant === "header" ? "Get In Touch" : "Contact"}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menubar;
