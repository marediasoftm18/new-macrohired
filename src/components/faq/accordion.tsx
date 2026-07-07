"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What types of companies does MacroHired work with?",
    answer: "We work with businesses of all sizes, ranging from fast-growing Series A startups to established enterprise companies across industries like Technology, HR, Finance, Operations, and Healthcare.",
  },
  {
    question: "How long does the recruitment process typically take?",
    answer: "The timeline depends on the complexity of the role and candidate requirements. On average, we present shortlisted candidate profiles within 5 to 7 business days of kickoff.",
  },
  {
    question: "What is the difference between Direct Hire and Staffing?",
    answer: "Direct Hire places candidates directly on your payroll from day one, ideal for permanent, long-term talent. Staffing provides contract or temporary placements, where the candidates are employed by MacroHired and contracted to support your projects.",
  },
  {
    question: "What vetting and assessment procedures do you use?",
    answer: "We conduct detailed candidate interviews, verify professional backgrounds, test technical and soft skills, and run customized case studies depending on client needs to ensure we only present high-quality talent.",
  },
  {
    question: "Do you offer a replacement guarantee for placements?",
    answer: "Yes, our Direct Hire placements include a standard satisfaction guarantee period. If the candidate leaves or is let go during this timeframe, we will find a qualified replacement at no additional fee.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 px-8 flex justify-between items-center text-left hover:bg-gray-50/50 transition-colors"
              >
                <span className="text-base font-bold text-[#044647] pr-4 flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#C6D936] shrink-0" />
                  {faq.question}
                </span>
                <div className="shrink-0 w-8 h-8 rounded-full bg-[#044647]/5 flex items-center justify-center text-[#044647]">
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              {isOpen && (
                <div className="px-8 pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
