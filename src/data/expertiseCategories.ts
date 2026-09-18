/**
 * Technical strength categories for About. Plain data, no icon deps.
 * Links into the project archive by category where it maps cleanly.
 */
export interface ExpertiseCategory {
  id: string;
  title: string;
  description: string;
  technologies: string[];
}

export const expertiseCategories: ExpertiseCategory[] = [
  {
    id: "ai",
    title: "AI Engineering",
    description:
      "LLM features, agent tooling and MCP workflows wired into products that already ship.",
    technologies: [
      "OpenAI",
      "Claude",
      "Gemini",
      "Prompt Engineering",
      "RAG",
      "AI Agents",
      "MCP",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description:
      "Fast, accessible interfaces with React and Next.js that stay maintainable as the product grows.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "GSAP",
      "Redux",
      "TanStack Query",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description:
      "Android and iOS apps from one React Native codebase, with native work where the platform requires it.",
    technologies: ["React Native", "Expo", "Android", "iOS", "Firebase"],
  },
  {
    id: "backend",
    title: "Backend & Cloud",
    description:
      "Auth, APIs and cloud pieces that keep the frontend honest in production.",
    technologies: [
      "Node.js",
      "Firebase",
      "REST APIs",
      "Authentication",
      "Firestore",
      "Cloud Functions",
      "Vercel",
    ],
  },
];
