"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "What services do you offer?",
    answer: "We offer a full range of HR services including recruitment, workforce planning, employee engagement, training, and HR compliance support.",
  },
  {
    question: "How do you hire talent?",
    answer: "We source candidates through our extensive network, screen credentials, conduct preliminary interviews, and present the top matches for your role.",
  },
  {
    question: "Can you handle payroll?",
    answer: "Yes, our payroll modules integrate compliance checks, salary distributions, benefit tracking, and tax filing support.",
  },
  {
    question: "Do you provide training programs?",
    answer: "Yes, we design custom workshops, leadership training, and skills development modules tailored for team growth.",
  },
  {
    question: "How quickly can we start?",
    answer: "We can initiate consultation immediately. The recruitment pipeline usually starts yielding screened candidates within 3-5 business days.",
  },
];

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Title & Accordion list */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <span className="inline-flex self-start bg-[#C6D936] text-[#044647] px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-wider rounded-xs">
              // QUICK ANSWERS
            </span>

            <h2
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(30px, 4.5vw, 44px)",
                color: "#051B05",
                lineHeight: 1.15,
              }}
              className="tracking-tight mb-4"
            >
              We support organizations
            </h2>

            {/* Accordion list */}
            <div className="flex flex-col border-t border-gray-100">
              {faqItems.map((item, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className="border-b border-gray-100 py-4">
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full flex items-center justify-between gap-4 py-2 hover:opacity-90 transition-opacity"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                            isOpen ? "bg-[#C6D936] text-[#044647]" : "bg-[#044647] text-white"
                          }`}
                        >
                          <span className="material-symbols-outlined text-[14px] select-none leading-none">
                            help
                          </span>
                        </div>
                        <span
                          className="font-bold text-[#051B05] text-sm md:text-base text-left"
                          style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                        >
                          {item.question}
                        </span>
                      </div>
                      
                      <div className="text-[#044647] shrink-0 flex items-center justify-center">
                        {isOpen ? (
                          <span className="material-symbols-outlined text-[18px] select-none leading-none">
                            keyboard_arrow_down
                          </span>
                        ) : (
                          <span className="material-symbols-outlined text-[18px] select-none leading-none">
                            keyboard_arrow_right
                          </span>
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p
                            className="text-[#595B62] text-xs md:text-sm pl-11 pr-8 pt-2 pb-3 leading-relaxed font-normal"
                            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                          >
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image & Floating Card */}
          <div className="lg:col-span-5 relative w-full flex justify-end">
            <div className="relative w-full max-w-105 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
                alt="HR consultation support"
                className="w-full h-112.5 object-cover"
              />
              
              {/* Floating Emergency Call Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-4 shadow-lg flex items-center gap-4 max-w-70 border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#044647] flex items-center justify-center text-[#C6D936] shrink-0">
                  <span className="material-symbols-outlined text-[20px] select-none leading-none">
                    phone_in_talk
                  </span>
                </div>
                <div className="text-left">
                  <span
                    className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    24/7 Emergency
                  </span>
                  <span
                    className="block text-sm font-extrabold text-[#044647] mt-0.5"
                    style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                  >
                    +1 (123) 456 7890
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
