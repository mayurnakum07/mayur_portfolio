import MyProjects from "@/components/MyProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Mayur - Frontend Developer",
  description:
    "Explore projects developed by Mayur, a frontend web developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Web Development Projects",
    "Frontend Projects",
    "React Projects",
    "Next.js Portfolio",
    "JavaScript Projects",
    "TypeScript Projects",
    "UI/UX Development",
    "Modern Web Applications",
    "Responsive Websites",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/WNR2qrTj/Screenshot-2025-03-29-141609.webp",
    title: "Projects | Mayur - Frontend Developer",
    description:
      "Explore projects developed by Mayur, a frontend web developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  },
  twitter: {
    images: "https://i.ibb.co/WNR2qrTj/Screenshot-2025-03-29-141609.webp",
    title: "Projects | Mayur - Frontend Developer",
    description:
      "Explore projects developed by Mayur, a frontend web developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

const Projects = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28 relative w-[100%] m-auto">
      <section className="py-20">
        <h1 className="text-4xl lg:text-8xl md:text-6xl font-bold text-gray-800">
          My<span className="text-purple-600">Best</span>
          Creations
        </h1>
        <p className="mt-8 text-gray-800 text-xl lg:text-2xl px-2  border-l-4 lg:border-l-8 border-purple-600">
          Designing and Developing Robust and Stylish Web Applications for a
          Decade and Counting
        </p>
      </section>
      <MyProjects />
    </main>
  );
};

export default Projects;
