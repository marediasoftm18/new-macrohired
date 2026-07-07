import React from "react";

export default function PrivacyContent() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 mt-10">
      <div className="prose prose-slate max-w-none text-gray-600 space-y-8">
        <div>
          <h2 className="text-xl font-bold text-[#044647] mb-3">1. Information We Collect</h2>
          <p className="text-sm leading-relaxed">
            We collect personal information that you provide to us directly through contact forms, candidate submissions, job applications, and portal signups. This information may include your name, email address, phone number, resume contents, and employment history.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#044647] mb-3">2. How We Use Your Information</h2>
          <p className="text-sm leading-relaxed">
            We use the collected information to:
          </p>
          <ul className="list-disc pl-6 text-sm mt-2 space-y-1">
            <li>Process and evaluate your job applications.</li>
            <li>Provide recruitment services to our corporate clients.</li>
            <li>Communicate updates regarding your application status or matching roles.</li>
            <li>Improve and optimize our website user experience.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#044647] mb-3">3. Sharing Your Information</h2>
          <p className="text-sm leading-relaxed">
            We share candidate profile information and resumes with potential hiring organizations only after obtaining your consent. We do not sell or trade your personal information to third parties.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#044647] mb-3">4. Cookies and Analytics</h2>
          <p className="text-sm leading-relaxed">
            Our website uses cookies and similar tracking technologies to analyze trends, administer the site, track user movements around the site, and gather demographic information.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#044647] mb-3">5. Contact Us</h2>
          <p className="text-sm leading-relaxed">
            If you have any questions or concerns regarding this Privacy Policy, please reach out to us at <span className="font-semibold text-[#044647]">privacy@macrohired.com</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
