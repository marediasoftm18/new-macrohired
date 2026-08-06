"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Job Posting",
    description:
      "We understand your requirements and post job openings to attract the right and qualified candidates.",
  },
  {
    number: "02",
    title: "Screening & Interview",
    description:
      "Applications are reviewed, shortlisted, and candidates are screened to match skills and job needs.",
  },
  {
    number: "03",
    title: "Selection & Onboarding",
    description:
      "Best candidates are selected, interviewed, and successfully placed to ensure long-term success.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="w-full bg-[#F6F5F2] py-14 sm:py-18 md:py-22 lg:py-26 font-sans overflow-hidden">
      <div className="w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Image stretching to match natural height of right column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 relative w-full h-full flex flex-col"
          >
            <div className="relative w-full h-full min-h-95 lg:min-h-0 rounded-[30px] overflow-hidden shadow-sm flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80"
                alt="Our Simple Process"
                className="w-full h-full object-cover grow"
              />

              {/* Inverted Corner Cutout for Watch Video Button */}
              <div className="absolute bottom-0 right-0 bg-[#F6F5F2] pt-4 pl-4 rounded-tl-[30px]">
                <div className="bg-[#F6F5F2] rounded-full px-6 py-3 flex items-center gap-3.5 cursor-pointer hover:scale-105 transition-transform">
                  <span className="font-dm-sans font-medium text-[#051B05] text-[15px] sm:text-[16px]">
                    Watch Video
                  </span>
                  <div className="w-10 h-10 rounded-full border-2 border-[#051B05] flex items-center justify-center text-[#051B05] shrink-0">
                    <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Title, Subtitle, Steps & CTA without extra bottom space */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-between gap-6 text-left"
          >
            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] md:text-[15px] lg:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
                {"// HIRING PROCESS"}
              </span>

              <h2 className="font-manrope text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] leading-15.5 font-semibold text-[#051B05] tracking-tight">
                Our Simple<br />Process to<br />Enhance<br />Workforce
              </h2>

              <p className="font-dm-sans text-[#595B62] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-7 font-normal max-w-lg">
                Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones.
              </p>
            </div>

            {/* 3 Steps List connected with Vertical Line */}
            <div className="relative flex flex-col gap-6 sm:gap-7 my-1">
              {/* Connecting Vertical Line behind boxes */}
              <div className="absolute left-8 sm:left-9 top-6 bottom-6 w-[1.5px] bg-gray-300/60 z-0" />

              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative z-10 flex items-start gap-5 sm:gap-6"
                >
                  {/* Number Box */}
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-[20px] bg-white shadow-xs flex items-center justify-center font-manrope font-semibold text-[20px] sm:text-[22px] lg:text-[30px] leading-7.5 text-[#051B05] shrink-0 border border-gray-100/60">
                    {step.number}
                  </div>

                  {/* Step Title & Description */}
                  <div className="flex flex-col gap-1 text-left pt-1">
                    <h4 className="font-manrope font-semibold text-[20px] sm:text-[22px] lg:text-[24px] leading-9 text-[#051B05]">
                      {step.title}
                    </h4>
                    <p className="font-dm-sans text-[#595B62] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-7 font-normal max-w-110">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Button Group */}
            <div className="flex items-center gap-3">
              <Link
                href="/careers"
                className="font-dm-sans px-8 py-3.5 rounded-full bg-[#044647] hover:bg-[#033738] text-white font-medium text-[18px] transition-all shadow-xs"
              >
                Explore Jobs
              </Link>
              <Link
                href="/careers"
                className="w-12 h-12 rounded-full bg-[#c8db2b] flex items-center justify-center text-[#044647] hover:scale-105 transition-transform shadow-xs shrink-0"
                aria-label="Explore Jobs"
              >
                <span className="material-symbols-outlined text-[20px] select-none">
                  arrow_outward
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
