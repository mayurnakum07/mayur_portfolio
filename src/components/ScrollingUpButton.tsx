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

      // Show Scroll Up button after scrolling past 100vh
      setShowScrollUp(scrollY > windowHeight);

      // Hide Scroll Down button permanently after scrolling past 10vh
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
    setShowScrollDown(false); // Hide Scroll Down button permanently
  };

  return (
    <>
      {/* Scroll Up Button */}
      <div
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
          showScrollUp
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        onClick={scrollToTop}
      >
        <div className="group bg-purple-600 w-14 h-14 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-purple-700 transform hover:scale-110">
          <ChevronUp className="text-white w-6 h-6 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </div>
      </div>

      {/* Scroll Down Button */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          showScrollDown
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        onClick={scrollToSection}
      >
        <div className="flex flex-col items-center cursor-pointer group">
          {/* Animated Scroll Container */}
          <div className="w-12 h-16 rounded-full border-2 border-purple-600 flex justify-center items-end p-1 relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"></div>
          </div>
          {/* Scroll Text */}
          <p className="text-purple-600 mt-2 text-sm font-medium group-hover:text-purple-700 transition-colors duration-200">
            Scroll down
          </p>
        </div>
      </div>
    </>
  );
};

export default ScrollButtons;
