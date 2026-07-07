"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#044647] text-white rounded-t-[40px] lg:rounded-t-[60px] relative overflow-hidden font-sans pt-16 md:pt-20">
      
      {/* Ribbon Watermark Patterns */}
      <div className="absolute left-[-50px] top-[-50px] opacity-[0.02] text-white pointer-events-none select-none">
        <svg className="w-80 h-80" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C25 25, 25 75, 50 100 C75 75, 75 25, 50 0 Z" />
        </svg>
      </div>
      <div className="absolute right-[-50px] bottom-[50px] opacity-[0.02] text-white pointer-events-none select-none">
        <svg className="w-80 h-80" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C25 25, 25 75, 50 100 C75 75, 75 25, 50 0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full">
        
        {/* Top CTA & Newsletter Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-12 border-b border-white/10 text-left">
          <h2
            className="text-2xl md:text-4xl font-extrabold max-w-xl leading-tight"
            style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            Get the support you need, when you need it
          </h2>

          {/* Newsletter Input Form */}
          <div className="flex flex-col gap-2.5 w-full max-w-sm">
            <span
              className="text-xs font-bold uppercase tracking-wider text-gray-300"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Sign up for our Newsletter
            </span>
            <div className="bg-[#C6D936] rounded-full p-1.5 pl-5 pr-1.5 flex items-center shadow-sm w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-transparent border-none outline-none text-xs md:text-sm text-[#044647] placeholder-[#044647]/50 font-medium"
              />
              <button
                className="w-9 h-9 rounded-full bg-[#044647] hover:scale-105 transition-transform flex items-center justify-center text-white"
                aria-label="Subscribe"
              >
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Footer Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16 text-left">
          
          {/* Column 1: About Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 select-none">
              {/* Custom logo icon */}
              <svg className="w-6 h-6 text-[#C6D936] fill-current" viewBox="0 0 100 100">
                <path d="M50 0 C25 25, 25 75, 50 100 C75 75, 75 25, 50 0 Z" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 800,
                  fontSize: "24px",
                  letterSpacing: "-0.02em",
                }}
                className="text-white"
              >
                Macrohired
              </span>
            </Link>

            <p
              className="text-gray-300 text-xs md:text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              We support modern organizations with strategic human resource solutions, delivering growth, efficiency, and people-focused success.
            </p>

            <div
              className="text-xs text-gray-300 flex items-center gap-2 mt-2"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
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
          <div className="lg:col-span-2 flex flex-col gap-6 lg:pl-4">
            <h4
              className="font-bold text-sm md:text-base text-white"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Useful Links
            </h4>
            <nav className="flex flex-col gap-3 text-xs md:text-sm text-gray-300">
              <Link href="/" className="text-[#C6D936] hover:text-[#C6D936] transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="hover:text-[#C6D936] transition-colors">
                About Us
              </Link>
              <Link href="/team" className="hover:text-[#C6D936] transition-colors">
                Team Members
              </Link>
              <Link href="/blog" className="hover:text-[#C6D936] transition-colors">
                Blog
              </Link>
              <Link href="/shop" className="hover:text-[#C6D936] transition-colors">
                Shop
              </Link>
            </nav>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4
              className="font-bold text-sm md:text-base text-white"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Services
            </h4>
            <nav className="flex flex-col gap-3 text-xs md:text-sm text-gray-300">
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
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4
              className="font-bold text-sm md:text-base text-white"
              style={{ fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Contact Us
            </h4>
            <div className="flex flex-col gap-4 text-xs md:text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-[#C6D936] shrink-0" />
                <a href="tel:+11234567890" className="hover:text-[#C6D936] transition-colors">
                  +1 (123) 456 7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-[#C6D936] shrink-0" />
                <a href="mailto:info@example.com" className="hover:text-[#C6D936] transition-colors">
                  info@example.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C6D936] shrink-0 mt-0.5" />
                <span>
                  7164 Barton Terrace, North Penelope, Vermont &ndash; 97879, USA
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright bar */}
      <div className="w-full bg-[#C6D936] text-[#044647] py-5 px-6 md:px-16 relative z-10 flex items-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-3 text-xs font-semibold">
          <span style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
            &copy; Copyright {new Date().getFullYear()} Macrohired All Rights Reserved
          </span>
          <span style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
            Developed and designed by Macrohired
          </span>
        </div>
      </div>

    </footer>
  );
}
