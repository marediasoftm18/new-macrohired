"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  tag: string;
  image: string;
}

const CATEGORIES = ["All", "Culture", "Development", "Recruitment", "Strategy", "Workforce"];

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 1,
    title: "Workplace Excellence",
    category: "Culture",
    tag: "Excellence",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Team Empowerment",
    category: "Development",
    tag: "Leadership",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Recruitment Strategy",
    category: "Recruitment",
    tag: "Hiring",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Staffing Solutions",
    category: "Workforce",
    tag: "Staffing",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Organizational Growth",
    category: "Development",
    tag: "Growth",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Employee Engagement",
    category: "Culture",
    tag: "Engagement",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Workforce Planning",
    category: "Strategy",
    tag: "Management",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Talent Acquisition",
    category: "Recruitment",
    tag: "Hiring",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((item) => item.category === activeCategory);

  return (
    <section className="w-full bg-[#F6F5F2] py-10 sm:py-14 md:py-16 font-sans">
      <div className="w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-12 mx-auto flex flex-col items-center">
        
        {/* Category Filter Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white text-[#044647] border border-[#044647] shadow-xs font-semibold scale-102"
                    : "bg-white text-slate-600 border border-gray-200 hover:border-gray-400 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="w-full">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col group border border-gray-100"
                >
                  {/* Top Image Box */}
                  <div className="w-full aspect-4/5 overflow-hidden relative bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Bottom Footer Info Box */}
                  <div className="bg-[#F6F5F2] p-5 sm:p-6 flex items-center justify-between border-t border-gray-100/60 mt-auto">
                    <h3 className="font-manrope text-base sm:text-lg font-bold text-[#0A1C1D] group-hover:text-[#044647] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <span className="bg-white text-slate-600 text-xs sm:text-[13px] font-medium font-dm-sans px-3 py-1 rounded-full border border-gray-200/80 shadow-2xs shrink-0 ml-2">
                      {project.tag}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
