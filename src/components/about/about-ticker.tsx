"use client";

const marqueeWords = [
  "People-First HR Solutions",
  "Talent. Culture. Growth.",
  "Smart Hiring Solutions",
  "Trusted HR Partners",
  "Better Hiring Decisions",
];

export default function AboutTicker() {
  return (
    <section className="w-full py-3.5 sm:py-4 bg-[#C6D936] overflow-hidden flex items-center shadow-sm font-sans">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee-scroll 35s linear infinite;
        }
      `}</style>
      
      <div className="flex gap-8 sm:gap-12 animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, setIdx) => (
          <div key={setIdx} className="flex gap-8 sm:gap-12 items-center shrink-0">
            {marqueeWords.map((word, wordIdx) => (
              <div
                key={`${setIdx}-${wordIdx}`}
                className="font-manrope flex items-center gap-2.5 sm:gap-3 text-[#051B05] font-semibold text-[18px] sm:text-[22px] md:text-[24px] leading-8 sm:leading-9 md:leading-8 select-none"
              >
                <img
                  src="/media assets/home/icon-24.svg"
                  alt="icon"
                  className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 shrink-0 brightness-0"
                />
                <span>{word}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}