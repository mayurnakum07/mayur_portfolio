import CaseStudyHero from "@/components/projects/case-study/CaseStudyHero";
import CaseStudyBodySection from "@/components/projects/case-study/CaseStudyBodySection";
import CaseStudyShowcase from "@/components/projects/case-study/CaseStudyShowcase";
import CaseStudyStack from "@/components/projects/case-study/CaseStudyStack";
import CaseStudyImpact from "@/components/projects/case-study/CaseStudyImpact";
import CaseStudyLinks from "@/components/projects/case-study/CaseStudyLinks";
import CaseStudyNav from "@/components/projects/case-study/CaseStudyNav";
import CaseStudySideIndex from "@/components/projects/case-study/CaseStudySideIndex";
import SignalLink from "@/components/ui/SignalLink";
import {
  buildCaseStudyNarrative,
  getProjectLinks,
} from "@/lib/caseStudyNarrative";
import { hasCaseStudyContent, type Project } from "@/data/projects";

interface CaseStudyArticleProps {
  project: Project;
  prev?: Project;
  next?: Project;
}

export default function CaseStudyArticle({
  project,
  prev,
  next,
}: CaseStudyArticleProps) {
  const narrative = buildCaseStudyNarrative(project);
  const links = getProjectLinks(project);
  const showBody = hasCaseStudyContent(project);

  const showcaseIndex =
    narrative.nav.find((s) => s.key === "showcase")?.index ?? "00";
  const stackIndex =
    narrative.nav.find((s) => s.key === "stack")?.index ?? "00";
  const impactIndex =
    narrative.nav.find((s) => s.key === "impact")?.index ?? "00";
  const linksIndex =
    narrative.nav.find((s) => s.key === "links")?.index ?? "00";

  return (
    <article>
      <CaseStudyHero project={project} />

      <div className="container-page section-major">
        <div className="grid grid-cols-12 gap-x-4 gap-y-12 lg:gap-x-8">
          <div className="col-span-12 lg:col-span-2">
            <CaseStudySideIndex sections={narrative.nav} />
          </div>

          <div className="col-span-12 space-y-14 lg:col-span-8 lg:col-start-3">
            {showBody ? (
              narrative.bodySections.map((entry) => (
                <CaseStudyBodySection
                  key={entry.id}
                  id={entry.id}
                  index={entry.index}
                  heading={entry.heading}
                  section={entry.section}
                />
              ))
            ) : (
              <p className="max-w-prose text-body-md text-paper-muted">
                A detailed write-up of this project is in progress. In the
                meantime, the live product is linked below, or{" "}
                <SignalLink
                  href="/contact"
                  className="inline min-h-0 text-body-md"
                >
                  get in touch
                </SignalLink>{" "}
                and I&apos;ll walk you through what I built.
              </p>
            )}

            {narrative.showShowcase && (
              <CaseStudyShowcase project={project} index={showcaseIndex} />
            )}

            {narrative.showStack && (
              <CaseStudyStack stack={project.stack} index={stackIndex} />
            )}

            {narrative.showImpact && project.metrics && (
              <CaseStudyImpact
                metrics={project.metrics}
                index={impactIndex}
              />
            )}

            {narrative.showLinks && (
              <CaseStudyLinks links={links} index={linksIndex} />
            )}

            <CaseStudyNav prev={prev} next={next} />
          </div>
        </div>
      </div>
    </article>
  );
}
