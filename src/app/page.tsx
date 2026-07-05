import About from "@/components/about/About";
import WhatIBuild from "@/components/capabilities/WhatIBuild";
import HowIBuildProducts from "@/components/process/HowIBuildProducts";
import Journey from "@/components/journey/Journey";
import Expertise from "@/components/expertise/Expertise";
import Experience from "@/components/experience/Experience";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Hero from "@/components/hero/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mayur | Frontend Web Developer Portfolio",
  description:
    "Frontend Developer with expertise in React, Next.js, TypeScript, React Ionic, and React Native. Passionate about building dynamic, responsive web and mobile applications. Skilled in integrating Firebase to deliver scalable and efficient backend solutions.",
  keywords: [
    "Frontend Web Developer",
    "React Developer",
    "Next.js Developer",
    "React Ionic Developer",
    "JavaScript Expert",
    "TypeScript Developer",
    "Web Application Developer",
    "UI/UX Developer",
    "Modern Web Development",
    "Responsive Web Design",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/JR9gd9Xk/image.png",
    title: "Mayur | Frontend Web Developer Portfolio",
    description:
      "Frontend Developer with expertise in React, Next.js, TypeScript, React Ionic, and React Native. Passionate about building dynamic, responsive web and mobile applications. Skilled in integrating Firebase to deliver scalable and efficient backend solutions.",
  },
  twitter: {
    images: "https://i.ibb.co/JR9gd9Xk/image.png",
    title: "Mayur | Frontend Web Developer Portfolio",
    description:
      "Frontend Developer with expertise in React, Next.js, TypeScript, React Ionic, and React Native. Passionate about building dynamic, responsive web and mobile applications. Skilled in integrating Firebase to deliver scalable and efficient backend solutions.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#09090b",
};

const Home = () => {
  return (
    <main className="w-full overflow-x-clip">
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Expertise />
      <WhatIBuild />
      <HowIBuildProducts />
      <Journey />
    </main>
  );
};

export default Home;
