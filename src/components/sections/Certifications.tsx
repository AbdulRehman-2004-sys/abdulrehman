"use client";

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'framer-motion';
import { LuAward, LuArrowUpRight } from 'react-icons/lu';

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    organization: "Amazon Web Services",
    date: "ISSUED 2023 • ACTIVE",
    link: "#",
    orgSlug: "AWS"
  },
  {
    name: "MongoDB Certified Developer Path",
    organization: "MongoDB University",
    date: "ISSUED 2022 • LIFETIME",
    link: "#",
    orgSlug: "MDB"
  },
  {
    name: "Advanced React & Architecture Patterns",
    organization: "Frontend Masters",
    date: "ISSUED 2021 • LIFETIME",
    link: "#",
    orgSlug: "FEM"
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
              className="bg-white border-2 border-black p-8 hover:shadow-[6px_6px_0px_0px_rgba(198,232,41,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl text-black border border-black p-2 bg-primary">
                    <LuAward />
                  </span>
                  <span className="font-mono text-xs font-black border border-black/25 px-2 py-0.5 bg-[#FDF8F0] text-black/50">
                    {cert.orgSlug}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-black mb-3">
                  {cert.name}
                </h3>
                <p className="text-2xs font-mono font-bold text-black/40 uppercase tracking-widest mb-8">
                  {cert.organization}
                </p>
              </div>

              <div className="flex justify-between items-end border-t border-black/10 pt-4">
                <span className="text-3xs font-mono font-bold tracking-wider text-black/50">
                  {cert.date}
                </span>
                <a 
                  href={cert.link} 
                  className="flex items-center gap-1 text-xs font-black uppercase tracking-wider hover:text-primary transition-colors border-b-2 border-black"
                >
                  VERIFY <LuArrowUpRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
