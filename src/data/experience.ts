import {
  Rocket,
  Smartphone,
  Layout,
  Brain,
  type LucideIcon,
} from "lucide-react";

export interface Contribution {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const primaryExperience = {
  title: "Frontend & Mobile Application Developer",
  company: "DI Solutions",
  companyUrl: "https://disolutions.net",
  location: "Surat, Gujarat",
  employmentType: "Full Time",
  duration: "August 2023 — Present",
  description:
    "Developing production-grade web and mobile applications using React, Next.js and React Native while collaborating with designers, backend developers and clients to deliver scalable digital products.",
  technologies: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Firebase",
    "Tailwind CSS",
    "Expo",
    "Node.js",
    "Git",
  ],
  impact: [
    "Production Ready Applications",
    "Cross Platform Development",
    "AI Integrated Solutions",
    "Performance Optimized UI",
  ],
};

export const contributions: Contribution[] = [
  {
    id: "production-apps",
    title: "Production Apps",
    description:
      "Built and maintained production-ready applications used in real business environments.",
    icon: Rocket,
  },
  {
    id: "cross-platform",
    title: "Cross-Platform Development",
    description:
      "Developed Android and iOS applications using React Native and Expo.",
    icon: Smartphone,
  },
  {
    id: "modern-frontend",
    title: "Modern Frontend",
    description:
      "Built scalable interfaces using React, Next.js, TypeScript and Tailwind CSS.",
    icon: Layout,
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description:
      "Integrated AI-powered features, APIs and automation into modern digital products.",
    icon: Brain,
  },
];
