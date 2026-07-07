import React from "react";
import Link from "next/link";
import { Users, Shield, Award } from "lucide-react";

export default function AboutValues() {
  return (
    <>
      {/* Core Values Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#044647] mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            The principles that guide our daily operations, our candidate placements, and our partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#044647]/5 text-[#044647] rounded-xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#044647] mb-3">Human-Centric</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We prioritize relationship building. We listen to your goals, culture, and aspirations to create long-term placements.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#044647]/5 text-[#044647] rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#044647] mb-3">Trust & Integrity</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Honesty and transparency are at the core of everything we do. We build partnerships based on mutual respect.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#044647]/5 text-[#044647] rounded-xl flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#044647] mb-3">Excellence</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We set high standards for our vetting process, matching methodology, and client service to ensure elite execution.
            </p>
          </div>
        </div>
      </section>

      {/* Stats / CTA */}
      <section className="bg-white py-16 px-6 border-y border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#044647] mb-3">Ready to find your next hire or career?</h2>
            <p className="text-gray-600 text-sm md:text-base">Let our recruitment experts guide your path forward.</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-sm"
              style={{
                backgroundColor: "#C6D936",
                color: "#044647",
              }}
            >
              Get in Touch
            </Link>
            <Link
              href="/team"
              className="px-6 py-3 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-50 transition-all text-[#044647]"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
