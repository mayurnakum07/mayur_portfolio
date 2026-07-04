import { Download } from "lucide-react";
import Menubar from "./Menubar";
import SocialsMenu from "./SocialsMenu";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container-page section-divider pt-16 pb-8">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 text-center md:text-left mb-8">
        <section className="flex justify-center md:justify-start">
          <Menubar isContactVisible={true} />
        </section>

        <section className="flex md:flex-col justify-center md:justify-start md:items-end">
          <SocialsMenu />
        </section>

        <section className="flex flex-col justify-center items-center md:items-start">
          <h1 className="heading-subsection text-xl md:text-2xl">
            Interested in working together?
          </h1>
          <div className="mt-8 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/contact" className="btn-accent">
              Get In Touch
            </Link>
            <Link
              href="https://mayurnakum-portfolio.vercel.app/mayurResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex gap-2"
            >
              <Download size={18} /> Download CV
            </Link>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center md:items-end">
          <h3 className="text-body-sm text-muted-foreground text-end">
            ©2024 All Rights Reserved.
            <br />
            Made with 💜 by Mayur Nakum
          </h3>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
