"use client";

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "TechNova Solutions",
    role: "Senior Full-Stack Engineer",
    duration: "2023 - PRESENT",
    type: "FULL-TIME",
    achievements: [
      "Architected multi-tenant SaaS platform serving 10,000+ active users, cutting infrastructure overhead by 25%.",
      "Integrated OpenAI/LangGraph pipelines, reducing manual product listing updates by 40% with AI enrichment.",
      "Mentored a team of 4 junior developers and established automated CI/CD pipelines, accelerating delivery cycles."
    ]
  },
  {
    company: "AI Horizons",
    role: "AI & Product Engineer",
    duration: "2021 - 2023",
    type: "STARTUP",
    achievements: [
      "Built production custom RAG pipelines on Vector DBs, cutting support escalation counts by 30%.",
      "Developed an Agentic AI workflow for automatic customer data onboarding, saving teams 15+ hours weekly.",
      "Optimized postgres and vector search indices, reducing API response times by 300ms."
    ]
  },
  {
    company: "Creative Web Agency",
    role: "Frontend Developer",
    duration: "2019 - 2021",
    type: "AGENCY",
    achievements: [
      "Delivered 20+ responsive, animation-rich client websites using Next.js, React, and GSAP/Framer Motion.",
      "Created a unified reusable components library, cutting development times on subsequent projects by 30%.",
      "Improved Core Web Vitals across client platforms, driving an average SEO page speed improvement of 35%."
    ]
  },
  {
    company: "Independent",
    role: "Freelance Product Engineer",
    duration: "2018 - 2019",
    type: "FREELANCE",
    achievements: [
      "Partnered directly with startup founders to scope, build, and deploy MVP software in under 6 weeks.",
      "Set up dynamic headful/headless e-commerce applications generating over $50k in monthly transactional volume.",
      "Managed full lifecycle: UI/UX design, database modeling, cloud hosting, and domain/DNS configuration."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#FDF8F0] border-b-2 border-black relative">
      <div className="container-custom">
        <div className="mb-20 text-left md:text-center flex flex-col md:items-center">
          <span className="text-black bg-[#C6E829] text-xs font-black uppercase tracking-widest border-2 border-black px-3 py-1 mb-4 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            CAREER JOURNEY
          </span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            WHERE I'VE SHIPPED
          </h2>
          <p className="text-lg md:text-xl text-secondary/60 max-w-2xl font-medium">
            A history of building technical architectures, optimizing infrastructure, and driving business results.
          </p>
          <div className="h-1.5 w-32 bg-black mt-8"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto mt-20">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-black transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col md:flex-row items-stretch ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center dot marker */}
                <div className="absolute left-2.5 md:left-1/2 w-4 h-4 bg-primary border-3 border-black rounded-none transform md:-translate-x-1/2 mt-7 md:mt-0 md:top-8 z-10"></div>
                
                {/* Space spacer for desktop */}
                <div className="hidden md:block w-1/2"></div>
                
                {/* Card Container */}
                <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-12">
                  <div className="bg-white border-2 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(198,232,41,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-4 border-b border-black/10 pb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black">{exp.company}</h3>
                          <p className="text-sm font-bold text-primary bg-black inline-block px-2 py-0.5 mt-1">{exp.role}</p>
                        </div>
                        <span className="bg-[#FDF8F0] border border-black/20 text-black text-3xs font-mono font-bold px-2 py-1 uppercase tracking-widest">
                          {exp.type}
                        </span>
                      </div>
                      
                      <p className="text-2xs font-mono font-bold text-black/40 mb-6 tracking-widest">{exp.duration}</p>
                      
                      <ul className="space-y-3">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-secondary text-sm md:text-base font-medium leading-relaxed">
                            <span className="text-black mt-1 text-xs select-none">▪</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
