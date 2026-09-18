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
      "Picked up programming and stuck with it because building things that work is satisfying.",
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Got serious about React, Next.js and TypeScript, and learned to ship interfaces that hold up under real use.",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description:
      "Moved into React Native so Android and iOS could share one codebase without feeling like a compromise.",
  },
  {
    id: "ai",
    title: "AI Engineering",
    description:
      "Now I spend most of my time putting LLMs and agent tooling into products that already have users, not demos.",
  },
];

export const currentFocus = [
  "AI Engineering",
  "Web apps that ship",
  "Cross-platform mobile",
] as const;
