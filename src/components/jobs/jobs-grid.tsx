"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Globe, Users, UserCheck, Laptop, MapPin, Clock, Briefcase } from "lucide-react";

interface JobItem {
  id: number;
  category: string;
  icon: React.ElementType;
  title: string;
  location: string;
  type: string;
  description: string;
  postedDate: string;
  company: string;
  companyLogo: string;
}

const CATEGORIES = [
  "All Jobs",
  "Employee Hiring",
  "Human Resources",
  "People Analytics",
  "Staff Onboarding",
  "Talent Acquisition",
  "Workforce Hiring",
];

const JOBS_DATA: JobItem[] = [
  {
    id: 1,
    category: "People Analytics",
    icon: Globe,
    title: "Development Manager",
    location: "Singapore",
    type: "Freelance",
    description:
      "Job Description We are seeking an experienced and results-driven Development...",
    postedDate: "6 months ago by",
    company: "AsiaPeople HR",
    companyLogo: "/media assets/Jobs/job-01.svg",
  },
  {
    id: 2,
    category: "Talent Acquisition",
    icon: Globe,
    title: "Recruitment Coordinator",
    location: "Dubai, UAE",
    type: "Full Time",
    description:
      "Job Description We are seeking a detail-oriented and proactive Recruitment...",
    postedDate: "6 months ago by",
    company: "Gulf Talent Hub",
    companyLogo: "/media assets/Jobs/job-02.svg",
  },
  {
    id: 3,
    category: "Human Resources",
    icon: Users,
    title: "HR Business Partner",
    location: "Berlin, Germany",
    type: "Internship",
    description:
      "Job Description We are seeking a strategic and results-driven HR...",
    postedDate: "6 months ago by",
    company: "EuroTalent Group",
    companyLogo: "/media assets/Jobs/job-03.svg",
  },
  {
    id: 4,
    category: "Staff Onboarding",
    icon: Laptop,
    title: "Payroll Specialist",
    location: "Sydney, Australia",
    type: "Part Time",
    description:
      "Job Description We are seeking a detail-oriented, reliable Payroll Specialist...",
    postedDate: "6 months ago by",
    company: "Pacific Workforce",
    companyLogo: "/media assets/Jobs/job-04.svg",
  },
  {
    id: 5,
    category: "Talent Acquisition",
    icon: Globe,
    title: "Talent Acquisition Specialist",
    location: "Toronto, Canada",
    type: "Temporary",
    description:
      "Job Description We are seeking a motivated and detail-oriented Talent...",
    postedDate: "6 months ago by",
    company: "Maple HR Partners",
    companyLogo: "/media assets/Jobs/job-05.svg",
  },
  {
    id: 6,
    category: "Staff Onboarding",
    icon: Laptop,
    title: "HR Executive",
    location: "London, UK",
    type: "Internship",
    description:
      "Job Description We are seeking a proactive, detail-oriented HR Executive...",
    postedDate: "6 months ago by",
    company: "BrightPath Consulting",
    companyLogo: "/media assets/Jobs/job-06.svg",
  },
  {
    id: 7,
    category: "Employee Hiring",
    icon: UserCheck,
    title: "Technical Recruiter",
    location: "San Francisco, USA",
    type: "Full Time",
    description:
      "Job Description We are seeking a detail-oriented and results-driven Technical...",
    postedDate: "6 months ago by",
    company: "NextGen Talent",
    companyLogo: "/media assets/Jobs/job-07.svg",
  },
  {
    id: 8,
    category: "Human Resources",
    icon: Users,
    title: "Senior HR Manager",
    location: "New York, USA",
    type: "Freelance",
    description:
      "Job Description We are seeking an experienced and strategic Senior...",
    postedDate: "6 months ago by",
    company: "TalentBridge Solutions",
    companyLogo: "/media assets/Jobs/job-08.svg",
  },
];

export default function JobsGrid() {
  const [activeCategory, setActiveCategory] = useState("All Jobs");

  const filteredJobs =
    activeCategory === "All Jobs"
      ? JOBS_DATA
      : JOBS_DATA.filter((job) => job.category === activeCategory);

  return (
    <section className="w-full bg-[#F6F5F2] py-10 sm:py-14 md:py-16 font-sans">
      <div className="w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-12 mx-auto flex flex-col items-center">
        {/* Category Filter Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3 mb-10 sm:mb-12 md:mb-14">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-xs ${
                  isActive
                    ? "bg-[#C6D936] text-[#044647] scale-102"
                    : "bg-[#044647] text-white hover:bg-[#065b5c]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Job Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6">
          {filteredJobs.map((job) => {
            const IconComp = job.icon;
            return (
              <div
                key={job.id}
                className="bg-white rounded-[20px] p-5 sm:p-6 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Top Section */}
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2 mb-3 text-slate-700 text-xs sm:text-[13px] font-medium font-dm-sans">
                    <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#044647]/80 shrink-0" />
                    <span>{job.category}</span>
                  </div>

                  {/* Job Title Link */}
                  <Link href={`/jobs/${job.id}`}>
                    <h3 className="font-manrope text-[17px] sm:text-[19px] lg:text-[18px] font-bold text-[#0A1C1D] leading-snug mb-2.5 group-hover:text-[#044647] transition-colors cursor-pointer">
                      {job.title}
                    </h3>
                  </Link>

                  {/* Location & Type */}
                  <div className="flex items-center gap-2 sm:gap-2.5 text-slate-500 text-xs sm:text-[13px] font-dm-sans mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{job.location}</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <span>{job.type}</span>
                  </div>

                  {/* Job Description Excerpt */}
                  <p className="text-slate-500 text-xs sm:text-[13px] font-dm-sans leading-relaxed mb-6 line-clamp-2">
                    {job.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="flex items-end justify-between pt-4 border-t border-slate-100 mt-auto">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-1 text-slate-400 text-[11px] sm:text-xs font-dm-sans">
                      <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                      <span>{job.postedDate}</span>
                    </div>
                    <span className="font-manrope text-xs sm:text-sm font-bold text-[#0A1C1D]">
                      {job.company}
                    </span>
                  </div>

                  {/* Tech / Company Logo Container with Slide-Up Motion (triggers only on container hover) */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#F2F2F2] overflow-hidden shrink-0 relative group/logo cursor-pointer">
                    <div className="w-full h-[200%] flex flex-col transition-transform duration-300 ease-in-out group-hover/logo:-translate-y-1/2">
                      <div className="w-full h-1/2 flex items-center justify-center p-2.5">
                        <img
                          src={job.companyLogo}
                          alt={job.company}
                          className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                        />
                      </div>
                      <div className="w-full h-1/2 flex items-center justify-center p-2.5">
                        <img
                          src={job.companyLogo}
                          alt={job.company}
                          className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
