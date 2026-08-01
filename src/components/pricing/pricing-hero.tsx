"use client";

import Link from "next/link";

export default function PricingHero() {
  return (
    <section className="w-full font-sans">
      {/* Top Banner Image with Title (Matching Design Header) */}
      <div className="w-full relative h-64 sm:h-80 md:h-100 lg:h-112 overflow-hidden flex items-center">
        {/* Banner Image */}
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
          alt="Pricing Plan Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Banner Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content Title */}
        <div className="relative z-10 w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-16 mx-auto flex flex-col items-start text-left">
          <h1 className="font-manrope text-[36px] sm:text-[48px] md:text-[56px] lg:text-[62px] leading-tight sm:leading-14 md:leading-18 font-bold text-white tracking-tight drop-shadow-md">
            Pricing Plan
          </h1>
        </div>
      </div>

      {/* Bottom Breadcrumb Bar */}
      <div className="w-full bg-[#F2F1ED] py-3.5 sm:py-4 border-b border-gray-200/60">
        <div className="w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-16 mx-auto flex items-center gap-2 font-dm-sans text-[15px] sm:text-[17px] md:text-[18px] leading-6 text-[#044647] font-normal">
          <svg className="w-4 h-4 fill-current text-[#044647] shrink-0" viewBox="0 0 576 512">
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32v192c0 17.7-14.3 32-32 32h-144c-17.7 0-32-14.3-32-32v-128h-64v128c0 17.7-14.3 32-32 32h-144c-17.7 0-32-14.3-32-32v-192h-32c-17.7 0-32-14.3-32-32.1 0-7.7 3-15.4 8.7-21.2L262.6 12.1c14.2-14.2 37.1-14.2 51.3 0l83.6 83.6V56c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v107.6l73.6 73.6c5.7 5.9 8.7 13.6 8.7 21.3z" />
          </svg>
          <Link href="/" className="hover:text-[#C6D936] transition-colors font-medium">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-[#044647] font-medium">Pricing Plan</span>
        </div>
      </div>
    </section>
  );
}
