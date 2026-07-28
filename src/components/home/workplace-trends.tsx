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
    <section className="w-full bg-[#F6F5F2] py-14 md:py-24 px-4 sm:px-6 md:px-12 xl:px-16 font-sans overflow-hidden">
      <div className="w-full max-w-360 mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="flex flex-col gap-4 max-w-350 text-left">
            <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] sm:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
              // WORKPLACE TRENDS
            </span>
            <h2 className="font-manrope font-semibold text-[32px] sm:text-[42px] md:text-[52px] leading-tight sm:leading-13 md:leading-15.5 text-[#051B05]">Insights for Modern Human Resources</h2>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 max-w-xl text-left">
            <p className="font-dm-sans text-[#595B62] text-[16px] sm:text-[18px] leading-6.5 sm:leading-7 font-normal">
              Whether you aim to build a strong workplace culture or a high-performing modern workforce, we turn your people strategy into results with expert human resources.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/ceo-talks"
                className="font-dm-sans px-6 py-3 rounded-full text-[16px] sm:text-[18px] leading-7.5 font-medium shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center bg-[#044647] text-white"
              >
                See All Posts
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative min-h-auto lg:min-h-115 w-full">
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
                <div className="w-full h-56 sm:h-73.5 rounded-3xl overflow-hidden shadow-sm relative mb-4 sm:mb-6">
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
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Vertical Episode Stack */}
                  <div className="flex flex-col items-center shrink-0">
                    <span className="font-manrope text-[32px] sm:text-[42px] font-extrabold text-[#051B05] leading-tight sm:leading-10.5">
                      {ep.epNum}
                    </span>
                    <span className="font-dm-sans text-[16px] sm:text-[20px] leading-6 sm:leading-7 font-extrabold text-[#595B62] mt-0.5 sm:mt-1 uppercase">
                      {ep.label}
                    </span>

                    {/* Lime Green Play Button */}
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#C6D936] text-[#044647] flex items-center justify-center mt-2 sm:mt-3 group-hover:scale-110 transition-transform duration-300 shadow-sm cursor-pointer">
                      <span className="material-symbols-outlined material-symbols-filled text-[16px] sm:text-[18px] leading-none select-none">
                        play_arrow
                      </span>
                    </div>
                  </div>

                  {/* Divider line */}
                  <div className="w-px h-14 sm:h-16 bg-gray-200 shrink-0 mt-2" />

                  {/* Title & Category details */}
                  <div className="flex flex-col gap-1.5 sm:gap-2 pt-1">
                    <span className="font-dm-sans text-[15px] sm:text-[18px] leading-6 sm:leading-7 font-normal text-[#595b62] uppercase tracking-wider">
                      {ep.category}
                    </span>
                    <h3 className="font-manrope text-[#044647] font-semibold text-[20px] sm:text-[24px] leading-7 sm:leading-9 group-hover:text-teal-700 transition-colors">
                      {ep.title}
                    </h3>
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
