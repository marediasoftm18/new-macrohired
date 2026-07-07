"use client";

import { motion } from "framer-motion";

const bottomTags = [
  { icon: "description", label: "AI UI/UX Design" },
  { icon: "laptop_mac", label: "Tech Solutions" },
  { icon: "layers", label: "Design Automation" },
  { icon: "attach_money", label: "Finance Application" },
  { icon: "person", label: "Personalized Experiences" },
  { icon: "auto_awesome", label: "Generative Branding" },
  { icon: "developer_board", label: "IT Services" },
];

export default function Approach() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        
        {/* Top Circular Portrait & Text */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Circular rotating text */}
          <svg className="absolute inset-0 w-full h-full animate-[spin_30s_linear_infinite]" viewBox="0 0 100 100">
            <defs>
              <path id="textCirclePath" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
            </defs>
            <text className="text-[7.5px] fill-[#044647] font-extrabold tracking-[0.16em] uppercase">
              <textPath href="#textCirclePath" startOffset="0%">
                Building Stronger Workforces • MacroHired Experts •
              </textPath>
            </text>
          </svg>
          {/* Portrait Image inside */}
          <div className="w-20 h-20 rounded-full overflow-hidden border-[3px] border-[#C6D936] shadow-md z-10">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
              alt="Team Director"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <span className="inline-flex bg-[#C6D936] text-[#044647] px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-wider rounded-[2px]">
            // OUR APPROACH
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
            Our Collaborative Approach to Human Resources
          </h2>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-stretch mt-4">
          
          {/* Card 1: Innovation */}
          <div className="bg-[#F6F5F2] rounded-[32px] p-8 flex flex-col justify-between border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div>
              <h3
                className="text-[#044647] font-extrabold text-2xl mb-4"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Innovation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
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
                    className="flex items-center gap-3 py-3 border-b border-gray-300/30 last:border-b-0"
                  >
                    <div className="w-2.5 h-2.5 bg-[#C6D936] rounded-full shrink-0" />
                    <span
                      className="text-gray-700 text-xs md:text-sm font-semibold"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Performance Analytics */}
          <div className="bg-[#044647] rounded-[32px] p-8 flex flex-col justify-between text-white shadow-[0_10px_30px_rgba(4,70,71,0.15)] relative overflow-hidden">
            <div>
              <h3
                className="text-white font-extrabold text-lg mb-6"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Performance Analytics
              </h3>

              {/* Chart Grid */}
              <div className="w-full flex items-end justify-between h-36 gap-2 mb-8 bg-[#033738] rounded-2xl p-4 border border-white/[0.04]">
                {/* Y-Axis Label placeholder helper */}
                <div className="flex flex-col justify-between text-[9px] text-gray-400 h-full font-mono pr-1 select-none">
                  <span>05</span>
                  <span>04</span>
                  <span>03</span>
                  <span>02</span>
                  <span>01</span>
                  <span>0</span>
                </div>

                {/* Bars */}
                {[
                  { label: "S", value: "35%", active: false },
                  { label: "M", value: "70%", active: true },
                  { label: "T", value: "60%", active: true },
                  { label: "W", value: "25%", active: false },
                  { label: "T", value: "50%", active: true },
                  { label: "F", value: "75%", active: true },
                  { label: "S", value: "40%", active: false },
                ].map((bar, i) => (
                  <div key={i} className="flex flex-col items-center flex-1 h-full justify-end gap-1.5">
                    <div className="w-full bg-white/10 rounded-full h-full flex flex-col justify-end overflow-hidden">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: bar.value }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.05 }}
                        className={`w-full rounded-full ${bar.active ? "bg-[#C6D936]" : "bg-teal-700/60"}`}
                      />
                    </div>
                    <span className="text-[9px] font-mono text-gray-300 font-bold">{bar.label}</span>
                  </div>
                ))}
              </div>

              <h4
                className="text-white font-bold text-xl mb-3"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Sales Overview
              </h4>
              <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                This is what we do, executed with perfection. Our dedication and expertise ensure every detail is flawless.
              </p>
            </div>
          </div>

          {/* Card 3: Sales Yearly */}
          <div className="bg-[#C6D936] rounded-[32px] p-8 flex flex-col justify-between text-[#044647] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div>
              <h3
                className="text-[#044647] font-extrabold text-2xl mb-4"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Sales Yearly
              </h3>
              <p
                className="text-[#044647] text-sm leading-relaxed mb-8 font-semibold italic"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                &ldquo;Consistent year-over-year sales growth driven by strategic planning, strong client relationships, and performance-focused execution.&rdquo;
              </p>
            </div>

            {/* Gauge Arc Component */}
            <div className="relative flex flex-col items-center justify-center mt-4">
              <svg className="w-48 h-24 overflow-visible" viewBox="0 0 100 50">
                {/* Base gray/white track arc */}
                <path
                  d="M 10 50 A 40 40 0 0 1 90 50"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                {/* Active dark-green arc (65%) */}
                <motion.path
                  d="M 10 50 A 40 40 0 0 1 90 50"
                  fill="none"
                  stroke="#044647"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="125.6"
                  initial={{ strokeDashoffset: 125.6 }}
                  whileInView={{ strokeDashoffset: 125.6 * (1 - 0.65) }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </svg>
              {/* Text inside */}
              <div className="absolute bottom-0 text-center flex flex-col items-center">
                <span className="text-3xl font-extrabold text-[#044647] tracking-tight leading-none" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                  65%
                </span>
                <span className="text-[10px] font-bold text-[#044647] opacity-80 uppercase mt-0.5" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Grow in Few Month
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Tags Marquee/Pills List */}
        <div className="flex flex-wrap justify-center gap-3 w-full max-w-4xl mt-8">
          {bottomTags.map((tag, idx) => {
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#044647] hover:bg-[#033738] text-white rounded-full text-xs font-bold shadow-md cursor-pointer transition-all duration-300 select-none"
                style={{ fontFamily: "var(--font-manrope), sans-serif" }}
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
