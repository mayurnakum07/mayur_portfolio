import ProjectsArchiveHeader from "@/components/projects/archive/ProjectsArchiveHeader";
import ProjectsFeatured from "@/components/projects/archive/ProjectsFeatured";
import ProjectsArchive from "@/components/projects/archive/ProjectsArchive";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `Projects | Mayur - ${siteConfig.title}`,
  description:
    "Apps and platforms I have shipped across AI, web and mobile. Filter by category or status, then open a case study.",
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

/**
 * Featured is a Server Component; the archive list receives `projects` as props
 * so all rows are present in the static HTML. Filtering is client-only state —
 * see ProjectsArchive.tsx for why we no longer gate this tree on useSearchParams.
 */
export default function ProjectsPage() {
  return (
    <main className="w-full min-w-0">
      <ProjectsArchiveHeader />
      <ProjectsFeatured />
      <ProjectsArchive projects={projects} />
    </main>
  );
}
