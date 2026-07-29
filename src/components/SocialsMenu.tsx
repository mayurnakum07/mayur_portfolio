import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const SocialsMenu = () => {
  return (
    <nav aria-label="Social links">
      <ul className="flex space-x-6">
        <li className="link-subtle">
          <Link
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </Link>
        </li>
        <li className="link-subtle">
          <Link
            href={siteConfig.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </Link>
        </li>
        <li className="link-subtle">
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={22} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SocialsMenu;
