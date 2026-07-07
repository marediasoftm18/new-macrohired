"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Culture", "Development", "Recruitment", "Strategy", "Workforce"];

const projects = [
  {
    title: "Workplace Excellence",
    category: "Culture",
    tag: "Recruitment",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Team Empowerment",
    category: "Development",
    tag: "Leadership",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Recruitment Strategy",
    category: "Strategy",
    tag: "Hiring",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Staffing Solutions",
    category: "Recruitment",
    tag: "Staffing",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory || (activeCategory === "Workforce" && project.category === "Recruitment")
  );

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        
        {/* Header Block */}
        <div className="flex flex-col items-center gap-4 text-center max-w-xl">
          <span className="inline-flex bg-[#C6D936] text-[#044647] px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-wider rounded-[2px]">
            // OUR PORTFOLIO
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
            Driving Success Through HR Projects
          </h2>
        </div>

        {/* Filters Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 my-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#044647] text-white shadow-md scale-105"
                  : "bg-gray-100 text-[#044647] hover:bg-gray-200"
              }`}
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="w-full max-w-5xl">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col overflow-hidden"
                >
                  {/* Card Image */}
                  <div className="w-full h-[280px] rounded-t-3xl overflow-hidden relative shadow-sm">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  {/* Card Footer Text Block */}
                  <div className="bg-[#F6F5F2] rounded-b-3xl p-6 flex justify-between items-center border-t border-gray-100/50 shadow-sm">
                    <h3
                      className="text-[#044647] font-bold text-lg"
                      style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <span
                      className="bg-[#044647] text-[#C6D936] rounded-full px-4.5 py-1 text-[11px] font-bold tracking-wide shadow-sm"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
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
