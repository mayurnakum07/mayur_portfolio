import {
  Brain,
  Monitor,
  Smartphone,
  LayoutDashboard,
  Plug,
  PenLine,
  type LucideIcon,
} from "lucide-react";

export interface Capability {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
}

export const capabilities: Capability[] = [
  {
    id: "ai-applications",
    title: "AI Applications",
    description:
      "Integrate LLMs, AI agents and intelligent workflows into production-ready applications.",
    technologies: ["OpenAI", "Claude", "Gemini", "MCP"],
    icon: Brain,
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description:
      "Modern React and Next.js applications focused on performance, scalability and user experience.",
    technologies: ["React", "Next.js", "TypeScript"],
    icon: Monitor,
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    description:
      "Cross-platform Android and iOS applications built with React Native and Expo.",
    technologies: ["React Native", "Expo", "Firebase"],
    icon: Smartphone,
  },
  {
    id: "admin-dashboards",
    title: "Admin Dashboards",
    description:
      "Secure dashboards with analytics, authentication and business management features.",
    technologies: ["Next.js", "Firebase", "TanStack"],
    icon: LayoutDashboard,
  },
  {
    id: "api-integration",
    title: "API Integration",
    description:
      "Integrating third-party services, AI APIs and cloud platforms into modern products.",
    technologies: ["REST", "Firebase", "Node.js"],
    icon: Plug,
  },
  {
    id: "ui-engineering",
    title: "UI Engineering",
    description:
      "Pixel-perfect responsive interfaces with accessibility and smooth interactions.",
    technologies: ["Tailwind", "Framer Motion", "TypeScript"],
    icon: PenLine,
  },
];
