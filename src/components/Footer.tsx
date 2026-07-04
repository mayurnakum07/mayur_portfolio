import { Download } from "lucide-react";
import Menubar from "./Menubar";
import SocialsMenu from "./SocialsMenu";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-shell">
      <div className="container-page pt-16 lg:pt-20">
        <div className="footer-cta">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <h1 className="heading-subsection text-xl md:text-2xl text-center lg:text-left">
              Interested in working together?
            </h1>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link href="/contact" className="btn-accent w-full sm:w-auto">
                Get In Touch
              </Link>
              <Link
                href="https://mayurnakum-portfolio.vercel.app/mayurResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto flex gap-2 justify-center"
              >
                <Download size={18} /> Download CV
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-nav">
            <Menubar isContactVisible={true} variant="footer" />
          </div>

          <div className="footer-social">
            <SocialsMenu />
          </div>
        </div>

        <div className="footer-bottom">
          <h3 className="text-body-sm text-muted-foreground">
            ©2024 All Rights Reserved.
          </h3>
          <h3 className="text-body-sm text-muted-foreground">
            Made with 💜 by Mayur Nakum
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
