"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const bgImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=1920&q=80",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full relative overflow-hidden flex items-center min-h-[calc(100vh-88px)] py-20 px-6">
      {/* Background Images with Zoom & Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {bgImages.map((image, idx) => {
          const isActive = idx === currentImageIndex;
          return (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 1 }}
              animate={
                isActive
                  ? {
                    opacity: 1,
                    scale: 1.08,
                    transition: {
                      opacity: { duration: 1.5 },
                      scale: { duration: 6, ease: "linear" },
                    },
                  }
                  : {
                    opacity: 0,
                    scale: 1,
                    transition: { duration: 1.5 },
                  }
              }
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${image}')`,
              }}
            />
          );
        })}
      </div>

      {/* Dark Teal Gradient Overlay fading from 0 to 50% width */}
      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          background: "linear-gradient(90deg, #044647 0%, rgba(4, 70, 71, 0) 50%)"
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        {/* Left Column: Heading and Description */}
        <div className="lg:col-span-8 flex flex-col gap-6 text-left self-center">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex self-start bg-[#C6D936] text-[#044647] px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider rounded-xs"
          >
            // HR EXPERTISE
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(38px, 5.5vw, 92px)",
              lineHeight: 1.2,
            }}
            className="text-white tracking-tight line-clamp-2"
          >
            Grow Employee<br />
            Culture and Value
          </motion.h1>

          {/* Subheading Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white font-normal line-clamp-2"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "18px",
              lineHeight: "28px",
            }}
          >
            Enhance employee growth with strategic, people-first solutions tailored for teams and organizations. Our expert HR services deliver lasting value today globally.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mt-4"
          >
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center"
              style={{
                backgroundColor: "#C6D936",
                color: "rgb(5, 27, 5)",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "30px",
              }}
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#044647] hover:scale-110 transition-transform shadow-md"
              aria-label="Get started details"
            >
              <span className="material-symbols-outlined text-[20px] select-none leading-none">
                arrow_outward
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Floating Glassmorphic Card */}
        <div className="lg:col-span-4 lg:self-end flex justify-start lg:justify-end relative pb-0">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/8 backdrop-blur-md border-white/15 shadow-[0_8px_32px_0_rgba(4,70,71,0.3)] rounded-2xl p-8 max-w-sm relative overflow-hidden text-left"
          >
            {/* Background Watermark/Ribbon Pattern */}
            <div className="absolute -right-5 -bottom-5 opacity-5 text-white pointer-events-none select-none">
              <svg className="w-40 h-40" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 0 C25 25, 25 75, 50 100 C75 75, 75 25, 50 0 Z" />
              </svg>
            </div>

            {/* Award Image */}
            <div className="mb-6">
              <img src="/award.png" alt="Award Logo" className="w-16 h-16 object-contain" />
            </div>

            {/* Description Text */}
            <p className="text-gray-200 text-sm leading-relaxed relative z-10" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              We provide tailored HR solutions that enhance employee performance, streamline processes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
