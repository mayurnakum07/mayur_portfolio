"use client";

import { motion } from "framer-motion";
import { contactCards } from "@/data/contactCards";
import ContactCard from "./ContactCard";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function ContactCards() {
  return (
    <section
      aria-labelledby="contact-cards-heading"
      className="w-full overflow-x-clip border-t border-border/40"
    >
      <div className="container-page py-20 md:py-24 lg:py-28">
        <motion.header {...fadeUp(0)} className="mx-auto mb-12 max-w-[900px] text-center md:mb-16">
          <h2
            id="contact-cards-heading"
            className="sr-only"
          >
            Contact Information
          </h2>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Get in touch
          </p>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Choose the channel that works best for you. Every message gets a
            thoughtful reply.
          </p>
        </motion.header>

        <div className="mx-auto grid max-w-[900px] auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {contactCards.map((card, index) => (
            <ContactCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
