"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = window.scrollY / totalScroll;
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount to set initial progress
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Circumference for r=20 is 2 * Math.PI * 20 = 125.66
  const circumference = 125.66;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.1)] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none"
      aria-label="Scroll to top"
    >
      {/* SVG Circular Progress */}
      <svg className="absolute top-0 left-0 w-full h-full -rotate-90">
        {/* Background Circle */}
        <circle
          cx="22"
          cy="22"
          r="19"
          stroke="rgba(0, 0, 0, 0.04)"
          strokeWidth="2.5"
          fill="transparent"
        />
        {/* Progress Circle */}
        <circle
          cx="22"
          cy="22"
          r="19"
          stroke="#C6D936"
          strokeWidth="2.5"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-100 ease-out"
        />
      </svg>

      {/* Up Arrow Icon */}
      <ArrowUp size={16} className="text-[#C6D936] relative z-10 transition-transform group-hover:-translate-y-0.5 duration-300" strokeWidth={2.5} />
    </button>
  );
}
