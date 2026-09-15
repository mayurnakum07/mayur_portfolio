"use client";

import SideIndex from "@/components/ui/SideIndex";
import type { NarrativeSection } from "@/lib/caseStudyNarrative";

interface CaseStudySideIndexProps {
  sections: NarrativeSection[];
}

export default function CaseStudySideIndex({
  sections,
}: CaseStudySideIndexProps) {
  return (
    <SideIndex
      sections={sections.map((s) => ({
        id: s.id,
        label: s.label,
        index: s.index,
      }))}
      label="On this page"
    />
  );
}
