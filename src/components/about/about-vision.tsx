"use client";

import Link from "next/link";

export default function AboutVision() {
  return (
    <section className="w-full bg-white py-14 md:py-20 lg:py-28 font-sans overflow-hidden">
      <div className="w-full max-w-360 px-4 sm:px-6 md:px-4 xl:px-8 mx-auto">
        
        {/* 3 Clean Horizontal Columns Layout */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-6 lg:gap-6 w-full">
          
          {/* Column 1: Left Small Card Image (Hidden in Tablet & Mobile, Visible on Desktop) */}
          <div className="hidden lg:flex w-full lg:w-85 pr-0 lg:pr-22.5 shrink-0 justify-center lg:justify-start items-start">
            <div className="w-62.5 lg:w-62.5 h-72.25 rounded-[30px] overflow-hidden border border-gray-100 shadow-sm shrink-0">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                alt="Company Overview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Column 2: Center Text & Content Block */}
          <div className="w-full md:w-1/2 lg:w-auto lg:flex-1 flex flex-col text-left gap-6 pr-0 md:pr-0 lg:pr-6.25">
            {/* Tag */}
            <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] sm:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
              // COMPANY OVERVIEW
            </span>

            {/* Title */}
            <h2 className="font-manrope font-semibold text-[32px] sm:text-[42px] md:text-[34px] lg:text-[52px] leading-tight sm:leading-13 md:leading-11 lg:leading-15.5 text-[#051B05]">
              Our Vision For People And Growth
            </h2>

            {/* Subtext */}
            <p className="font-dm-sans text-[#595B62] text-[16px] sm:text-[18px] leading-6.5 sm:leading-7 font-normal">
              Whether you build a strong workplace culture or a high-performing workforce, we turn your people vision into lasting success through strategic HR expertise.
            </p>

            {/* Stat Row */}
            <div className="flex items-center gap-5 pt-2 pb-4 border-b border-gray-200/80">
              <span className="font-manrope text-[64px] sm:text-[80px] md:text-[64px] lg:text-[90px] font-bold text-[#044647] leading-none md:leading-22.5 flex items-center">
                18<span className="text-[#C6D936]">+</span>
              </span>
              <div className="font-dm-sans text-[16px] sm:text-[18px] leading-5.5 sm:leading-6.5 font-bold uppercase text-[#051B05] max-w-37.5">
                Professional Experience
              </div>
            </div>

            {/* Bullet Points with icon-24.svg */}
            <div className="flex flex-col gap-3 font-dm-sans font-normal text-[16px] sm:text-[18px] leading-6.5 sm:leading-7 text-[#595B62]">
              <div className="flex items-center gap-3">
                <img
                  src="/media assets/home/icon-24.svg"
                  alt="icon"
                  className="w-4.5 h-4.5 shrink-0"
                />
                <span>Build a strong, positive workplace culture</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/media assets/home/icon-24.svg"
                  alt="icon"
                  className="w-4.5 h-4.5 shrink-0"
                />
                <span>Drive a high-performing workforce with HR strategies</span>
              </div>
            </div>

            {/* Action Row: CTA Pill + Arrow Button + Avatar Stack */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Button Pill with Arrow */}
              <div className="flex items-center gap-2">
                <Link
                  href="/contact"
                  className="bg-[#044647] hover:bg-[#033536] text-white px-6 sm:px-7 py-3 rounded-full font-medium font-dm-sans text-[16px] sm:text-[18px] leading-7.5 transition-all hover:scale-105 shadow-sm"
                >
                  Get Started
                </Link>
                <Link
                  href="/contact"
                  className="w-12 h-12 rounded-full bg-[#C6D936] hover:bg-[#b5c72a] text-[#051B05] flex items-center justify-center font-bold transition-all hover:scale-110 shadow-sm"
                  aria-label="Get Started"
                >
                  <span className="material-symbols-outlined text-[20px] font-bold select-none">
                    arrow_outward
                  </span>
                </Link>
              </div>

              {/* Avatar Stack */}
              <div className="flex md:hidden lg:flex items-center -space-x-2.5 overflow-hidden ml-2">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Avatar 1"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="Avatar 2"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                  alt="Avatar 3"
                />
              </div>
            </div>

          </div>

          {/* Column 3: Right Large Portrait Image (450px x 640px) */}
          <div className="w-full md:w-1/2 lg:w-112.5 shrink-0 flex justify-center md:justify-end items-start">
            <div className="w-full max-w-85 sm:max-w-100 lg:max-w-112.5 h-105 sm:h-130 md:h-135 lg:h-160 rounded-[30px] overflow-hidden shadow-md shrink-0">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="Executive Leader"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}