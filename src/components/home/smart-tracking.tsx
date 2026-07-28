"use client";

export default function SmartTracking() {
  return (
    <section className="w-full bg-white pb-14 md:pb-24 font-sans overflow-x-hidden">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
          
          {/* Card 1: Smart Tracking Claims Card */}
          <div className="w-full lg:w-294.25 h-auto lg:h-125.5 shrink-0 bg-[#044647] rounded-3xl sm:rounded-4xl overflow-hidden flex flex-col md:flex-row relative shadow-sm">
            {/* Watermark Pattern */}
            <div className="absolute -right-5 -bottom-5 opacity-[0.03] text-white pointer-events-none select-none">
              <svg className="w-64 h-64" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 0 C25 25, 25 75, 50 100 C75 75, 75 25, 50 0 Z" />
              </svg>
            </div>

            {/* Left Image & Overlay */}
            <div className="relative w-full md:w-138.25 h-64 md:h-full overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Corporate team working"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-[#253646]/80 via-[#253646]/45 to-[#c8db2b]" />
            </div>

            {/* Right Form Content */}
            <div className="flex-1 p-6 sm:p-8 md:p-12 flex flex-col justify-center gap-5 sm:gap-6 relative z-10 text-left">
              <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] sm:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
                // SMART TRACKING
              </span>

              <h2 className="font-manrope text-[30px] sm:text-[40px] md:text-[52px] leading-tight sm:leading-13 md:leading-15.5 font-semibold text-white tracking-tight">
                Start tracking your claims
              </h2>

              {/* Form Input Group */}
              <div className="bg-white rounded-2xl sm:rounded-full p-1.5 flex flex-col sm:flex-row items-center gap-2 sm:gap-0 shadow-sm w-full max-w-132 border border-white/10 mt-1">
                <input
                  type="text"
                  placeholder="Enter Tracking Number"
                  className="w-full sm:grow bg-transparent border-none outline-none text-[16px] sm:text-[18px] leading-7 font-dm-sans font-normal text-gray-700 px-4 placeholder:text-gray-400 py-2 sm:py-0"
                />
                <button
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-[16px] sm:text-[18px] leading-7 font-dm-sans font-normal transition-all duration-300 bg-[#C6D936] text-[#051B05] hover:bg-[#044647] hover:text-[#C6D936] cursor-pointer shrink-0"
                >
                  Track Your Claim &rarr;
                </button>
              </div>

              {/* Consultation Link */}
              <a
                href="/contact"
                className="font-dm-sans text-white text-[18px] sm:text-[24px] leading-7 sm:leading-9 font-semibold hover:text-[#C6D936] transition-colors underline underline-offset-4 self-start mt-1"
              >
                Schedule for consultation: 800 123 4567
              </a>
            </div>
          </div>

          {/* Card 2: Stats Info Card */}
          <div className="w-full lg:w-165.75 h-auto lg:h-125.5 shrink-0 bg-[#C6D936] rounded-3xl sm:rounded-4xl p-6 sm:p-8 md:p-12 flex flex-col justify-center items-center text-[#044647] relative overflow-hidden shadow-sm">
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
            <div className="w-full max-w-101.75 flex flex-col relative z-10 mx-auto my-auto gap-6 sm:gap-0">
              {/* Stat 1 (Top: 24/7) */}
              <div className="flex items-center gap-4 sm:gap-6">
                <img
                  src="/media assets/home/why choose 6.svg"
                  alt="24/7 Icon"
                  className="w-10 h-10 sm:w-14 sm:h-14 object-contain shrink-0"
                />
                <div className="text-left flex items-center gap-4 sm:gap-5">
                  <span className="font-manrope text-[44px] sm:text-[60px] font-medium leading-none text-[#051b05]">
                    24/7
                  </span>
                  <span className="font-dm-sans text-[16px] sm:text-[20px] text-[#051b05] font-normal leading-6 sm:leading-7 max-w-44">
                    Your business never stops
                  </span>
                </div>
              </div>

              {/* Stat 2 (Middle: 100k) */}
              <div className="flex items-center gap-4 sm:gap-6 border-t border-b border-[#051b05]/15 py-6 sm:py-9.5 my-6 sm:my-9.5">
                <img
                  src="/media assets/home/why choose 2.svg"
                  alt="100k Icon"
                  className="w-10 h-10 sm:w-14 sm:h-14 object-contain shrink-0"
                />
                <div className="text-left flex items-center gap-4 sm:gap-5">
                  <span className="font-manrope text-[44px] sm:text-[60px] font-medium leading-none text-[#051b05]">
                    100k
                  </span>
                  <span className="font-dm-sans text-[16px] sm:text-[20px] text-[#051b05] font-normal leading-6 sm:leading-7 max-w-44">
                    Trusted HR expertise
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
                <p className="font-dm-sans text-[15px] sm:text-[18px] text-[#051b05] font-normal leading-6 sm:leading-7 text-left">
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
