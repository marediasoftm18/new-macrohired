"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Search, MapPin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [headerHovered, setHeaderHovered] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isItemActive = (item: any) => {
    if (item.name === "Home") {
      return pathname === "/";
    }
    if (item.href !== "#" && pathname === item.href) {
      return true;
    }
    if (item.dropdown) {
      return item.dropdown.some((sub: any) => sub.href !== "#" && pathname === sub.href);
    }
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setScrolled(true);
        if (currentScrollY < lastScrollY.current - 5) {
          setScrollingUp(true);
        } else if (currentScrollY > lastScrollY.current + 5) {
          setScrollingUp(false);
        }
      } else {
        setScrolled(false);
        setScrollingUp(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const height = headerRef.current?.offsetHeight || 110;
      const isInsideHeader = headerRef.current?.contains(e.target as Node);
      if (e.clientY <= height || isInsideHeader) {
        setHeaderHovered(true);
      } else {
        setHeaderHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const menuItems = [
    {
      name: "Home",
      href: "/",
      dropdown: [
        { name: "Recruiting Agency", href: "/" },
        { name: "Staffing Solutions", href: "#" },
      ],
    },
    {
      name: "Pages",
      href: "#",
      dropdown: [
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Pricing Plan", href: "/pricing" },
        { name: "Our Team", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Privacy Policy", href: "#" },
      ],
    },
    {
      name: "Jobs",
      href: "/jobs",
      dropdown: [
        { name: "Find Jobs", href: "/jobs" },
        { name: "Candidate Portal", href: "#" },
      ],
    },
    {
      name: "Portfolio",
      href: "/portfolio",
      dropdown: [
        { name: "Case Studies", href: "/portfolio" },
        { name: "Success Stories", href: "#" },
      ],
    },
    {
      name: "Blog",
      href: "#",
      dropdown: [
        { name: "CEO Talks", href: "#" },
        { name: "Latest News", href: "#" },
      ],
    },
    {
      name: "Shop",
      href: "#",
      dropdown: [
        { name: "HR Packages", href: "#" },
        { name: "Employer Premium", href: "#" },
      ],
    },
  ];

  const showHeader = !scrolled || scrollingUp || headerHovered || mobileMenuOpen;

  return (
    <header
      ref={headerRef}
      onMouseEnter={() => setHeaderHovered(true)}
      onMouseLeave={(e) => {
        const height = headerRef.current?.offsetHeight || 110;
        if (e.clientY > height) {
          setHeaderHovered(false);
        }
      }}
      className={`w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? `fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 h-20 md:h-27.5 ${
              showHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
            }`
          : "bg-white h-20 md:h-27.5 translate-y-0 opacity-100"
      }`}
    >
      <div className="w-full h-full px-4 sm:px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          {/* Custom SVG logo matching Hirehive style */}
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-12 transition-transform duration-300">
              {/* Left Teal Loop */}
              <path
                d="M13.5 7.5C11.5 12.5 11.5 21.5 13.5 26.5C14.5 28.5 16.5 29 17.5 27C19.5 22.5 19.5 13.5 17.5 8.5C16.5 6.5 14.5 6 13.5 7.5Z"
                fill="#0A3A3B"
                fillOpacity="0.15"
                stroke="#0A3A3B"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Right Lime Loop */}
              <path
                d="M20.5 7.5C22.5 12.5 22.5 21.5 20.5 26.5C19.5 28.5 17.5 29 16.5 27C14.5 22.5 14.5 13.5 16.5 8.5C17.5 6.5 19.5 6 20.5 7.5Z"
                fill="#C6D936"
                fillOpacity="0.3"
                stroke="#C6D936"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 600,
              fontSize: "26px",
              lineHeight: "36px",
              letterSpacing: "-0.03em",
              color: "#0A3A3B",
            }}
            className="sm:text-[30px] sm:leading-10"
          >
            MacroHired
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => {
            const active = isItemActive(item);
            return (
              <div key={item.name} className="relative group py-2">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 transition-colors duration-200 ${
                    active ? "text-[#044647]" : "text-black"
                  } hover:text-[#044647]`}
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "30px",
                  }}
                >
                  <span>{item.name}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 group-hover:rotate-180 ${
                      active ? "text-[#044647]" : "text-black"
                    } group-hover:text-[#044647]`}
                  />
                </Link>
                {/* Dropdown Menu */}
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 rounded-lg shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 z-50">
                  <div className="py-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2.5 text-sm text-black hover:bg-gray-50 hover:text-[#044647] font-medium transition-colors"
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Right Section Details */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Phone Details */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="tel:+11234567890"
              className="text-[#C6D936] transition-all duration-300 hover:scale-105"
            >
              <i className="fa-solid fa-phone-volume text-[20px]"></i>
            </Link>
            <Link
              href="tel:+11234567890"
              className="font-medium text-black hover:text-[#044647] transition-colors"
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              +1 (123) 456 7890
            </Link>
          </div>

          {/* Search Icon (Hidden on mobile, visible on md+) */}
          <button className="hidden md:flex p-2 text-black hover:text-[#044647] transition-colors items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </button>

          {/* Hamburger Menu Icon (Always visible on mobile & tablet) */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-black hover:text-[#044647] transition-colors flex items-center justify-center animate-pulse-slow"
            aria-label="Open navigation menu"
          >
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="16" width="24" height="2" fill="currentColor" />
              <rect x="6" y="8" width="18" height="2" fill="currentColor" />
              <rect width="24" height="2" fill="currentColor" />
            </svg>
          </button>

          {/* Get a Free Quote Button */}
          <Link
            href="#"
            className="hidden xl:inline-block px-7 py-3 rounded-full text-[18px] font-medium transition-all duration-300 hover:bg-[#044647] hover:text-white hover:scale-105 shadow-sm"
            style={{
              backgroundColor: "#C6D936",
              color: "#000000",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontWeight: 500,
            }}
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      {/* Side Menu Drawer (Portaled directly to document.body to avoid header containment & scrolling bugs) */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="fixed inset-0 bg-black/60 z-9998"
                />
                {/* Drawer Panel (Full Screen Viewport Overlap) */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
                  className="fixed top-0 right-0 w-full sm:w-112.5 h-screen bg-[#0A3A3B] text-white shadow-2xl z-9999 p-8 flex flex-col justify-between overflow-y-auto"
                >
                  <div className="flex flex-col gap-8">
                    {/* Close Button at the top right */}
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#C6D936] hover:text-[#0A3A3B] transition-colors"
                    >
                      <X size={24} strokeWidth={2.5} />
                    </button>

                    {/* Logo Heading starting below close button with padding */}
                    <div className="pt-10 flex items-center gap-3">
                      <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                        <div className="relative w-9 h-9 flex items-center justify-center">
                          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.5 7.5C11.5 12.5 11.5 21.5 13.5 26.5C14.5 28.5 16.5 29 17.5 27C19.5 22.5 19.5 13.5 17.5 8.5C16.5 6.5 14.5 6 13.5 7.5Z"
                              stroke="#FFFFFF"
                              strokeWidth="3.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M20.5 7.5C22.5 12.5 22.5 21.5 20.5 26.5C19.5 28.5 17.5 29 16.5 27C14.5 22.5 14.5 13.5 16.5 8.5C17.5 6.5 19.5 6 20.5 7.5Z"
                              stroke="#C6D936"
                              strokeWidth="3.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <span
                          style={{
                            fontFamily: "var(--font-dm-sans), sans-serif",
                            fontWeight: 600,
                            fontSize: "30px",
                            lineHeight: "40px",
                            letterSpacing: "-0.03em",
                            color: "#FFFFFF",
                          }}
                        >
                          MacroHired
                        </span>
                      </Link>
                    </div>

                    {/* Mobile Navigation (Visible only on mobile/tablet) */}
                    <nav className="flex lg:hidden flex-col gap-4 border-b border-white/10 pb-6">
                      {menuItems.map((item) => (
                        <div key={item.name} className="flex flex-col">
                          <div className="flex justify-between items-center w-full py-1">
                            <Link
                              href={item.href}
                              onClick={() => {
                                if (item.href !== "#") setMobileMenuOpen(false);
                              }}
                              className="text-lg font-medium hover:text-[#C6D936] transition-colors"
                              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                            >
                              {item.name}
                            </Link>
                            <button
                              onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                              className="p-1 text-white/70 hover:text-white"
                            >
                              <ChevronDown
                                size={16}
                                className={`transform transition-transform duration-200 ${
                                  activeDropdown === item.name ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                          </div>
                          {activeDropdown === item.name && (
                            <div className="flex flex-col pl-4 gap-2 mt-2 bg-white/5 py-2 rounded">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-sm font-medium py-1.5 text-white/80 hover:text-[#C6D936]"
                                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>

                    {/* Corporate Details */}
                    <div className="flex flex-col gap-6">
                      {/* Tagline */}
                      <p
                        className="text-white text-[18px] leading-7 font-normal"
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                      >
                        Whether you build a strong workplace culture, we turn your people vision into lasting success.
                      </p>

                      {/* Thumbnail Images */}
                      <div className="grid grid-cols-3 gap-3">
                        <img
                          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80"
                          alt="Team Member 1"
                          className="w-full aspect-square object-cover rounded-xl border border-white/10"
                        />
                        <img
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                          alt="Team Meeting"
                          className="w-full aspect-square object-cover rounded-xl border border-white/10"
                        />
                        <img
                          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=150&q=80"
                          alt="Office Collaboration"
                          className="w-full aspect-square object-cover rounded-xl border border-white/10"
                        />
                      </div>

                      {/* Contact Info List */}
                      <div className="flex flex-col gap-5 mt-4">
                        {/* Location */}
                        <div className="flex items-start gap-4">
                          <div className="mt-1 text-[#C6D936] shrink-0">
                            <span className="material-symbols-outlined text-[24px]">location_on</span>
                          </div>
                          <div
                            className="text-white text-[18px] leading-7 font-normal"
                            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                          >
                            7164 Barton Terrace, North
                            <br />
                            Penelope, Vermont - 97879, USA
                          </div>
                        </div>

                        {/* Phone Numbers */}
                        <div className="flex items-start gap-4">
                          <div className="mt-1 text-[#C6D936] shrink-0">
                            <span className="material-symbols-outlined text-[24px]">phonelink_ring</span>
                          </div>
                          <div
                            className="text-white text-[18px] leading-7 font-normal flex flex-col"
                            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                          >
                            <Link href="tel:+11234567890" className="hover:text-[#C6D936] transition-colors" style={{ fontWeight: 400 }}>
                              +1 (123) 456 7890
                            </Link>
                            <Link href="tel:+14567890123" className="hover:text-[#C6D936] transition-colors" style={{ fontWeight: 400 }}>
                              +1 (456) 789 0123
                            </Link>
                          </div>
                        </div>

                        {/* Email Addresses */}
                        <div className="flex items-start gap-4">
                          <div className="mt-1 text-[#C6D936] shrink-0">
                            <span className="material-symbols-outlined text-[24px]">contact_mail</span>
                          </div>
                          <div
                            className="text-white text-[18px] leading-7 font-normal flex flex-col"
                            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                          >
                            <Link href="mailto:info@example.com" className="hover:text-[#C6D936] transition-colors" style={{ fontWeight: 400 }}>
                              info@example.com
                            </Link>
                            <Link href="mailto:info@hirehive.com" className="hover:text-[#C6D936] transition-colors" style={{ fontWeight: 400 }}>
                              info@hirehive.com
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section: Social Follow */}
                  <div className="flex flex-col gap-4 mt-12 pt-6 border-t border-white/10">
                    <span
                      className="font-bold text-white text-[18px]"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                      Follow us
                    </span>
                    <div className="flex gap-4">
                      <Link
                        href="https://instagram.com"
                        target="_blank"
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#C6D936] hover:text-[#0A3A3B] hover:border-[#C6D936] transition-all"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </Link>
                      <Link
                        href="https://facebook.com"
                        target="_blank"
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#C6D936] hover:text-[#0A3A3B] hover:border-[#C6D936] transition-all"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </Link>
                      <Link
                        href="https://twitter.com"
                        target="_blank"
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#C6D936] hover:text-[#0A3A3B] hover:border-[#C6D936] transition-all"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                        </svg>
                      </Link>
                      <Link
                        href="https://youtube.com"
                        target="_blank"
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#C6D936] hover:text-[#0A3A3B] hover:border-[#C6D936] transition-all"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.54a29 29 0 0 0 .46 5.12 2.78 2.78 0 0 0 1.95 1.96C5.12 19 12 19 12 19s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.12 29 29 0 0 0-.46-5.12z"></path>
                          <polygon points="9.75 15.02 15.5 11.54 9.75 8.05 9.75 15.02"></polygon>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
