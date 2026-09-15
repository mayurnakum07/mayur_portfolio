import type { Category } from "@/data/projects";
import { projects } from "@/data/projects";

/** Editorial selection for Home §03 — three highest-impact production pieces. */
export const homeSelectedSlugs = [
  "bydesign",
  "devli",
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
    label: "AI-native products",
    href: "/projects?category=AI",
    count: countByCategory("AI"),
  },
  {
    id: "web",
    label: "Web platforms",
    href: "/projects?category=Web",
    count: countByCategory("Web"),
  },
  {
    id: "mobile",
    label: "Cross-platform mobile",
    href: "/projects?category=Mobile",
    count: countByCategory("Mobile"),
  },
  {
    id: "methods",
    label: "Production engineering",
    href: "/about#working-methods",
  },
];
