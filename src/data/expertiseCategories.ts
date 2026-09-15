/**
 * Technical strength categories for About — plain data, no icon deps.
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
      "Building intelligent applications using modern LLMs, AI agents and production-ready AI workflows.",
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
      "Creating fast, accessible and scalable user interfaces with modern frontend architecture.",
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
      "Developing high-performance Android and iOS applications from a single codebase.",
    technologies: ["React Native", "Expo", "Android", "iOS", "Firebase"],
  },
  {
    id: "backend",
    title: "Backend & Cloud",
    description:
      "Designing scalable backend services, authentication and cloud infrastructure.",
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
