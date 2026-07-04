import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialsMenu = () => {
  return (
    <nav>
      <ul className="flex space-x-6">
        <li className="link-subtle">
          <Link href="https://instagram.com/mr_mayur_nakum" target="_blank">
            <Instagram size={22} />
          </Link>
        </li>
        <li className="link-subtle">
          <Link
            href="https://linkedin.com/in/mayur-nakum-178777250"
            target="_blank"
          >
            <Linkedin size={22} />
          </Link>
        </li>
        <li className="link-subtle">
          <Link href="https://github.com/mayurnakum07" target="_blank">
            <Github size={22} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SocialsMenu;
