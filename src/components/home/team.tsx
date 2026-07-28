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
      <div className="w-full bg-[#044647] rounded-t-[40px] lg:rounded-t-[60px] py-10 relative overflow-hidden">
        <div className="max-w-350 mx-auto w-full px-4 sm:px-6 lg:px-16">
          {/* Ribbon Watermark Pattern */}
          <div className="absolute -left-10 -bottom-10 opacity-[0.03] text-white pointer-events-none select-none">
            <svg className="w-96 h-96" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0 C25 25, 25 75, 50 100 C75 75, 75 25, 50 0 Z" />
            </svg>
          </div>

          {/* Header Block */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 sm:gap-8 mb-12 relative z-10">
            <div className="flex flex-col gap-4 max-w-117.5 text-left">
              <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] sm:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
                // TEAM MEMBERS
              </span>
              <h2 className="font-manrope text-white text-[32px] sm:text-[42px] md:text-[52px] leading-tight sm:leading-13 md:leading-15.5 font-semibold tracking-tight">
                Our Expert Team for Human Resource
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 text-left">
              <p className="font-dm-sans text-white text-[16px] sm:text-[18px] leading-6.5 sm:leading-7 font-normal max-w-111.25">
                Our skilled HR professionals blend experience and insight to guide organizations toward efficiency, engagement, and workforce excellence.
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/team"
                  className="font-dm-sans px-6 sm:px-8 py-3.5 rounded-full text-[16px] sm:text-[18px] leading-7.5 font-medium shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center bg-[#C6D936] text-[#000000]"
                >
                  View All Team
                </Link>
                <Link
                  href="/team"
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#044647] hover:scale-110 transition-transform shadow-sm"
                  aria-label="View all team members"
                >
                  <span className="material-symbols-outlined text-[20px] select-none leading-none">
                    arrow_outward
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
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
                <div className="w-full h-[360px] sm:h-[420px] md:h-138.75 rounded-3xl overflow-hidden relative shadow-md group cursor-pointer">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Lime green gradient overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#C6D936]/90 via-[#C6D936]/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Floating Share Button */}
                  <button
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#C6D936] hover:bg-[#b4c62e] text-[#044647] flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-10"
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
                    className="font-manrope text-white font-semibold text-[22px] sm:text-[26px] leading-8 sm:leading-9"
                  >
                    {member.name}
                  </h3>
                  <p
                    className="font-dm-sans text-white text-[16px] sm:text-[18px] leading-6.5 sm:leading-7 font-normal mt-1"
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
      <div className="w-full py-3.5 sm:py-4.5 bg-[#C6D936] mt-0 overflow-hidden flex items-center shadow-sm">
        <div className="flex gap-8 sm:gap-12 animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-8 sm:gap-12 items-center shrink-0">
              {marqueeWords.map((word, wordIdx) => (
                <div
                  key={`${setIdx}-${wordIdx}`}
                  className="font-manrope flex items-center gap-2.5 sm:gap-3 text-[#000000] font-semibold text-[20px] sm:text-[24px] md:text-[28px] leading-8 sm:leading-9 tracking-wide uppercase select-none"
                >
                  <img
                    src="/media assets/home/icon-24.svg"
                    alt="icon"
                    className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 shrink-0 brightness-0"
                  />
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
