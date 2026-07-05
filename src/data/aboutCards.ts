import {
  Brain,
  Layout,
  Smartphone,
  Puzzle,
  type LucideIcon,
} from "lucide-react";

export interface AboutCard {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const aboutCards: AboutCard[] = [
  {
    id: "ai-driven",
    title: "AI-Driven Development",
    description:
      "Building intelligent applications with modern AI tools and production-ready architecture.",
    icon: Brain,
  },
  {
    id: "frontend",
    title: "Frontend Excellence",
    description:
      "Creating fast, responsive, and pixel-perfect interfaces with React, Next.js, and TypeScript.",
    icon: Layout,
  },
  {
    id: "mobile",
    title: "Mobile Engineering",
    description:
      "Developing cross-platform mobile experiences using React Native with native performance.",
    icon: Smartphone,
  },
  {
    id: "problem-solver",
    title: "Problem Solver",
    description:
      "Breaking down complex business challenges into elegant and scalable digital solutions.",
    icon: Puzzle,
  },
];
