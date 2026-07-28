"use client";

import { motion } from "framer-motion";

const bottomTags = [
  { icon: "trending_up", label: "Sales Yearly" },
  { icon: "campaign", label: "Marketing" },
  { icon: "corporate_fare", label: "Management" },
  { icon: "model_training", label: "Training" },
  { icon: "fact_check", label: "HR Audit" },
  { icon: "gavel", label: "Compliance" },
  { icon: "developer_board", label: "Development" },
];

export default function Approach() {
  return (
    <section className="w-full bg-white py-14 md:py-24 px-4 sm:px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 md:gap-12">
        
        {/* Top Circular Portrait & Text */}
        <div className="flex items-center justify-center relative">
          {/* Left Dark Teal Circle with rotating text and center icon */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#044647] flex items-center justify-center shadow-lg z-10 shrink-0">
            {/* Center User Icon */}
            <span className="material-symbols-outlined text-white text-2xl sm:text-3xl select-none leading-none z-10">
              person
            </span>
            
            {/* Circular rotating text */}
            <svg
              className="absolute inset-0 w-full h-full animate-[spin_25s_linear_infinite]"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id="textCirclePathApproach"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="text-[10px] fill-white font-extrabold tracking-[0.16em] uppercase">
                <textPath href="#textCirclePathApproach" startOffset="0%">
                  BUILDING STRONGER WORKFORCES •
                </textPath>
              </text>
            </svg>
          </div>

          {/* Right Portrait Circle */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md shrink-0 -ml-6 sm:-ml-8 border-2 border-white z-0">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
              alt="Professional Leader"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] sm:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
            // OUR APPROACH
          </span>
          <h2
            className="font-manrope tracking-tight font-semibold text-[30px] sm:text-[40px] lg:text-[52px] leading-tight sm:leading-13 lg:leading-[62px] text-[#051B05]"
          >
            Our Collaborative Approach to Human Resources
          </h2>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 w-full items-stretch mt-2 sm:mt-4">
          
          {/* Card 1: Innovation */}
          <div className="bg-[#F6F5F2] rounded-3xl sm:rounded-4xl p-6 sm:p-8 flex flex-col justify-between border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <h3 className="font-manrope text-[#051b05] font-semibold text-[26px] sm:text-[32px] leading-8 sm:leading-10 mb-3 sm:mb-4">
              Innovation
            </h3>
            <p className="font-dm-sans text-[#051b05] text-[16px] sm:text-[18px] leading-6.5 sm:leading-7 font-normal mb-4 sm:mb-6">
              We use smart ideas and modern solutions to support steady business growth and long-term success.
            </p>

            {/* Bullet list */}
            <div className="flex flex-col">
              {[
                "Experienced HR specialists",
                "Professional Tools and Systems",
                "Quality Service by Professionals",
                "Expert Service & Follow-Up",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 py-2.5 sm:py-3 border-b border-gray-300/30 last:border-b-0"
                >
                  <img
                    src="/media assets/home/icon-24.svg"
                    alt="bullet icon"
                    className="w-4.5 h-4.5 shrink-0"
                  />
                  <span className="font-dm-sans text-[#051b05] text-[16px] sm:text-[18px] leading-6.5 sm:leading-7 font-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Performance Analytics */}
          <div className="bg-[#044647] rounded-3xl sm:rounded-4xl p-6 sm:p-8 flex flex-col justify-between text-white shadow-[0_10px_30px_rgba(4,70,71,0.15)] relative overflow-hidden">
            <div>
              <h3 className="font-manrope text-white font-bold text-[20px] sm:text-[22px] leading-7.5 mb-6 sm:mb-8">
                Performance Analytics
              </h3>

              {/* Chart Grid Image */}
              <div className="w-full flex justify-center mb-6 sm:mb-8">
                <img
                  src="/media assets/home/performance analysis.svg"
                  alt="Performance Analysis"
                  className="w-full max-w-[353px] h-auto object-contain"
                />
              </div>

              <h4 className="font-manrope text-white font-semibold text-[26px] sm:text-[32px] leading-8 sm:leading-10 mb-2 sm:mb-3">
                Sales Overview
              </h4>
              <p className="font-dm-sans text-gray-300 font-normal text-[16px] sm:text-[18px] leading-6.5 sm:leading-7">
                This is what we do, executed with perfection. Our dedication and expertise ensure every detail is flawless.
              </p>
            </div>
          </div>

          {/* Card 3: Sales Yearly */}
          <div className="bg-[#C6D936] rounded-3xl sm:rounded-4xl p-6 sm:p-8 flex flex-col justify-between text-[#051B05] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div>
              <h3 className="font-manrope text-[#051B05] font-semibold text-[26px] sm:text-[32px] leading-8 sm:leading-10 mb-3 sm:mb-4">
                Sales Yearly
              </h3>
              <p className="font-dm-sans text-[#051B05] text-[16px] sm:text-[18px] leading-6.5 sm:leading-7 font-normal">
                &ldquo;Consistent year-over-year sales growth driven by strategic planning, strong client relationships, and performance-focused execution.&rdquo;
              </p>
            </div>

            {/* Gauge Arc Image */}
            <div className="relative flex flex-col items-center justify-center mt-6">
              <img
                src="/media assets/home/Sales Yearly.svg"
                alt="Sales Yearly"
                className="w-full max-w-[335px] h-auto object-contain"
              />
            </div>
          </div>

        </div>

        {/* Bottom Tags Marquee/Pills List */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 w-full max-w-4xl mt-6 sm:mt-8">
          {bottomTags.map((tag, idx) => {
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="font-manrope flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#044647] hover:bg-[#033738] text-white rounded-full text-xs font-bold shadow-md cursor-pointer transition-all duration-300 select-none"
              >
                <span className="material-symbols-outlined text-[#C6D936] text-[14px] select-none leading-none">
                  {tag.icon}
                </span>
                <span>{tag.label}</span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
