"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

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
    <section className="w-full bg-[#F6F5F2] py-16 md:py-24 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Sticky Summary */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col gap-6 text-left self-start">
            <span className="inline-flex self-start bg-[#C6D936] text-[#044647] px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-wider rounded-[2px]">
              // OUR TESTIMONIALS
            </span>

            <h2
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(30px, 4.5vw, 44px)",
                color: "#044647",
                lineHeight: 1.15,
              }}
              className="tracking-tight"
            >
              Experiences from Our Clients
            </h2>

            {/* Stars */}
            <div className="flex gap-1 text-orange-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" className="stroke-none" />
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-sm font-light" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
              This HR agency improved our workplace with simple, effective solutions.
            </p>

            {/* Customer Avatars */}
            <div className="flex items-center gap-4 mt-4">
              <div className="flex -space-x-3">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Customer 1"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Customer 2"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Customer 3"
                />
              </div>
              <div className="text-left">
                <span className="block text-lg font-bold text-[#044647] leading-none" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                  1.8 M+
                </span>
                <span className="text-gray-500 text-xs mt-0.5 block" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                  Satisfied customers
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Sliding Vertical Feed (Shows 3 Review Cards) */}
          <div className="lg:col-span-7 flex flex-col gap-6 relative h-[360px] md:h-[650px] overflow-hidden">
            <AnimatePresence mode="popLayout">
              {visibleReviews.map((review, positionIdx) => (
                <motion.div
                  layout
                  key={review.id}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.95 }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                  className={`bg-white rounded-[32px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100 flex-col md:flex-row gap-6 relative overflow-hidden md:h-[198px] ${
                    positionIdx > 0 ? "hidden md:flex" : "flex"
                  }`}
                >
                  {/* Left sub-column: Profile details */}
                  <div className="flex flex-col items-center text-center md:border-r border-gray-100 md:pr-6 shrink-0 min-w-[120px]">
                    <img
                      src={memberPortrait(review.image)}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover mb-3"
                    />
                    <h3 className="text-[#044647] font-bold text-sm font-sans" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                      {review.name}
                    </h3>
                    <p className="text-gray-400 text-[10px] mt-0.5" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      {review.role}
                    </p>

                    {/* Numeric rating */}
                    <div className="flex items-center gap-1 mt-4 text-xs font-bold text-[#044647]" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                      <span>{review.rating}</span>
                      <Star size={12} fill="#C6D936" className="stroke-none text-[#C6D936]" />
                    </div>
                  </div>

                  {/* Right sub-column: Quote text */}
                  <div className="flex flex-col justify-between flex-grow text-left relative">
                    <div className="flex gap-0.5 text-orange-500 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" className="stroke-none" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed pr-8" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                      &ldquo;{review.text}&rdquo;
                    </p>

                    {/* Large Quote watermark decoration */}
                    <div className="absolute right-0 bottom-[-10px] text-gray-100 pointer-events-none select-none font-serif text-[120px] font-extrabold leading-none opacity-30">
                      &ldquo;
                    </div>
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

// Quick helper to fall back to sample photos
function memberPortrait(url: string) {
  return url;
}
