"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const teamMembers = [
  {
    name: "William Davis",
    role: "Payroll Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ava Clark",
    role: "Training Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "James Robinson",
    role: "Engagement Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
];

const tickerItems = [
  "Smart Hiring Solutions",
  "Trusted HR Partners",
  "Employee Growth Strategies",
  "Seamless Workforce Integration",
  "Expert HR Guidance",
];

export default function Team() {
  return (
    <section className="w-full bg-white font-sans overflow-hidden">
      {/* Main Dark Teal Section */}
      <div className="w-full bg-[#044647] text-white py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-350 mx-auto w-full flex flex-col gap-10 md:gap-12 lg:gap-16">
          
          {/* Header Block */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,470px)_minmax(0,560px)_auto] lg:items-end gap-6 md:gap-6 lg:gap-x-10 text-left">
            <div className="flex flex-col gap-3.5 md:gap-4 text-left max-w-117.5">
              <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] md:text-[15px] lg:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
                // TEAM MEMBERS
              </span>
              <h2
                className="font-manrope tracking-tight font-semibold text-[30px] sm:text-[38px] md:text-[44px] lg:text-[52px] leading-tight sm:leading-11 md:leading-[52px] lg:leading-[62px] text-white"
              >
                Our Expert Team for Human Resource
              </h2>
            </div>

            <div className="flex items-start lg:justify-center">
              <p
                className="font-dm-sans text-gray-300 font-normal max-w-130 text-[16px] md:text-[17px] lg:text-[18px] leading-6.5 md:leading-7"
              >
                Whether you aim to build a strong workplace culture or a high-performing modern workforce, we turn your people strategy into results with expert human resources.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 lg:justify-self-end">
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

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group flex flex-col rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#C6D936] transition-all duration-300 shadow-lg"
              >
                {/* Member Image with Badge */}
                <div className="w-full aspect-3/4 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Lime Icon Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#C6D936] flex items-center justify-center text-[#044647] shadow-md group-hover:rotate-12 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[18px] select-none leading-none">
                      person
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-5 md:p-6 flex flex-col items-center text-center bg-[#033738]">
                  <h3 className="font-manrope text-white font-semibold text-[22px] md:text-[24px] leading-7 md:leading-8">
                    {member.name}
                  </h3>
                  <p className="font-dm-sans text-gray-300 text-[15px] md:text-[16px] leading-6 mt-1 font-normal">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Ticker Bar (Lime Green) */}
      <div className="w-full bg-[#C6D936] py-3.5 md:py-4.5 overflow-hidden select-none border-t border-b border-[#051B05]/10">
        <div className="flex gap-8 md:gap-12 animate-scroll whitespace-nowrap">
          {[...Array(4)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-8 md:gap-12 items-center shrink-0">
              {tickerItems.map((item, itemIdx) => (
                <div key={`${setIdx}-${itemIdx}`} className="flex items-center gap-4">
                  <span className="font-manrope font-extrabold text-[#051B05] text-[16px] md:text-[18px] lg:text-[20px] uppercase tracking-wider">
                    {item}
                  </span>
                  <span className="material-symbols-outlined text-[#044647] text-[18px] md:text-[20px] select-none leading-none">
                    star
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
