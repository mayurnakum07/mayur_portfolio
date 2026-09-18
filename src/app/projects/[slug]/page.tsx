import { notFound } from "next/navigation";
import {
  getProject,
  getProjectNeighbours,
  projects,
} from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import { projectSchema } from "@/lib/structuredData";
import JsonLd from "@/components/JsonLd";
import ScrollProgress from "@/components/motion/ScrollProgress";
import CaseStudyArticle from "@/components/projects/case-study/CaseStudyArticle";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return createPageMetadata({
      title: "Project not found | Mayur Nakum",
      description: "That project does not exist.",
      path: `/projects/${slug}`,
      ogImage: "projects",
    });
  }

  return createPageMetadata({
    title: `${project.name} · Case Study | Mayur Nakum`,
    description: project.summary,
    path: `/projects/${project.slug}`,
    // Screenshots have no social card of their own, so use the shared one.
    ogImage: project.images.ogImage,
    ogType: "article",
    keywords: [project.name, project.category, "Case Study", ...project.stack],
  });
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const { prev, next } = getProjectNeighbours(project.slug);

  return (
    <main className="w-full min-w-0">
      <JsonLd data={projectSchema(project)} />
      <ScrollProgress />
      <CaseStudyArticle project={project} prev={prev} next={next} />
    </main>
  );
}
