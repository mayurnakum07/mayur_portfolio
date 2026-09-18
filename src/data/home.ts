import type { Category } from "@/data/projects";
import { projects } from "@/data/projects";

/** Home §03 selection: three production pieces shown first. */
export const homeSelectedSlugs = [
  "bydesign",
  "paas-ki-dukaan",
  "waves-bible-verse",
] as const;

export const homeSelectedProjects = homeSelectedSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => p !== undefined);

export interface CapabilityRow {
  id: string;
  label: string;
  href: string;
  count?: number;
}

function countByCategory(category: Category) {
  return projects.filter((p) => p.category === category).length;
}

export const homeCapabilities: CapabilityRow[] = [
  {
    id: "ai",
    label: "AI products",
    href: "/projects?category=AI",
    count: countByCategory("AI"),
  },
  {
    id: "web",
    label: "Web apps",
    href: "/projects?category=Web",
    count: countByCategory("Web"),
  },
  {
    id: "mobile",
    label: "Mobile apps",
    href: "/projects?category=Mobile",
    count: countByCategory("Mobile"),
  },
  {
    id: "methods",
    label: "How I work",
    href: "/about#working-methods",
  },
];
