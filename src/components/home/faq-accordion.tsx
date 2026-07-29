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
    <section className="w-full bg-white py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-4 lg:px-16 font-sans">
      <div className="max-w-360 mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8 md:gap-4 lg:gap-16">
          
          {/* Left Column: Title & Accordion list */}
          <div className="w-full md:w-[55%] lg:w-auto flex-1 flex flex-col gap-4 sm:gap-6 text-left">
            <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] md:text-[15px] lg:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
              // QUICK ANSWERS
            </span>

            <h2 className="font-manrope text-[30px] sm:text-[40px] md:text-[34px] lg:text-[52px] sm:leading-11 md:leading-11 lg:leading-15.5 font-semibold mb-2 text-[#051B05]">
              HR Support and Guidance
            </h2>

            {/* Accordion list */}
            <div className="flex flex-col border-t border-gray-100">
              {faqItems.map((item, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className="border-b border-gray-100 py-3 sm:py-4 md:py-0">
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full flex items-center justify-between gap-3 sm:gap-4 py-3 sm:py-4 group text-left transition-all"
                    >
                      <div className="flex items-center gap-3 sm:gap-4 md:gap-4 lg:gap-11">
                        {/* Left Question Mark Icon */}
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-bold text-[14px] leading-none shadow-xs select-none transition-all duration-300 ${
                            isOpen
                              ? "bg-[#C6D936] text-white border-2 border-transparent"
                              : "bg-[#000000] text-white group-hover:bg-[#C6D936]"
                          }`}
                        >
                          ?
                        </div>
                        <span
                          className={`font-manrope font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] leading-7 md:leading-8.5 lg:leading-9 text-left transition-colors duration-200 ${
                            isOpen
                              ? "text-[#044647]"
                              : "text-[#051B05] group-hover:text-[#044647]"
                          }`}
                        >
                          {item.question}
                        </span>
                      </div>
                      
                      {/* Right Toggle Arrow */}
                      <div className="text-[#044647] shrink-0 flex items-center justify-center select-none">
                        {isOpen ? (
                          <svg
                            className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-current"
                            viewBox="0 0 16 16"
                          >
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-current"
                            viewBox="0 0 16 16"
                          >
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                          </svg>
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
                            className="font-dm-sans text-[#595B62] text-[15px] sm:text-[16px] md:text-[18px] lg:text-[18px] pl-10 sm:pl-11 md:pl-12 lg:pl-18 pr-4 sm:pr-8 pt-2 sm:pt-3 md:pt-0 pb-3 sm:pb-4 md:pb-4 leading-6 sm:leading-6.5 md:leading-7 font-normal"
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
          <div className="relative w-full md:w-[45%] lg:w-132 shrink-0 flex justify-center md:justify-end">
            <div className="relative w-full max-w-132 h-95 sm:h-115 md:h-full md:min-h-140 lg:h-185 rounded-3xl sm:rounded-4xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="HR consultation support"
                className="w-full h-full object-cover"
              />
              
              {/* Floating Emergency Call Card */}
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-7.5 right-4 sm:right-6 md:right-7.5 bg-white rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 shadow-2xl flex items-center gap-3 sm:gap-4 border border-gray-100/80 z-10">
                <img
                  src="/media assets/home/icon-47.svg"
                  alt="Phone Icon"
                  className="w-11 h-11 sm:w-14 sm:h-14 lg:w-17.5 lg:h-17.5 object-contain shrink-0"
                />
                <div className="text-left pr-1 sm:pr-2">
                  <span className="font-manrope block text-[15px] sm:text-[18px] lg:text-[20px] leading-5 sm:leading-6 lg:leading-7 font-semibold text-[#044647]">
                    24/7 Emergency
                  </span>
                  <span className="font-manrope block text-[15px] sm:text-[18px] lg:text-[20px] leading-5 sm:leading-6 lg:leading-7 font-semibold text-[#044647] mt-0.5">
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
