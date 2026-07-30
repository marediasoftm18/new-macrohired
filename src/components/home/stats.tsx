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
    label: "Employees Hired",
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
    <section className="w-full bg-white border-y border-gray-200">
      <div className="w-full max-w-360 mx-auto">
        {/* 2x2 grid on mobile (grid-cols-2), 2x2 grid on tablet (md:grid-cols-2), 4 columns on desktop (lg:grid-cols-4) */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200 py-0 md:py-0">
          {statsList.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col md:flex-row items-start md:items-center justify-start gap-2 md:gap-4 p-4 sm:p-5 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 ${
                idx >= 2 ? "border-t border-gray-200 lg:border-t-0" : ""
              }`}
            >
              <div className="flex items-start shrink-0">
                <span className="font-dm-sans font-semibold text-[42px] sm:text-[44px] lg:text-[74px] leading-9.5 md:leading-14.5 text-[#051B05]">
                  {stat.number}
                </span>
                <span className="font-dm-sans font-semibold text-[28px] sm:text-[26px] lg:text-[42px] leading-7 md:leading-8 text-[#C6D936] ml-1 mt-0.5">
                  {stat.suffix}
                </span>
              </div>
              <p className="font-dm-sans font-semibold text-[20px] sm:text-[15px] md:text-[17px] lg:text-[22px] leading-7 sm:leading-5 md:leading-7 text-[#051B05] max-w-34 sm:max-w-40 md:max-w-50 lg:max-w-50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
