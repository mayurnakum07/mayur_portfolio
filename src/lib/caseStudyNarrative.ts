/**
 * Maps project case-study data into the M7 editorial narrative order.
 * Only sections with real content are returned — never invents copy.
 */

import type {
  CaseStudySection,
  Project,
} from "@/data/projects";
import { caseStudySectionOrder } from "@/data/projects";

export type NarrativeKey =
  | "context"
  | "problem"
  | "contribution"
  | "challenges"
  | "outcome"
  | "showcase"
  | "stack"
  | "impact"
  | "links";

export interface NarrativeSection {
  key: NarrativeKey;
  /** Anchor id used for side index + deep links. */
  id: string;
  /** Display label in side index. */
  label: string;
  heading: string;
  /** Zero-padded display index among visible narrative sections. */
  index: string;
}

const NARRATIVE_LABELS: Record<
  Exclude<NarrativeKey, "showcase" | "stack" | "impact" | "links">,
  { label: string; heading?: string }
> = {
  context: { label: "Context", heading: "Context & role" },
  problem: { label: "Problem" },
  contribution: { label: "Solution", heading: "Product & solution" },
  challenges: {
    label: "Decisions",
    heading: "Engineering decisions",
  },
  outcome: { label: "Outcome" },
};

function sectionHasContent(section?: CaseStudySection): boolean {
  if (!section) return false;
  return section.body.length > 0 || (section.bullets?.length ?? 0) > 0;
}

export function getProjectLinks(project: Project) {
  return [
    project.links.live && { label: "Visit product", href: project.links.live },
    project.links.appStore && {
      label: "App Store",
      href: project.links.appStore,
    },
    project.links.playStore && {
      label: "Google Play",
      href: project.links.playStore,
    },
    project.links.source && { label: "Source", href: project.links.source },
  ].filter(Boolean) as { label: string; href: string }[];
}

/**
 * Builds the ordered list of on-page narrative sections for a project.
 * Adapts to AI / web / mobile / platform projects by omitting empty slots.
 */
export function buildCaseStudyNarrative(project: Project): {
  bodySections: {
    key: (typeof caseStudySectionOrder)[number];
    section: CaseStudySection;
    label: string;
    heading: string;
    id: string;
    index: string;
  }[];
  nav: NarrativeSection[];
  showShowcase: boolean;
  showStack: boolean;
  showImpact: boolean;
  showLinks: boolean;
} {
  const bodySections = caseStudySectionOrder
    .map((key) => {
      const section = project.caseStudy?.[key];
      if (!sectionHasContent(section)) return null;
      const meta = NARRATIVE_LABELS[key];
      return {
        key,
        section: section as CaseStudySection,
        label: meta.label,
        heading: meta.heading ?? section!.heading,
        id: key,
        index: "00",
      };
    })
    .filter(Boolean) as {
    key: (typeof caseStudySectionOrder)[number];
    section: CaseStudySection;
    label: string;
    heading: string;
    id: string;
    index: string;
  }[];

  /** Always present — gallery when available, otherwise primary artifact + highlights. */
  const showShowcase = true;
  const showStack = project.stack.length > 0;
  const showImpact = Boolean(project.metrics?.length);
  const links = getProjectLinks(project);
  const showLinks = links.length > 0;

  const nav: NarrativeSection[] = [];

  bodySections.forEach((entry) => {
    nav.push({
      key: entry.key,
      id: entry.id,
      label: entry.label,
      heading: entry.heading,
      index: "00",
    });
  });

  nav.push({
    key: "showcase",
    id: "showcase",
    label: "Showcase",
    heading: "Visual showcase",
    index: "00",
  });

  if (showStack) {
    nav.push({
      key: "stack",
      id: "stack",
      label: "Stack",
      heading: "Technologies",
      index: "00",
    });
  }

  if (showImpact) {
    nav.push({
      key: "impact",
      id: "impact",
      label: "Impact",
      heading: "Results & impact",
      index: "00",
    });
  }

  if (showLinks) {
    nav.push({
      key: "links",
      id: "links",
      label: "Links",
      heading: "Links",
      index: "00",
    });
  }

  nav.forEach((item, i) => {
    item.index = String(i + 1).padStart(2, "0");
  });

  bodySections.forEach((entry) => {
    const match = nav.find((n) => n.id === entry.id);
    if (match) entry.index = match.index;
  });

  return {
    bodySections,
    nav,
    showShowcase,
    showStack,
    showImpact,
    showLinks,
  };
}
