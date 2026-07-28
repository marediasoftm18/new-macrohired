"use client";

export default function AboutAppBanner() {
  return (
    <section className="w-full bg-[#044647] font-sans overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-stretch min-h-125 lg:h-164">
        
        {/* Left Column: Full-height Dark Teal CTA Block */}
        <div className="w-full lg:w-1/2 bg-[#044647] text-white p-6 sm:p-8 md:p-12 lg:p-8 flex flex-col justify-center text-left relative overflow-hidden">
          
          {/* Ribbon Watermark Pattern */}
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 opacity-[0.04] text-white pointer-events-none select-none">
            <svg className="w-125 h-125" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0 C25 25, 25 75, 50 100 C75 75, 75 25, 50 0 Z" />
            </svg>
          </div>

          <div className="flex flex-col gap-5 sm:gap-6 relative z-10 max-w-xl mx-auto">
            
            {/* Tag */}
            <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] sm:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
              // WORKPLACE TRENDS
            </span>

            {/* Title */}
            <h2 className="font-manrope font-semibold text-[30px] sm:text-[40px] md:text-[52px] leading-tight sm:leading-13 md:leading-15.5 text-white">
              Insights for Modern Human Resources
            </h2>

            {/* Subtext */}
            <p className="font-dm-sans text-white text-[16px] sm:text-[18px] leading-6 sm:leading-7 font-normal">
              By Clicking you are agreeing to our terms and conditions
            </p>

            {/* Input Form Pill */}
            <div className="bg-white rounded-2xl sm:rounded-full p-1.5 pl-4 sm:pl-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 shadow-md w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:grow bg-transparent border-none outline-none text-[16px] sm:text-[18px] leading-7 font-normal text-[#051B05] placeholder-[#595B62] font-dm-sans py-2 sm:py-0"
              />
              <button className="w-full sm:w-auto bg-[#C6D936] hover:bg-[#044647] hover:text-white text-[#044647] px-6 sm:px-7 py-3 rounded-full font-medium font-dm-sans text-[16px] sm:text-[18px] leading-7.5 flex items-center justify-center gap-2 transition-all shrink-0">
                <span>Subscribe</span>
                <span className="material-symbols-outlined text-[18px] font-bold">
                  arrow_forward
                </span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-white font-dm-sans text-[16px] sm:text-[18px] leading-7 font-medium pt-2">
              <span>+100k Customers</span>
              <span>24/7 Support</span>
            </div>

            {/* Store Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#" className="hover:opacity-90 transition-opacity">
                <img
                  src="/media assets/home/google-play.png"
                  alt="Google Play"
                  className="h-12 sm:h-15 w-auto object-contain"
                />
              </a>
              <a href="#" className="hover:opacity-90 transition-opacity">
                <img
                  src="/media assets/home/app-store.png"
                  alt="App Store"
                  className="h-12 sm:h-15 w-auto object-contain"
                />
              </a>
            </div>

          </div>

        </div>

        {/* Right Column: Full-height Office Meeting Photo */}
        <div className="w-full lg:w-1/2 min-h-80 sm:min-h-110 lg:min-h-full relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
            alt="Workplace Insights"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}