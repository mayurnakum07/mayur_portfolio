"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { smoothScrollTo } from "@/lib/scrollTo";

const SCROLL_UP_THRESHOLD = 0.45;
const SCROLL_DOWN_HIDE = 80;
const TABLET_MIN_WIDTH = 768;

const fadeSpring = {
  initial: { opacity: 0, y: 12, scale: 0.92 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 10, scale: 0.94 },
  transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const },
};

export default function ScrollButtons() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * SCROLL_UP_THRESHOLD;

      setShowScrollUp(scrollY > threshold);
      setShowScrollDown(
        isHome &&
          scrollY < SCROLL_DOWN_HIDE &&
          window.innerWidth >= TABLET_MIN_WIDTH,
      );
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateVisibility);
      }
    };

    updateVisibility();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isHome]);

  // Routed through the scroll engine — native smooth scroll is off under Lenis.
  const scrollToTop = () => smoothScrollTo(0);

  const scrollToContent = () => {
    const about = document.getElementById("about");

    if (about) {
      smoothScrollTo(about, { offset: -96 });
      return;
    }

    smoothScrollTo(window.innerHeight * 0.85);
  };

  return (
    <>
      <AnimatePresence>
        {showScrollUp && (
          <motion.div
            key="scroll-up"
            className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
            {...fadeSpring}
          >
            <motion.button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-surface-1/85 text-muted-foreground shadow-soft backdrop-blur-xl transition-colors duration-200 hover:border-border-hover hover:bg-surface-2 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
            >
              <ChevronUp size={18} strokeWidth={1.75} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showScrollDown && (
          <motion.div
            key="scroll-down"
            className="fixed bottom-6 left-1/2 z-50 hidden -translate-x-1/2 md:bottom-8 md:block"
            {...fadeSpring}
          >
            <motion.button
              type="button"
              onClick={scrollToContent}
              aria-label="Scroll to content"
              whileHover={{ y: 2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group flex flex-col items-center gap-2.5 focus-visible:outline-none"
            >
              {/* A rail that fills, rather than a bouncing mouse icon. */}
              <span
                aria-hidden
                className="relative block h-12 w-px overflow-hidden rounded-full bg-border/60"
              >
                <motion.span
                  className="absolute inset-x-0 top-0 block h-1/2 rounded-full bg-gradient-to-b from-accent-cyan/0 via-accent-cyan to-accent-cyan/0"
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>

              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80">
                Scroll
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
