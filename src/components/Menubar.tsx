import Link from "next/link";
import React from "react";

const Menubar = () => {
  return (
    <nav>
      <ul className="flex space-x-6 font-bold text-[20px] text-[#4e525a]">
        <li className="hover:text-purple-600">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-purple-600">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="hover:text-purple-600">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menubar;
