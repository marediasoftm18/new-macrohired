"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#044647] text-white rounded-t-[40px] lg:rounded-t-[60px] relative overflow-hidden font-sans flex flex-col items-center justify-center">
      
      {/* Ribbon Watermark Patterns */}
      <div className="absolute -left-12.5 -top-12.5 opacity-[0.02] text-white pointer-events-none select-none">
        <svg className="w-80 h-80" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C25 25, 25 75, 50 100 C75 75, 75 25, 50 0 Z" />
        </svg>
      </div>
      <div className="absolute -right-12.5 bottom-12.5 opacity-[0.02] text-white pointer-events-none select-none">
        <svg className="w-80 h-80" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C25 25, 25 75, 50 100 C75 75, 75 25, 50 0 Z" />
        </svg>
      </div>

      <div className="w-full max-w-350 px-4 sm:px-6 md:px-12 xl:px-16 mx-auto">
        
        {/* Top CTA & Newsletter Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 py-14 md:py-28 border-b border-white/10 text-left">
          <h2
            className="text-[32px] sm:text-[42px] lg:text-[52px] font-semibold leading-tight sm:leading-13 lg:leading-15.5 text-white font-manrope max-w-2xl"
          >
            Get the support you need,<br className="hidden sm:inline" /> when you need it
          </h2>

          {/* Newsletter Input Form */}
          <div className="flex flex-col gap-3 w-full max-w-125">
            <span
              className="text-[18px] sm:text-[24px] font-medium leading-7 text-white font-dm-sans"
            >
              Sign up for our Newsletter
            </span>
            <div className="bg-[#C6D936] rounded-2xl sm:rounded-full p-1.5 pl-4 sm:pl-6 pr-1.5 flex flex-col sm:flex-row items-center gap-2 sm:gap-0 shadow-sm w-full max-w-125 h-auto sm:h-15">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:grow bg-transparent border-none outline-none text-[16px] sm:text-[18px] leading-7 text-[#051B05] placeholder-[#051B05]/60 font-normal py-2 sm:py-0"
              />
              <button
                className="w-full sm:w-12 h-12 rounded-full bg-[#044647] hover:scale-105 transition-transform flex items-center justify-center text-white shrink-0"
                aria-label="Subscribe"
              >
                <span className="material-symbols-outlined text-[20px] select-none leading-none">
                  arrow_outward
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Middle Footer Columns Grid (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 xl:gap-20 py-12 md:py-16 text-left justify-between">
          
          {/* Column 1: About Info */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <Link href="/" className="flex items-center gap-2 select-none">
              {/* Custom logo icon */}
              <svg className="w-6 h-6 text-[#C6D936] fill-current" viewBox="0 0 100 100">
                <path d="M50 0 C25 25, 25 75, 50 100 C75 75, 75 25, 50 0 Z" />
              </svg>
              <span className="font-dm-sans text-white text-[28px] sm:text-[36px] leading-7 font-normal">Macrohired</span>
            </Link>

            <p className="font-dm-sans text-white text-[16px] sm:text-[18px] leading-6.5 sm:leading-7 font-normal">
              We support modern organizations with strategic human resource solutions, delivering growth, efficiency, and people-focused success.
            </p>

            <div
              className="font-dm-sans text-[18px] sm:text-[20px] leading-7 font-normal text-white flex items-center gap-2 mt-2"
            >
              <span className="font-bold">Follow Us</span>
              <span>&mdash;</span>
              <div className="flex gap-2.5">
                <a href="#" className="hover:text-[#C6D936] transition-colors">In.</a>
                <a href="#" className="hover:text-[#C6D936] transition-colors">Fa.</a>
                <a href="#" className="hover:text-[#C6D936] transition-colors">X.</a>
                <a href="#" className="hover:text-[#C6D936] transition-colors">Yt.</a>
              </div>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <h4
              className="font-manrope text-white text-[22px] sm:text-[28px] leading-7 sm:leading-8.5 font-semibold"
            >
              Useful Links
            </h4>
            <nav className="flex flex-col gap-3 text-[16px] sm:text-[18px] leading-6.5 sm:leading-7 font-normal text-gray-300 font-dm-sans">
              <Link href="/" className="text-[#C6D936] hover:text-[#C6D936] transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="hover:text-[#C6D936] transition-colors">
                About Us
              </Link>
              <Link href="#" className="hover:text-[#C6D936] transition-colors">
                Team Members
              </Link>
              <Link href="#" className="hover:text-[#C6D936] transition-colors">
                Blog
              </Link>
              <Link href="#" className="hover:text-[#C6D936] transition-colors">
                Shop
              </Link>
            </nav>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <h4
              className="font-manrope text-white text-[22px] sm:text-[28px] leading-7 sm:leading-8.5 font-semibold"
            >
              Services
            </h4>
            <nav className="flex flex-col gap-3 text-[16px] sm:text-[18px] leading-6.5 sm:leading-7 font-normal text-gray-300 font-dm-sans">
              <Link href="#" className="hover:text-[#C6D936] transition-colors">
                Strategic Talent Management
              </Link>
              <Link href="#" className="hover:text-[#C6D936] transition-colors">
                Staff Engagement Programs
              </Link>
              <Link href="#" className="hover:text-[#C6D936] transition-colors">
                Staff Development Solutions
              </Link>
              <Link href="#" className="hover:text-[#C6D936] transition-colors">
                Professional HR Consulting
              </Link>
              <Link href="#" className="hover:text-[#C6D936] transition-colors">
                Payroll Management Services
              </Link>
            </nav>
          </div>

          {/* Column 4: Contact info */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <h4
              className="font-manrope text-white text-[22px] sm:text-[28px] leading-7 sm:leading-8.5 font-semibold"
            >
              Contact Us
            </h4>
            <div className="flex flex-col gap-4 text-xs md:text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#C6D936] text-[16px] shrink-0 select-none">
                  phone
                </span>
                <a href="tel:+11234567890" className="hover:text-[#C6D936] transition-colors font-dm-sans text-[16px] sm:text-[18px] leading-6.5 sm:leading-7 font-normal text-white">
                  +1 (123) 456 7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#C6D936] text-[16px] shrink-0 select-none">
                  mail
                </span>
                <a href="mailto:info@example.com" className="hover:text-[#C6D936] transition-colors font-dm-sans text-[16px] sm:text-[18px] leading-6.5 sm:leading-7 font-normal text-white">
                  info@example.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#C6D936] text-[16px] shrink-0 mt-0.5 select-none">
                  location_on
                </span>
                <span className="font-dm-sans text-[16px] sm:text-[18px] leading-6.5 sm:leading-7 font-normal text-white">
                  7164 Barton Terrace, North Penelope, Vermont &ndash; 97879, USA
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright bar */}
      <div className="w-full bg-[#C6D936] text-[#044647] py-4 sm:py-5 relative z-10">
        <div className="w-full max-w-350 px-4 sm:px-6 md:px-12 xl:px-16 mx-auto flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-3 text-[#051B05] font-dm-sans text-[15px] sm:text-[18px] leading-6 sm:leading-7 font-normal text-center md:text-left">
          <span>&copy; Copyright {new Date().getFullYear()} Macrohired All Rights Reserved</span>
          <span>
            Developed and designed by Macrohired
          </span>
        </div>
      </div>

    </footer>
  );
}
