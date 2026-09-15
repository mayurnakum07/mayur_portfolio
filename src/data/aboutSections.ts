/**
 * About page section index — shared anchors for side nav and deep links
 * (e.g. Home capabilities → /about#working-methods).
 */

export const aboutSections = [
  { id: "introduction", label: "Introduction", index: "01" },
  { id: "philosophy", label: "Philosophy", index: "02" },
  { id: "journey", label: "Journey", index: "03" },
  { id: "experience", label: "Experience", index: "04" },
  { id: "strengths", label: "Strengths", index: "05" },
  { id: "working-methods", label: "Approach", index: "06" },
  { id: "beyond", label: "Beyond code", index: "07" },
  { id: "learning", label: "Focus", index: "08" },
  { id: "next", label: "Next", index: "09" },
] as const;

/**
 * Career arc drawn only from existing aboutIntro narrative —
 * not the generic milestone list in journey.ts.
 */
export const careerArc = [
  {
    title: "Interfaces first",
    body: "I got here the unglamorous way — starting on interfaces, then following the problems underneath them. A screen that had to stay responsive on cheap Android hardware taught me more about rendering than any tutorial did.",
  },
  {
    title: "Data in costume",
    body: "A calendar that had to agree with Google, Apple and Microsoft at the same time taught me that most hard frontend problems are actually data problems in a costume.",
  },
  {
    title: "Products legible to AI",
    body: "What I am doing now is the part I find most interesting: making products legible to AI systems rather than bolting a chat box onto them. On ByDesign that meant designing Model Context Protocol tools with schemas tight enough that a model picks the right one without guessing — which turns out to be a product design problem as much as an engineering one.",
  },
] as const;
