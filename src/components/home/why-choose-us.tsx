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
    <section className="w-full bg-[#F6F5F2] py-16 md:py-24 px-6 md:px-16 font-sans">
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

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Sticky Content (Moves down as user scrolls) */}
          <div className="lg:sticky lg:top-24 flex flex-col gap-6 text-left self-start">
            <span
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "15px",
                color: "#051B05",
              }}
              className="inline-flex self-start bg-[#C6D936] px-3 py-1 uppercase tracking-wider rounded-xs"
            >
              // WHY CHOOSE US
            </span>

            <h2
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "clamp(32px, 4.5vw, 52px)",
                color: "#051B05",
                lineHeight: "62px",
              }}
              className="tracking-tight mt-2"
            >
              Helping organizations unlock people potential
            </h2>

            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "28px",
                color: "#595B62",
              }}
              className="max-w-md font-normal"
            >
              The best way to improve workplace performance is to create and follow an HR strategy. Start with goals, then build processes to achieve them.
            </p>

            <div className="flex items-center gap-3 my-2">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center bg-[#044647]"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "30px",
                  color: "#ffffff",
                }}
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
              className="w-full rounded-3xl overflow-hidden shadow-lg mt-4 cursor-pointer group"
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
                alt="HR strategy session"
                className="w-full h-62.5 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
          </div>

          {/* Right Column: Scrollable List of Features */}
          <div className="flex flex-col w-full">
            {whyChooseList.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex gap-6 items-start border-b border-gray-300/40 last:border-b-0 pb-8 mb-8 last:pb-0 last:mb-0"
                >
                  {/* Icon Box */}
                  <div
                    style={{ width: "105px", height: "105px" }}
                    className="group bg-white hover:bg-[#044647] rounded-xl flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.03)] shrink-0 border border-gray-100/50 hover-wobble-skew transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src={`/media assets/home/why choose ${idx + 1}.svg`}
                      alt={item.title}
                      style={{ width: "55px", height: "55px" }}
                      className="group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    />
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-col gap-2 text-left">
                    <h3
                      style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 600,
                        fontSize: "26px",
                        lineHeight: "36px",
                        color: "#051B05",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "28px",
                        color: "#595B62",
                      }}
                      className="font-normal"
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