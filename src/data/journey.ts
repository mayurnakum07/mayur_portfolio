export interface JourneyMilestone {
  id: string;
  title: string;
  description: string;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "started-coding",
    title: "Started Coding",
    description:
      "Discovered programming and fell in love with solving problems through software.",
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Mastered modern frontend development using React, Next.js and TypeScript while creating polished user experiences.",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description:
      "Expanded into React Native to build high-performance Android and iOS applications from a single codebase.",
  },
  {
    id: "ai",
    title: "AI Engineering",
    description:
      "Today I'm focused on integrating AI, LLMs and intelligent automation into scalable products that create real-world impact.",
  },
];

export const currentFocus = [
  "AI Engineering",
  "Modern Web Applications",
  "Cross-platform Mobile Apps",
] as const;
