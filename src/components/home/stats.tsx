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
      <div className="max-w-360 mx-auto w-full px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 md:py-10">
          {statsList.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center justify-center gap-6 py-6 px-4"
            >
              <div className="flex items-start">
                <span
                  style={{ 
                    fontFamily: "var(--font-dm-sans), sans-serif", 
                    fontWeight: 600,
                    fontSize: "74px",
                    lineHeight: "80px",
                    color: "#051B05",
                  }}
                >
                  {stat.number}
                </span>
                <span
                  style={{ 
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 500,
                    fontSize: "42px",
                    lineHeight: "42px",
                    color: "#C6D936",
                    marginLeft: "4px",
                    marginTop: "4px",
                  }}
                >
                  {stat.suffix}
                </span>
              </div>
              <p
                style={{ 
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 600,
                  fontSize: "22px",
                  lineHeight: "28px",
                  color: "#051B05",
                  maxWidth: "200px",
                }}
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
