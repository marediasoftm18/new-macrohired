"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const episodes = [
  {
    id: 1,
    epNum: "01",
    label: "EPISODE",
    category: "LEADERSHIP",
    title: "Building Resilient Teams in a Disruptive Digital Era",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    epNum: "02",
    label: "EPISODE",
    category: "CULTURE",
    title: "Scaling Culture During Hypergrowth: Lessons Learned",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    epNum: "03",
    label: "EPISODE",
    category: "ENGAGEMENT",
    title: "The Future of Employee Well-being and Remote Engagement",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    epNum: "04",
    label: "EPISODE",
    category: "TALENT",
    title: "Strategic Talent Acquisition and Retention Practices",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    epNum: "05",
    label: "EPISODE",
    category: "COMPLIANCE",
    title: "Staying Ahead of Changing Employment Laws and Regulations",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
  },
];

export default function WorkplaceTrends() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % episodes.length);
    }, 4500); // Shift episodes every 4.5 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleEpisodes = [
    episodes[startIndex],
    episodes[(startIndex + 1) % episodes.length],
    episodes[(startIndex + 2) % episodes.length],
  ];

  return (
    <section className="w-full bg-[#F6F5F2] py-16 md:py-24 px-6 md:px-16 font-sans overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 mb-16">
          <div className="flex flex-col gap-4 max-w-xl text-left">
            <span className="inline-flex self-start bg-[#C6D936] text-[#044647] px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-wider rounded-xs">
              // CEO TALKS PODCAST
            </span>
            <h2
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(30px, 4.5vw, 44px)",
                color: "#044647",
                lineHeight: 1.15,
              }}
              className="tracking-tight"
            >
              Insights from Industry Leaders
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 max-w-xl text-left">
            <p className="text-gray-600 text-sm leading-relaxed">
              Listen to exclusive insights, success stories, and leadership strategies directly from top executives and industry pioneers.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/ceo-talks"
                className="px-6 py-3 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center bg-[#044647] text-white"
              >
                See All Podcasts
              </Link>
              <Link
                href="/ceo-talks"
                className="w-10 h-10 rounded-full bg-[#C6D936] flex items-center justify-center text-[#044647] hover:scale-110 transition-transform shadow-sm"
                aria-label="View all podcasts"
              >
                <span className="material-symbols-outlined material-symbols-filled text-[14px] leading-none select-none">
                  play_arrow
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative min-h-115">
          <AnimatePresence mode="popLayout">
            {visibleEpisodes.map((ep, idx) => (
              <motion.div
                key={ep.id}
                layout
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`flex-col text-left group ${idx > 0 ? "hidden md:flex" : "flex"}`}
              >
                {/* Episode Image */}
                <div className="w-full h-60 rounded-3xl overflow-hidden shadow-sm relative mb-6">
                  <img
                    src={ep.image}
                    alt={ep.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Podcast Indicator */}
                  <div className="absolute top-4 left-4 bg-[#044647]/90 text-white rounded-full p-2 flex items-center justify-center shadow-md backdrop-blur-sm">
                    <span className="material-symbols-outlined material-symbols-filled text-[12px] leading-none select-none">
                      play_arrow
                    </span>
                  </div>
                </div>

                {/* Episode Content Metadata Area */}
                <div className="flex items-start gap-4">
                  {/* Vertical Episode Stack */}
                  <div className="flex flex-col items-center shrink-0">
                    <span className="text-3xl font-extrabold text-[#044647] leading-none" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                      {ep.epNum}
                    </span>
                    <span className="text-[10px] font-bold text-gray-500 mt-1 uppercase tracking-wider" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      {ep.label}
                    </span>
                  </div>

                  {/* Divider line */}
                  <div className="w-px h-12 bg-gray-200 shrink-0" />

                  {/* Title & Category & Link details */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-[#044647]/60 tracking-wider" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      {ep.category}
                    </span>
                    <h3
                      className="text-[#044647] font-extrabold text-sm md:text-base leading-snug group-hover:text-teal-700 transition-colors"
                      style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                    >
                      {ep.title}
                    </h3>

                    {/* Light green hover background play button */}
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#C6D936] group-hover:text-[#044647] group-hover:border-[#C6D936] transition-all mt-2">
                      <span className="material-symbols-outlined material-symbols-filled text-[12px] leading-none select-none">
                        play_arrow
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
