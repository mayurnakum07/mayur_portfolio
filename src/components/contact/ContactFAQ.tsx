"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { contactFAQ } from "@/data/contactFAQ";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const itemId = `faq-item-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: 0.08 + index * 0.06,
        ease: "easeOut",
      }}
      className="border-b border-border/50 last:border-b-0"
    >
      <h3>
        <button
          id={itemId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-hover focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        >
          <span className="text-base font-medium tracking-tight text-foreground md:text-lg">
            {question}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="shrink-0 text-muted-foreground"
            aria-hidden
          >
            <ChevronDown size={18} strokeWidth={1.75} />
          </motion.span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={itemId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-base leading-relaxed text-muted-foreground">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="w-full overflow-x-clip border-t border-border/40"
    >
      <div className="container-page py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[900px]">
          <motion.header {...fadeUp(0)} className="mb-10 text-center md:mb-14">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground"
            >
              Common questions.
            </h2>
          </motion.header>

          <div className="rounded-[22px] border border-border/50 bg-surface-1 px-6 md:px-8">
            {contactFAQ.map((item, index) => (
              <FAQItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
