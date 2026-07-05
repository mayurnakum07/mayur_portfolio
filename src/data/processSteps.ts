import {
  Compass,
  Layers,
  Code2,
  Brain,
  Gauge,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface ProcessStep {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    step: "01",
    title: "Discover",
    description:
      "Understand business goals, users and project requirements before making technical decisions.",
    icon: Compass,
  },
  {
    id: "design",
    step: "02",
    title: "Design",
    description:
      "Plan architecture, user experience and reusable components for scalability.",
    icon: Layers,
  },
  {
    id: "develop",
    step: "03",
    title: "Develop",
    description:
      "Build clean, maintainable and production-ready code using modern technologies.",
    icon: Code2,
  },
  {
    id: "integrate-ai",
    step: "04",
    title: "Integrate AI",
    description:
      "Enhance products with AI features, automation and intelligent workflows where they create real value.",
    icon: Brain,
  },
  {
    id: "optimize",
    step: "05",
    title: "Optimize",
    description:
      "Improve performance, accessibility, responsiveness and overall user experience.",
    icon: Gauge,
  },
  {
    id: "deploy",
    step: "06",
    title: "Deploy",
    description:
      "Launch, monitor and continuously improve the product through feedback and iteration.",
    icon: Rocket,
  },
];
