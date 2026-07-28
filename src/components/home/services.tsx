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
    <section className="w-full bg-[#F6F5F2] font-sans pb-14 md:pb-20 lg:pb-24 relative overflow-hidden">
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
      <div className="w-full py-6 md:py-10 border-b border-gray-200/50 bg-[#F6F5F2]">
        <div className="max-w-350 mx-auto px-4 sm:px-6 flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="grow border-t border-gray-300/60 max-w-100 hidden sm:block"></div>
          <span 
            className="font-manrope text-[#051b05] text-base md:text-lg lg:text-xl font-semibold tracking-wide shrink-0 text-center"
          >
            More Than <span className="text-[#044647] font-semibold">5.2k+ Brand</span> with Work Hero
          </span>
          <div className="grow border-t border-gray-300/60 max-w-100 hidden sm:block"></div>
        </div>

        {/* Infinite Slider */}
        <div className="relative w-full overflow-hidden flex items-center py-2">
          <div className="flex gap-4 md:gap-6 animate-scroll whitespace-nowrap">
            {[...Array(3)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-4 md:gap-6 items-center shrink-0">
                {clientLogos.map((logo, logoIdx) => (
                  <div
                    key={`${setIdx}-${logoIdx}`}
                    className="flex items-center justify-center bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all hover:scale-105 select-none w-[200px] md:w-[240px] lg:w-[256px] h-24 md:h-28 lg:h-30"
                  >
                    <img
                      src={logo.path}
                      alt={logo.name}
                      className="w-36 md:w-40 lg:w-44 h-10 md:h-12 lg:h-12.5 object-contain opacity-70 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Services Content */}
      <div className="max-w-350 w-full mx-auto px-4 sm:px-6 md:px-8 xl:px-5 mt-10 md:mt-14 lg:mt-20 flex flex-col gap-8 md:gap-10 lg:gap-12">
        {/* Header Block matching reference design */}
        <div className="flex flex-col items-start gap-4 md:gap-5 text-left w-full">
          <span 
            className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] md:text-[15px] lg:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]"
          >
            {"// OUR SERVICES"}
          </span>

          <h2
            className="font-manrope tracking-tight font-semibold text-[32px] sm:text-[42px] md:text-[48px] lg:text-[54px] leading-tight md:leading-[58px] lg:leading-[64px] text-[#051B05] max-w-3xl"
          >
            Expert Solutions for Workforce Success
          </h2>

          <p 
            className="font-dm-sans text-[#595B62] font-normal text-[16px] md:text-[17px] lg:text-[18px] leading-6.5 md:leading-7 max-w-2xl" 
          >
            We provide tailored HR solutions that enhance employee performance, streamline processes, and drive organisational growth efficiently.
          </p>

          <div className="flex items-center gap-3 mt-1 sm:mt-2">
            <Link
              href="/services"
              className="font-dm-sans px-7 md:px-8 py-3.5 md:py-4 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center bg-[#044647] text-white font-medium text-[16px] md:text-[18px] leading-6"
            >
              View Services
            </Link>
            <Link
              href="/services"
              className="w-12 h-12 md:w-13 md:h-13 rounded-full bg-[#C6D936] flex items-center justify-center text-[#044647] hover:scale-110 transition-transform shadow-sm"
              aria-label="View services list"
            >
              <span className="material-symbols-outlined text-[20px] md:text-[22px] select-none leading-none">
                arrow_outward
              </span>
            </Link>
          </div>
        </div>

        {/* Services Cards Grid matching reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 mt-2 md:mt-4">
          {serviceCards.map((card, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group service-inner bg-white rounded-3xl p-6 md:p-8 w-full h-full shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100/80 hover:border-[#044647]/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Header Row: Title & SVG Icon */}
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3
                      className="font-manrope text-[#044647] font-semibold text-[22px] md:text-[24px] lg:text-[26px] leading-7 md:leading-8 max-w-[200px]"
                    >
                      {card.title}
                    </h3>
                    <div className="shrink-0">
                      <div
                        className="w-12 h-12 md:w-14 md:h-14 bg-[#044647]"
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
                    className="font-dm-sans text-[#595B62] font-normal mb-6 text-[15px] md:text-[16px] leading-6 sm:leading-6.5"
                  >
                    {card.description}
                  </p>
                </div>

                {/* Bottom Image with Rounded Corners matching screenshot */}
                <div className="w-full h-[200px] md:h-[220px] lg:h-[240px] rounded-2xl md:rounded-3xl overflow-hidden relative mt-auto">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
