import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `Projects | Mayur - ${siteConfig.title}`,
  description:
    "A curated collection of production-ready applications across AI, web and mobile — built to solve real-world business problems through thoughtful engineering.",
  path: "/projects",
  ogImage: "projects",
  keywords: [
    "Software Products",
    "AI Applications",
    "React Native Apps",
    "Next.js Projects",
    "Production Software",
    "Mobile Applications",
    "Web Applications",
  ],
});

export default function ProjectsPage() {
  return (
    <main className="overflow-x-clip">
      <ProjectsHero />
      <ProjectShowcase />
    </main>
  );
}
