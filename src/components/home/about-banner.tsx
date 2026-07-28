"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    icon: "explore",
    title: "Manage Talent Effectively",
    description: "Manage top talent with efficiency.",
  },
  {
    icon: "favorite",
    title: "Boost Employee Engagement",
    description: "Boost employee engagement every day.",
  },
  {
    icon: "workspace_premium",
    title: "Develop Workforce Skills",
    description: "Develop workforce skills for success.",
  },
];

export default function AboutBanner() {
  return (
    <section className="w-full bg-[#F6F5F2] font-sans relative overflow-hidden">
      <div className="w-full bg-[#044647] rounded-t-[40px] lg:rounded-t-[60px] py-10 md:py-14 lg:py-16 relative overflow-hidden">
        <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-100 h-100 bg-[#C6D936]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8 lg:gap-24 w-full">
            
            {/* Left Column: Text Content */}
            <div className="w-full md:w-[48%] lg:w-[50%] h-full flex flex-col text-left relative z-10 gap-4 md:gap-5 lg:gap-6">
              <span 
                className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] md:text-[15px] lg:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]"
              >
                // ABOUT US
              </span>

              <h2
                className="font-manrope tracking-tight font-semibold text-[30px] sm:text-[36px] md:text-[40px] lg:text-[56px] leading-tight sm:leading-11 md:leading-[48px] lg:leading-[64px] text-white"
              >
                Shaping People <br className="hidden sm:inline" />And Performance
              </h2>

              <p 
                className="font-dm-sans text-white font-normal text-[15px] md:text-[16px] lg:text-[18px] leading-6 md:leading-6.5 lg:leading-7"
              >
                Whether you aim to build a motivated workforce or a high-performing team, we turn your HR vision into reality with strategic planning and expert guidance.
              </p>

              <div className="flex items-center gap-3 mt-1">
                <Link
                  href="/about"
                  className="font-dm-sans px-6 md:px-7 lg:px-8 py-3 md:py-3.5 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center bg-[#C6D936] text-[#051B05] font-medium text-[15px] md:text-[16px] lg:text-[18px] leading-7.5"
                >
                  Get Started
                </Link>
                <Link
                  href="/about"
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-[#044647] hover:scale-110 transition-transform shadow-md"
                  aria-label="Read more about us"
                >
                  <span className="material-symbols-outlined text-[20px] select-none leading-none">
                    arrow_outward
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column: Image with Overlapping Floating Cards */}
            <div className="w-full md:w-[50%] lg:w-[50%] relative flex flex-col md:flex-row items-center justify-end min-h-auto md:min-h-[480px] lg:min-h-150 gap-4 md:gap-0">
              {/* Main Image */}
              <div className="w-full md:w-[90%] lg:w-[92%] rounded-3xl lg:rounded-[40px] overflow-hidden shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
                  alt="Shaping performance"
                  className="w-full h-72 sm:h-96 md:h-[480px] lg:h-135 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>

              {/* Feature Cards Overlapping Image */}
              <div className="w-full md:w-[85%] lg:w-111.5 max-w-111.5 relative md:absolute left-0 md:left-[-12%] lg:left-[-15%] top-auto md:top-1/2 md:-translate-y-1/2 flex flex-col gap-3.5 md:gap-4 lg:gap-5 z-20">
                {features.map((feature, idx) => {
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.15 }}
                      className="bg-white rounded-2xl md:rounded-2xl p-4.5 md:p-5 lg:p-6.25 shadow-[0_15px_40px_rgba(0,0,0,0.12)] flex items-center gap-4 border border-white/80 backdrop-blur-sm"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#044647] flex items-center justify-center shrink-0 shadow-inner">
                        <img
                          src="/media assets/home/svgexport-7.svg"
                          alt={feature.title}
                          className="w-5 h-5 object-contain"
                        />
                      </div>
                      <div className="text-left">
                        <h4 
                          className="font-manrope font-semibold text-[17px] md:text-[19px] lg:text-[24px] leading-6 text-[#051B05]"
                        >
                          {feature.title}
                        </h4>
                        <p 
                          className="font-dm-sans text-[#595B62] font-normal mt-0.5 text-[14px] md:text-[15px] lg:text-[18px] leading-5.5 md:leading-6 lg:leading-7" 
                        >
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
