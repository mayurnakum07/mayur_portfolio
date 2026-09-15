import AboutOpening from "@/components/about/page/AboutOpening";
import AboutIntroduction from "@/components/about/page/AboutIntroduction";
import AboutPhilosophy from "@/components/about/page/AboutPhilosophy";
import AboutJourney from "@/components/about/page/AboutJourney";
import AboutExperience from "@/components/about/page/AboutExperience";
import AboutStrengths from "@/components/about/page/AboutStrengths";
import AboutApproach from "@/components/about/page/AboutApproach";
import AboutBeyond from "@/components/about/page/AboutBeyond";
import AboutFocus from "@/components/about/page/AboutFocus";
import AboutNext from "@/components/about/page/AboutNext";
import SideIndex from "@/components/ui/SideIndex";
import { aboutSections } from "@/data/aboutSections";

export default function AboutPageContent() {
  return (
    <>
      <AboutOpening />

      <div className="container-page section-major">
        <div className="grid grid-cols-12 gap-x-4 gap-y-12 lg:gap-x-8">
          <div className="col-span-12 lg:col-span-2">
            <SideIndex
              sections={[...aboutSections]}
              label="On this page"
            />
          </div>

          <div className="col-span-12 space-y-4 lg:col-span-8 lg:col-start-3">
            <AboutIntroduction />
            <AboutPhilosophy />
            <AboutJourney />
            <AboutExperience />
            <AboutStrengths />
            <AboutApproach />
            <AboutBeyond />
            <AboutFocus />
          </div>
        </div>
      </div>

      <AboutNext />
    </>
  );
}
