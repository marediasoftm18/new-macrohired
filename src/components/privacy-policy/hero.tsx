import React from "react";

export default function PrivacyHero() {
  return (
    <section className="bg-[#044647] text-white py-16 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C6D936_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <span className="text-[#C6D936] font-semibold tracking-wider uppercase text-sm font-mono block mb-3">Legal Docs</span>
        <h1 className="text-3xl md:text-4xl font-extrabold font-serif mb-4 leading-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-300 font-light">Last Updated: July 7, 2026</p>
      </div>
    </section>
  );
}
