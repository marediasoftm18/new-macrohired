"use client";

import { motion } from "framer-motion";

export default function SmartTracking() {
  return (
    <section className="w-full bg-white pb-16 md:pb-24 px-6 md:px-16 font-sans">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Smart Tracking Claims Card (Left) */}
          <div className="lg:col-span-8 bg-[#044647] rounded-[32px] overflow-hidden flex flex-col md:flex-row relative min-h-[320px] shadow-sm">
            {/* Watermark Pattern */}
            <div className="absolute right-[-20px] bottom-[-20px] opacity-[0.03] text-white pointer-events-none select-none">
              <svg className="w-64 h-64" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 0 C25 25, 25 75, 50 100 C75 75, 75 25, 50 0 Z" />
              </svg>
            </div>

            {/* Left Image & Overlay */}
            <div className="relative w-full md:w-[45%] min-h-[220px] md:min-h-full overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                alt="Corporate team working"
                className="w-full h-full object-cover"
              />
              {/* Fade from image to lime yellow gradient band, then to dark teal */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-teal-950/20 via-[#C6D936]/30 to-[#044647]" />
            </div>

            {/* Right Form Content */}
            <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center gap-5 relative z-10 text-left">
              <span className="inline-flex self-start bg-[#C6D936] text-[#044647] px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-wider rounded-[2px]">
                // SMART TRACKING
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(26px, 3.5vw, 36px)",
                  color: "#ffffff",
                  lineHeight: 1.15,
                }}
                className="tracking-tight"
              >
                Start tracking your claims
              </h2>

              {/* Form Input Group */}
              <div className="bg-white rounded-full p-1.5 flex items-center shadow-sm w-full max-w-md border border-white/10">
                <input
                  type="text"
                  placeholder="Enter Tracking Number"
                  className="flex-grow bg-transparent border-none outline-none text-xs md:text-sm text-gray-700 px-4 placeholder:text-gray-400"
                />
                <button
                  className="px-5 py-2.5 rounded-full text-xs font-bold transition-all hover:scale-105 bg-[#C6D936] text-[#044647] shrink-0"
                  style={{ fontFamily: "var(--font-manrope), sans-serif" }}
                >
                  Track Your Claim &rarr;
                </button>
              </div>

              {/* Consultation Link */}
              <a
                href="/contact"
                className="text-white text-xs md:text-sm font-semibold hover:text-[#C6D936] transition-colors underline underline-offset-4 self-start"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Schedule for consultation: 800 123 4567
              </a>
            </div>
          </div>

          {/* Card 2: Stats Info Card (Right) */}
          <div
            className="lg:col-span-4 bg-[#C6D936] rounded-[32px] p-8 flex flex-col justify-between text-[#044647] relative overflow-hidden min-h-[320px] shadow-sm"
            style={{
              backgroundImage: "linear-gradient(rgba(4, 70, 71, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(4, 70, 71, 0.04) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          >
            <div className="flex flex-col gap-6">
              {/* Stat 1 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-[#044647]/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#044647] text-[18px] select-none leading-none">
                    alt_route
                  </span>
                </div>
                <div className="text-left flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                    24/7
                  </span>
                  <span className="text-xs text-[#044647] font-semibold leading-tight max-w-[120px]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Your business never stops
                  </span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-[#044647]/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#044647] text-[18px] select-none leading-none">
                    group
                  </span>
                </div>
                <div className="text-left flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                    100k
                  </span>
                  <span className="text-xs text-[#044647] font-semibold leading-tight max-w-[120px]" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                    Trusted HR expertise
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Tagline block */}
            <div className="flex items-start gap-3 border-t border-[#044647]/10 pt-6 mt-4">
              {/* Custom snowflake/star SVG */}
              <svg className="w-5 h-5 shrink-0 fill-current mt-0.5" viewBox="0 0 100 100">
                <path d="M50 0 L58 40 L98 32 L66 56 L82 94 L50 72 L18 94 L34 56 L2 32 L42 40 Z" />
              </svg>
              <p className="text-xs md:text-sm text-[#044647]/90 font-bold leading-relaxed text-left" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                Whether you aim to build a strong workplace culture or a high-performing modern workforce.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
