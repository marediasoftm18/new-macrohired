"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Send, Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col font-sans" style={{ backgroundColor: "#044647", color: "#ffffff" }}>
      {/* Newsletter / CTA Banner */}
      <div className="w-full border-b border-blue-900/50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2 max-w-xl text-center lg:text-left">
            <h3
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                letterSpacing: "-0.01em",
              }}
            >
              Ready to Hire Top Talent?
            </h3>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter to receive the latest HR insights, industry trends, and job market updates.
            </p>
          </div>
          <div className="flex w-full max-w-md items-center bg-white/10 rounded-full p-1.5 border border-white/10">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow bg-transparent border-none outline-none text-sm text-white px-4 placeholder:text-gray-400"
            />
            <button
              className="p-3 rounded-full flex items-center justify-center transition-all hover:scale-105"
              style={{ backgroundColor: "#C6D936", color: "#044647" }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About HireHive */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="p-2 rounded-lg flex items-center justify-center bg-white/10">
              <Briefcase className="text-primary-yellow" size={24} />
            </div>
            <span
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 800,
                fontSize: "24px",
                letterSpacing: "-0.02em",
              }}
            >
              Macro<span className="text-teal-accent">Hired</span>
            </span>
          </Link>
          <p className="text-gray-300 text-sm leading-relaxed">
            Leading HR and talent recruiting partner connecting ambitious employers with top-tier professionals. We streamline talent acquisition and support organizational growth.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-teal-accent hover:text-navy-blue transition-all" aria-label="Facebook">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-teal-accent hover:text-navy-blue transition-all" aria-label="Twitter">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-teal-accent hover:text-navy-blue transition-all" aria-label="LinkedIn">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-teal-accent hover:text-navy-blue transition-all" aria-label="Instagram">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h4
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Quick Links
          </h4>
          <nav className="flex flex-col gap-3 text-sm text-gray-300">
            <Link href="/" className="hover:text-primary-yellow transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-primary-yellow transition-colors">
              About Us
            </Link>
            <Link href="/jobs" className="hover:text-primary-yellow transition-colors">
              Find Jobs
            </Link>
            <Link href="/contact" className="hover:text-primary-yellow transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-6">
          <h4
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Our Services
          </h4>
          <nav className="flex flex-col gap-3 text-sm text-gray-300">
            <Link href="/services/recruitment" className="hover:text-primary-yellow transition-colors">
              Direct Hire Recruitment
            </Link>
            <Link href="/services/staffing" className="hover:text-primary-yellow transition-colors">
              Contract & Temporary Staffing
            </Link>
            <Link href="/services/consulting" className="hover:text-primary-yellow transition-colors">
              HR Advisory & Consulting
            </Link>
            <Link href="/services/executive" className="hover:text-primary-yellow transition-colors">
              Executive Search
            </Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h4
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Get In Touch
          </h4>
          <div className="flex flex-col gap-4 text-sm text-gray-300">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-primary-yellow shrink-0 mt-1" />
              <span>123 Staffing Blvd, Suite 400, New York, NY 10001</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-primary-yellow shrink-0" />
              <span>+1 (234) 567-890</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-primary-yellow shrink-0" />
              <span>info@hirehive.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full border-t border-blue-900/50 py-6 px-6 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} HireHive. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary-yellow">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-yellow">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
