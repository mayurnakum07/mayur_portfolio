"use client";

import { motion } from "framer-motion";
import { Clock, Globe, MessageSquare } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const AVAILABILITY_DETAILS = [
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    description: "Quick, thoughtful replies to every inquiry.",
  },
  {
    icon: Globe,
    label: "Timezone",
    value: "IST (GMT+5:30)",
    description: "Flexible overlap with US & European teams.",
  },
  {
    icon: MessageSquare,
    label: "Engagement",
    value: "Remote-first",
    description: "Async-friendly collaboration across time zones.",
  },
] as const;

export default function AvailabilitySection() {
  return (
    <section
      aria-labelledby="availability-heading"
      className="w-full overflow-x-clip border-t border-border/40"
    >
      <div className="container-page py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[900px]">
          <motion.header {...fadeUp(0)} className="mb-12 text-center md:mb-16">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Availability
            </p>
            <h2
              id="availability-heading"
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground"
            >
              Ready when you are.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Currently accepting new projects and open to meaningful
              full-time opportunities.
            </p>
          </motion.header>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {AVAILABILITY_DETAILS.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.08,
                    ease: "easeOut",
                  }}
                  className="flex flex-col items-center rounded-[22px] border border-border/50 bg-surface-1 px-6 py-8 text-center transition-all duration-300 hover:-translate-y-[4px] hover:border-border-hover md:px-7 md:py-9"
                >
                  <Icon
                    size={18}
                    strokeWidth={1.75}
                    className="text-muted-foreground"
                    aria-hidden
                  />
                  <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
