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

      <div className="w-full max-w-360 px-4 sm:px-6 md:px-4 lg:px-16 mx-auto">

        {/* Top CTA & Newsletter Block */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start md:items-center lg:items-center gap-6 md:gap-2 py-10 md:py-12.5 lg:py-16 border-b border-white/10 text-left">
          <h2
            className="text-[28px] sm:text-[36px] md:text-[34px] lg:text-[48px] tracking-tighter font-semibold sm:leading-11 md:leading-11 lg:leading-14 text-white font-manrope max-w-xl md:max-w-100 lg:max-w-3xl"
          >
            Get the support you need,<br className="hidden sm:inline" /> when you need it
          </h2>

          {/* Newsletter Input Form */}
          <div className="flex flex-col gap-2.5 w-full max-w-125 md:max-w-[320px] lg:max-w-125">
            <span
              className="text-[17px] sm:text-[20px] md:text-[20px] font-semibold leading-7 md:leading-6 text-white font-manrope"
            >
              Sign up for our Newsletter
            </span>
            <div className="bg-[#C6D936] rounded-full p-1.5 pl-5 sm:pl-6 pr-1.5 flex items-center justify-between shadow-sm w-full max-w-125 h-13 sm:h-14 md:h-12">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full grow bg-transparent border-none outline-none text-[15px] sm:text-[17px] md:text-[18px] leading-7 text-[#051B05] placeholder-[#051B05]/60 font-dm-sans font-normal py-2 sm:py-0"
              />
              <button
                className="w-10 h-10 sm:w-11 sm:h-11 md:h-10 md:w-10 rounded-full bg-[#044647] hover:scale-105 transition-transform flex items-center justify-center text-white shrink-0 shadow-xs"
                aria-label="Subscribe"
              >
                <span className="material-symbols-outlined text-[18px] sm:text-[20px] select-none leading-none">
                  arrow_outward
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Middle Footer Columns Grid (Centered & Justified) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-16 py-10 md:py-14 text-left justify-between items-start">

          {/* Column 1: About Info */}
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-5">
            <Link href="/" className="flex items-center gap-2 select-none">
              {/* Custom logo icon */}
              <svg className="w-6 h-6 text-[#C6D936] fill-current" viewBox="0 0 100 100">
                <path d="M50 0 C25 25, 25 75, 50 100 C75 75, 75 25, 50 0 Z" />
              </svg>
              <span className="font-dm-sans text-white text-center text-[26px] sm:text-[32px] md:text-[36px] lg:text-[32px] leading-7 font-normal">Macrohired</span>
            </Link>

            <p className="font-dm-sans text-white text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] leading-6 sm:leading-6.5 md:leading-7 font-normal text-center">
              We support modern organizations with strategic human resource solutions, delivering growth, efficiency, and people-focused success.
            </p>

            <div
              className="font-dm-sans text-[16px] sm:text-[18px] leading-7 font-normal text-white flex items-center gap-3 mt-1"
            >
              <span className="font-bold">Follow Us</span>
              <span>&mdash;</span>
              <div className="flex items-center gap-2.5">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C6D936] text-white hover:text-[#051B05] transition-all flex items-center justify-center text-[13px]"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C6D936] text-white hover:text-[#051B05] transition-all flex items-center justify-center text-[13px]"
                >
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a
                  href="#"
                  aria-label="X Twitter"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C6D936] text-white hover:text-[#051B05] transition-all flex items-center justify-center text-[13px]"
                >
                  <i className="fa-brands fa-x-twitter" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C6D936] text-white hover:text-[#051B05] transition-all flex items-center justify-center text-[13px]"
                >
                  <i className="fa-brands fa-youtube" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="flex flex-col gap-4 sm:gap-5">
            <h4
              className="font-manrope text-white text-center text-[20px] sm:text-[24px] md:text-[28px] lg:text-[24px] leading-7 font-semibold"
            >
              Useful Links
            </h4>
            <nav className="flex flex-col gap-2.5 items-center text-[15px] sm:text-[17px] leading-6 sm:leading-6.5 md:leading-7 font-normal text-gray-300 font-dm-sans">
              <Link href="/" className="text-[#C6D936] hover:text-[#C6D936] transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="hover:text-[#C6D936] transition-colors">
                About Us
              </Link>
              <Link href="/services" className="hover:text-[#C6D936] transition-colors">
                Services
              </Link>
              <Link href="#" className="hover:text-[#C6D936] transition-colors">
                Team Members
              </Link>
              <Link href="/blog" className="hover:text-[#C6D936] transition-colors">
                Blog
              </Link>
              <Link href="#" className="hover:text-[#C6D936] transition-colors">
                Shop
              </Link>
            </nav>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-4 sm:gap-5">
            <h4
              className="font-manrope text-white text-center text-[20px] sm:text-[24px] md:text-[28px] lg:text-[24px] leading-7 font-semibold"
            >
              Services
            </h4>
            <nav className="flex flex-col gap-2.5 items-center text-[15px] sm:text-[17px] leading-6 sm:leading-6.5 md:leading-7 font-normal text-gray-300 font-dm-sans">
              <Link href="/services" className="hover:text-[#C6D936] transition-colors">
                Strategic Talent Management
              </Link>
              <Link href="/services" className="hover:text-[#C6D936] transition-colors">
                Staff Engagement Programs
              </Link>
              <Link href="/services" className="hover:text-[#C6D936] transition-colors">
                Staff Development Solutions
              </Link>
              <Link href="/services" className="hover:text-[#C6D936] transition-colors">
                Professional HR Consulting
              </Link>
              <Link href="/services" className="hover:text-[#C6D936] transition-colors">
                Payroll Management Services
              </Link>
            </nav>
          </div>

          {/* Column 4: Contact info */}
          <div className="flex flex-col gap-4 sm:gap-5">
            <h4
              className="font-manrope text-white text-center text-[20px] sm:text-[24px] md:text-[28px] lg:text-[24px] leading-7 font-semibold"
            >
              Contact Us
            </h4>
            <div className="flex flex-col gap-3 items-center text-gray-300 font-dm-sans text-[15px] sm:text-[17px] md:text-[18px] lg:text-[17px] leading-6 sm:leading-6.5 md:leading-7 font-normal">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#C6D936] text-[18px] shrink-0 select-none">
                  call
                </span>
                <a href="tel:+11234567890" className="hover:text-[#C6D936] transition-colors font-normal text-white">
                  +1 (123) 456 7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#C6D936] text-[18px] shrink-0 select-none">
                  mail
                </span>
                <a href="mailto:info@example.com" className="hover:text-[#C6D936] transition-colors font-normal text-white">
                  info@example.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#C6D936] text-[18px] shrink-0 mt-0.5 select-none">
                  badge
                </span>
                <span className="font-normal text-white text-center leading-6">
                  7164 Barton Terrace, North Penelope, Vermont &ndash; 97879, USA
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-[#C6D936] text-[#051B05] py-4 sm:py-4.5 relative z-10">
        <div className="w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-16 mx-auto flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-3 text-[#051B05] font-dm-sans text-[14px] sm:text-[16px] font-normal text-center md:text-left">
          <span>&copy; Copyright {new Date().getFullYear()} Macrohired All Rights Reserved</span>
          <span>
            Developed and designed by Marediasoft
          </span>
        </div>
      </div>

    </footer>
  );
}
