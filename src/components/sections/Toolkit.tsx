"use client";

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'framer-motion';
import { LuLayoutTemplate, LuServer, LuDatabase, LuCpu, LuShieldAlert, LuCloud } from 'react-icons/lu';

const skillCategories = [
  {
    category: "Frontend",
    icon: <LuLayoutTemplate className="text-xl" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Zustand", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: <LuServer className="text-xl" />,
    items: ["Node.js", "Express", "NestJS", "Socket.io"]
  },
  {
    category: "Database",
    icon: <LuDatabase className="text-xl" />,
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase", "Mongoose"]
  },
  {
    category: "AI & Agentic",
    icon: <LuCpu className="text-xl" />,
    items: ["OpenAI API", "Claude", "Gemini", "LangGraph", "CrewAI", "RAG Systems", "VectorDBs"]
  }
];

export function Toolkit() {
  return (
    <section id="toolkit" className="section-padding bg-background border-b-2 border-black">
      <div className="container-custom">
        <div className="mb-20">
          <span className="text-black bg-[#C6E829] text-xs font-black uppercase tracking-widest border-2 border-black px-3 py-1 mb-4 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            SKILL SHOWCASE
          </span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            THE TOOLKIT
          </h2>
          <p className="text-lg md:text-xl text-secondary/60 max-w-2xl font-medium">
            Production technologies, runtimes, database frameworks, and intelligence interfaces I work with daily.
          </p>
          <div className="h-1.5 w-32 bg-black mt-8"></div>
        </div>
        
        <div className="flex flex-col gap-12 mt-16 max-w-5xl">
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center gap-2 mb-6 border-b border-black/10 pb-3">
                <span className="bg-primary text-black border border-black p-1.5">
                  {cat.icon}
                </span>
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-black">
                  {cat.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5 md:gap-3">
                {cat.items.map(item => (
                  <div 
                    key={item} 
                    className="bg-[#FDF8F0] border-2 border-black px-4 py-2 text-xs md:text-sm font-black text-black uppercase tracking-wider hover:bg-primary hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
