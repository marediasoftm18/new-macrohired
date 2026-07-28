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
  {
    id: 4,
    name: "Amit Sharma",
    role: "Director",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    text: "Highly professional agency that understands corporate requirements. Their contract staffing services saved us during peak workload quarters.",
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "HR Head",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
    text: "Exceptional consultation and legal compliance advice. They modernized our employee handbook and payroll workflows without any disruption.",
  },
];

export default function Testimonials() {
  // Track indices of the 3 reviews currently being shown
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % reviews.length);
    }, 4000); // Shift reviews every 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Extract exactly 3 reviews based on startIndex
  const visibleReviews = [
    reviews[startIndex],
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length],
  ];

  return (
    <section className="w-full bg-[#F6F5F2] py-14 md:py-24 font-sans px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-350 mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-28">
          
          {/* Left Column: Sticky Summary */}
          <div className="w-full lg:w-105 shrink-0 lg:sticky lg:top-24 flex flex-col gap-5 sm:gap-6 text-left self-start">
            <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] sm:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
              // OUR TESTIMONIALS
            </span>

            <h2 className="font-manrope font-semibold text-[32px] sm:text-[42px] lg:text-[52px] leading-tight sm:leading-13 lg:leading-15.5 tracking-tight text-[#051B05]">
              Experiences from <br className="hidden sm:inline" /> Our Clients
            </h2>

            {/* Rating Section */}
            <div className="flex flex-col gap-4 mt-2">
              {/* 5 Orange Stars */}
              <div className="flex gap-1 text-[#ED8A19]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined material-symbols-filled text-[20px] sm:text-[22px] select-none leading-none">
                    star
                  </span>
                ))}
              </div>

              {/* Tagline Description */}
              <p className="font-dm-sans text-[#595B62] text-[16px] sm:text-[18px] leading-6.5 sm:leading-7 font-normal max-w-sm">
                This HR agency improved our workplace with simple, effective solutions.
              </p>

              {/* Overlapping Avatars & 1.8 M+ Counter */}
              <div className="flex items-center gap-4 mt-3">
                {/* 3 Overlapping Avatars */}
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

                {/* 1.8 M+ Satisfied customers */}
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

          {/* Right Column: Sliding Feed */}
          <div className="flex-1 w-full lg:w-218.75 flex flex-col gap-6 relative h-auto lg:h-275.25 overflow-hidden">
            <AnimatePresence mode="popLayout">
              {visibleReviews.map((review, positionIdx) => (
                <motion.div
                  layout
                  key={review.id}
                  initial={{ opacity: 0, y: 60, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -60, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-10 md:p-12.5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col md:flex-row gap-6 md:gap-12 relative overflow-hidden w-full h-auto lg:h-87.75 shrink-0"
                >
                  {/* Left sub-column: Profile details */}
                  <div className="flex flex-col items-start text-left md:border-r border-gray-100 md:pr-8 shrink-0 min-w-36 justify-between border-b md:border-b-0 pb-4 md:pb-0">
                    <div className="flex flex-col items-start gap-1.5">
                      <img
                        src={memberPortrait(review.image)}
                        alt={review.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mb-2 sm:mb-3"
                      />
                      <h3 className="font-manrope text-[#051B05] font-semibold text-[18px] sm:text-[20px] leading-6 sm:leading-7">
                        {review.name}
                      </h3>
                      <p className="font-dm-sans text-[#595B62] text-[16px] sm:text-[18px] leading-6 sm:leading-7 font-normal">
                        {review.role}
                      </p>
                    </div>

                    {/* Numeric rating */}
                    <div className="font-manrope flex items-center gap-1.5 mt-3 sm:mt-6 text-[24px] sm:text-[32px] leading-8 sm:leading-10 font-bold text-[#051B05]">
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
                    <p className="font-dm-sans text-[#595B62] text-[18px] sm:text-[22px] lg:text-[26px] leading-7 sm:leading-8 lg:leading-9 font-normal italic pr-4 sm:pr-8 relative z-10">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    {/* Font Awesome fa-quote-left SVG Background Decoration */}
                    <svg
                      className="absolute right-0 bottom-0 w-16 h-16 sm:w-[87.5px] sm:h-25.25 text-[#E8E8E8] pointer-events-none select-none z-0 opacity-50 sm:opacity-100"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <path d="M448 96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H352v32c0 35.3 28.7 64 64 64h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H416c-70.6 0-128-57.4-128-128V144c0-26.5 21.5-48 48-48H448zM160 96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H64v32c0 35.3 28.7 64 64 64h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H128C57.4 448 0 390.6 0 320V144C0 117.5 21.5 96 48 96H160z" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

function memberPortrait(url: string) {
  return url;
}
