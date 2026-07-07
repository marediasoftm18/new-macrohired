"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const clientLogos = [
  {
    name: "Sitemark",
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: "Network",
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="5" r="2.5" fill="currentColor" />
        <circle cx="5" cy="12" r="2.5" fill="currentColor" />
        <circle cx="19" cy="12" r="2.5" fill="currentColor" />
        <circle cx="12" cy="19" r="2.5" fill="currentColor" />
        <line x1="12" y1="7.5" x2="5" y2="12" />
        <line x1="12" y1="7.5" x2="19" y2="12" />
        <line x1="5" y1="12" x2="12" y2="16.5" />
        <line x1="19" y1="12" x2="12" y2="16.5" />
      </svg>
    ),
  },
  {
    name: "vision",
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 0 0 18" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Penta",
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2v20M5 5h14M8 12h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Nextmove",
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M13 5l7 7-7 7M6 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const serviceCards = [
  {
    icon: "bar_chart",
    title: "Strategic Talent Management",
    description: "We help organizations identify and develop talent through structured planning.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    link: "/services/recruitment",
  },
  {
    icon: "group",
    title: "Staff Engagement Programs",
    description: "We design engagement initiatives that foster a positive work culture.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    link: "/services/staffing",
  },
  {
    icon: "menu_book",
    title: "Staff Development Solutions",
    description: "Our staff development programs focus on career progression pathways.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    link: "/services/consulting",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-[#F6F5F2] font-sans pb-16 md:pb-24 relative overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>

      {/* Top Client Brand Slider */}
      <div className="w-full py-10 border-b border-gray-200/50 bg-[#F6F5F2]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-6">
          <span 
            className="text-gray-500 text-xs md:text-sm tracking-wide font-medium"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            More Than <span className="text-[#044647] font-bold">5.2k+ Brand</span> with Work Hero
          </span>
        </div>

        {/* Infinite Slider */}
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="flex gap-16 animate-scroll whitespace-nowrap">
            {/* Render 3 sets of logos for seamless infinite loop */}
            {[...Array(3)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-16 items-center shrink-0">
                {clientLogos.map((logo, logoIdx) => (
                  <div
                    key={`${setIdx}-${logoIdx}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#044647] transition-colors cursor-pointer select-none font-bold text-lg uppercase tracking-wide"
                  >
                    {logo.icon}
                    <span>{logo.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Services Content */}
      <div className="max-w-7xl mx-auto px-6 mt-20 flex flex-col gap-12">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8">
          <div className="flex flex-col gap-4 max-w-xl text-left">
            <span className="inline-flex self-start bg-[#C6D936] text-[#044647] px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-wider rounded-xs">
              // OUR SERVICES
            </span>
            <h2
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(30px, 4.5vw, 48px)",
                color: "#044647",
                lineHeight: 1.15,
              }}
              className="tracking-tight"
            >
              Expert Solutions for Workforce Success
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 max-w-xl">
            <p className="text-gray-600 text-sm leading-relaxed">
              We provide tailored HR solutions that enhance employee performance, streamline processes, and drive organisational growth efficiently.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/services"
                className="px-6 py-3 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center bg-[#044647] text-white"
              >
                View Services
              </Link>
              <Link
                href="/services"
                className="w-10 h-10 rounded-full bg-[#C6D936] flex items-center justify-center text-[#044647] hover:scale-110 transition-transform shadow-sm"
                aria-label="View services list"
              >
                <span className="material-symbols-outlined text-[18px] select-none leading-none">
                  arrow_outward
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {serviceCards.map((card, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl border border-gray-100 hover:bg-[#044647] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top line with Title and Icon */}
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <h3
                      style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 700,
                        fontSize: "20px",
                      }}
                      className="text-[#044647] group-hover:text-white transition-colors leading-snug"
                    >
                      {card.title}
                    </h3>
                    <div className="text-[#044647] group-hover:text-[#C6D936] transition-colors shrink-0">
                      <span className="material-symbols-outlined text-[28px] select-none leading-none">
                        {card.icon}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 group-hover:text-gray-200 text-sm leading-relaxed mb-8 transition-colors">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Image with overlay arrow */}
                <div className="w-full h-48 rounded-2xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay circular arrow button */}
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#044647] shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="material-symbols-outlined text-[20px] select-none leading-none">
                        arrow_outward
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
