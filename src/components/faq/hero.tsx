import React from "react";

export default function FAQHero() {
  return (
    <section className="bg-[#044647] text-white py-20 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C6D936_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <span className="text-[#C6D936] font-semibold tracking-wider uppercase text-sm font-mono block mb-3">Help Center</span>
        <h1 className="text-4xl md:text-5xl font-extrabold font-serif mb-6 leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light">
          Got questions? We have answers. If you can't find what you are looking for, feel free to contact us.
        </p>
      </div>
    </section>
  );
}
