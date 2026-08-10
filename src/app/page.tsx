import About from "@/components/about/About";
import HowIBuildProducts from "@/components/process/HowIBuildProducts";
import Expertise from "@/components/expertise/Expertise";
import Experience from "@/components/experience/Experience";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Hero from "@/components/hero/Hero";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata, defaultDescription } from "@/lib/metadata";
import { personSchema } from "@/lib/structuredData";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `Mayur | ${siteConfig.title} Portfolio`,
  description: defaultDescription,
  path: "/",
  ogImage: "home",
  keywords: [
    siteConfig.title,
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "TypeScript Developer",
    "AI Product Development",
    "Modern Web Development",
  ],
});

const Home = () => {
  return (
    <main className="w-full overflow-x-clip">
      <JsonLd data={personSchema()} />
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Expertise />
      <HowIBuildProducts />
    </main>
  );
};

export default Home;
