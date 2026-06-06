"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LuAward } from 'react-icons/lu';

const certifications = [
  {
    name: "Frontend Mastery & 9 Proven Earning Methods",
    organization: "Talha's School",
    date: "COMPLETED",
    orgSlug: "TS",
    highlights: [
      "Demonstrated strong proficiency in frontend development through successful completion of multiple high-quality UI implementations.",
      "Consistently performed among top learners in coding accuracy, problem-solving, and task completion efficiency."
    ],
    credentialId: "TS-2023-FMD9",
    status: "ACTIVE"
  },
  {
    name: "Frontend Internship",
    organization: "TechXudo",
    date: "ISSUED 2024",
    orgSlug: "TXD",
    highlights: [
      "Contributed to the development of frontend components and integration of REST APIs within production-level applications.",
      "Participated in code optimization and refactoring tasks to improve application performance and maintainability."
    ],
    credentialId: "TXD-INT-2024-402",
    status: "VERIFIED"
  },
  {
    name: "Web Development Internship",
    organization: "SoftSolutions",
    date: "ISSUED 2023-2024",
    orgSlug: "SFT",
    highlights: [
      "Gained hands-on experience in full-stack development workflows including frontend, backend, and database integration.",
      "Assisted in development of internal modules and contributed to resolving UI and cross-browser compatibility issues."
    ],
    credentialId: "SFT-WD-2023-882",
    status: "VERIFIED"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-[#FDF8F0] border-b-2 border-black">
      <div className="container-custom">
        <div className="mb-20 text-left">
          <span className="text-black bg-[#C6E829] text-xs font-black uppercase tracking-widest border-2 border-black px-3 py-1 mb-4 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            PROFESSIONAL CREDENTIALS
          </span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            CERTIFICATIONS
          </h2>
          <p className="text-lg md:text-xl text-secondary/60 max-w-2xl font-medium">
            Verified technical credentials validating architecture, database modeling, and frontend performance standards.
          </p>
          <div className="h-1.5 w-32 bg-black mt-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {certifications.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white border-2 border-black p-6 hover:shadow-[8px_8px_0px_0px_rgba(198,232,41,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[380px]"
            >
              {/* Massive Watermark background text */}
              <div className="absolute right-[-10px] bottom-[-20px] text-8xl font-black text-black/[0.03] select-none pointer-events-none group-hover:text-[#C6E829]/[0.08] transition-all duration-300 font-mono">
                {cert.orgSlug}
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-black border-2 border-black p-2 bg-primary shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-black group-hover:text-[#C6E829] transition-all duration-300 transform group-hover:rotate-12 flex items-center justify-center">
                      <LuAward />
                    </span>
                    <div>
                      <span className="font-mono text-[9px] font-black uppercase text-black/40 block leading-none">
                        CREDENTIAL ID
                      </span>
                      <span className="font-mono text-2xs font-bold text-black">
                        {cert.credentialId}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] font-black border-2 border-black px-2 py-0.5 bg-black text-[#C6E829] uppercase tracking-wider shadow-[1.5px_1.5px_0px_0px_rgba(198,232,41,1)]">
                    {cert.status}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-black mb-1.5 transition-colors">
                  {cert.name}
                </h3>
                
                {/* Organization */}
                <p className="text-2xs font-mono font-bold text-black/50 uppercase tracking-widest mb-6 flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 bg-[#C6E829] border border-black"></span>
                  {cert.organization}
                </p>

                {/* Highlights/Remarks */}
                <div className="mb-6">
                  <div className="text-[10px] font-mono font-bold text-black/30 uppercase tracking-wider mb-2.5">
                    PERFORMANCE & MILESTONES
                  </div>
                  <ul className="space-y-2.5 font-sans text-xs font-semibold text-secondary/80">
                    {cert.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-[#C6E829] font-black mt-0.5 select-none">▪</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="relative z-10 flex justify-between items-center border-t border-dashed border-black/20 pt-4 mt-auto">
                <span className="text-3xs font-mono font-black tracking-widest text-black/40 uppercase">
                  DATE COMPLETED
                </span>
                <span className="text-2xs font-mono font-black bg-black text-white px-2 py-0.5 border border-black">
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
