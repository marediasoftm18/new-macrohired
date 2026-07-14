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
      <div className="w-full bg-[#044647] rounded-t-[40px] lg:rounded-t-[60px] py-12 md:py-16 relative overflow-hidden">
        <div className="max-w-360 mx-auto md:px-12 lg:px-16">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-100 h-100 bg-[#C6D936]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-20 w-full">
            
            {/* Left Column: Text Content */}
            <div className="w-full lg:w-[44%] flex flex-col text-left relative z-10">
              <span 
                className="inline-flex self-start bg-[#C6D936] text-[#051B05] px-2.5 py-0.5 uppercase tracking-wider rounded-xs mb-4"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "15px",
                }}
              >
                // ABOUT US
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(32px, 4.5vw, 56px)",
                  color: "#ffffff",
                  lineHeight: "64px",
                }}
                className="tracking-tight mb-8"
              >
                Shaping People And Performance
              </h2>

              <p 
                className="text-white font-normal mt-10 mb-8"
                style={{ 
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "18px",
                  lineHeight: "28px",
                }}
              >
                Whether you aim to build a motivated workforce or a high-performing team, we turn your HR vision into reality with strategic planning and expert guidance.
              </p>

              <div className="flex items-center gap-3 mt-2">
                <Link
                  href="/about"
                  className="px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center bg-[#C6D936] text-[#051B05]"
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "30px",
                  }}
                >
                  Get Started
                </Link>
                <Link
                  href="/about"
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#044647] hover:scale-110 transition-transform shadow-md"
                  aria-label="Read more about us"
                >
                  <span className="material-symbols-outlined text-[20px] select-none leading-none">
                    arrow_outward
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column: Image with Overlapping Floating Cards */}
            <div className="w-full lg:w-[50%] relative flex items-center justify-end min-h-150">
              {/* The Main Image Container */}
              <div className="w-[92%] rounded-[40px] overflow-hidden shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
                  alt="Shaping performance"
                  className="w-full h-135 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>

              {/* Overlapping Floating Cards stacked vertically */}
              <div className="absolute left-[-15%] top-1/2 -translate-y-1/2 flex flex-col gap-5 z-20 w-111.5 max-w-111.5">
                {features.map((feature, idx) => {
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.15 }}
                      className="bg-white rounded-3xl p-6.25 shadow-[0_15px_40px_rgba(0,0,0,0.12)] flex items-center gap-5 border border-white/80 backdrop-blur-sm"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#044647] flex items-center justify-center text-[#C6D936] shrink-0 shadow-inner">
                        <span className="material-symbols-outlined text-[24px] select-none leading-none">
                          {feature.icon}
                        </span>
                      </div>
                      <div className="text-left">
                        <h4 
                          style={{ 
                            fontFamily: "var(--font-manrope), sans-serif",
                            fontWeight: 600,
                            fontSize: "24px",
                            lineHeight: "26px",
                            color: "#051B05",
                          }}
                        >
                          {feature.title}
                        </h4>
                        <p 
                          className="text-[#595B62] font-normal mt-1" 
                          style={{ 
                            fontFamily: "var(--font-dm-sans), sans-serif",
                            fontSize: "18px",
                            lineHeight: "28px",
                          }}
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
