"use client";

import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="w-full font-sans">
      {/* Top Banner Image with Title (500px Height on Desktop) */}
      <div className="w-full relative h-72 sm:h-96 md:h-125 overflow-hidden flex items-center">
        {/* Natural Full Color Background Image (No color overlay) */}
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
          alt="About Us Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Text Aligned at the Start (Left) */}
        <div className="relative z-10 w-full max-w-360 px-4 sm:px-6 xl:px-8 mx-auto flex flex-col items-start text-left">
          <h1 className="font-manrope text-[36px] sm:text-[48px] md:text-[62px] leading-tight sm:leading-14 md:leading-18.75 font-bold text-white tracking-tight drop-shadow-md">
            About Us
          </h1>
        </div>
      </div>

      {/* Bottom Breadcrumb Bar under the image with slight gray background */}
      <div className="w-full bg-[#F2F1ED] py-3.5 sm:py-4 border-b border-gray-200/60">
        <div className="w-full max-w-360 px-4 sm:px-6 xl:px-8 mx-auto flex items-center gap-2 font-dm-sans text-[15px] sm:text-[18px] leading-6 sm:leading-7 text-[#044647] font-normal">
          {/* FontAwesome Solid fa-house-chimney icon */}
          <svg className="w-3.75 h-3.75 fill-current text-[#044647] shrink-0" viewBox="0 0 576 512">
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32v192c0 17.7-14.3 32-32 32h-144c-17.7 0-32-14.3-32-32v-128h-64v128c0 17.7-14.3 32-32 32h-144c-17.7 0-32-14.3-32-32v-192h-32c-17.7 0-32-14.3-32-32.1 0-7.7 3-15.4 8.7-21.2L262.6 12.1c14.2-14.2 37.1-14.2 51.3 0l83.6 83.6V56c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v107.6l73.6 73.6c5.7 5.9 8.7 13.6 8.7 21.3z" />
          </svg>
          <Link href="/" className="hover:text-[#C6D936] transition-colors">
            Home
          </Link>
          <span className="text-[#044647]">/</span>
          <span className="text-[#044647]">About Us</span>
        </div>
      </div>
    </section>
  );
}
