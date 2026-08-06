"use client";

import { motion } from "framer-motion";

const servicesList = [
  {
    title: "Strategic Talent Management",
    description: "We help organizations identify and develop talent through structured planning.",
    icon: "/media assets/services/wcu-04.svg",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Staff Engagement Programs",
    description: "We design engagement initiatives that foster a positive work culture.",
    icon: "/media assets/services/sd.svg",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Staff Development Solutions",
    description: "Our staff development programs focus on career progression pathways.",
    icon: "/media assets/services/wcu-01.svg",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Professional HR Consulting",
    description: "We provide expert guidance on HR policy, compliance, and workforce planning.",
    icon: "/media assets/services/wcu-02.svg",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Payroll Management Services",
    description: "We ensure accurate, timely, and compliant payroll processing for your business.",
    icon: "/media assets/services/pm.svg",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Corporate Training Programs",
    description: "We deliver customized training programs designed to upscale employee skills.",
    icon: "/media assets/services/wcu-05.svg",
    image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full bg-white py-14 sm:py-18 md:py-22 lg:py-26 font-sans relative overflow-hidden">
      {/* Background Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#e0e0e0 1px, transparent 1px), linear-gradient(90deg, #e0e0e0 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-12 mx-auto flex flex-col gap-10 sm:gap-12 md:gap-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-6 flex flex-col gap-3.5 text-left">
            <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] md:text-[15px] lg:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
              {"// OUR SERVICES"}
            </span>
            <h2 className="font-manrope text-[30px] sm:text-[38px] md:text-[44px] lg:text-[52px] leading-tight sm:leading-12 lg:leading-15.5 font-semibold text-[#051B05] tracking-tight">
              Expert Solutions for<br className="hidden sm:inline" /> Workforce Success
            </h2>
          </div>

          <div className="lg:col-span-6 flex items-end">
            <p className="font-dm-sans text-[#595B62] font-normal text-[15px] sm:text-[16px] md:text-[18px] leading-7 text-left max-w-145 lg:max-w-full">
              We provide tailored HR solutions that enhance employee performance, streamline processes, and drive organizational growth efficiently.
            </p>
          </div>
        </div>

        {/* 6 Services Grid (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group service-inner bg-[#F2F0ED] hover:bg-[#044647] rounded-[15px] p-5 sm:p-6 w-full h-auto lg:h-[524.92px] border border-gray-200/60 shadow-none transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="service-content pt-2 sm:pt-4 pb-4 sm:pb-6 px-0">
                {/* Top line with Title and Masked SVG Icon */}
                <div className="flex justify-between items-start gap-4 mb-4 sm:mb-6">
                  <h3 className="font-manrope service-title text-[#044647] group-hover:text-white transition-colors max-w-65 font-semibold text-[22px] md:text-[22px] lg:text-[26px] leading-7 md:leading-8.5 lg:leading-9">
                    {service.title}
                  </h3>
                  <div className="shrink-0">
                    <div
                      className="icon-masked-img w-12 h-12 md:w-14 md:h-14 lg:w-15 lg:h-15 bg-[#044647] group-hover:bg-[#c8db2b] transition-colors duration-300"
                      style={{
                        maskImage: `url('${encodeURI(service.icon)}')`,
                        WebkitMaskImage: `url('${encodeURI(service.icon)}')`,
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                      }}
                      aria-label={`${service.title} Icon`}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="font-dm-sans service-description text-[#595B62] group-hover:text-white transition-colors font-normal mb-4 sm:mb-6 max-w-92.5 text-[15px] md:text-[17px] lg:text-[18px] leading-6 sm:leading-6.5 md:leading-7">
                  {service.description}
                </p>
              </div>

              {/* Bottom Image with overlay arrow button */}
              <div className="service-img w-full h-52 md:h-56 lg:h-[266.92px] rounded-[15px] overflow-hidden relative transition-transform duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay circular arrow button on hover */}
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 md:w-14 md:h-14 lg:w-15 lg:h-15 rounded-full bg-white flex items-center justify-center text-[#044647] shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[20px] md:text-[22px] select-none leading-none">
                      arrow_outward
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
