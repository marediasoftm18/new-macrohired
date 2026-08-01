"use client";

export default function SmartTracking() {
  return (
    <section className="w-full bg-white pb-12 md:pb-16 lg:pb-24 font-sans overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-8 max-w-full mx-auto">
        {/* Container: Vertically stacked on mobile & tablet (< lg), Horizontally side-by-side on desktop (lg:) */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-8 2xl:gap-10 w-full">
          
          {/* Card 1: Smart Tracking Claims Card (60-62% Width on Desktop) */}
          <div className="w-full lg:w-[60%] 2xl:w-[62%] h-auto bg-[#044647] rounded-3xl sm:rounded-4xl overflow-hidden flex flex-col lg:flex-row relative shadow-sm">
            {/* Watermark Pattern */}
            <div className="absolute -right-5 -bottom-5 opacity-[0.03] text-white pointer-events-none select-none">
              <svg className="w-64 h-64" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 0 C25 25, 25 75, 50 100 C75 75, 75 25, 50 0 Z" />
              </svg>
            </div>

            {/* Left Image with Exact Reference Gradient Overlay */}
            <div className="relative w-full lg:w-[40%] xl:w-[42%] h-60 sm:h-76 md:h-80 lg:h-auto overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Corporate team working"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay matching reference spec (Dark Slate Blue -> Teal -> Lime Green) */}
              <div className="absolute inset-0 bg-linear-to-r from-[#20344d]/85 via-[#345268]/60 to-[#C6D936]/85" />
            </div>

            {/* Right Form Content */}
            <div className="flex-1 p-6 sm:p-8 md:p-8 lg:p-8 xl:p-10 2xl:p-14 flex flex-col justify-center gap-5 sm:gap-6 relative z-10 text-left">
              <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] md:text-[15px] lg:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
                // SMART TRACKING
              </span>

              <h2 className="font-manrope text-[30px] sm:text-[38px] md:text-[34px] lg:text-[40px] xl:text-[46px] 2xl:text-[52px] leading-tight sm:leading-11 md:leading-11 lg:leading-12 2xl:leading-15 font-semibold text-white tracking-tight">
                Start tracking your claims
              </h2>

              {/* Form Input Group - Pill Input Bar */}
              <div className="bg-white rounded-full pl-5 sm:pl-7 pr-1 flex items-center justify-between shadow-md w-full max-w-xl md:max-w-2xl 2xl:max-w-3xl h-14 sm:h-16 md:h-16 2xl:h-18 border-2 border-white/20">
                <input
                  type="text"
                  placeholder="Enter Tracking Number"
                  className="w-full bg-transparent border-none outline-none text-[15px] sm:text-[18px] md:text-[18px] leading-7 font-dm-sans font-normal text-gray-700 placeholder:text-gray-400 pr-2"
                />
                <button
                  className="px-5 sm:px-8 py-2 sm:py-4 md:py-3.5 2xl:py-4 rounded-full text-[14px] sm:text-[17px] md:text-[18px] leading-7 font-dm-sans font-medium transition-all duration-300 bg-[#C6D936] text-[#051B05] hover:bg-[#044647] hover:text-white cursor-pointer shrink-0 flex items-center gap-2 shadow-xs"
                >
                  <span>Track Your Claim</span>
                  <span className="text-[18px] leading-none">&rarr;</span>
                </button>
              </div>

              {/* Consultation Link */}
              <a
                href="/contact"
                className="font-dm-sans text-white text-[15px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] leading-7 sm:leading-9 md:leading-8 font-semibold hover:text-[#C6D936] transition-colors underline underline-offset-4 self-start mt-1"
              >
                Schedule for consultation: 800 123 4567
              </a>
            </div>
          </div>

          {/* Card 2: Stats Info Card (38-40% Width on Desktop) */}
          <div className="w-full lg:w-[40%] 2xl:w-[38%] h-auto bg-[#C6D936] rounded-3xl sm:rounded-4xl p-6 sm:p-8 md:p-10 lg:p-8 xl:p-10 2xl:p-14 flex flex-col justify-center items-center text-[#044647] relative overflow-hidden shadow-sm">
            {/* Grid Pattern Overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(rgba(4, 70, 71, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(4, 70, 71, 0.08) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
                maskImage: "linear-gradient(to right, transparent 25%, black 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 25%, black 100%)",
              }}
            />

            {/* Inner Content Block */}
            <div className="w-full max-w-2xl flex flex-col justify-between relative z-10 mx-auto gap-6 sm:gap-6 lg:gap-6 2xl:gap-8 h-full">
              {/* Stat 1 (Top: 24/7) */}
              <div className="flex items-center gap-4 sm:gap-6">
                <img
                  src="/media assets/home/why choose 6.svg"
                  alt="24/7 Icon"
                  className="w-10 h-10 sm:w-14 sm:h-14 object-contain shrink-0"
                />
                <div className="text-left flex items-center gap-4 sm:gap-5">
                  <span className="font-manrope text-[40px] sm:text-[54px] md:text-[60px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] font-medium leading-none text-[#051b05]">
                    24/7
                  </span>
                  <span className="font-dm-sans text-[16px] sm:text-[18px] md:text-[20px] lg:text-[18px] xl:text-[20px] text-[#051b05] font-normal leading-6 sm:leading-7 md:leading-7.5 max-w-52">
                    Your business<br className="hidden sm:block"/>never stops
                  </span>
                </div>
              </div>

              {/* Stat 2 (Middle: 100k) */}
              <div className="flex items-center gap-4 sm:gap-6 border-t border-b border-[#051b05]/15 py-5 sm:py-8 md:py-8 2xl:py-10 my-2 sm:my-4 lg:my-3">
                <img
                  src="/media assets/home/why choose 2.svg"
                  alt="100k Icon"
                  className="w-10 h-10 sm:w-14 sm:h-14 object-contain shrink-0"
                />
                <div className="text-left flex items-center gap-4 sm:gap-5">
                  <span className="font-manrope text-[40px] sm:text-[54px] md:text-[60px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] font-medium leading-none text-[#051b05]">
                    100k
                  </span>
                  <span className="font-dm-sans text-[16px] sm:text-[18px] md:text-[20px] lg:text-[18px] xl:text-[20px] text-[#051b05] font-normal leading-6 sm:leading-7 md:leading-7.5 max-w-52">
                    Trusted HR<br className="hidden sm:block"/>expertise
                  </span>
                </div>
              </div>

              {/* Bottom Tagline block */}
              <div className="flex items-center gap-4 sm:gap-6">
                <img
                  src="/media assets/home/icon-24.svg"
                  alt="Star Icon"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0 brightness-0"
                />
                <p className="font-dm-sans text-[15px] sm:text-[17px] md:text-[18px] text-[#051b05] font-normal leading-6 sm:leading-7 text-left">
                  Whether you aim to build a strong workplace culture or a high-performing modern workforce.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
