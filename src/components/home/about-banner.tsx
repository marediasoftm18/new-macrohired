"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    icon: "explore",
    title: "Strategic Talent Management",
    description: "We help organizations identify and develop talent through structured planning.",
  },
  {
    icon: "favorite",
    title: "Staff Engagement Programs",
    description: "We design engagement initiatives that foster a positive work culture.",
  },
  {
    icon: "workspace_premium",
    title: "Staff Development Solutions",
    description: "Our staff development programs focus on career progression pathways.",
  },
];

export default function AboutBanner() {
  return (
    <section className="w-full bg-[#F6F5F2] font-sans relative overflow-hidden">
      <div className="w-full bg-[#044647] rounded-t-[40px] lg:rounded-t-[60px] py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-100 h-100 bg-[#C6D936]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left relative z-10">
              <span className="inline-flex self-start bg-[#C6D936] text-[#044647] px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-wider rounded-xs">
                // ABOUT US
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(32px, 4vw, 48px)",
                  color: "#ffffff",
                  lineHeight: 1.15,
                }}
                className="tracking-tight"
              >
                Shaping Focus And Performance
              </h2>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl font-light" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Whether you aim to build a motivated workforce or a high-performing team, we turn your HR vision into reality with strategic planning and expert guidance.
              </p>

              <div className="flex items-center gap-3 mt-4">
                <Link
                  href="/about"
                  className="px-8 py-3.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center bg-[#C6D936] text-[#044647]"
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
            <div className="lg:col-span-6 relative flex items-center justify-end w-full min-h-120">
              {/* The Main Image Container */}
              <div className="w-[85%] rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
                  alt="Shaping performance"
                  className="w-full h-100 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>

              {/* Overlapping Floating Cards stacked vertically */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20 w-[60%] min-w-70">
                {features.map((feature, idx) => {
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.15 }}
                      className="bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center gap-4 border border-white/80 backdrop-blur-sm"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#044647] flex items-center justify-center text-[#C6D936] shrink-0">
                        <span className="material-symbols-outlined text-[18px] select-none leading-none">
                          {feature.icon}
                        </span>
                      </div>
                      <div className="text-left">
                        <h4 className="text-[#044647] font-bold text-sm font-sans" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                          {feature.title}
                        </h4>
                        <p className="text-gray-500 text-xs mt-0.5" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
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
