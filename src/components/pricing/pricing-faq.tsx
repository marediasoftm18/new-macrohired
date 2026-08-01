"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a full range of HR services including recruitment, workforce planning, employee engagement, training, and HR compliance support.",
  },
  {
    question: "How do you hire talent?",
    answer:
      "We source candidates through our extensive network, screen credentials, conduct preliminary interviews, and present the top matches for your role.",
  },
  {
    question: "Can you handle payroll?",
    answer:
      "Yes, our payroll modules integrate compliance checks, salary distributions, benefit tracking, and tax filing support.",
  },
  {
    question: "Do you provide training programs?",
    answer:
      "Yes, we design custom workshops, leadership training, and skills development modules tailored for team growth.",
  },
  {
    question: "How quickly can we start?",
    answer:
      "We can initiate consultation immediately. The recruitment pipeline usually starts yielding screened candidates within 3-5 business days.",
  },
];

export default function PricingFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white lg:bg-[#ffffff] py-14 md:py-18 lg:py-28 font-sans">
      <div className="max-w-360 w-full px-4 sm:px-6 md:px-8 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Title & Question Mark Illustration */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col gap-4 sm:gap-6 text-left justify-between h-full">
            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] sm:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
                // QUICK ANSWERS
              </span>

              <h2 className="font-manrope text-[32px] sm:text-[40px] md:text-[34px] lg:text-[52px] sm:leading-13 md:leading-11 lg:leading-15.5 font-semibold text-[#051B05]">
                HR Support and Guidance
              </h2>
            </div>

            {/* FAQ Background Illustration */}
            <div className="w-full flex justify-center items-center mt-4 md:mt-6">
              <img
                src="/media assets/home/faq-bg.svg"
                alt="HR Guidance Illustration"
                className="w-full max-w-64 sm:max-w-85 md:max-w-64 lg:max-w-85 h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Column: Accordion list */}
          <div className="md:col-span-7 lg:col-span-7 flex flex-col gap-4">
            <div className="flex flex-col border-t border-gray-200">
              {faqItems.map((item, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className="border-b border-gray-200 py-2.5">
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full flex items-center justify-between gap-4 py-4 group text-left transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4">
                        <div
                          className={`w-7.5 h-7.5 rounded-full flex items-center justify-center shrink-0 font-bold text-[14px] leading-none select-none transition-all duration-300 ${
                            isOpen
                              ? "bg-[#C6D936] text-[#051B05]"
                              : "bg-[#044647] text-white group-hover:bg-[#C6D936] group-hover:text-[#051B05]"
                          }`}
                        >
                          ?
                        </div>

                        <span
                          className={`font-manrope font-semibold text-[18px] sm:text-[22px] md:text-[20px] lg:text-[24px] leading-7 sm:leading-8 md:leading-7 lg:leading-9 transition-colors duration-200 ${
                            isOpen
                              ? "text-[#044647]"
                              : "text-[#051B05] group-hover:text-[#044647]"
                          }`}
                        >
                          {item.question}
                        </span>
                      </div>

                      {/* Caret Icon */}
                      <div className="shrink-0 flex items-center justify-center select-none">
                        <svg
                          className={`w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform duration-300 ${
                            isOpen
                              ? "rotate-90 text-[#044647]"
                              : "text-[#044647]"
                          }`}
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="font-dm-sans text-[#595B62] text-[15px] sm:text-[18px] md:text-[15px] lg:text-[18px] leading-7 font-normal pl-11 pb-5 text-left">
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

        </div>
      </div>
    </section>
  );
}