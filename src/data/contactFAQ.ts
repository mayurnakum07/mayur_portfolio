export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const contactFAQ: FAQItem[] = [
  {
    id: "services",
    question: "What services do you provide?",
    answer:
      "I build AI-powered web applications, mobile apps and scalable frontend solutions.",
  },
  {
    id: "full-time",
    question: "Are you available for full-time roles?",
    answer:
      "Yes, I'm open to full-time opportunities that involve modern web technologies and AI-driven products.",
  },
  {
    id: "remote",
    question: "Do you work remotely?",
    answer:
      "Yes. I'm comfortable collaborating with distributed teams across different time zones.",
  },
  {
    id: "technologies",
    question: "What technologies do you specialize in?",
    answer:
      "React, Next.js, React Native, TypeScript, Firebase and AI integrations.",
  },
];
