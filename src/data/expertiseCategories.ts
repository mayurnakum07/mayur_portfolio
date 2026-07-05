import {
  Brain,
  Layout,
  Smartphone,
  Cloud,
  type LucideIcon,
} from "lucide-react";

export interface ExpertiseCategory {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
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
    icon: Brain,
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
      "Framer Motion",
      "Redux",
      "TanStack Query",
    ],
    icon: Layout,
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description:
      "Developing high-performance Android and iOS applications from a single codebase.",
    technologies: ["React Native", "Expo", "Android", "iOS", "Firebase"],
    icon: Smartphone,
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
    icon: Cloud,
  },
];
