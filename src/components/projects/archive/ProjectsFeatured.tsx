import SectionHeader from "@/components/ui/SectionHeader";
import FeaturedLead from "./FeaturedLead";
import FeaturedSupport from "./FeaturedSupport";
import { homeSelectedProjects } from "@/data/home";

/**
 * Server-rendered featured block. Kept outside the client filter island so it
 * is always present in the static HTML (unlike the old Suspense-gated archive).
 */
export default function ProjectsFeatured() {
  const [featuredLead, ...featuredSupport] = homeSelectedProjects;
  if (!featuredLead) return null;

  return (
    <section
      aria-labelledby="featured-heading"
      className="section-standard border-b border-ink-border"
    >
      <div className="container-page">
        <SectionHeader
          index="02"
          title={<span id="featured-heading">Featured</span>}
          description="Three from Home, given a bit more space before the full list."
          note="Case studies inside"
        />

        <div className="mt-10 border-t border-ink-border lg:mt-14">
          <FeaturedLead project={featuredLead} index={1} priority />

          {featuredSupport.length > 0 && (
            <div className="grid grid-cols-1 gap-0 border-b border-ink-border lg:grid-cols-2 lg:gap-x-12 lg:py-12">
              {featuredSupport.map((project, i) => (
                <div
                  key={project.slug}
                  className={
                    i === 0
                      ? "lg:border-r lg:border-ink-border lg:pr-12"
                      : undefined
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
      </div>
    </section>
  );
}
