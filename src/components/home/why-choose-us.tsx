"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Award, Heart, BarChart3, BookOpen, ShieldCheck, Compass } from "lucide-react";

const whyChooseList = [
  {
    icon: Compass,
    title: "Talent Management Excellence",
    description: "Our talent management services help organizations attract and retain employees while enhancing workforce performance effectively.",
  },
  {
    icon: Heart,
    title: "Employee Engagement Experts",
    description: "We design engagement programs that motivate teams, boost morale, and improve collaboration across the workplace.",
  },
  {
    icon: BarChart3,
    title: "Workforce Planning Solutions",
    description: "We help organizations anticipate staffing needs, optimize resources with objectives. Every position contributes to sustainable growth.",
  },
  {
    icon: BookOpen,
    title: "Training And Development",
    description: "We provide training programs that build skills and leadership abilities. Employees gain knowledge to meet challenges and grow professionally.",
  },
  {
    icon: ShieldCheck,
    title: "Payroll And Compliance",
    description: "Our payroll and compliance services ensure accurate compensation, benefits management, and adherence to labor laws, helping organizations operate smoothly.",
  },
  {
    icon: Award,
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Sticky Content (Moves down as user scrolls) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col gap-6 text-left self-start">
            <span className="inline-flex self-start bg-[#C6D936] text-[#044647] px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-wider rounded-[2px]">
              // WHY CHOOSE US
            </span>

            <h2
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(30px, 4.5vw, 44px)",
                color: "#044647",
                lineHeight: 1.15,
              }}
              className="tracking-tight"
            >
              Helping organizations unlock people potential
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed max-w-md font-light" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
              The best way to improve workplace performance is to create and follow an HR strategy. Start with goals, then build processes to achieve them.
            </p>

            <div className="flex items-center gap-3 my-2">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center bg-[#044647] text-white"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="w-10 h-10 rounded-full bg-[#C6D936] flex items-center justify-center text-[#044647] hover:scale-110 transition-transform shadow-sm"
                aria-label="Contact us to get started"
              >
                <ArrowUpRight size={18} />
              </Link>
            </div>

            {/* Document Reviewing Image */}
            <div className="w-full rounded-3xl overflow-hidden shadow-md mt-4">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
                alt="HR strategy session"
                className="w-full h-[250px] object-cover"
              />
            </div>
          </div>

          {/* Right Column: Scrollable List of Features */}
          <div className="lg:col-span-7 flex flex-col w-full">
            {whyChooseList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex gap-6 items-start border-b border-gray-300/40 last:border-b-0 pb-8 mb-8 last:pb-0 last:mb-0"
                >
                  {/* Icon Box */}
                  <div className="group w-14 h-14 bg-white hover:bg-[#044647] rounded-xl flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.03)] shrink-0 border border-gray-100/50 hover-wobble-skew transition-all duration-300 cursor-pointer">
                    <Icon size={24} className="text-[#044647] group-hover:text-[#C6D936] transition-colors duration-300" />
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-col gap-2 text-left">
                    <h3
                      className="text-[#044647] font-bold text-lg leading-snug"
                      style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-gray-500 text-xs md:text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
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