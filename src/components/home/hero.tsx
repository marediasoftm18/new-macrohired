"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const heroImage = "https://themes.potenzaglobalsolutions.com/hire-hive/wp-content/uploads/2026/02/banner-02-02.jpg";

  return (
    <section className="relative isolate w-full min-h-160 sm:min-h-180 md:h-204.5 md:min-h-204.5 lg:min-h-205 overflow-hidden bg-[#eef4f1] pb-10 md:pb-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${heroImage}')` }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(4, 70, 71, 0.92) 0%, rgba(4, 70, 71, 0.84) 30%, rgba(4, 70, 71, 0.65) 60%, rgba(4, 70, 71, 0.35) 100%)",
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

      <div className="relative z-10 mx-auto flex min-h-140 sm:min-h-160 md:h-full lg:min-h-200 w-full max-w-360 items-start px-4 sm:px-6 md:px-8 xl:px-8 pt-20 sm:pt-28 md:pt-36 lg:pt-48.25 pb-8 md:pb-16 lg:pb-0">
        <div className="grid w-full grid-cols-1 items-start gap-8 lg:gap-8">
          <div className="flex w-full flex-col gap-0 text-left max-w-2xl lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] sm:text-[15px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]"
            >
              {"// HR EXPERTISE"}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="font-manrope mt-2.5 text-white font-bold text-[40px] sm:text-[52px] md:text-[60px] lg:text-[92px] leading-tight sm:leading-[1.1] md:leading-17.5 lg:leading-27.5"
            >
              Grow Employee <br className="hidden sm:inline" />
              Culture and Value
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="font-dm-sans mt-4 sm:mt-5 max-w-145.5 text-[18px] sm:text-[18px] leading-7 sm:leading-7 text-white"
            >
              Enhance employee growth with strategic, people-first solutions tailored for teams and organizations. Our expert HR services deliver lasting value today globally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 sm:mt-10 flex items-center gap-1.5"
            >
              <Link
                href="/about"
                className="font-dm-sans inline-flex h-11 sm:h-15 items-center rounded-full bg-[#c8db2b] px-6 sm:px-7 text-[18px] sm:text-[18px] leading-7.5 md:leading-7.5 font-medium text-[#051B05] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-transform hover:scale-[1.02]"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-[#062828] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-transform hover:scale-[1.02]"
                aria-label="Get started details"
              >
                <span className="material-symbols-outlined select-none text-[20px] leading-none">
                  arrow_outward
                </span>
              </Link>
            </motion.div>

            {/* Floating Award Glass Card - Rendered on Mobile, Tablet and Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="mt-6 md:mt-0 relative md:absolute right-auto md:right-8 lg:right-64.5 bottom-auto md:bottom-8 lg:bottom-21.5 w-full max-w-sm sm:max-w-96 lg:max-w-112.5 p-5 sm:p-6 lg:p-10 overflow-hidden rounded-[18px] border border-white/25 bg-[linear-gradient(145deg,rgba(4,70,71,0.70),rgba(4,70,71,0.50))] text-left text-sm sm:text-base md:text-lg leading-6 md:leading-7 text-white shadow-[0_20px_44px_rgba(0,0,0,0.25)] backdrop-blur-md z-20"
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
                <img src="/award.png" alt="Award logo" className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain" />
              </div>

              <p className="relative z-10 max-w-full text-[18px] sm:text-base md:text-lg leading-7 sm:leading-6 md:leading-7 text-white/90">
                We provide tailored HR solutions that <br className="hidden sm:inline" />enhance employee performance, <br className="hidden sm:inline" />streamline processes.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
