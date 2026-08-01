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
    <section className="w-full bg-white py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-4 lg:px-16 font-sans">
      <div className="max-w-360 mx-auto flex flex-col items-center gap-8 md:gap-10 lg:gap-12">
        
        {/* Header Block */}
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] md:text-[15px] lg:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
            // OUR PORTFOLIOS
          </span>
          <h2
            className="font-manrope mt-2 font-semibold text-[30px] sm:text-[38px] md:text-[34px] lg:text-[52px] leading-9.5 sm:leading-11 md:leading-11 lg:leading-15.5 text-[#051B05]"
          >
            Driving Success Through HR Projects
          </h2>
        </div>

        {/* Filters Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 my-2 sm:my-3 md:my-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-dm-sans px-4 md:px-5 lg:px-6 py-2 rounded-full font-normal text-[18px] md:text-[18px] lg:text-[18px] leading-7 transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#044647] text-[#ffffff] shadow-md"
                  : "bg-[#F6F5F2] text-[#051B05] hover:bg-gray-200/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="w-full max-w-350">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 lg:gap-8">
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
                  <div className="bg-[#F6F5F2] rounded-b-3xl p-5 md:p-3 lg:p-7.5 flex justify-between items-center border-t border-gray-100/50 shadow-sm h-auto md:h-22 lg:h-25">
                    <h3
                      className="font-manrope font-semibold md:max-w-55 text-[22px]  md:text-[20px] lg:text-[32px] md:leading-8.5 lg:leading-10 text-[#044647]"
                    >
                      {project.title}
                    </h3>
                    <span
                      className="font-dm-sans font-semibold text-[14px] md:text-[14px] lg:text-[14px] leading-2.5 md:leading-2.5 text-[#051B05] bg-white border border-[#051B05]/10 rounded-full px-3.5 md:px-4 py-2 md:py-2.5 shadow-sm shrink-0"
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
