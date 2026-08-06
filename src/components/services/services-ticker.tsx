"use client";

import { useState } from "react";

export default function ServicesTicker() {
  const tickerItems = [
    "Talent.",
    "Culture.",
    "Growth.",
    "Smart Hiring.",
    "Trusted Partner.",
  ];

  // Track clicked items so clicking fills text with solid black
  const [clickedItems, setClickedItems] = useState<Record<string, boolean>>({
    "Trusted Partner.": true, // Default active matching design image
  });

  const handleItemClick = (item: string) => {
    setClickedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <section className="w-full bg-[#F6F5F2] py-8 md:py-12 overflow-hidden border-y border-gray-200/50 select-none">
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker-scroll 30s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative w-full overflow-hidden flex items-center">
        <div className="flex gap-8 md:gap-14 animate-ticker whitespace-nowrap">
          {[...Array(4)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-8 md:gap-14 items-center shrink-0">
              {tickerItems.map((item, itemIdx) => {
                const isClicked = clickedItems[item];
                return (
                  <span
                    key={`${setIdx}-${itemIdx}`}
                    onClick={() => handleItemClick(item)}
                    className={`font-manrope text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-extrabold tracking-tight transition-all duration-300 cursor-pointer ${
                      isClicked
                        ? "text-[#051B05] opacity-100"
                        : "text-transparent opacity-60 hover:opacity-100"
                    }`}
                    style={
                      isClicked
                        ? { WebkitTextStroke: "0px transparent", color: "#051B05" }
                        : { WebkitTextStroke: "1.5px #A0A4A8", color: "transparent" }
                    }
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
