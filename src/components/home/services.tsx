"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const clientLogos = [
  { name: "Client 01", path: "/media assets/home/client-01.png" },
  { name: "Client 02", path: "/media assets/home/client-02.png" },
  { name: "Client 03", path: "/media assets/home/client-03.png" },
  { name: "Client 04", path: "/media assets/home/client-04.png" },
  { name: "Client 05", path: "/media assets/home/client-05.png" },
];

const serviceCards = [
  {
    icon: "/media assets/home/strategic-talent-management.svg",
    title: "Strategic Talent Management",
    description: "We help organizations identify and develop talent through structured planning.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    link: "/services/recruitment",
  },
  {
    icon: "/media assets/home/staff-engagement-programs.svg",
    title: "Staff Engagement Programs",
    description: "We design engagement initiatives that foster a positive work culture.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    link: "/services/staffing",
  },
  {
    icon: "/media assets/home/staff-development-solutions.svg",
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
      <div className="w-full py-12 border-b border-gray-200/50 bg-[#F6F5F2]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-6 mb-8">
          <div className="grow border-t border-gray-300/60 max-w-100 hidden sm:block"></div>
          <span 
            className="text-[#051b05] text-xl font-semibold tracking-wide shrink-0"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            More Than <span className="text-[#044647] font-semibold">5.2k+ Brand</span> with Work Hero
          </span>
          <div className="grow border-t border-gray-300/60 max-w-100 hidden sm:block"></div>
        </div>

        {/* Infinite Slider */}
        <div className="relative w-full overflow-hidden flex items-center py-2">
          <div className="flex gap-6 animate-scroll whitespace-nowrap">
            {/* Render 3 sets of logos for seamless infinite loop */}
            {[...Array(3)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-6 items-center shrink-0">
                {clientLogos.map((logo, logoIdx) => (
                  <div
                    key={`${setIdx}-${logoIdx}`}
                    className="flex items-center justify-center bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all hover:scale-105 select-none w-[256px] h-[120px]"
                  >
                    <img
                      src={logo.path}
                      alt={logo.name}
                      className="w-[176px] h-[50px] object-contain opacity-70 hover:opacity-100 transition-all duration-300"
                    />
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
            <span 
              className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]"
            >
              {"// OUR SERVICES"}
            </span>
            <h2
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "clamp(32px, 4.5vw, 52px)",
                color: "#051B05",
                lineHeight: "62px",
              }}
              className="tracking-tight"
            >
              Expert Solutions for Workforce Success
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 max-w-xl">
            <p 
              className="text-[#595B62] font-normal" 
              style={{ 
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "18px",
                lineHeight: "28px",
              }}
            >
              We provide tailored HR solutions that enhance employee performance, streamline processes, and drive organisational growth efficiently.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/services"
                className="px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center bg-[#044647] text-white"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "30px",
                }}
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
                className="group bg-white rounded-3xl p-5 h-[525px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl border border-gray-100 hover:bg-[#044647] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top line with Title and Icon */}
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <h3
                      style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontWeight: 600,
                        fontSize: "26px",
                        lineHeight: "36px",
                      }}
                      className="text-[#044647] group-hover:text-white transition-colors"
                    >
                      {card.title}
                    </h3>
                    <div className="shrink-0">
                      <div
                        className="w-12 h-12 bg-[#044647] group-hover:bg-[#c8db2b] transition-colors duration-300"
                        style={{
                          maskImage: `url('${encodeURI(card.icon)}')`,
                          WebkitMaskImage: `url('${encodeURI(card.icon)}')`,
                          maskSize: "contain",
                          WebkitMaskSize: "contain",
                          maskRepeat: "no-repeat",
                          WebkitMaskRepeat: "no-repeat",
                          maskPosition: "center",
                          WebkitMaskPosition: "center",
                        }}
                        aria-label={`${card.title} Icon`}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p 
                    className="text-[#595B62] group-hover:text-white transition-colors font-normal mb-8"
                    style={{ 
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "18px",
                      lineHeight: "28px",
                    }}
                  >
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
