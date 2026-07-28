"use client";

export default function AboutTestimonials() {
  return (
    <section className="w-full bg-[#ffffff] py-14 md:py-20 lg:py-28 font-sans">
      <div className="max-w-360 mx-auto w-full px-4 sm:px-6 xl:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4 mb-12 md:mb-16">
          <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] sm:text-[16px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
            // PEOPLE SPEAK
          </span>

          <h2 className="font-manrope font-semibold text-[32px] sm:text-[42px] md:text-[52px] leading-tight sm:leading-13 md:leading-15.5 text-[#051B05] max-w-3xl">
            Trusted Feedback From Our Valued Partners
          </h2>
        </div>

        {/* Main Unified Testimonial Card */}
        <div className="bg-[#F5F4F0] rounded-3xl sm:rounded-4xl overflow-hidden flex flex-col lg:flex-row shadow-sm border border-gray-200/60 max-w-full mx-auto">
          
          {/* Part 1: Left Customer Image (Stretches Full Card Height on Desktop) */}
          <div className="w-full lg:w-70 self-stretch min-h-64 sm:min-h-80 lg:min-h-90 shrink-0 relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="Vikram Shah"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Part 2: Middle Review Content */}
          <div className="flex-1 px-6 py-8 sm:px-12 sm:py-12 lg:px-20 lg:py-15.5 flex flex-col justify-between text-left relative">
            
            {/* Quotation Mark Icon (icon-17.svg) */}
            <div className="absolute right-4 sm:right-6 lg:right-10 top-4 sm:top-6 lg:top-8 pointer-events-none select-none">
              <img
                src="/media assets/home/icon-17.svg"
                alt="quote icon"
                className="w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24 opacity-80 lg:opacity-100"
              />
            </div>

            <div className="flex flex-col gap-4 sm:gap-5">
              {/* 5 Lime Green Stars */}
              <div className="flex gap-1 text-[#C6D936]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined material-symbols-filled text-[20px] sm:text-[22px] select-none">
                    star
                  </span>
                ))}
              </div>

              {/* Review Quote Text */}
              <p className="font-dm-sans text-[17px] sm:text-[20px] md:text-[22px] leading-8 sm:leading-9 md:leading-10 text-[#051B05] italic font-normal max-w-xl">
                “Their HR expertise helped improve our recruitment process and overall workforce efficiency. The team was professional, responsive, and delivered solutions aligned with our business goals.”
              </p>
            </div>

            {/* Author Info Row */}
            <div className="flex items-center gap-4 sm:gap-5 pt-6 mt-6 border-t lg:border-t-0 border-gray-200">
              <div className="font-manrope text-[40px] sm:text-[52px] leading-none sm:leading-15.5 font-semibold text-[#051B05] flex items-center gap-1">
                5 <span className="text-[#051B05] text-[40px] sm:text-[52px]">*</span>
              </div>
              <div className="w-px h-8 sm:h-10 bg-gray-300/80" />
              <div className="flex flex-col">
                <span className="font-dm-sans font-semibold text-[18px] sm:text-[20px] leading-6 sm:leading-7 text-[#044647]">
                  Vikram Shah
                </span>
                <span className="font-dm-sans text-[16px] sm:text-[18px] leading-6 sm:leading-7.5 font-medium text-[#595B62]">
                  Founder
                </span>
              </div>
            </div>

          </div>

          {/* Part 3: Right Rating Sidebar */}
          <div className="w-full lg:w-65 shrink-0 p-6 sm:p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-gray-200/80 flex flex-col items-center justify-center text-center gap-4 bg-[#F2F1ED]/40">
            <span className="font-dm-sans text-[16px] sm:text-[18px] leading-6 sm:leading-7 text-[#044647] font-normal">
              Average Rating
            </span>

            <span className="font-manrope font-bold text-[32px] sm:text-[40px] text-[#044647] leading-tight sm:leading-11.5">
              1.8M+
            </span>

            <div className="flex gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined material-symbols-filled text-[18px] select-none">
                  star
                </span>
              ))}
            </div>

            <span className="font-dm-sans font-normal text-[16px] sm:text-[18px] text-[#044647] max-w-27.5 leading-6 sm:leading-7">
              Satisfied customers
            </span>

            <div className="w-full border-t border-gray-300/60 my-1" />

            {/* Avatar Stack */}
            <div className="flex items-center -space-x-2.5 overflow-hidden">
              <img
                className="inline-block h-10 w-10 sm:h-12.5 sm:w-12.5 rounded-full ring-2 ring-white object-cover shadow-sm"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                alt="Customer 1"
              />
              <img
                className="inline-block h-10 w-10 sm:h-12.5 sm:w-12.5 rounded-full ring-2 ring-white object-cover shadow-sm"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                alt="Customer 2"
              />
              <img
                className="inline-block h-10 w-10 sm:h-12.5 sm:w-12.5 rounded-full ring-2 ring-white object-cover shadow-sm"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                alt="Customer 3"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
