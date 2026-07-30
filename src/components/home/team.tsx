"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const teamMembers = [
  {
    name: "Emily Johnson",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "William Davis",
    role: "Payroll Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ava Clark",
    role: "Training Specialist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
];

const tickerItems = [
  "Trusted HR Partners",
  "Better Hiring Decisions",
  "People-First HR Solutions",
  "Expert HR Guidance",
];

export default function Team() {
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  // Auto play timer for mobile mode loop
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMobileIdx((prev) => (prev + 1) % teamMembers.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white font-sans overflow-hidden">
      {/* Main Dark Teal Section */}
      <div className="w-full bg-[#044647] rounded-t-[40px] lg:rounded-t-[60px] text-white py-12 md:py-8 md:pt-16 px-4 sm:px-6 md:px-4 lg:px-16">
        <div className="max-w-360 mx-auto w-full flex flex-col gap-10 md:gap-12 lg:gap-16">
          
          {/* Header Block */}
          <div className="flex flex-col items-start gap-4 md:gap-5 text-left max-w-3xl">
            <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] md:text-[15px] lg:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
              // TEAM MEMBERS
            </span>
            <h2
              className="font-manrope tracking-tight font-semibold text-[30px] sm:text-[38px] md:text-[34px] lg:text-[52px] leading-tight sm:leading-11 md:leading-11 lg:leading-15.5 text-white"
            >
              Our Expert Team for Human Resource
            </h2>
            <p
              className="font-dm-sans text-white font-normal max-w-2xl md:max-w-170 text-[18px] md:text-[18px] lg:text-[18px] leading-6.5 md:leading-7"
            >
              Our skilled HR professionals blend experience and insight to guide organizations toward efficiency, engagement, and workforce excellence
            </p>

            <div className="flex items-center gap-3 mt-1">
              <Link
                href="/team"
                className="font-dm-sans px-6 md:px-8 py-3 md:py-3.5 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center bg-[#C6D936] text-[#051B05] font-medium text-[16px] md:text-[18px] leading-7.5"
              >
                View All Team
              </Link>
              <Link
                href="/team"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#044647] hover:scale-110 transition-transform shadow-md"
                aria-label="View all team members"
              >
                <span className="material-symbols-outlined text-[20px] select-none leading-none">
                  arrow_outward
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Mode: Show ONLY ONE member card at a time on loop */}
          <div className="flex md:hidden flex-col w-full max-w-sm mx-auto items-center">
            <div className="w-full relative min-h-110 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMobileIdx}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="group flex flex-col rounded-3xl overflow-hidden"
                >
                  {/* Member Image with Share Icon */}
                  <div className="w-full aspect-3/4 rounded-3xl overflow-hidden relative shadow-lg">
                    <img
                      src={teamMembers[activeMobileIdx].image}
                      alt={teamMembers[activeMobileIdx].name}
                      className="w-full h-full object-cover"
                    />
                    {/* Floating Lime Share Icon Badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#C6D936] flex items-center justify-center text-[#044647] shadow-md">
                      <span className="material-symbols-outlined text-[18px] select-none leading-none">
                        share
                      </span>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-5 flex flex-col items-center text-center">
                    <h3 className="font-manrope text-white font-semibold text-[22px] leading-8">
                      {teamMembers[activeMobileIdx].name}
                    </h3>
                    <p className="font-dm-sans text-gray-300 text-[16px] leading-6 mt-1 font-normal">
                      {teamMembers[activeMobileIdx].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Indicators / Dots */}
            <div className="flex items-center gap-2 mt-2">
              {teamMembers.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMobileIdx(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeMobileIdx === idx ? "bg-[#C6D936] w-7" : "bg-white/40 w-2.5"
                  }`}
                  aria-label={`Show team member ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Tablet & Desktop Cards Grid (Hidden on mobile, 3 cards in 1 row on tablet/desktop) */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-5 lg:gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group flex flex-col rounded-3xl overflow-hidden hover:border-[#C6D936] transition-all duration-300"
              >
                {/* Member Image with Share Icon */}
                <div className="w-full aspect-3/4 rounded-3xl overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Lime Share Icon Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#C6D936] flex items-center justify-center text-[#044647] shadow-md group-hover:rotate-12 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[18px] select-none leading-none">
                      share
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-5 md:p-6 flex flex-col items-center text-center">
                  <h3 className="font-manrope text-white font-semibold text-[20px] md:text-[22px] lg:text-[24px] leading-7 md:leading-8.5">
                    {member.name}
                  </h3>
                  <p className="font-dm-sans text-gray-300 text-[14px] md:text-[18px] lg:text-[16px] leading-6 md:leading-7 mt-1 font-normal">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Ticker Bar (Lime Green) */}
      <div className="w-full bg-[#C6D936] py-3.5 md:py-3.75 overflow-hidden select-none border-t border-b border-[#051B05]/10">
        <style>{`
          @keyframes teamTickerScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-25%); }
          }
          .animate-team-ticker {
            animation: teamTickerScroll 4s linear infinite;
          }
        `}</style>
        <div className="flex gap-8 md:gap-12 animate-team-ticker whitespace-nowrap">
          {[...Array(4)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-8 md:gap-12 items-center shrink-0">
              {tickerItems.map((item, itemIdx) => (
                <div key={`${setIdx}-${itemIdx}`} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#044647] text-[18px] md:text-[20px] select-none leading-none">
                    asterisk
                  </span>
                  <span className="font-manrope font-semibold text-[#051B05] text-[18px] md:text-[24px] lg:text-[24px] md:leading-8">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}