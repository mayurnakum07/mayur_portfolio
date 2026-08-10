/**
 * Copy for /about. This page must NOT reuse the homepage About/Experience
 * sections — it exists to say things the homepage does not.
 */

export const aboutIntro = [
  "I build web and mobile products, mostly in React, Next.js and React Native, and I have been doing it full time since August 2023 at DI Solutions in Surat. Nine of the things I have worked on are in production right now, across four platforms and clients in three countries.",
  "I got here the unglamorous way — starting on interfaces, then following the problems underneath them. A screen that had to stay responsive on cheap Android hardware taught me more about rendering than any tutorial did. A calendar that had to agree with Google, Apple and Microsoft at the same time taught me that most hard frontend problems are actually data problems in a costume.",
  "What I am doing now is the part I find most interesting: making products legible to AI systems rather than bolting a chat box onto them. On ByDesign that meant designing Model Context Protocol tools with schemas tight enough that a model picks the right one without guessing — which turns out to be a product design problem as much as an engineering one.",
];

export interface WorkPrinciple {
  title: string;
  description: string;
}

export const howIWork: WorkPrinciple[] = [
  {
    title: "I scope by what breaks first",
    description:
      "Before writing anything I look for the constraint that will decide the architecture — a payment flow that cannot double-charge, a widget that cannot call an API, a sync that cannot duplicate. Build around that, and the rest of the decisions get easier. Guess at it, and you rewrite.",
  },
  {
    title: "Ship the thin version, then deepen it",
    description:
      "I would rather have a narrow feature in production this sprint than a complete one in review next month. Real usage tells you which half of the plan was wrong, and it tells you cheaply.",
  },
  {
    title: "One source of truth, always",
    description:
      "Most bugs I have chased were the same fact written down twice and allowed to drift. I put shared data in one place and read from it everywhere, even when duplicating it would be faster today.",
  },
  {
    title: "I ask clients about their worst day, not their best",
    description:
      "Demos are easy. What matters is the restaurant at 7pm on a Friday, or the event check-in on bad hotel wifi. I ask about those early because they set the performance budget, and they are the requirements nobody writes down.",
  },
  {
    title: "Native where the platform demands it, shared everywhere else",
    description:
      "Cross-platform is a means, not a principle. Widgets, notifications and calendar permissions are genuinely native work. I draw that line deliberately rather than fighting an abstraction that was never going to hold.",
  },
  {
    title: "I say what I do not know",
    description:
      "If I have not measured something, I do not claim it. That applies to estimates, to performance numbers, and to what I personally built versus what a teammate did.",
  },
];

export const currentlyLearning = {
  asOf: "August 2026",
  items: [
    "Deepening MCP server design and agent tool architecture — specifically how tool granularity affects model accuracy",
    "Server components and streaming SSR, and where they actually beat a client-rendered app",
    "Measuring rather than guessing: Core Web Vitals, real-device profiling, and treating LCP as a budget rather than a score",
  ],
};

export const beyondCode =
  "I live and work in Surat, Gujarat. Outside of building things, I am the person who reads the changelog of an app I use daily and has opinions about it. I work with clients across the US, Taiwan and India, which means my week has an odd shape and a lot of timezone maths — a habit that has quietly made me better at building software that respects other people's clocks.";
