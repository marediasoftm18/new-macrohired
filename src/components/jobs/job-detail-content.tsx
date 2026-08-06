"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  ExternalLink,
  Share2,
  Phone,
  Play,
  CheckCircle2,
  Clock,
} from "lucide-react";
import jobsData from "./jobs-data.json";

export interface JobDetail {
  id: number;
  slug: string;
  title: string;
  category: string;
  categoryIcon: string;
  location: string;
  type: string;
  postedDate: string;
  company: string;
  companyTagline: string;
  companyLogo: string;
  videoUrl: string;
  descriptionParagraphs: string[];
  skills: string[];
  educationExperience: string[];
}

interface JobDetailContentProps {
  job: JobDetail;
}

export default function JobDetailContent({ job }: JobDetailContentProps) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Recent jobs (take 4 items excluding current)
  const recentJobs = jobsData.filter((item) => item.id !== job.id).slice(0, 4);

  // Featured jobs (take next 2 items)
  const featuredJobs = jobsData.filter((item) => item.id !== job.id).slice(4, 6);

  return (
    <section className="w-full bg-[#F6F5F2] py-10 sm:py-14 md:py-16 font-sans">
      <div className="w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Main Job Details (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Top Meta Tags Bar */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-dm-sans text-xs sm:text-sm">
              <span className="bg-[#3898EC] text-white px-4 py-1.5 rounded-full font-medium shadow-2xs">
                {job.type}
              </span>
              <div className="flex items-center gap-1.5 text-[#044647] font-medium">
                <MapPin className="w-4 h-4 text-[#044647] shrink-0" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 font-normal">
                <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{job.postedDate}</span>
              </div>
            </div>

            {/* Company Info Card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#F2F2F2] flex items-center justify-center p-2.5 shrink-0 overflow-hidden">
                  <img
                    src={job.companyLogo}
                    alt={job.company}
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-manrope text-base sm:text-lg font-bold text-[#0A1C1D] leading-tight">
                    {job.company}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-dm-sans mt-0.5">
                    {job.companyTagline}
                  </p>
                </div>
              </div>

              {/* Action Link Buttons */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-xs sm:text-sm text-slate-600 font-medium hover:border-[#044647] hover:text-[#044647] transition-all cursor-pointer bg-white">
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>example</span>
                </button>
                <button className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-xs sm:text-sm text-slate-600 font-medium hover:border-[#044647] hover:text-[#044647] transition-all cursor-pointer bg-white">
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  <span>Website</span>
                </button>
              </div>
            </div>

            {/* Video / Media Player Frame */}
            <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-xs relative border border-gray-200/80">
              <iframe
                src={job.videoUrl}
                title={job.title}
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* Job Description Section */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-4">
              <h2 className="font-manrope text-2xl sm:text-3xl font-bold text-[#0A1C1D] tracking-tight">
                Job Description
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base font-dm-sans leading-relaxed">
                {job.descriptionParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Required Knowledge, Skills, and Abilities Section */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-4">
              <h2 className="font-manrope text-xl sm:text-2xl font-bold text-[#0A1C1D] tracking-tight">
                Required Knowledge, Skills, and Abilities
              </h2>
              <ul className="space-y-3">
                {job.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base font-dm-sans leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education + Experience Section */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-4">
              <h2 className="font-manrope text-xl sm:text-2xl font-bold text-[#0A1C1D] tracking-tight">
                Education + Experience
              </h2>
              <ul className="space-y-3">
                {job.educationExperience.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base font-dm-sans leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Apply Button */}
              <div className="pt-4">
                <button className="bg-[#C6D936] hover:bg-[#b4c62e] text-[#044647] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer">
                  Apply for job
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sidebar (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 w-full">
            
            {/* Recent Jobs Widget */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-xs">
              <h3 className="font-manrope text-xl font-bold text-[#0A1C1D] mb-5 pb-3 border-b border-gray-100">
                Recent Jobs
              </h3>
              <div className="flex flex-col gap-4">
                {recentJobs.map((rJob) => (
                  <Link
                    key={rJob.id}
                    href={`/jobs/${rJob.id}`}
                    className="flex items-center justify-between gap-3 pb-3 border-b border-gray-100 last:border-none last:pb-0 hover:bg-slate-50 p-2 rounded-xl transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F2F2F2] flex items-center justify-center p-2 shrink-0">
                        <img
                          src={rJob.companyLogo}
                          alt={rJob.company}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="font-manrope text-sm font-bold text-[#0A1C1D] group-hover:text-[#044647] transition-colors leading-snug">
                          {rJob.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-dm-sans mt-0.5">
                          {rJob.location} • {rJob.company}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                        rJob.type === "Freelance"
                          ? "text-[#3898EC]"
                          : rJob.type === "Full Time"
                          ? "text-emerald-600"
                          : rJob.type === "Internship"
                          ? "text-purple-600"
                          : "text-amber-600"
                      }`}
                    >
                      {rJob.type}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Featured Jobs Widget */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-xs">
              <h3 className="font-manrope text-xl font-bold text-[#0A1C1D] mb-5 pb-3 border-b border-gray-100">
                Featured Jobs
              </h3>
              <div className="flex flex-col gap-4">
                {featuredJobs.map((fJob) => (
                  <Link
                    key={fJob.id}
                    href={`/jobs/${fJob.id}`}
                    className="flex items-center justify-between gap-3 pb-3 border-b border-gray-100 last:border-none last:pb-0 hover:bg-slate-50 p-2 rounded-xl transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F2F2F2] flex items-center justify-center p-2 shrink-0">
                        <img
                          src={fJob.companyLogo}
                          alt={fJob.company}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="font-manrope text-sm font-bold text-[#0A1C1D] group-hover:text-[#044647] transition-colors leading-snug">
                          {fJob.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-dm-sans mt-0.5">
                          {fJob.location} • {fJob.company}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                        fJob.type === "Freelance"
                          ? "text-[#3898EC]"
                          : fJob.type === "Full Time"
                          ? "text-emerald-600"
                          : "text-amber-600"
                      }`}
                    >
                      {fJob.type}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Grow With Hirehive Widget */}
            <div className="rounded-2xl p-6 sm:p-8 relative overflow-hidden bg-linear-to-b from-[#E7F3BA] via-[#F4FAEC] to-[#E2F0B2] border border-[#C6D936]/40 shadow-xs flex flex-col justify-between min-h-72 sm:min-h-80">
              <div className="relative z-10 max-w-[55%] sm:max-w-[52%]">
                <h3 className="font-manrope text-2xl sm:text-3xl font-extrabold text-[#044647] leading-tight mb-2">
                  Grow With Hirehive
                </h3>
                <p className="text-xs sm:text-sm text-[#044647]/80 font-dm-sans mb-6">
                  Take your first step to success
                </p>

                {/* Phone Call Pill Button */}
                <a
                  href="tel:+1234567890"
                  className="bg-[#C6D936] hover:bg-[#b4c62e] text-[#044647] font-bold text-xs sm:text-sm px-4 py-2.5 rounded-full flex items-center gap-2 w-fit shadow-xs transition-transform hover:scale-105"
                >
                  <Phone className="w-4 h-4 fill-current text-[#044647]" />
                  <span>+1-234-567-890</span>
                </a>
              </div>

              <div className="mt-8 relative z-10 max-w-[55%] sm:max-w-[52%]">
                <p className="text-[11px] sm:text-xs text-[#044647]/70 font-dm-sans">
                  Review complete job overview
                </p>
              </div>

              {/* Full Height Right Image */}
              <div className="absolute top-0 right-0 bottom-0 h-full w-[45%] sm:w-[48%] overflow-hidden pointer-events-none">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                  alt="Grow With Hirehive"
                  className="w-full h-full object-cover object-center pointer-events-none"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
