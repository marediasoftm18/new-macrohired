"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface PlanItem {
  id: string;
  name: string;
  discount: string;
  features: string[];
  monthlyPrice: number;
  yearlyPrice: number;
}

const plansData: PlanItem[] = [
  {
    id: "starter",
    name: "Starter Plan",
    discount: "10% Discount",
    features: [
      "Basic recruitment support",
      "HR policy guidance",
      "Email support",
    ],
    monthlyPrice: 15,
    yearlyPrice: 12,
  },
  {
    id: "professional",
    name: "Professional Plan",
    discount: "15% Discount",
    features: [
      "End-to-end recruitment",
      "Workforce planning support",
      "Priority support",
    ],
    monthlyPrice: 29,
    yearlyPrice: 24,
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    discount: "20% Discount",
    features: [
      "Customized HR solutions",
      "Dedicated HR consultant",
      "Training programs",
    ],
    monthlyPrice: 99,
    yearlyPrice: 79,
  },
];

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [activePlanId, setActivePlanId] = useState<string>("professional");

  return (
    <section className="w-full bg-[#053C3D] text-white py-14 sm:py-18 md:py-20 lg:py-24 font-sans relative overflow-hidden">
      {/* Background Vector Line Artwork on Left Bottom */}
      <div className="absolute left-4 bottom-8 w-64 h-64 opacity-20 pointer-events-none select-none">
        <svg viewBox="0 0 200 200" fill="none" stroke="#C6D936" strokeWidth="1.5">
          <path d="M 20,100 Q 80,20 160,80 T 180,180" />
        </svg>
      </div>

      <div className="w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-8 mx-auto relative z-10">
        
        {/* Main 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-14 lg:items-stretch">
          
          {/* Left Column (5 Cols on Desktop): Badge, Heading & Image Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5 text-left">
            <div className="flex flex-col gap-5">
              <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] sm:text-[15px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
                // PRICING
              </span>

              <h2 className="font-manrope text-[34px] sm:text-[44px] md:text-[34px] lg:text-[52px] leading-15.5 md:leading-11 font-semibold text-white">
                Affordable Solutions<br className="hidden sm:block md:hidden" /> for Your Team
              </h2>
            </div>

            {/* Flexible Solutions Image Card (Full Width in Tablet & Mobile Mode) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full rounded-3xl overflow-hidden relative shadow-2xl group mt-2 grow flex flex-col justify-end"
            >
              <div className="relative h-80 sm:h-100 md:h-112 lg:h-164 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                  alt="Flexible Solutions Designed for Every Business"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Bottom Lime Gradient Card Overlay with Bold White Text */}
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#C6D936] via-[#C6D936]/85 to-transparent p-6 sm:p-8 pt-20 flex flex-col justify-end text-left">
                  <h3 className="font-manrope text-[24px] sm:text-[28px] md:text-[26px] leading-10.5 md:leading-8.5 font-semibold text-white max-w-xs sm:max-w-sm drop-shadow-md">
                    Flexible Solutions Designed for Every Business
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (7 Cols on Desktop): Subtext, White Pill Toggle & Divided Row Plans */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left pt-2 lg:pt-8 h-full">
            
            {/* Subtext & Monthly / Yearly Toggle Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4 pb-6">
              <p className="font-dm-sans text-[15px] sm:text-[16px] md:text-[18px] lg:text-[18px] leading-7 text-gray-200 max-w-sm lg:max-w-md">
                Making a decision to do something this is the first step. We all know that nothing moves until.
              </p>

              {/* Monthly / Yearly Toggle Pill with White Background matching Image */}
              <div className="bg-white p-1 rounded-full flex items-center shrink-0 shadow-md">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-6 py-2.5 rounded-full font-dm-sans text-[14px] sm:text-[15px] lg:text-[18px] leading-7 font-normal transition-all duration-300 cursor-pointer ${
                    billingCycle === "monthly"
                      ? "bg-[#044647] text-white shadow-sm"
                      : "bg-transparent text-[#044647] hover:text-[#062828]"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={`px-6 py-2.5 rounded-full font-dm-sans text-[14px] sm:text-[15px] lg:text-[18px] leading-7 font-normal transition-all duration-300 cursor-pointer ${
                    billingCycle === "yearly"
                      ? "bg-[#044647] text-white shadow-sm"
                      : "bg-transparent text-[#044647] hover:text-[#062828]"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            {/* Divided Stack of 3 Pricing Rows */}
            <div className="flex flex-col grow justify-between">
              {plansData.map((plan, index) => {
                const isActive = activePlanId === plan.id;
                const displayPrice =
                  billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
                const isLast = index === plansData.length - 1;

                return (
                  <div
                    key={plan.id}
                    onMouseEnter={() => setActivePlanId(plan.id)}
                    onClick={() => setActivePlanId(plan.id)}
                    className="group w-full py-8 sm:py-10 lg:py-12 transition-all duration-300 cursor-pointer relative flex flex-col justify-center grow"
                  >
                    {/* Base Row Divider (Thin White Line) */}
                    {!isLast && (
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />
                    )}

                    {/* Active Animated Lime Green Border Bar (Travels horizontally from start to end) */}
                    {isActive && (
                      <motion.div
                        key={`active-border-${plan.id}`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                        className="absolute bottom-0 left-0 h-0.5 bg-[#C6D936] z-10"
                      />
                    )}

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4 relative z-0">
                      
                      {/* Left: Radio Icon + Title & Discount Subtitle */}
                      <div className="flex items-center gap-4 sm:gap-5 shrink-0 min-w-56 sm:min-w-64">
                        {/* Radio Checkmark Circle */}
                        {isActive ? (
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white flex items-center justify-center text-white shrink-0">
                            <svg
                              className="w-4 h-4 fill-none stroke-current stroke-2"
                              viewBox="0 0 24 24"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white shrink-0 shadow-xs group-hover:scale-105 transition-all" />
                        )}

                        {/* Title (Lime Green if Active!) & Discount Subtitle */}
                        <div className="flex flex-col text-left">
                          <h4
                            className={`font-manrope text-[22px] sm:text-[26px] md:text-[24px] lg:text-[26px] font-bold leading-9 transition-colors ${
                              isActive ? "text-[#C6D936]" : "text-white group-hover:text-[#C6D936]"
                            }`}
                          >
                            {plan.name}
                          </h4>
                          <span className="font-dm-sans text-[14px] sm:text-[15px] lg:text-[18px] leading-7 text-gray-300 mt-1 font-normal">
                            {plan.discount}
                          </span>
                        </div>
                      </div>

                      {/* Middle: Features Checklist with double chevron » */}
                      <div className="flex flex-col gap-2 text-left grow max-w-xs md:max-w-none">
                        {plan.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2 text-[14px] sm:text-[16px] md:text-[15px] lg:text-[18px] leading-7 font-dm-sans text-gray-200"
                          >
                            <span className="text-[#C6D936] font-semibold text-[18px] leading-7 select-none">
                              &raquo;
                            </span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Right: Price Tag & Optional Arrow Action Button */}
                      <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 shrink-0 min-w-44">
                        <div className="flex items-baseline gap-1 text-left">
                          <span className="font-manrope text-[32px] sm:text-[36px] md:text-[38px] lg:text-[32px] font-bold text-[#FFFFFF] leading-10">
                            ${displayPrice}
                          </span>
                          <span className="font-dm-sans text-[14px] sm:text-[15px] lg:text-[18px] text-gray-300 font-normal">
                            /Month
                          </span>
                        </div>

                        {/* Circular Arrow Button (matching exact design layout position) */}
                        <div className="w-12 h-12 flex items-center justify-center shrink-0">
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                              className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center text-white shadow-md hover:bg-white/20 transition-colors"
                            >
                              <span className="material-symbols-outlined text-[22px] leading-none select-none">
                                arrow_outward
                              </span>
                            </motion.div>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
