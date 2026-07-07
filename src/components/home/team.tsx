"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const teamList = [
  {
    name: "William Davis",
    role: "Payroll Manager",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ava Clark",
    role: "Training Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "James Robinson",
    role: "Engagement Lead",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
];

const marqueeWords = [
  "Smart Hiring Solutions",
  "Trusted HR Partners",
  "Better Hiring Decisions",
  "People-First HR Solutions",
  "Talent. Culture. Growth.",
];

export default function Team() {
  return (
    <section className="w-full bg-[#F6F5F2] font-sans relative overflow-hidden">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee-scroll 25s linear infinite;
        }
      `}</style>

      {/* Main Teal Box */}
      <div className="w-full bg-[#044647] rounded-t-[40px] lg:rounded-t-[60px] py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          {/* Ribbon Watermark Pattern */}
          <div className="absolute left-[-40px] bottom-[-40px] opacity-[0.03] text-white pointer-events-none select-none">
            <svg className="w-96 h-96" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0 C25 25, 25 75, 50 100 C75 75, 75 25, 50 0 Z" />
            </svg>
          </div>

          {/* Header Block */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 mb-12 relative z-10">
            <div className="flex flex-col gap-4 max-w-xl text-left">
              <span className="inline-flex self-start bg-[#C6D936] text-[#044647] px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-wider rounded-[2px]">
                // TEAM MEMBERS
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(30px, 4.5vw, 44px)",
                  color: "#ffffff",
                  lineHeight: 1.15,
                }}
                className="tracking-tight"
              >
                Our Expert Team for Human Resource
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 max-w-xl text-left">
              <p className="text-gray-300 text-sm leading-relaxed">
                Our skilled HR professionals blend experience and insight to guide organizations toward efficiency, engagement, and workforce excellence.
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/team"
                  className="px-6 py-3 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center bg-[#C6D936] text-[#044647]"
                >
                  View All Team
                </Link>
                <Link
                  href="/team"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#044647] hover:scale-110 transition-transform shadow-sm"
                  aria-label="View all team members"
                >
                  <span className="material-symbols-outlined text-[18px] select-none leading-none">
                    arrow_outward
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {teamList.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center"
              >
                {/* Image box with share button */}
                <div className="w-full h-[380px] rounded-3xl overflow-hidden relative shadow-md group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Share Button */}
                  <button
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#C6D936] hover:bg-[#b4c62e] text-[#044647] flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                    aria-label={`Share profile of ${member.name}`}
                  >
                    <span className="material-symbols-outlined text-[16px] select-none leading-none">
                      share
                    </span>
                  </button>
                </div>

                {/* Text Details below image */}
                <div className="text-center mt-6">
                  <h3
                    className="text-white font-bold text-lg"
                    style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-gray-300 text-xs mt-1"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Marquee Bar */}
      <div className="w-full py-4.5 bg-[#C6D936] mt-0 overflow-hidden flex items-center shadow-sm">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-12 items-center shrink-0">
              {marqueeWords.map((word, wordIdx) => (
                <div
                  key={`${setIdx}-${wordIdx}`}
                  className="flex items-center gap-3 text-[#044647] font-bold text-sm tracking-wide uppercase select-none"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                >
                  {/* Custom Asterisk/Snowflake Vector Icon */}
                  <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 100 100">
                    <path d="M50 0 L58 40 L98 32 L66 56 L82 94 L50 72 L18 94 L34 56 L2 32 L42 40 Z" />
                  </svg>
                  <span>{word}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
