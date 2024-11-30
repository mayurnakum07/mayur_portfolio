import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

const SocialsMenu = () => {
  return (
    <nav>
      <ul className="flex space-x-6 font-bold text-[20px] text-[#4e525a]">
        <li className="hover:text-purple-600">
          <a href="https://instagram.com/mr_mayur_nakum">
            <Instagram />
          </a>
        </li>
        <li className="hover:text-purple-600">
          <a href="https://linkedin.com/in/mayur-nakum-178777250">
            <Linkedin />
          </a>
        </li>
        <li className="hover:text-purple-600">
          <a href="https://github.com/mayurnakum07">
            <Github />
          </a>
        </li>
        <li className="hover:text-purple-600">
          <a href="https://instagram.com/mr_mayur_nakum">
            <Facebook />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialsMenu;
