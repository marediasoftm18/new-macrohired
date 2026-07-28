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
      <div className="w-full py-8 md:py-12 border-b border-gray-200/50 bg-[#F6F5F2]">
        <div className="max-w-350 mx-auto px-4 sm:px-5 flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="grow border-t border-gray-300/60 max-w-100 hidden sm:block"></div>
          <span 
            className="font-manrope text-[#051b05] text-base sm:text-xl font-semibold tracking-wide shrink-0 text-center"
          >
            More Than <span className="text-[#044647] font-semibold">5.2k+ Brand</span> with Work Hero
          </span>
          <div className="grow border-t border-gray-300/60 max-w-100 hidden sm:block"></div>
        </div>

        {/* Infinite Slider */}
        <div className="relative w-full overflow-hidden flex items-center py-2">
          <div className="flex gap-4 sm:gap-6 animate-scroll whitespace-nowrap">
            {/* Render 3 sets of logos for seamless infinite loop */}
            {[...Array(3)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-4 sm:gap-6 items-center shrink-0">
                {clientLogos.map((logo, logoIdx) => (
                  <div
                    key={`${setIdx}-${logoIdx}`}
                    className="flex items-center justify-center bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all hover:scale-105 select-none w-[200px] sm:w-[256px] h-24 sm:h-30"
                  >
                    <img
                      src={logo.path}
                      alt={logo.name}
                      className="w-36 sm:w-44 h-10 sm:h-12.5 object-contain opacity-70 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Services Content */}
      <div className="max-w-350 w-full mx-auto px-4 sm:px-6 md:px-8 xl:px-5 mt-12 md:mt-0 flex flex-col gap-10 md:gap-2">
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,470px)_minmax(0,560px)_auto] lg:items-end gap-6 md:gap-8 lg:gap-x-10">
          <div className="flex flex-col gap-4 text-left max-w-117.5">
            <span 
              className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] sm:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]"
            >
              {"// OUR SERVICES"}
            </span>
            <h2
              className="font-manrope tracking-tight font-semibold text-[32px] sm:text-[42px] lg:text-[52px] leading-tight sm:leading-13 lg:leading-[62px] text-[#051B05]"
            >
              Expert Solutions for Workforce Success
            </h2>
          </div>

          <div className="flex items-start lg:justify-center">
            <p 
              className="font-dm-sans text-[#595B62] font-normal max-w-130 text-[16px] sm:text-[18px] leading-6.5 sm:leading-7" 
            >
              We provide tailored HR solutions that enhance employee performance, streamline processes, and drive organisational growth efficiently.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 lg:justify-self-end">
              <Link
                href="/services"
                className="font-dm-sans px-7 sm:px-8.75 py-3.5 sm:py-3.75 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center bg-[#044647] text-white font-medium text-[16px] sm:text-[18px] leading-7.5"
              >
                View Services
              </Link>
              <Link
                href="/services"
                className="w-12 h-12 sm:w-15 sm:h-15 rounded-full bg-[#C6D936] flex items-center justify-center text-[#044647] hover:scale-110 transition-transform shadow-sm"
                aria-label="View services list"
              >
                <span className="material-symbols-outlined text-[20px] sm:text-[22px] select-none leading-none">
                  arrow_outward
                </span>
              </Link>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 md:mt-6">
          {serviceCards.map((card, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group service-inner bg-white hover:bg-[#044647] rounded-[15px] p-5 w-full h-auto lg:h-[524.92px] shadow-none border border-gray-100 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="service-content pt-3 sm:pt-5 pb-5 sm:pb-7.5 px-0">
                  {/* Top line with Title and Icon */}
                  <div className="flex justify-between items-start gap-4 mb-4 sm:mb-6">
                    <h3
                      className="font-manrope service-title text-[#044647] group-hover:text-white transition-colors max-w-65 font-semibold text-[22px] sm:text-[26px] leading-7 sm:leading-[34px]"
                    >
                      {card.title}
                    </h3>
                    <div className="shrink-0">
                      <div
                        className="icon-masked-img w-12 h-12 sm:w-15 sm:h-15 bg-[#044647] group-hover:bg-[#c8db2b] transition-colors duration-300"
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
                    className="font-dm-sans service-description text-[#595B62] group-hover:text-white transition-colors font-normal mb-6 sm:mb-8 max-w-92.5 text-[15px] sm:text-[16px] leading-6 sm:leading-6.5"
                  >
                    {card.description}
                  </p>
                </div>

                {/* Bottom Image with overlay arrow */}
                <div className="service-img w-full h-[220px] sm:h-[266.92px] rounded-[15px] overflow-hidden relative transition-transform duration-300">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay circular arrow button */}
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 sm:w-15 sm:h-15 rounded-full bg-white flex items-center justify-center text-[#044647] shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="material-symbols-outlined text-[20px] sm:text-[22px] select-none leading-none">
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
