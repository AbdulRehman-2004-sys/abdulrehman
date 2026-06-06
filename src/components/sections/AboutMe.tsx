"use client";

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'framer-motion';

export function AboutMe() {
  return (
    <section id="about" className="section-padding bg-background border-b-2 border-black">
      <div className="container-custom">
        <div className="mb-20">
          <span className="text-black bg-[#C6E829] text-xs font-black uppercase tracking-widest border-2 border-black px-3 py-1 mb-4 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            THE ARCHITECT
          </span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            BUILDING PRODUCTS, NOT JUST CODE
          </h2>
          <p className="text-lg md:text-xl text-secondary/60 max-w-2xl font-medium">
            A developer journey rooted in product lifecycle, SaaS optimization, and production AI integration.
          </p>
          <div className="h-1.5 w-32 bg-black mt-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            {/* Styled Image Frame */}
            <div className="border-4 border-black bg-black aspect-[3/4] relative z-10 w-full overflow-hidden flex items-center justify-center shadow-[12px_12px_0px_0px_rgba(198,232,41,1)]">
              <img 
                src="/about.jpg" 
                alt="Abdul Rehman - Full-Stack Engineer Portrait" 
                className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Subtle floating tech grid card */}
            <div className="absolute -bottom-6 -right-6 bg-black text-white text-3xs font-mono font-bold p-3 border-2 border-[#C6E829] z-20 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hidden sm:block">
              <div className="border-b border-white/20 pb-1 mb-1">SYSTEM_INFO</div>
              <div>LOC: PKT/EST ALIGNED</div>
              <div>STACK: MERN • PERN • GENAI • AGENTIC AI</div>
            </div>
          </motion.div>
          
          {/* Story Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 text-secondary"
          >
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black mb-6">
              ENGINEERING VALUE
            </h3>
            
            <p className="mb-6 text-base md:text-lg font-medium leading-relaxed">
              I started my career writing simple code scripts, but I quickly learned that founders don't need raw lines of code—they need <span className="highlight bg-primary text-black px-1 font-bold">scalable solutions to commercial bottlenecks</span>.
            </p>
            
            <p className="mb-6 text-base md:text-lg font-medium leading-relaxed">
              Over the past 3 years, I have shaped my technical practice around <span className="underline decoration-black decoration-2 font-bold text-black">SaaS Optimization & Product Engineering</span>. By using full-stack patterns like PERN and MERN alongside custom-optimized caching, I construct platforms that stay fast under high concurrent workloads.
            </p>
            
            <p className="mb-8 text-base md:text-lg font-medium leading-relaxed">
              When generative AI evolved, I committed to building real pipeline systems. By deploying multi-agent collaboration via <span className="highlight bg-primary text-black px-1 font-bold">LangGraph and CrewAI</span>, and developing RAG pipelines on vector stores, I help clients integrate true automated intelligence that replaces manual processing and drives real business metrics.
            </p>
            
            {/* Brutalist Callout Blockquote */}
            <div className="border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
              <span className="absolute -top-3.5 left-4 bg-primary text-black text-3xs font-mono border border-black px-2 py-0.5 font-bold uppercase">
                CORE PHILOSOPHY
              </span>
              <p className="italic font-serif text-lg md:text-xl text-black font-semibold leading-relaxed">
                "Great software disappears. It feels like an extension of the user's intent, operating smoothly under the hood while delivering maximum clarity at the interface."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
