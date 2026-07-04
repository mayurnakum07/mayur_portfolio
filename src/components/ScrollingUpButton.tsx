"use client";
import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollButtons = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      setShowScrollUp(scrollY > windowHeight);

      if (scrollY > windowHeight * 0.1) {
        setShowScrollDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = () => {
    window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" });
    setShowScrollDown(false);
  };

  return (
    <>
      <div
        className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${
          showScrollUp
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={scrollToTop}
      >
        <div className="btn-icon w-12 h-12 cursor-pointer shadow-glow">
          <ChevronUp className="w-5 h-5" />
        </div>
      </div>

      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-300 ${
          showScrollDown
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={scrollToSection}
      >
        <div className="flex flex-col items-center cursor-pointer">
          <div className="w-12 h-16 rounded-full border border-border flex justify-center items-end p-1 bg-surface-1 shadow-soft">
            <div className="w-2.5 h-2.5 bg-accent-cyan rounded-full"></div>
          </div>
          <p className="text-accent-cyan mt-2 text-body-sm font-medium">
            Scroll down
          </p>
        </div>
      </div>
    </>
  );
};

export default ScrollButtons;
