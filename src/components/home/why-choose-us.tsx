"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const whyChooseList = [
  {
    icon: "explore",
    title: "Talent Management Excellence",
    description: "Our talent management services help organizations attract and retain employees while enhancing workforce performance effectively.",
  },
  {
    icon: "favorite",
    title: "Employee Engagement Experts",
    description: "We design engagement programs that motivate teams, boost morale, and improve collaboration across the workplace.",
  },
  {
    icon: "bar_chart",
    title: "Workforce Planning Solutions",
    description: "We help organizations anticipate staffing needs, optimize resources with objectives. Every position contributes to sustainable growth.",
  },
  {
    icon: "menu_book",
    title: "Training And Development",
    description: "We provide training programs that build skills and leadership abilities. Employees gain knowledge to meet challenges and grow professionally.",
  },
  {
    icon: "verified_user",
    title: "Payroll And Compliance",
    description: "Our payroll and compliance services ensure accurate compensation, benefits management, and adherence to labor laws, helping organizations operate smoothly.",
  },
  {
    icon: "workspace_premium",
    title: "Strategic HR Support",
    description: "We deliver strategic HR support to implement best practices, optimize processes, and achieve workforce goals through efficient, people-focused solutions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-6 sm:py-10 px-[15px] font-sans">
      <style>{`
        @keyframes wobble-skew {
          0% { transform: scale(1) skewX(0deg) skewY(0deg); }
          15% { transform: scale(1.1) skewX(-12deg) skewY(-6deg); }
          30% { transform: scale(1.1) skewX(10deg) skewY(5deg); }
          45% { transform: scale(1.05) skewX(-6deg) skewY(-3deg); }
          60% { transform: scale(1.05) skewX(4deg) skewY(2deg); }
          75% { transform: scale(1.02) skewX(-2deg) skewY(-1deg); }
          100% { transform: scale(1.05) skewX(0deg) skewY(0deg); }
        }
        .hover-wobble-skew:hover {
          animation: wobble-skew 0.6s ease-in-out forwards;
        }
      `}</style>

      {/* Rounded Gray Container on White Background */}
      <div className="bg-[#F6F5F2] rounded-3xl sm:rounded-4xl p-6 sm:p-8 md:p-10 lg:p-14 max-w-360 mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Content */}
          <div className="lg:sticky lg:top-24 flex flex-col gap-5 md:gap-6 text-left self-start">
            <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] md:text-[15px] lg:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
              // WHY CHOOSE US
            </span>

            <h2
              className="font-manrope tracking-tight mt-2 font-semibold text-[30px] sm:text-[38px] md:text-[34px] lg:text-[52px] sm:leading-11 md:leading-11 lg:leading-[62px] text-[#051B05]"
            >
              Helping organizations unlock people potential
            </h2>

            <p
              className="font-dm-sans max-w-md md:max-w-3xl lg:max-w-xl font-normal text-[16px] md:text-[18px] lg:text-[18px] leading-6.5 md:leading-7 text-[#595B62]"
            >
              The best way to improve workplace performance is to create and follow an HR strategy. Start with goals, then build processes to achieve them.
            </p>

            <div className="flex items-center gap-3 my-1 sm:my-2">
              <Link
                href="/contact"
                className="font-dm-sans px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center bg-[#044647] font-medium text-[16px] md:text-[18px] leading-7.5 text-white"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="w-12 h-12 rounded-full bg-[#C6D936] flex items-center justify-center text-[#044647] hover:scale-110 transition-transform shadow-sm"
                aria-label="Contact us to get started"
              >
                <span className="material-symbols-outlined text-[20px] select-none leading-none">
                  arrow_outward
                </span>
              </Link>
            </div>

            {/* Document Reviewing Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-md mt-2 sm:mt-4 cursor-pointer group"
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
                alt="HR strategy session"
                className="w-full h-48 sm:h-56 md:h-62.5 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
          </div>

          {/* Right Column: List of Feature Cards with White Background */}
          <div className="flex flex-col gap-4 w-full">
            {whyChooseList.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 shadow-xs border border-gray-100/80 flex items-start gap-4 md:gap-5 relative group transition-all duration-300 hover:shadow-md"
                >
                  {/* Icon Box */}
                  <div
                    className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#F6F5F2] group-hover:bg-[#044647] rounded-xl flex items-center justify-center shrink-0 border border-gray-100 hover-wobble-skew transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src={`/media assets/home/why choose ${idx + 1}.svg`}
                      alt={item.title}
                      className="w-8 h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 group-hover:brightness-0 group-hover:invert transition-all duration-300 object-contain"
                    />
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-col gap-1 text-left pr-8 sm:pr-10">
                    <h3
                      className="font-manrope font-semibold text-[18px] md:text-[20px] lg:text-[22px] leading-6 md:leading-7 text-[#051B05]"
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-dm-sans font-normal text-[15px] md:text-[18px] lg:text-[18px] leading-6 md:leading-7 lg:leading-7 text-[#595B62]"
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}