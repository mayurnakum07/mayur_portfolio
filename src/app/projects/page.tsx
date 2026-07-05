import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Mayur - AI Software Engineer",
  description:
    "A curated collection of production-ready applications across AI, web and mobile — built to solve real-world business problems through thoughtful engineering.",
  keywords: [
    "Software Products",
    "AI Applications",
    "React Native Apps",
    "Next.js Projects",
    "Production Software",
    "Mobile Applications",
    "Web Applications",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/C5QRJzQF/image.png",
    title: "Projects | Mayur - AI Software Engineer",
    description:
      "A curated collection of production-ready applications across AI, web and mobile — built to solve real-world business problems through thoughtful engineering.",
  },
  twitter: {
    images: "https://i.ibb.co/C5QRJzQF/image.png",
    title: "Projects | Mayur - AI Software Engineer",
    description:
      "A curated collection of production-ready applications across AI, web and mobile — built to solve real-world business problems through thoughtful engineering.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#09090b",
};

export default function ProjectsPage() {
  return (
    <main className="overflow-x-clip">
      <ProjectsHero />
      <ProjectShowcase />
    </main>
  );
}
