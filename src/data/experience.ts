export interface Contribution {
  id: string;
  title: string;
  description: string;
}

/** Current status shown above past roles on /about. */
export const currentWork = {
  title: "AI Software Engineer",
  label: "Freelance",
  location: "Surat, Gujarat · Remote",
  duration: "August 2026 to Present",
  description:
    "Freelancing after three years at DI Solutions. Open to full-time roles and freelance product work across web, mobile, and AI.",
};

export const primaryExperience = {
  title: "AI Software Engineer",
  company: "DI Solutions",
  companyUrl: "https://disolutions.net",
  location: "Surat, Gujarat",
  employmentType: "Full Time",
  /** Static string. Avoid Date() at module load (SSR/client hydration drift). */
  duration: "August 2023 to August 2026",
  description:
    "Built and shipped web and mobile apps with React, Next.js and React Native, working with designers, backend developers and clients from brief through release.",
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
    "Apps in production",
    "Cross-platform mobile",
    "AI features in live products",
    "Performance-focused UI",
  ],
};

export const contributions: Contribution[] = [
  {
    id: "production-apps",
    title: "Production Apps",
    description:
      "Built and maintained apps that real businesses run day to day.",
  },
  {
    id: "cross-platform",
    title: "Cross-Platform Development",
    description:
      "Shipped Android and iOS apps with React Native and Expo.",
  },
  {
    id: "modern-frontend",
    title: "Modern Frontend",
    description:
      "Built interfaces with React, Next.js, TypeScript and Tailwind CSS.",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description:
      "Wired AI features, APIs and automation into products already in use.",
  },
];
