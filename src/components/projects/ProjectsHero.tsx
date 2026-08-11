import MaskReveal from "@/components/motion/MaskReveal";
import Reveal from "@/components/motion/Reveal";

export default function ProjectsHero() {
  return (
    <section className="pb-20 pt-8 md:pb-28 md:pt-12 lg:pb-32">
      <div className="mx-auto max-w-[900px] px-6 text-center md:px-12">
        <Reveal as="p" variant="down" className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Projects
        </Reveal>

        <MaskReveal
          as="h1"
          immediate
          delay={0.1}
          className="text-[clamp(1.75rem,6vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-foreground md:text-[48px] lg:text-[64px] md:leading-[1.1]"
        >
          <span className="line-mask">
            <span>Products I&apos;ve Built.</span>
          </span>
          <span className="line-mask">
            <span>Problems I&apos;ve Solved.</span>
          </span>
        </MaskReveal>

        <Reveal
          as="p"
          variant="blur-up"
          delay={0.25}
          className="mx-auto mt-6 max-w-[720px] text-[17px] leading-relaxed text-muted-foreground md:mt-8"
        >
          A curated collection of production-ready applications across AI, web
          and mobile, built to solve real-world business problems through
          thoughtful engineering.
        </Reveal>
      </div>
    </section>
  );
}
