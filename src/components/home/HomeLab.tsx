import SectionHeader from "@/components/ui/SectionHeader";
import MarginNote from "@/components/ui/MarginNote";
import { currentlyLearning } from "@/data/aboutPage";
import FadeUp from "@/components/motion/FadeUp";
export default function HomeLab() {
  return (
    <section
      aria-labelledby="lab-heading"
      className="section-standard border-t border-ink-border"
    >
      <div className="container-page">
        <SectionHeader
          index="05"
          title={<span id="lab-heading">Lab</span>}
          description="Things I am actively figuring out. Not product pages."
          note={`As of ${currentlyLearning.asOf}`}
        />

        <FadeUp className="mt-12 border-t border-ink-border lg:mt-16">
          <ol className="list-none">
            {currentlyLearning.items.map((item, i) => (
              <li key={item.slice(0, 40)} className="lab-item">
                <span className="lab-item__index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="max-w-measure text-body-md text-paper-muted">{item}</p>
              </li>
            ))}
          </ol>
        </FadeUp>

        <div className="mt-8 lg:hidden">
          <MarginNote>As of {currentlyLearning.asOf}</MarginNote>
        </div>
      </div>
    </section>
  );
}
