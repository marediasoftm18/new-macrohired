"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Eye, ThumbsUp, Share2, Calendar, User, ArrowRight, ChevronLeft, ChevronRight, X, Tag } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  tags: string[];
  views: number;
  likes: number;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "What to Expect in Your First Human Resource Consultation Session",
    author: "Administrator",
    date: "January 17, 2026",
    category: "HR Consulting",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    excerpt: "You've decided to seek professional guidance for your business's human resources needs. As you prepare for your initial consultation, knowing what to expect can help you make the most of this opportunity.",
    tags: ["Workforce", "Training"],
    views: 34,
    likes: 12,
  },
  {
    id: 2,
    title: "What to Expect in Your First Employee Onboarding Experience",
    author: "Administrator",
    date: "January 15, 2026",
    category: "Fact Finding",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    excerpt: "The first few days of starting a new role can set the tone for your entire journey. Learn what key milestones and support structures make for a seamless employee onboarding experience.",
    tags: ["Workforce", "Process"],
    views: 42,
    likes: 19,
  },
  {
    id: 3,
    title: "What Happens During Your First Workplace Training Session",
    author: "Administrator",
    date: "January 12, 2026",
    category: "Recruitment",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Workplace training sessions provide an interactive environment to build new skills, align with organizational goals, and collaborate effectively with peers.",
    tags: ["Workforce", "Training"],
    views: 28,
    likes: 15,
  },
  {
    id: 4,
    title: "What Happens During Your First Employee Engagement Program",
    author: "Administrator",
    date: "January 10, 2026",
    category: "Staffing",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1200&q=80",
    excerpt: "An effective employee engagement program fosters transparent communication, mutual trust, and continuous growth across all department levels.",
    tags: ["Workforce", "Engagement"],
    views: 51,
    likes: 24,
  },
  {
    id: 5,
    title: "What to Expect From Your First Workforce Planning Session Session Meeting",
    author: "Administrator",
    date: "January 08, 2026",
    category: "Workforce",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Strategic workforce planning aligns talent management with company strategy to forecast future hiring needs, skill gaps, and organizational requirements.",
    tags: ["Workforce", "Planning"],
    views: 39,
    likes: 18,
  },
  {
    id: 6,
    title: "What to Know Before Your First HR Policy Implementation Process",
    author: "Administrator",
    date: "January 05, 2026",
    category: "HR Consulting",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Implementing new HR policies requires transparent communication, clear guidelines, and staff alignment to ensure a smooth transition and long-term success.",
    tags: ["Policy", "HR"],
    views: 45,
    likes: 21,
  },
];

const CATEGORIES_LIST = [
  { name: "HR Consulting", count: 9 },
  { name: "Fact Finding", count: 4 },
  { name: "Recruitment", count: 1 },
  { name: "Staffing", count: 3 },
  { name: "Workforce", count: 5 },
];

const ALL_TAGS = [
  "Consulting",
  "Workforce",
  "HR",
  "Recruitment",
  "Planning",
  "Policy",
  "Hiring",
  "Training",
  "Staffing",
  "Process",
];

const RECENT_POSTS = [
  {
    id: 1,
    title: "What to Expect in Your First Human Resource...",
    date: "January 17, 2026",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    title: "What to Expect in Your First Employee Onboarding...",
    date: "January 15, 2026",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    title: "What Happens During Your First Workplace Training...",
    date: "January 12, 2026",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80",
  },
];

export default function BlogContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on search, category, tag
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        !selectedCategory || post.category === selectedCategory;

      const matchesTag =
        !selectedTag || post.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase());

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchQuery, selectedCategory, selectedTag]);

  // Total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedTag(null);
    setCurrentPage(1);
  };

  return (
    <section className="w-full bg-[#F6F5F2] py-10 sm:py-14 lg:py-20 font-sans">
      <div className="w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
        
        {/* Active Filters Bar if any filter is active */}
        {(searchQuery || selectedCategory || selectedTag) && (
          <div className="mb-8 p-4 bg-white rounded-2xl border border-gray-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-700 font-dm-sans">
              <span className="font-semibold text-[#044647]">Active Filters:</span>
              {selectedCategory && (
                <span className="bg-[#044647] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
                  Category: {selectedCategory}
                  <button onClick={() => setSelectedCategory(null)} className="hover:text-amber-300">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              )}
              {selectedTag && (
                <span className="bg-[#044647] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
                  Tag: {selectedTag}
                  <button onClick={() => setSelectedTag(null)} className="hover:text-amber-300">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="bg-[#044647] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery("")} className="hover:text-amber-300">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              )}
            </div>
            <button
              onClick={clearFilters}
              className="text-xs font-semibold text-rose-600 hover:underline flex items-center gap-1 cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* 2-Column Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12">
          
          {/* Main Blog Posts Column (Left on Desktop, Top on Mobile) */}
          <div className="lg:col-span-8 flex flex-col gap-8 sm:gap-10 lg:gap-12">
            
            {filteredPosts.length === 0 ? (
              <div className="bg-white rounded-3xl p-10 sm:p-14 text-center border border-gray-100 shadow-2xs flex flex-col items-center justify-center">
                <Search className="w-12 h-12 text-slate-300 mb-4" />
                <h3 className="font-manrope text-xl font-bold text-[#0A1C1D] mb-2">No Blog Posts Found</h3>
                <p className="font-dm-sans text-slate-500 max-w-md text-sm mb-6">
                  We couldn't find any articles matching your search criteria. Try clearing filters or searching for different keywords.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2.5 bg-[#044647] text-white text-sm font-semibold rounded-xl hover:bg-[#033435] transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              currentPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-3xl p-5 sm:p-7 md:p-8 border border-gray-100 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col group"
                >
                  {/* Blog Featured Image */}
                  <div className="w-full h-60 sm:h-76 md:h-96 lg:h-[420px] rounded-2xl overflow-hidden mb-6 sm:mb-7 relative bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-500 font-dm-sans mb-3 sm:mb-4">
                    <span className="flex items-center gap-1.5 font-medium text-slate-600">
                      <User className="w-4 h-4 text-[#044647]" />
                      By {post.author}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1.5 text-slate-600">
                      <Calendar className="w-4 h-4 text-[#044647]" />
                      {post.date}
                    </span>
                    <span className="text-slate-300">•</span>
                    <button
                      onClick={() => {
                        setSelectedCategory(post.category);
                        setCurrentPage(1);
                      }}
                      className="text-[#044647] font-semibold hover:underline cursor-pointer"
                    >
                      {post.category}
                    </button>
                  </div>

                  {/* Blog Title */}
                  <h2 className="font-manrope text-xl sm:text-2xl md:text-3xl font-bold text-[#0A1C1D] group-hover:text-[#044647] transition-colors leading-snug cursor-pointer mb-3 sm:mb-4">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="font-dm-sans text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-7">
                    {post.excerpt}
                  </p>

                  {/* Card Bottom Row / Footer */}
                  <div className="pt-4 sm:pt-5 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 font-dm-sans">
                    {/* Left: Tags */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
                      <span className="font-semibold text-slate-700">Tags:</span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {post.tags.map((tag, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setSelectedTag(tag);
                              setCurrentPage(1);
                            }}
                            className="hover:text-[#044647] hover:underline cursor-pointer"
                          >
                            {tag}{idx < post.tags.length - 1 ? "," : ""}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Right: Read More & Engagement Metrics */}
                    <div className="flex items-center gap-4 sm:gap-6 ml-auto">
                      <button
                        onClick={() => {}}
                        className="text-xs sm:text-sm font-bold text-[#044647] hover:text-[#C6D936] flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-3 text-slate-400 text-xs sm:text-sm border-l border-gray-200 pl-4 sm:pl-6">
                        <span className="flex items-center gap-1 hover:text-slate-600 transition-colors cursor-pointer" title="Views">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </span>
                        <span className="flex items-center gap-1 hover:text-slate-600 transition-colors cursor-pointer" title="Likes">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </span>
                        <span className="flex items-center hover:text-slate-600 transition-colors cursor-pointer" title="Share">
                          <Share2 className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}

            {/* Pagination Controls */}
            {totalPages > 0 && (
              <div className="flex items-center justify-center gap-2 sm:gap-3 my-4 sm:my-6">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 border-gray-200 opacity-60 cursor-not-allowed"
                      : "bg-white text-slate-700 hover:bg-[#044647] hover:text-white border-gray-200 shadow-2xs"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full text-sm sm:text-base font-semibold flex items-center justify-center transition-all cursor-pointer ${
                      currentPage === pageNum
                        ? "bg-[#044647] text-white shadow-sm"
                        : "bg-white text-slate-700 hover:bg-gray-100 border border-gray-200 shadow-2xs"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 border-gray-200 opacity-60 cursor-not-allowed"
                      : "bg-white text-slate-700 hover:bg-[#044647] hover:text-white border-gray-200 shadow-2xs"
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

          </div>

          {/* Sidebar Column (Right on Desktop, Bottom on Mobile) */}
          <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-8">
            
            {/* 1. Search Box Widget */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-2xs">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setCurrentPage(1);
                }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-[#F6F5F2] border border-gray-200 rounded-2xl px-5 py-3.5 pr-12 text-sm font-dm-sans text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#044647] focus:bg-white transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-[#044647] text-white flex items-center justify-center hover:bg-[#033435] transition-colors cursor-pointer shadow-2xs"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* 2. Categories Widget */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-2xs">
              <h3 className="font-manrope text-lg sm:text-xl font-bold text-[#0A1C1D] mb-5 pb-3 border-b border-gray-100 flex items-center justify-between">
                <span>Categories</span>
              </h3>
              <ul className="flex flex-col gap-3 font-dm-sans">
                {CATEGORIES_LIST.map((cat) => {
                  const isActive = selectedCategory === cat.name;
                  return (
                    <li key={cat.name}>
                      <button
                        onClick={() => {
                          setSelectedCategory(isActive ? null : cat.name);
                          setCurrentPage(1);
                        }}
                        className={`w-full flex items-center justify-between text-sm py-2 px-3 rounded-xl transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#044647] text-white font-semibold shadow-2xs"
                            : "text-slate-600 hover:text-[#044647] hover:bg-[#F6F5F2]"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#C6D936]" : "bg-slate-400"}`} />
                          {cat.name}
                        </span>
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full ${
                            isActive
                              ? "bg-white/20 text-white font-bold"
                              : "bg-gray-100 text-slate-500 font-medium"
                          }`}
                        >
                          ({cat.count})
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* 3. Recent Posts Widget */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-2xs">
              <h3 className="font-manrope text-lg sm:text-xl font-bold text-[#0A1C1D] mb-5 pb-3 border-b border-gray-100">
                Recent Posts
              </h3>
              <div className="flex flex-col gap-4">
                {RECENT_POSTS.map((rp) => (
                  <div key={rp.id} className="flex items-center gap-3.5 group cursor-pointer">
                    <img
                      src={rp.image}
                      alt={rp.title}
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover shrink-0 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex flex-col">
                      <h4 className="font-manrope text-xs sm:text-sm font-bold text-[#0A1C1D] group-hover:text-[#044647] transition-colors leading-snug line-clamp-2 mb-1">
                        {rp.title}
                      </h4>
                      <span className="text-[11px] sm:text-xs text-slate-400 font-dm-sans flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#044647]" />
                        {rp.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Tags Widget */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-2xs">
              <h3 className="font-manrope text-lg sm:text-xl font-bold text-[#0A1C1D] mb-5 pb-3 border-b border-gray-100 flex items-center justify-between">
                <span>Tags</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {ALL_TAGS.map((t) => {
                  const isActive = selectedTag === t;
                  return (
                    <button
                      key={t}
                      onClick={() => {
                        setSelectedTag(isActive ? null : t);
                        setCurrentPage(1);
                      }}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-medium font-dm-sans transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#044647] text-white shadow-2xs font-semibold"
                          : "bg-[#F6F5F2] text-slate-600 hover:bg-[#044647] hover:text-white border border-gray-200/60"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
