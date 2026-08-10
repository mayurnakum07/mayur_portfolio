import Menubar from "./Menubar";
import SocialsMenu from "./SocialsMenu";
import FooterCta from "./FooterCta";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-shell">
      <div className="container-page pt-16 lg:pt-20">
        <FooterCta />

        <div className="footer-grid">
          <div className="footer-nav">
            <Menubar isContactVisible={true} variant="footer" />
          </div>

          <div className="footer-social">
            <SocialsMenu />
          </div>
        </div>

        <div className="footer-bottom">
          <p className="text-body-sm text-muted-foreground">
            ©{year} All Rights Reserved.
          </p>
          <p className="text-body-sm text-muted-foreground">
            Made with 💜 by Mayur Nakum
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
