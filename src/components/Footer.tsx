import { Download } from "lucide-react";
import Menubar from "./Menubar";
import SocialsMenu from "./SocialsMenu";
import Link from "next/link";

const Footer = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28  relative w-full m-auto py-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 text-center md:text-left mb-4 ">
        {/* Menubar */}
        <section className="flex justify-center md:justify-start">
          <Menubar isContactVisible={true} />
        </section>

        {/* Socials Menu */}
        <section className="flex md:flex-col justify-center md:justify-start md:items-end">
          <SocialsMenu />
        </section>

        {/* Get in Touch */}
        <section className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            Interested in working together?
          </h1>
          <div className="mt-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <Link
              href="/contact"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-bold"
            >
              Get In Touch
            </Link>
            <Link
              href="https://mayurnakum-portfolio.vercel.app/mayurResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-transparent transition-all duration-300 border border-gray-600 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white flex gap-2 font-bold"
            >
              <Download /> Download CV
            </Link>
          </div>
        </section>

        {/* Copyright */}
        <section className="flex flex-col justify-center items-center md:items-end">
          <h3 className="text-[17px] text-gray-500 text-end">
            ©2024 All Rights Reserved.
            <br />
            Made with 💜 by Mayur Nakum
          </h3>
        </section>
      </div>
    </main>
  );
};

export default Footer;
