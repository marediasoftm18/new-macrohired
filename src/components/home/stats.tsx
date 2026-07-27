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
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 py-2 md:py-2">
          {statsList.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center justify-center gap-4 p-4"
            >
              <div className="flex items-start">
                <span className="font-dm-sans font-semibold text-[74px] leading-20 text-[#051B05]">
                  {stat.number}
                </span>
                <span className="font-dm-sans font-semibold text-[42px] leading-10.5 text-[#C6D936] ml-1 mt-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="font-dm-sans font-semibold text-[22px] leading-7 text-[#051B05] max-w-50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
