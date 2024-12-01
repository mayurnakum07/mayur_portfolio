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

  return (
    <main className="flex-none h-auto max-w-[1300px] px-2 lg:px-0 md:px-5 relative w-full m-auto py-4">
      <section className="flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-black text-[20px] font-bold">
          Mayur<span className="text-purple-600">.</span>
        </a>

        {/* Menu Button for Mobile/Tablet */}
        <button
          className="lg:hidden md:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <AlignJustify />}
        </button>

        {/* Desktop Menu */}
        <Menubar home={true} />

        {/* Contact Button */}
        <Link
          href="/contact"
          className={`hidden md:block lg:block bg-black p-2 rounded-full hover:bg-gray-700 ${
            pathname === "/contact" && "bg-purple-600"
          }`}
        >
          <Image
            src="https://framerusercontent.com/images/y7AJDvszhzacJVCt3lE8xkNyDY.svg"
            alt="contact"
            width={20}
            height={20}
          />
        </Link>
      </section>

      {/* Mobile/Tablet Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 md:hidden lg:hidden z-50">
          <nav>
            <ul className="flex flex-col space-y-4 font-bold text-[20px] text-[#4e525a]">
              <Link
                href="/"
                className={`hover:text-purple-600 ${
                  pathname === "/" && "text-purple-600"
                }`}
              >
                <li>Home</li>
              </Link>
              <Link
                href="/projects"
                className={`hover:text-purple-600 ${
                  pathname === "/projects" && "text-purple-600"
                }`}
              >
                <li>Projects</li>
              </Link>
              <Link
                href="/about"
                className={`hover:text-purple-600 ${
                  pathname === "/about" && "text-purple-600"
                }`}
              >
                <li>About</li>
              </Link>
              <Link
                href="/contact"
                className={`hover:text-purple-600 ${
                  pathname === "/contact" && "text-purple-600"
                }`}
              >
                <li>Get In Touch</li>
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </main>
  );
};

export default Header;
