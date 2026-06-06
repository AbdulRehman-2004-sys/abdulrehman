"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LuBrain, LuCpu, LuNetwork, LuSearch, LuPlay, LuCircleCheck } from 'react-icons/lu';

const aiCapabilities = [
  {
    title: "Multi-Agent Orchestration",
    description: "Designing networks of cooperative, specialized AI agents executing complex, multi-step actions autonomously with supervisor routing.",
    tech: ["LangGraph", "CrewAI", "AutoGen", "LangGraph Cloud"],
    icon: <LuNetwork />
  },
  {
    title: "RAG & Vector Search",
    description: "Building production knowledge bases utilizing dense embedding generation, vector indices, hybrid search, and semantic re-ranking.",
    tech: ["Pinecone", "Qdrant", "PGVector", "LlamaIndex"],
    icon: <LuSearch />
  },
  {
    title: "Intelligent Workflows",
    description: "Orchestrating pipelines connecting LLM models to external APIs, databases, browser automation tools, and legacy systems.",
    tech: ["FastAPI", "Python", "LangChain", "Vercel AI SDK"],
    icon: <LuCpu />
  },
  {
    title: "Autonomous Automations",
    description: "Deploying persistent cron workers, LLM summarization daemons, and autonomous data scrapers running inside sandboxed environments.",
    tech: ["Node.js", "Redis Queues", "Docker", "AWS Lambda"],
    icon: <LuBrain />
  }
];

export function AIExpertise() {
  return (
    <section id="expertise" className="section-padding bg-black text-white border-b-2 border-black relative overflow-hidden">
      {/* Editorial grid background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container-custom relative z-10">
        <div className="mb-20">
          <span className="text-black bg-[#C6E829] text-xs font-black uppercase tracking-widest border-2 border-black px-3 py-1 mb-4 inline-block shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
            AI & AGENTIC INFRASTRUCTURE
          </span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            AGENTIC AGENT EXPERTISE
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl font-medium">
            Building autonomous architectures that reason, plan, use tools, and coordinate instead of simple text completions.
          </p>
          <div className="h-1.5 w-32 bg-primary mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-16">
          {/* Left Side: Interactive Pipeline Diagram (Cols: 5) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 w-full border-2 border-white/20 bg-neutral-900 p-6 md:p-8 font-mono text-[10px] font-bold text-white relative shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)]"
          >
            <div className="absolute top-0 right-0 bg-primary text-black text-3xs font-mono font-bold px-2 py-0.5 border-l border-b border-white/20 uppercase">
              AGENTIC_GRAPH_V1
            </div>
            
            <h4 className="text-sm font-black uppercase tracking-wider text-primary mb-6 border-b border-white/10 pb-3 flex items-center gap-1.5">
              <LuNetwork /> MULTI-AGENT STATE GRAPH
            </h4>

            {/* Pipeline Flowchart Visualizer */}
            <div className="flex flex-col gap-4 text-white">
              {/* Step 1: Input */}
              <div className="border border-white/20 bg-neutral-950 p-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LuPlay className="text-primary animate-pulse text-xs" />
                  <span>1. INCOMING PROMPT</span>
                </div>
                <span className="text-white/40">USER</span>
              </div>

              {/* Connecting line */}
              <div className="flex justify-center text-white/40 leading-none">▼</div>

              {/* Step 2: Router */}
              <div className="border border-white/40 bg-neutral-800 p-2.5 flex flex-col gap-1.5 relative">
                <div className="flex justify-between items-center text-primary">
                  <span>2. GRAPH SUPERVISOR</span>
                  <span className="bg-primary/20 border border-primary text-[8px] px-1 text-primary">ROUTER</span>
                </div>
                <div className="h-1 bg-white/10 w-full overflow-hidden relative">
                  <div className="absolute bg-primary h-full w-1/3 animate-[loading_1.5s_infinite]"></div>
                </div>
              </div>

              {/* Connecting lines - Split */}
              <div className="flex justify-between px-16 text-white/40 leading-none">
                <span>▼</span>
                <span>▼</span>
              </div>

              {/* Parallel Workers */}
              <div className="grid grid-cols-2 gap-3">
                <div className="border border-white/20 bg-neutral-950 p-2.5 flex flex-col gap-1.5 text-center">
                  <span className="text-white">RESEARCH AGENT</span>
                  <span className="text-[8px] text-white/40 font-sans">Vector DB / Pinecone RAG</span>
                </div>
                <div className="border border-white/20 bg-neutral-950 p-2.5 flex flex-col gap-1.5 text-center">
                  <span className="text-white">TOOL CALLER</span>
                  <span className="text-[8px] text-white/40 font-sans">SaaS API Integration</span>
                </div>
              </div>

              {/* Connecting lines - Merge */}
              <div className="flex justify-between px-16 text-white/40 leading-none">
                <span>▼</span>
                <span>▼</span>
              </div>

              {/* Step 3: Critic */}
              <div className="border border-white/20 bg-neutral-950 p-2.5 flex items-center justify-between">
                <span>3. CRITIC / VALIDATOR</span>
                <span className="text-[8px] bg-white text-black px-1.5">REASONING</span>
              </div>

              {/* Connecting line */}
              <div className="flex justify-center text-white/40 leading-none">▼</div>

              {/* Step 4: Output */}
              <div className="border border-primary bg-primary text-black p-2.5 flex items-center justify-between shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                <div className="flex items-center gap-1.5">
                  <LuCircleCheck className="text-sm" />
                  <span>4. SYNTHESIZED OUTPUT</span>
                </div>
                <span className="text-3xs font-mono font-bold">200 OK</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Capability Cards (Cols: 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {aiCapabilities.map((cap, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-neutral-950 border-2 border-white/10 p-6 md:p-8 hover:border-primary hover:shadow-[4px_4px_0px_0px_rgba(198,232,41,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="text-3xl mb-4 text-primary border-2 border-white/10 w-12 h-12 flex items-center justify-center bg-neutral-900 group-hover:border-primary group-hover:bg-primary group-hover:text-black transition-colors">
                    {cap.icon}
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-primary transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-white/60 text-sm font-medium leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>
                
                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 border-t border-white/10 pt-4 mt-auto">
                  {cap.tech.map(t => (
                    <span 
                      key={t} 
                      className="text-3xs font-mono font-bold uppercase tracking-wider text-white border border-white/20 px-2 py-0.5 bg-neutral-900"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
