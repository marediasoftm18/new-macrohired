import React from "react";
import { Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  twitter?: string;
  email: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Eleanor Vance",
    role: "Founder & CEO",
    bio: "Over 15 years of executive search and HR leadership experience. Passionate about empowering scaling companies with elite leadership talent.",
    image: "EV",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "eleanor@macrohired.com",
  },
  {
    name: "Marcus Brodie",
    role: "Head of Recruitment",
    bio: "Specializes in high-growth tech startups. Marcus has placed over 300+ engineers, product managers, and design leaders globally.",
    image: "MB",
    linkedin: "https://linkedin.com",
    email: "marcus@macrohired.com",
  },
  {
    name: "Aria Thorne",
    role: "Senior HR Consultant",
    bio: "Expert in organizational design, employee retention strategies, and compliance. Helps clients design high-performance workspaces.",
    image: "AT",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "aria@macrohired.com",
  },
  {
    name: "Jonathan Reyes",
    role: "Director of Staffing",
    bio: "Focuses on providing flexible, temporary, and contract-to-hire solutions for enterprise clients in logistics and operations.",
    image: "JR",
    linkedin: "https://linkedin.com",
    email: "jonathan@macrohired.com",
  },
];

export default function TeamMembers() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              {/* Visual Avatar Placeholder */}
              <div className="h-48 bg-gradient-to-tr from-[#044647] to-[#065b5c] flex items-center justify-center text-white relative">
                <span className="text-5xl font-bold font-serif opacity-30 select-none">{member.image}</span>
                <div className="absolute bottom-4 left-4 bg-[#C6D936] text-[#044647] px-3 py-1 rounded-full text-xs font-semibold">
                  {member.role}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#044647] mb-2">{member.name}</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">{member.bio}</p>
              </div>
            </div>

            {/* Social / Contact Links */}
            <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center gap-4">
              <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#044647] transition-colors" aria-label="LinkedIn">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#044647] transition-colors" aria-label="Twitter">
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              )}
              <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-[#044647] transition-colors ml-auto" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
