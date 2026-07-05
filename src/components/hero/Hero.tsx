"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroPortrait from "./HeroPortrait";

export default function Hero() {
  return (
    <section className="relative w-full overflow-x-clip">
      <HeroBackground />

      <div
        className="
          container-page relative grid
          grid-cols-1 items-center
          gap-10 py-12
          sm:gap-12
          md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:py-8
          md:min-h-[calc(100svh-7rem)] md:max-h-[calc(100svh-7rem)]
          lg:gap-12
          xl:gap-16
          [@media(max-height:800px)]:md:gap-6
          [@media(max-height:800px)]:md:py-6
        "
      >
        <div className="order-1 min-w-0 md:order-none">
          <HeroContent />
        </div>

        <div className="order-2 flex min-w-0 justify-center md:order-none md:justify-end">
          <HeroPortrait />
        </div>
      </div>
    </section>
  );
}
