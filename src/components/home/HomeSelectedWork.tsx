import SectionHeader from "@/components/ui/SectionHeader";
import SignalLink from "@/components/ui/SignalLink";
import FeaturedLead from "@/components/projects/archive/FeaturedLead";
import FeaturedSupport from "@/components/projects/archive/FeaturedSupport";
import { homeSelectedProjects } from "@/data/home";

export default function HomeSelectedWork() {
  const [lead, ...support] = homeSelectedProjects;

  if (!lead) return null;

  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-heading"
      className="section-major border-t border-ink-border scroll-mt-28"
    >
      <div className="container-page">
        <SectionHeader
          index="03"
          title={<span id="selected-work-heading">Selected work</span>}
          description="Three shipped pieces to open first: an AI workspace and two apps with real users."
          note="Case studies inside"
        />

        <div className="mt-12 border-t border-ink-border lg:mt-16">
          <FeaturedLead project={lead} index={1} priority />

          {support.length > 0 && (
            <div className="grid grid-cols-1 gap-0 border-b border-ink-border lg:grid-cols-2 lg:gap-x-12 lg:py-12">
              {support.map((project, i) => (
                <div
                  key={project.slug}
                  className={
                    i === 0
                      ? "lg:border-r lg:border-ink-border lg:pr-12"
                      : "lg:pl-0"
                  }
                >
                  <FeaturedSupport
                    project={project}
                    index={i + 2}
                    reverse={i === 1}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 lg:mt-12">
          <SignalLink
            href="/projects"
            variant="muted"
            className="group text-body-md"
          >
            View full archive
            <span aria-hidden className="hover-nudge-x">
              →
            </span>
          </SignalLink>
        </div>
      </div>
    </section>
  );
}
