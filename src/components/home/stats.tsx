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
    <section className="w-full bg-white border-y border-gray-200">
      <div className="w-full max-w-360 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x md:divide-x lg:divide-x divide-gray-200 py-4">
          {statsList.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex items-center justify-center gap-3 sm:gap-4 p-5 sm:p-6 ${
                idx >= 2 ? "border-t md:border-t border-gray-200 lg:border-t-0" : ""
              }`}
            >
              <div className="flex items-start">
                <span className="font-dm-sans font-semibold text-[44px] sm:text-[54px] lg:text-[74px] leading-none text-[#051B05]">
                  {stat.number}
                </span>
                <span className="font-dm-sans font-semibold text-[26px] sm:text-[32px] lg:text-[42px] leading-none text-[#C6D936] ml-1 mt-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="font-dm-sans font-semibold text-[15px] sm:text-[17px] lg:text-[22px] leading-5 sm:leading-6.5 text-[#051B05] max-w-40 sm:max-w-44 lg:max-w-50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
