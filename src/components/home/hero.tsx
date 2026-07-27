"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const heroImage = "https://themes.potenzaglobalsolutions.com/hire-hive/wp-content/uploads/2026/02/banner-02-02.jpg";

  return (
    <section className="relative isolate w-full min-h-205 overflow-hidden bg-[#eef4f1]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${heroImage}')` }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(4, 70, 71, 0.88) 0%, rgba(4, 70, 71, 0.80) 18%, rgba(4, 70, 71, 0.50) 34%, rgba(4, 70, 71, 0.18) 48%, rgba(4, 70, 71, 0.02) 62%, rgba(255, 255, 255, 0.10) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 74% 22%, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0.26) 18%, rgba(255, 255, 255, 0.00) 34%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-200 w-full max-w-340 items-start px-3.75 pt-48.25">
        <div className="grid w-full grid-cols-1 items-start gap-10 lg:gap-8">
          <div className="flex w-full flex-col gap-0 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="ml-3.75 inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]"
            >
              {"// HR EXPERTISE"}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              style={{
                fontWeight: 700,
                fontSize: "92px",
                lineHeight: "110px",
                letterSpacing: "0em",
              }}
              className="font-manrope mt-2.5 text-white"
            >
              Grow Employee<br />
              Culture and Value
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="font-dm-sans mt-5 max-w-145.5 text-[18px] leading-7 text-white"
            >
              Enhance employee growth with strategic, people-first solutions tailored for teams and organizations. Our expert HR services deliver lasting value today globally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-10 flex items-center gap-1.5"
            >
              <Link
                href="/about"
                className="font-dm-sans inline-flex h-15 items-center rounded-full bg-[#c8db2b] px-7 text-[18px] font-medium text-[#062828] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-transform hover:scale-[1.02]"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#062828] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-transform hover:scale-[1.02]"
                aria-label="Get started details"
              >
                <span className="material-symbols-outlined select-none text-[20px] leading-none">
                  arrow_outward
                </span>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 28, y: 18 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.65, delay: 0.25 }}
        style={{ fontSize: "18px", lineHeight: "28px" }}
        className="absolute right-0 bottom-14 hidden w-full max-w-112.5 max-h-63.5 p-10 pr-5 overflow-hidden rounded-[18px] border border-[#0000001a] bg-[linear-gradient(145deg,rgba(255,255,255,0.20),rgba(255,255,255,0.08))] px-6.25 py-6.25 text-left text-lg leading-7 text-white shadow-[0_20px_44px_rgba(0,0,0,0.20)] backdrop-blur-sm lg:block lg:right-64.5 lg:bottom-21.5"
      >
        <div
          className="pointer-events-none absolute -right-8 -bottom-8 opacity-[0.06] text-white"
          aria-hidden="true"
        >
          <svg className="h-44 w-44" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C25 25, 25 75, 50 100 C75 75, 75 25, 50 0 Z" />
          </svg>
        </div>

        <div className="mb-2.5">
          <img src="/award.png" alt="Award logo" className="h-20 w-20 object-contain" />
        </div>

        <p
          className="relative z-10 max-w-full text-lg leading-7 text-white/90"
          style={{ fontSize: "18px", lineHeight: "28px" }}
        >
          We provide tailored HR solutions that <br/>enhance employee performance, <br />streamline processes.
        </p>
      </motion.div>
    </section>
  );
}
