"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    id: 1,
    day: "09",
    month: "JAN",
    category: "WORKFORCE",
    title: "What Happens in Your First Employee Performance Review",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    day: "08",
    month: "JAN",
    category: "RECRUITMENT",
    title: "What to Expect During Your First Recruitment Process Experience",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    day: "05",
    month: "JAN",
    category: "ENGAGEMENT",
    title: "The Future of Employee Well-being and Remote Engagement",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
];

export default function WorkplaceTrends() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % posts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#F6F5F2] py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 font-sans overflow-hidden relative">
      <div className="w-full max-w-360 mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col items-start gap-4 md:gap-5 text-left max-w-3xl mb-10 md:mb-12">
          <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] md:text-[15px] lg:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
            // WORKPLACE TRENDS
          </span>
          <h2 className="font-manrope font-semibold text-[30px] sm:text-[38px] md:text-[34px] lg:text-[52px] leading-tight sm:leading-11 md:leading-11 lg:leading-15.5 text-[#051B05]">
            Insights for Modern Human Resources
          </h2>
          <p className="font-dm-sans text-[#595B62] text-[16px] md:text-[18px] lg:text-[18px] leading-6.5 md:leading-7 font-normal">
            Whether you aim to build a strong workplace culture or a high-performing modern workforce, we turn your people strategy into results with expert human resources.
          </p>

          <div className="flex items-center gap-3 mt-1">
            <Link
              href="/ceo-talks"
              className="font-dm-sans px-6 md:px-7 py-3 md:py-3.5 rounded-full text-[16px] md:text-[18px] leading-7.5 font-medium shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center bg-[#044647] text-white"
            >
              See All Posts
            </Link>
            <Link
              href="/ceo-talks"
              className="w-12 h-12 rounded-full bg-[#C6D936] flex items-center justify-center text-[#044647] hover:scale-110 transition-transform shadow-sm"
              aria-label="View all posts"
            >
              <span className="material-symbols-outlined text-[20px] leading-none select-none">
                arrow_outward
              </span>
            </Link>
          </div>
        </div>

        {/* Posts Grid (2 columns on tablet mode md:grid-cols-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {posts.slice(0, 3).map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`flex-col text-left group ${idx === 2 ? "hidden lg:flex" : "flex"}`}
            >
              {/* Post Image */}
              <div className="w-full h-56 sm:h-64 md:h-64 lg:h-72 rounded-3xl overflow-hidden shadow-sm relative mb-4 sm:mb-5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Post Metadata & Content */}
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Date Badge Block */}
                <div className="flex flex-col items-center shrink-0">
                  <span className="font-manrope text-[32px] sm:text-[36px] md:text-[34px] font-bold text-[#051B05] leading-none md:leading-10">
                    {post.day}
                  </span>
                  <span className="font-dm-sans text-[14px] sm:text-[15px] md:text-[20px] md:leading-8 font-bold text-[#051B05] mt-1 uppercase">
                    {post.month}
                  </span>
                </div>

                {/* Vertical Divider */}
                <div className="w-px h-16 bg-gray-300/60 shrink-0 mt-1" />

                {/* Category, Title & Arrow */}
                <div className="flex flex-col gap-1.5 flex-1 pt-0.5">
                  <span className="font-dm-sans text-[13px] sm:text-[14px] md:text-[18px] md:leading-7 font-medium text-[#595B62] uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="font-manrope text-[#051B05] font-semibold text-[18px] sm:text-[20px] md:text-[20px] lg:text-[24px] leading-6.5 sm:leading-7.5 md:leading-8 group-hover:text-[#044647] transition-colors">
                    {post.title}
                  </h3>

                  {/* Arrow Action Button */}
                  <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 group-hover:border-[#044647] group-hover:bg-[#044647] group-hover:text-white transition-all mt-2 cursor-pointer shadow-xs">
                    <span className="material-symbols-outlined text-[18px] leading-none select-none">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Back to Top / Circle Button at bottom right */}
        <div className="flex justify-end mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full border border-[#C6D936] text-[#044647] hover:bg-[#C6D936] transition-all flex items-center justify-center shadow-xs cursor-pointer"
            aria-label="Scroll to top"
          >
            <span className="material-symbols-outlined text-[22px] leading-none select-none">
              arrow_upward
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}