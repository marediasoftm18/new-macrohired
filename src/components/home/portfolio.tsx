"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Culture", "Development", "Marketing", "Technology"];

const projects = [
  {
    title: "Workplace Excellence",
    category: "Culture",
    tag: "Excellence",
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
    category: "Marketing",
    tag: "Strategy",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Staffing Solutions",
    category: "Technology",
    tag: "Staffing",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        
        {/* Header Block */}
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
            // OUR PORTFOLIOS
          </span>
          <h2
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 4.5vw, 52px)",
              color: "#051B05",
              lineHeight: "62px",
            }}
            className="tracking-tight mt-2"
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
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#044647] text-[#ffffff] shadow-md"
                  : "bg-[#F6F5F2] text-[#051B05] hover:bg-gray-200/80"
              }`}
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "28px",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="w-full max-w-350">
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
                  <div className="w-full aspect-670/435.5 rounded-t-3xl overflow-hidden relative shadow-sm">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  {/* Card Footer Text Block */}
                  <div className="bg-[#F6F5F2] rounded-b-3xl p-7.5 flex justify-between items-center border-t border-gray-100/50 shadow-sm h-25">
                    <h3
                      style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 600,
                        fontSize: "32px",
                        lineHeight: "40px",
                        color: "#044647",
                      }}
                    >
                      {project.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "10px",
                        color: "#051B05",
                      }}
                      className="bg-white border border-[#051B05]/10 rounded-full px-4 py-2.5 shadow-sm"
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

