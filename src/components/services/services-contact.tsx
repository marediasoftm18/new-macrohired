"use client";

import { useState } from "react";

export default function ServicesContact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleCheckbox = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section className="w-full bg-[#F5F4F0] py-14 sm:py-18 md:py-22 lg:py-28 font-sans">
      <div className="w-full max-w-360 px-4 sm:px-6 md:px-8 lg:px-8 mx-auto">

        {/* Main 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-20 items-start">

          {/* Left Column (50% Width on Desktop): Heading, Subtitle & 2x2 Info Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <span className="inline-flex w-fit rounded-xs items-center bg-[#c8db2b] px-4.5 pt-2.5 py-0 text-[14px] sm:text-[15px] font-semibold uppercase tracking-[0.15em] leading-3.75 text-[#062828]">
              {"// CONTACT US"}
            </span>

            <h2 className="font-manrope text-[32px] sm:text-[40px] md:text-[44px] lg:text-[52px] sm:leading-12 md:leading-13 lg:leading-15.5 font-semibold text-[#051B05] tracking-tight">
              Helping organizations<br className="hidden sm:block" /> unlock people potential
            </h2>

            {/* 2x2 Grid of Contact Info Cards (Centered in Tablet Mode) */}
            <div className="w-full max-w-140 mx-auto lg:mx-0 grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">

              {/* Card 1: Address 1 */}
              <div className="w-full h-45 bg-white rounded-2xl p-6 border border-gray-100 shadow-2xs flex flex-col justify-between text-left">
                <div className="flex items-center gap-2.5 text-[#044647]">
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <h4 className="font-manrope font-semibold text-[17px] sm:text-[18px] lg:text-[20px] leading-7 text-[#051B05]">
                    Address
                  </h4>
                </div>
                <p className="font-dm-sans text-[14px] sm:text-[15px] lg:text-[18px] leading-7 text-[#595B62] font-normal">
                  7164 Barton Terrace, North Penelope, Vermont &ndash; 97879, USA
                </p>
              </div>

              {/* Card 2: Address 2 */}
              <div className="w-full h-45 bg-white rounded-2xl p-6 border border-gray-100 shadow-2xs flex flex-col justify-between text-left">
                <div className="flex items-center gap-2.5 text-[#044647]">
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <h4 className="font-manrope font-semibold text-[17px] sm:text-[18px] lg:text-[20px] leading-7 text-[#051B05]">
                    Address 2
                  </h4>
                </div>
                <p className="font-dm-sans text-[14px] sm:text-[15px] lg:text-[18px] leading-7 text-[#595B62] font-normal">
                  742 Evergreen Terrace, Springfield &ndash; 95872, New Zealand
                </p>
              </div>

              {/* Card 3: Contact */}
              <div className="w-full h-45 bg-white rounded-2xl p-6 border border-gray-100 shadow-2xs flex flex-col justify-between text-left">
                <div className="flex items-center gap-2.5 text-[#044647]">
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <h4 className="font-manrope font-semibold text-[17px] sm:text-[18px] lg:text-[20px] leading-7 text-[#051B05]">
                    Contact
                  </h4>
                </div>
                <div className="font-dm-sans text-[14px] sm:text-[15px] lg:text-[18px] leading-7 text-[#595B62] font-normal flex flex-col">
                  <a href="tel:+0112791241450" className="hover:text-[#044647] transition-colors">
                    +(011)279 124 1450
                  </a>
                  <a href="mailto:info@example.com" className="hover:text-[#044647] transition-colors">
                    info@example.com
                  </a>
                </div>
              </div>

              {/* Card 4: Follow */}
              <div className="w-full h-45 bg-white rounded-2xl p-6 border border-gray-100 shadow-2xs flex flex-col justify-between text-left">
                <div className="flex items-center gap-2.5 text-[#044647]">
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                  </svg>
                  <h4 className="font-manrope font-semibold text-[17px] sm:text-[18px] lg:text-[20px] leading-7 text-[#051B05]">
                    Follow
                  </h4>
                </div>
                <div className="flex items-center gap-2.5 mt-1">
                  <a
                    href="#"
                    className="w-7.5 h-7.5 rounded-full bg-[#F4F2EE] hover:bg-[#C6D936] text-[#044647] hover:text-[#051B05] transition-all flex items-center justify-center text-[12px]"
                    aria-label="Instagram"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a
                    href="#"
                    className="w-7.5 h-7.5 rounded-full bg-[#F4F2EE] hover:bg-[#C6D936] text-[#044647] hover:text-[#051B05] transition-all flex items-center justify-center text-[12px]"
                    aria-label="Facebook"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="w-7.5 h-7.5 rounded-full bg-[#F4F2EE] hover:bg-[#C6D936] text-[#044647] hover:text-[#051B05] transition-all flex items-center justify-center text-[12px]"
                    aria-label="X Twitter"
                  >
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                  <a
                    href="#"
                    className="w-7.5 h-7.5 rounded-full bg-[#F4F2EE] hover:bg-[#C6D936] text-[#044647] hover:text-[#051B05] transition-all flex items-center justify-center text-[12px]"
                    aria-label="YouTube"
                  >
                    <i className="fa-brands fa-youtube" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (50% Width on Desktop): Clean Form inputs matching pricing contact */}
          <div className="lg:col-span-6 w-full pt-1 sm:pt-2">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4 sm:gap-5">

              {/* Row 1: First name & Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 text-[18px] leading-7 font-dm-sans text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#044647] shadow-2xs"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 text-[18px] leading-7 font-dm-sans text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#044647] shadow-2xs"
                />
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 text-[18px] leading-7 font-dm-sans text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#044647] shadow-2xs"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 text-[18px] leading-7 font-dm-sans text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#044647] shadow-2xs"
                />
              </div>

              {/* Row 3: Services Dropdown & Date Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="relative w-full">
                  <select
                    defaultValue=""
                    className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 text-[18px] leading-7 font-dm-sans text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#044647] shadow-2xs appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Choose services
                    </option>
                    <option value="hr-consulting">HR Consulting</option>
                    <option value="payroll">Payroll Management</option>
                    <option value="employee-management">Employee Management</option>
                    <option value="staff-development">Staff Development</option>
                    <option value="talent-management">Talent Management</option>
                    <option value="training-programs">Training Programs</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[18px]">
                    expand_more
                  </span>
                </div>

                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="dd/mm/yyyy"
                    className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 text-[18px] leading-7 font-dm-sans text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#044647] shadow-2xs"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[18px]">
                    calendar_today
                  </span>
                </div>
              </div>

              {/* Row 4: Message Textarea */}
              <textarea
                rows={5}
                placeholder="Message"
                className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 text-[18px] leading-7 font-dm-sans text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#044647] shadow-2xs resize-none"
              />

              {/* Service Checkboxes Row */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 pt-1 text-left">
                {[
                  "HR Consulting",
                  "Payroll Management",
                  "Employee Engagement",
                  "Staff Development",
                  "Talent Management",
                  "Training Programs",
                ].map((service) => {
                  const isChecked = selectedServices.includes(service);
                  return (
                    <label
                      key={service}
                      className="flex items-center gap-2 cursor-pointer text-[13px] sm:text-[14px] lg:text-[18px] leading-7 font-dm-sans text-gray-600 hover:text-[#044647] select-none"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleCheckbox(service)}
                        className="w-3.5 h-3.5 rounded border-gray-300 text-[#044647] focus:ring-[#044647] cursor-pointer"
                      />
                      <span>{service}</span>
                    </label>
                  );
                })}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#044647] hover:bg-[#033738] text-white py-4 rounded-xl font-dm-sans font-semibold text-[16px] sm:text-[17px] transition-all duration-300 shadow-xs cursor-pointer mt-1"
              >
                Get a Quote
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
