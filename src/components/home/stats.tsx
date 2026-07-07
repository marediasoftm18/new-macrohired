"use client";

import { motion } from "framer-motion";

const statsList = [
  {
    number: "12",
    suffix: "Y",
    label: "Professional Experience",
  },
  {
    number: "55",
    suffix: "K",
    label: "Hires Employee",
  },
  {
    number: "25",
    suffix: "+",
    label: "Our Company Clients",
  },
  {
    number: "92",
    suffix: "%",
    label: "Success Last year 2025",
  },
];

export default function Stats() {
  return (
    <section className="w-full bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {statsList.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex items-center justify-center gap-4 py-10 px-6 ${
                idx === 0
                  ? "border-r border-b md:border-b-0 border-gray-100"
                  : idx === 1
                  ? "border-b md:border-b-0 md:border-r border-gray-100"
                  : idx === 2
                  ? "border-r border-gray-100"
                  : ""
              }`}
            >
              <div className="flex items-start">
                <span
                  className="text-5xl font-extrabold text-[#044647] leading-none"
                  style={{ fontFamily: "var(--font-manrope), sans-serif", letterSpacing: "-0.03em" }}
                >
                  {stat.number}
                </span>
                <span
                  className="text-xl font-bold text-[#C6D936] leading-none ml-0.5 mt-0.5"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                >
                  {stat.suffix}
                </span>
              </div>
              <p
                className="text-[#044647] font-bold text-xs md:text-sm max-w-35 leading-tight"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
