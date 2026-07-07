"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Mail, Clock, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <header className="w-full z-50 flex flex-col font-sans" style={{ transition: "all 0.3s ease" }}>
      {/* Top Utility Bar */}
      <div
        className="hidden md:flex justify-between items-center px-6 py-2 text-xs border-b border-gray-100"
        style={{
          backgroundColor: "#044647",
          color: "#ffffff",
          fontFamily: "var(--font-manrope), sans-serif",
        }}
      >
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Phone size={14} className="text-primary-yellow" />
            +1 (234) 567-890
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} className="text-primary-yellow" />
            info@macrohired.com
          </span>
          <span className="flex items-center gap-2">
            <Clock size={14} className="text-primary-yellow" />
            Mon - Fri: 9:00 AM - 6:00 PM
          </span>
        </div>
        {/* <div className="flex gap-4">
          <Link href="/jobs" className="hover:text-primary-yellow transition-colors">
            Candidate Portal
          </Link>
          <span>|</span>
          <Link href="/contact" className="hover:text-primary-yellow transition-colors">
            Employer Portal
          </Link>
        </div> */}
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full px-6 py-4 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "fixed top-0 left-0 shadow-md bg-white border-b border-gray-100" : "bg-white"
        }`}
        style={{
          zIndex: 1000,
        }}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div
            className="p-2 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#044647" }}
          >
            <Briefcase className="text-primary-yellow" size={24} />
          </div>
          <span
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 800,
              fontSize: "24px",
              letterSpacing: "-0.02em",
              color: "#044647",
            }}
          >
            Macro<span className="text-teal-accent">Hired</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              color: "#044647",
            }}
            className="hover:text-teal-accent transition-colors"
          >
            Home
          </Link>

          {/* About Us Dropdown */}
          <div className="relative group">
            <Link
              href="/about"
              className="flex items-center gap-1 hover:text-teal-accent transition-colors"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                color: "#044647",
              }}
            >
              About Us <ChevronDown size={16} />
            </Link>
            <div
              className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              style={{
                top: "100%",
                zIndex: 1010,
              }}
            >
              <div className="py-1">
                <Link
                  href="/team"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-accent transition-colors"
                >
                  Our Team
                </Link>
                <Link
                  href="/faq"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-accent transition-colors"
                >
                  FAQ
                </Link>
                <Link
                  href="/privacy-policy"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-accent transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-accent transition-colors"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown("services")}
              className="flex items-center gap-1 hover:text-teal-accent transition-colors"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                color: "#044647",
              }}
            >
              Services <ChevronDown size={16} />
            </button>
            <div
              className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              style={{
                top: "100%",
                zIndex: 1010,
              }}
            >
              <div className="py-1">
                <Link
                  href="/services/recruitment"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-accent transition-colors"
                >
                  Direct Hire Recruitment
                </Link>
                <Link
                  href="/services/staffing"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-accent transition-colors"
                >
                  Contract & Staffing
                </Link>
                <Link
                  href="/services/consulting"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-accent transition-colors"
                >
                  HR Consulting
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/jobs"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              color: "#044647",
            }}
            className="hover:text-teal-accent transition-colors"
          >
            Find Jobs
          </Link>

          <Link
            href="/ceo-talks"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              color: "#044647",
            }}
            className="hover:text-teal-accent transition-colors"
          >
            CEO Talks
          </Link>

          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              color: "#044647",
            }}
            className="hover:text-teal-accent transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-block px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-sm"
            style={{
              backgroundColor: "#C6D936",
              color: "#044647",
              fontFamily: "var(--font-manrope), sans-serif",
            }}
          >
            Get a Quote
          </Link>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            style={{ color: "#044647" }}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-[1999]"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-[2000] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <span
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontWeight: 800,
                      fontSize: "20px",
                      color: "#044647",
                    }}
                  >
                    Hire<span className="text-teal-accent">Hive</span>
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-md hover:bg-gray-100 text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex flex-col gap-4">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-semibold border-b border-gray-100 pb-2 hover:text-teal-accent"
                    style={{ color: "#044647", fontFamily: "var(--font-manrope), sans-serif" }}
                  >
                    Home
                  </Link>
                    {/* About Us Mobile Section */}
                  <div className="flex flex-col border-b border-gray-100 pb-2">
                    <div className="flex justify-between items-center w-full">
                      <Link
                        href="/about"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-semibold hover:text-teal-accent"
                        style={{ color: "#044647", fontFamily: "var(--font-manrope), sans-serif" }}
                      >
                        About Us
                      </Link>
                      <button
                        onClick={() => toggleDropdown("about-mobile")}
                        className="p-2 text-gray-500 hover:text-teal-accent"
                      >
                        <ChevronDown size={18} />
                      </button>
                    </div>
                    {activeDropdown === "about-mobile" && (
                      <div className="flex flex-col pl-4 gap-2 mt-2 bg-gray-50 py-2 rounded">
                        <Link
                          href="/team"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm font-medium py-1 text-gray-600 hover:text-teal-accent"
                        >
                          Our Team
                        </Link>
                        <Link
                          href="/faq"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm font-medium py-1 text-gray-600 hover:text-teal-accent"
                        >
                          FAQ
                        </Link>
                        <Link
                          href="/privacy-policy"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm font-medium py-1 text-gray-600 hover:text-teal-accent"
                        >
                          Privacy Policy
                        </Link>
                        <Link
                          href="/terms-and-conditions"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm font-medium py-1 text-gray-600 hover:text-teal-accent"
                        >
                          Terms & Conditions
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Services Mobile Section */}
                  <div className="flex flex-col">
                    <button
                      onClick={() => toggleDropdown("services-mobile")}
                      className="text-lg font-semibold border-b border-gray-100 pb-2 flex justify-between items-center hover:text-teal-accent"
                      style={{ color: "#044647", fontFamily: "var(--font-manrope), sans-serif" }}
                    >
                      Services <ChevronDown size={18} />
                    </button>
                    {activeDropdown === "services-mobile" && (
                      <div className="flex flex-col pl-4 gap-2 mt-2 bg-gray-50 py-2 rounded">
                        <Link
                          href="/services/recruitment"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm font-medium py-1 text-gray-600 hover:text-teal-accent"
                        >
                          Direct Hire Recruitment
                        </Link>
                        <Link
                          href="/services/staffing"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm font-medium py-1 text-gray-600 hover:text-teal-accent"
                        >
                          Contract & Staffing
                        </Link>
                        <Link
                          href="/services/consulting"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm font-medium py-1 text-gray-600 hover:text-teal-accent"
                        >
                          HR Consulting
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/jobs"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-semibold border-b border-gray-100 pb-2 hover:text-teal-accent"
                    style={{ color: "#044647", fontFamily: "var(--font-manrope), sans-serif" }}
                  >
                    Find Jobs
                  </Link>
                  <Link
                    href="/ceo-talks"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-semibold border-b border-gray-100 pb-2 hover:text-teal-accent"
                    style={{ color: "#044647", fontFamily: "var(--font-manrope), sans-serif" }}
                  >
                    CEO Talks
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-semibold border-b border-gray-100 pb-2 hover:text-teal-accent"
                    style={{ color: "#044647", fontFamily: "var(--font-manrope), sans-serif" }}
                  >
                    Contact
                  </Link>
                </nav>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
                  style={{
                    backgroundColor: "#C6D936",
                    color: "#044647",
                    fontFamily: "var(--font-manrope), sans-serif",
                  }}
                >
                  Get a Quote
                </Link>
                <div className="text-center text-xs text-gray-500">
                  © 2026 HireHive. All rights reserved.
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
