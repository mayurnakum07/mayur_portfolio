import { Suspense } from "react";
import ProjectsArchiveHeader from "@/components/projects/archive/ProjectsArchiveHeader";
import ProjectsArchive from "@/components/projects/archive/ProjectsArchive";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `Projects | Mayur - ${siteConfig.title}`,
  description:
    "A curated archive of production-ready applications across AI, web and mobile — built to solve real-world business problems through thoughtful engineering.",
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

function ArchiveFallback() {
  return (
    <div className="container-page section-standard">
      <p className="font-mono text-meta-sm text-paper-faint">Loading archive…</p>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="w-full min-w-0">
      <ProjectsArchiveHeader />
      <Suspense fallback={<ArchiveFallback />}>
        <ProjectsArchive />
      </Suspense>
    </main>
  );
}
