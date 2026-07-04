"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface menuInterface {
  home?: boolean;
  isContactVisible?: boolean;
}

const Menubar = ({ home, isContactVisible = false }: menuInterface) => {
  const pathname = usePathname();
  return (
    <nav className={`${home && "hidden lg:block md:block"}`}>
      <ul className="flex space-x-8">
        <li className={`nav-link ${pathname === "/" ? "nav-link-active" : ""}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`nav-link ${pathname === "/projects" ? "nav-link-active" : ""}`}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={`nav-link ${pathname === "/about" ? "nav-link-active" : ""}`}>
          <Link href="/about">About</Link>
        </li>
        {isContactVisible && (
          <li className={`nav-link ${pathname === "/contact" ? "nav-link-active" : ""}`}>
            <Link href="/contact">Contact</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menubar;
