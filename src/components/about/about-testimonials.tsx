"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Vikram Shah",
    role: "Founder",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    text: "Their HR expertise helped improve our recruitment process and overall workforce efficiency. The team was professional, responsive, and delivered solutions aligned with our business goals.",
  },
  {
    id: 2,
    name: "Neha Kapoor",
    role: "Co-Founder",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    text: "From onboarding to employee engagement, their structured approach brought clarity and consistency to HR processes. We saw noticeable improvements in productivity and team collaboration.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Manager",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    text: "From employee onboarding to ongoing engagement initiatives and their structured approach brought clarity and measurable improvements to our HR processes and improve team collaboration.",
  },
];

export default function AboutTestimonials() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleReviews = [
    reviews[startIndex],
    reviews[(startIndex + 1) % reviews.length],
  ];

  return (
    <section className="w-full bg-[#F6F5F2] lg:bg-white py-14 md:py-16 lg:py-28 font-sans px-4 sm:px-6 md:px-4 lg:px-16">
      <div className="max-w-360 mx-auto w-full">
        
        {/* ======================================================== */}
        {/* TABLET & MOBILE VIEW (< lg): Uses testimonials.tsx layout */}
        {/* ======================================================== */}
        <div className="flex lg:hidden flex-col gap-8 md:gap-10">
          
          {/* Header & Summary Block (testimonials.tsx styling) */}
          <div className="w-full flex flex-col gap-4 text-left">
            <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] sm:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
              // PEOPLE SPEAK
            </span>

            <h2 className="font-manrope font-semibold text-[32px] sm:text-[42px] md:text-[34px] leading-tight sm:leading-13 md:leading-11 tracking-tight text-[#051B05]">
              Trusted Feedback From <br className="hidden sm:inline md:hidden" /> Our Valued Partners
            </h2>

            {/* Rating Summary Section */}
            <div className="flex flex-col gap-4 mt-1">
              {/* 5 Orange Stars */}
              <div className="flex gap-1 text-[#ED8A19]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined material-symbols-filled text-[20px] sm:text-[22px] select-none leading-none">
                    star
                  </span>
                ))}
              </div>

              {/* Tagline Description */}
              <p className="font-dm-sans text-[#595B62] text-[16px] sm:text-[18px] leading-6.5 sm:leading-7 font-normal max-w-sm md:max-w-2xl">
                This HR agency improved our workplace with simple, effective solutions.
              </p>

              {/* Overlapping Avatars & 1.8 M+ Counter */}
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center -space-x-3 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Customer 1"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-xs"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Customer 2"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-xs"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Customer 3"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-xs"
                  />
                </div>

                <div className="flex flex-col text-left">
                  <span className="font-manrope font-bold text-[28px] sm:text-[36px] leading-tight sm:leading-11.5 text-[#051B05]">
                    1.8 M+
                  </span>
                  <span className="font-dm-sans text-[#595B62] text-[15px] sm:text-[18px] leading-6 sm:leading-7 font-normal">
                    Satisfied customers
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View: Single Testimonial Card with Smooth Loop Animation (< md) */}
          <div className="flex md:hidden flex-col w-full relative overflow-hidden items-center">
            <div className="w-full relative min-h-64 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={reviews[startIndex].id}
                  initial={{ opacity: 0, x: 50, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-white rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col gap-4 relative overflow-hidden w-full text-left"
                >
                  {/* Card header with avatar, name, role arranged horizontally */}
                  <div className="flex items-center gap-3.5 border-b border-gray-100 pb-3.5">
                    <img
                      src={reviews[startIndex].image}
                      alt={reviews[startIndex].name}
                      className="w-12 h-12 rounded-full object-cover shrink-0"
                    />
                    <div className="flex flex-col text-left">
                      <h3 className="font-manrope text-[#051B05] font-semibold text-[18px] leading-6">
                        {reviews[startIndex].name}
                      </h3>
                      <p className="font-dm-sans text-[#595B62] text-[15px] leading-5 font-normal">
                        {reviews[startIndex].role}
                      </p>
                    </div>
                  </div>

                  {/* Quote rating stars & quote text */}
                  <div className="flex flex-col text-left relative z-10">
                    <div className="flex gap-1 text-[#ED8A19] mb-2.5">
                      {[...Array(reviews[startIndex].rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined material-symbols-filled text-[18px] select-none leading-none">
                          star
                        </span>
                      ))}
                    </div>
                    <p className="font-dm-sans text-[#595B62] text-[16px] leading-6.5 font-normal italic relative z-10">
                      &ldquo;{reviews[startIndex].text}&rdquo;
                    </p>

                    {/* Font Awesome fa-quote-left SVG Background Decoration */}
                    <svg
                      className="absolute right-0 bottom-0 w-14 h-14 text-[#E8E8E8] pointer-events-none select-none z-0 opacity-40"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <path d="M448 96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H352v32c0 35.3 28.7 64 64 64h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H416c-70.6 0-128-57.4-128-128V144c0-26.5 21.5-48 48-48H448zM160 96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H64v32c0 35.3 28.7 64 64 64h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H128C57.4 448 0 390.6 0 320V144C0 117.5 21.5 96 48 96H160z" />
                    </svg>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Indicators / Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setStartIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    startIndex === idx ? "bg-[#044647] w-7" : "bg-gray-300 w-2.5"
                  }`}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Tablet Feed (md:flex lg:hidden): 2 Cards Stacked Layout */}
          <div className="hidden md:flex lg:hidden w-full flex-col gap-6 relative">
            {visibleReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-10 md:p-7.5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col md:flex-row gap-6 md:gap-12 relative overflow-hidden w-full shrink-0 text-left"
              >
                {/* Left sub-column: Profile details */}
                <div className="flex flex-col items-start text-left md:border-r border-gray-100 md:pr-8 shrink-0 min-w-36 justify-between border-b md:border-b-0 pb-4 md:pb-0">
                  <div className="flex flex-col items-start gap-1.5">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mb-2 sm:mb-3"
                    />
                    <h3 className="font-manrope text-[#051B05] font-semibold text-[18px] sm:text-[20px] md:text-[18px] leading-6 sm:leading-7 md:leading-6.5">
                      {review.name}
                    </h3>
                    <p className="font-dm-sans text-[#595B62] text-[16px] sm:text-[18px] leading-6 sm:leading-7 font-normal">
                      {review.role}
                    </p>
                  </div>

                  {/* Numeric rating */}
                  <div className="font-manrope hidden md:flex items-center gap-1.5 mt-3 sm:mt-6 text-[24px] sm:text-[32px] md:text-[26px] leading-8 sm:leading-10 md:leading-8.5 font-bold text-[#051B05]">
                    <span>{review.rating}</span>
                    <span className="material-symbols-outlined material-symbols-filled text-[#ED8A19] text-[16px] sm:text-[18px] select-none leading-none">
                      star
                    </span>
                  </div>
                </div>

                {/* Right sub-column: Quote text */}
                <div className="flex flex-col grow text-left relative z-10">
                  <div className="flex gap-1.5 text-[#ED8A19] mb-3 sm:mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined material-symbols-filled text-[18px] sm:text-[20px] select-none leading-none">
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-dm-sans text-[#595B62] text-[18px] sm:text-[22px] md:text-[20px] leading-7 sm:leading-8 md:leading-8 font-normal italic pr-4 sm:pr-8 relative z-10">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Quote SVG Decoration */}
                  <svg
                    className="absolute right-0 bottom-0 w-16 h-16 sm:w-[87.5px] sm:h-25.25 text-[#E8E8E8] pointer-events-none select-none z-0 opacity-50 sm:opacity-100"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M448 96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H352v32c0 35.3 28.7 64 64 64h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H416c-70.6 0-128-57.4-128-128V144c0-26.5 21.5-48 48-48H448zM160 96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H64v32c0 35.3 28.7 64 64 64h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H128C57.4 448 0 390.6 0 320V144C0 117.5 21.5 96 48 96H160z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW (lg:): Original desktop design untouched      */}
        {/* ======================================================== */}
        <div className="hidden lg:flex flex-col">
          {/* Header Block */}
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
              // PEOPLE SPEAK
            </span>

            <h2 className="font-manrope font-semibold text-[52px] leading-15.5 text-[#051B05] max-w-3xl">
              Trusted Feedback From Our Valued Partners
            </h2>
          </div>

          {/* Main Unified Testimonial Card */}
          <div className="bg-[#F5F4F0] rounded-4xl overflow-hidden flex flex-row shadow-sm border border-gray-200/60 max-w-full mx-auto">
            
            {/* Part 1: Left Customer Image */}
            <div className="w-70 self-stretch min-h-90 shrink-0 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Vikram Shah"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Part 2: Middle Review Content */}
            <div className="flex-1 px-20 py-15.5 flex flex-col justify-between text-left relative">
              
              {/* Quotation Mark Icon */}
              <div className="absolute right-10 top-8 pointer-events-none select-none">
                <img
                  src="/media assets/home/icon-17.svg"
                  alt="quote icon"
                  className="w-24 h-24 opacity-100"
                />
              </div>

              <div className="flex flex-col gap-5">
                {/* 5 Lime Green Stars */}
                <div className="flex gap-1 text-[#C6D936]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined material-symbols-filled text-[22px] select-none">
                      star
                    </span>
                  ))}
                </div>

                {/* Review Quote Text */}
                <p className="font-dm-sans text-[22px] leading-10 text-[#051B05] italic font-normal max-w-xl">
                  “Their HR expertise helped improve our recruitment process and overall workforce efficiency. The team was professional, responsive, and delivered solutions aligned with our business goals.”
                </p>
              </div>

              {/* Author Info Row */}
              <div className="flex items-center gap-5 pt-6 border-t-0 border-gray-200">
                <div className="font-manrope text-[52px] leading-15.5 font-semibold text-[#051B05] flex items-center gap-1">
                  5 <span className="text-[#051B05] text-[52px]">*</span>
                </div>
                <div className="w-px h-10 bg-gray-300/80" />
                <div className="flex flex-col">
                  <span className="font-dm-sans font-semibold text-[20px] leading-7 text-[#044647]">
                    Vikram Shah
                  </span>
                  <span className="font-dm-sans text-[18px] leading-7.5 font-medium text-[#595B62]">
                    Founder
                  </span>
                </div>
              </div>

            </div>

            {/* Part 3: Right Rating Sidebar */}
            <div className="w-65 shrink-0 p-10 border-l border-gray-200/80 flex flex-col items-center justify-center text-center gap-4 bg-[#F2F1ED]/40">
              <span className="font-dm-sans text-[18px] leading-7 text-[#044647] font-normal">
                Average Rating
              </span>

              <span className="font-manrope font-bold text-[40px] text-[#044647] leading-11.5">
                1.8M+
              </span>

              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined material-symbols-filled text-[18px] select-none">
                    star
                  </span>
                ))}
              </div>

              <span className="font-dm-sans font-normal text-[18px] text-[#044647] max-w-27.5 leading-7">
                Satisfied customers
              </span>

              <div className="w-full border-t border-gray-300/60 my-1" />

              {/* Avatar Stack */}
              <div className="flex items-center -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-12.5 w-12.5 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Customer 1"
                />
                <img
                  className="inline-block h-12.5 w-12.5 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="Customer 2"
                />
                <img
                  className="inline-block h-12.5 w-12.5 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                  alt="Customer 3"
                />
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
