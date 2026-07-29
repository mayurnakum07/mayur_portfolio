import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Myplace from "@/components/Myplace";
import Journey from "@/components/journey/Journey";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `About | Mayur - ${siteConfig.title}`,
  description:
    "Learn how Mayur Nakum thinks, solves problems, and builds scalable web, mobile, and AI-powered products.",
  path: "/about",
  ogImage: "about",
  keywords: [
    "About Mayur",
    siteConfig.title,
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Software Engineer",
    "Surat India",
  ],
});

const AboutPage = () => {
  return (
    <main className="w-full overflow-x-clip">
      <About />
      <Experience />
      <Journey />
      <div className="container-page">
        <Myplace />
      </div>
    </main>
  );
};

export default AboutPage;
