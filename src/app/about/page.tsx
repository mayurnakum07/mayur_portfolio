import Experience from "@/components/Experience";
import Myplace from "@/components/Myplace";
import MyStory from "@/components/MyStory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Mayur - Frontend Developer",
  description:
    "Learn more about Mayur, a frontend web developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "About Mayur",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Development Journey",
    "JavaScript Developer",
    "UI/UX Developer",
    "Software Engineer",
    "Modern Web Technologies",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/NgLYM6VP/Screenshot-2025-03-29-141747.webp",
    title: "About | Mayur - Frontend Developer",
    description:
      "Learn more about Mayur, a frontend web developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  },
  twitter: {
    images: "https://i.ibb.co/NgLYM6VP/Screenshot-2025-03-29-141747.webp",
    title: "About | Mayur - Frontend Developer",
    description:
      "Learn more about Mayur, a frontend web developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

const About = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28 relative w-[100%] m-auto">
      <section className="py-20">
        <h1 className="text-4xl lg:text-8xl md:text-6xl font-bold text-gray-800">
          About me<span className="text-purple-600">.</span>
        </h1>
        <p className="mt-8 text-gray-800 text-xl lg:text-2xl px-2  border-l-4 lg:border-l-8 border-purple-600">
          Develop ing beautiful and functional websites is what I love doing,
          and
          {"that's"} why I give my all in every new challenge.
        </p>
      </section>
      <Myplace />
      <MyStory />
      <Experience />
    </main>
  );
};

export default About;
