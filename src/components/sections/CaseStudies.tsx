"use client";

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'framer-motion';
import { LuArrowUpRight, LuServer, LuDatabase, LuCpu, LuShield, LuArrowRight } from 'react-icons/lu';

interface ArchitectureFlowProps {
  type: 'ai' | 'crm' | 'builder';
}

function ArchitectureFlow({ type }: ArchitectureFlowProps) {
  if (type === 'ai') {
    return (
      <div className="border-2 border-black bg-[#FDF8F0] p-4 text-xs font-mono font-bold flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-black pb-2 mb-1">
          <span className="flex items-center gap-1.5"><LuCpu className="text-sm" /> MULTI-AGENT PIPELINE</span>
          <span className="bg-primary px-1.5 py-0.5 border border-black text-[10px]">ACTIVE</span>
        </div>
        <div className="flex flex-col gap-2">
          {/* Node 1 */}
          <div className="border border-black bg-white p-2 flex items-center justify-between">
            <span>1. INCOMING INQUIRY</span>
            <span className="text-black/40">USER</span>
          </div>
          {/* Arrow */}
          <div className="flex justify-center my-[-2px] text-xs">▼</div>
          {/* Node 2 */}
          <div className="border border-black bg-white p-2 flex items-center justify-between relative">
            <span>2. LANGGRAPH ROUTER</span>
            <span className="text-primary">ORCHESTRATOR</span>
          </div>
          {/* Split Arrows */}
          <div className="flex justify-between px-8 my-[-2px] text-xs">
            <span>▼</span>
            <span>▼</span>
          </div>
          {/* Parallel Nodes */}
          <div className="grid grid-cols-2 gap-2">
            <div className="border border-black bg-white p-2 text-center flex flex-col justify-center items-center">
              <span>PINECONE RAG</span>
              <span className="text-[9px] text-black/40 font-sans">KNOWLEDGE BASE</span>
            </div>
            <div className="border border-black bg-white p-2 text-center flex flex-col justify-center items-center">
              <span>AGENT TOOLS</span>
              <span className="text-[9px] text-black/40 font-sans">EXTERNAL APIS</span>
            </div>
          </div>
          {/* Arrow */}
          <div className="flex justify-center my-[-2px] text-xs">▼</div>
          {/* Node 3 */}
          <div className="border border-black bg-primary text-black p-2 flex items-center justify-between">
            <span>3. LLM INFERENCE (CLAUDE)</span>
            <span className="text-xs">RESPONSE</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'crm') {
    return (
      <div className="border-2 border-black bg-[#FDF8F0] p-4 text-xs font-mono font-bold flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-black pb-2 mb-1">
          <span className="flex items-center gap-1.5"><LuServer className="text-sm" /> REAL-TIME HYBRID ENGINE</span>
          <span className="bg-primary px-1.5 py-0.5 border border-black text-[10px]">SCALABLE</span>
        </div>
        <div className="flex flex-col gap-2">
          {/* Node 1 */}
          <div className="border border-black bg-white p-2 text-center">
            CLIENT (NEXT.JS APP)
          </div>
          {/* Bidirectional Arrow */}
          <div className="flex justify-center my-[-2px] text-xs">▲ WS ▼</div>
          {/* Node 2 */}
          <div className="border border-black bg-white p-2 flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <span>NODE.JS APIS</span>
              <span className="text-primary">REDIS CACHE</span>
            </div>
            <div className="w-full bg-black/10 h-1.5 border border-black">
              <div className="bg-primary h-full w-[85%] border-r border-black"></div>
            </div>
          </div>
          {/* Arrow */}
          <div className="flex justify-center my-[-2px] text-xs">▼ WRITE</div>
          {/* Node 3 */}
          <div className="border border-black bg-white p-2 flex justify-between items-center">
            <span>POSTGRESQL REPLICAS</span>
            <span className="text-[9px] text-black/40 font-sans">ACID DB</span>
          </div>
          {/* Arrow */}
          <div className="flex justify-center my-[-2px] text-xs">▼ SYNC</div>
          {/* Node 4 */}
          <div className="border border-black bg-primary text-black p-2 text-center">
            AWS S3 ASSETS / CLOUDFRONT CDN
          </div>
        </div>
      </div>
    );
  }

  // builder
  return (
    <div className="border-2 border-black bg-[#FDF8F0] p-4 text-xs font-mono font-bold flex flex-col gap-3">
      <div className="flex items-center justify-between border-b border-black pb-2 mb-1">
        <span className="flex items-center gap-1.5"><LuDatabase className="text-sm" /> SERVERLESS GENAI SUITE</span>
        <span className="bg-primary px-1.5 py-0.5 border border-black text-[10px]">EDGE</span>
      </div>
      <div className="flex flex-col gap-2">
        {/* Node 1 */}
        <div className="border border-black bg-white p-2 flex justify-between items-center">
          <span>USER DESIGN PROMPT</span>
          <span className="text-black/40">INPUT</span>
        </div>
        {/* Arrow */}
        <div className="flex justify-center my-[-2px] text-xs">▼</div>
        {/* Node 2 */}
        <div className="border border-black bg-white p-2 flex flex-col gap-1 bg-white">
          <div className="flex justify-between">
            <span>VERCEL EDGE FUNCTIONS</span>
            <span className="text-primary">SERVERLESS</span>
          </div>
          <span className="text-[9px] text-black/50 font-sans font-medium">Dynamic HTML Generation</span>
        </div>
        {/* Arrow */}
        <div className="flex justify-center my-[-2px] text-xs">▼</div>
        {/* Node 3 */}
        <div className="border border-black bg-white p-2 flex justify-between items-center">
          <span>OPENAI LLM (GPT-4O)</span>
          <span className="text-black/40">COMPLETION</span>
        </div>
        {/* Arrow */}
        <div className="flex justify-center my-[-2px] text-xs">▼</div>
        {/* Node 4 */}
        <div className="border border-black bg-primary text-black p-2 flex justify-between items-center">
          <span>INSTANT DEPLOYMENT</span>
          <span className="text-xs">NETLIFY/VERCEL</span>
        </div>
      </div>
    </div>
  );
}

const caseStudies = [
  {
    title: "Autonomous Support Agent Platform",
    industry: "Customer Service SaaS",
    problem: "A high volume of support tickets was causing slow response times (often exceeding 24 hours) and increasing customer attrition. The company needed to automate tier-1 support without sacrificing the personal touch required for enterprise clients.",
    solution: "Architected a multi-agent routing system using LangGraph. In this system, user inquiries are evaluated by a router agent, enriched by a custom retrieval-augmented generation (RAG) agent pulling data from Pinecone, and dynamically processed through tool-calling agents to interact with customer database APIs.",
    techStack: ["Next.js", "Python", "LangGraph", "Pinecone", "Supabase", "FastAPI"],
    metrics: ["80% Autonomous Resolution", "< 2s API Response Latency", "$12,000/mo Operational Savings"],
    archSnippet: "RAG & LangGraph Multi-Agent Orchestrator",
    flowType: "ai" as const
  },
  {
    title: "Enterprise SaaS CRM Platform",
    industry: "B2B Sales Optimization",
    problem: "A legacy sales platform struggled to support real-time data sync, leading to sales reps acting on stale customer interaction logs and causing high server overhead (resulting in 5-second dashboard loads).",
    solution: "Designed and built a modern PERN-based application with WebSockets for real-time sales logging. Leveraged Redis for session storage and horizontal query caching, and optimized PostgreSQL indexing to process millions of updates efficiently.",
    techStack: ["React.js", "Node.js", "Express", "PostgreSQL", "Redis", "AWS S3"],
    metrics: ["10x Dashboard Load Improvement", "10,000+ Concurrent WebSockets", "99.99% Uptime SLA Met"],
    archSnippet: "Scalable Event-Driven Database Replication",
    flowType: "crm" as const
  },
  {
    title: "GenAI Resume & Portfolio Builder",
    industry: "EdTech & Professional Tool",
    problem: "Job seekers struggled to create professional, ATS-friendly resumes and deploy portfolio websites, causing drop-offs on traditional web tools.",
    solution: "Built a generative AI platform that extracts LinkedIn data, uses GPT-4o to rewrite text based on specific job descriptions, and generates structured JSON to compile responsive web page portfolios deployed instantly on modern hosting.",
    techStack: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel"],
    metrics: ["50k+ Active Global Users", "200k+ Tailored Resumes Exported", "Top 5 Featured on Product Hunt"],
    archSnippet: "Serverless LLM Generation Pipeline",
    flowType: "builder" as const
  }
];

export function CaseStudies() {
  return (
    <section id="work" className="section-padding bg-black text-white border-b-2 border-black relative">
      <div className="container-custom">
        <div className="mb-20">
          <span className="text-primary text-xs font-black uppercase tracking-widest bg-primary/10 border border-primary px-3 py-1 mb-4 inline-block">
            FEATURED WORK
          </span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            PRODUCT CASE STUDIES
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl font-medium">
            In-depth analysis of complex SaaS and AI platforms I've architected and shipped from zero to production.
          </p>
          <div className="h-1.5 w-32 bg-primary mt-8"></div>
        </div>
        
        <div className="flex flex-col gap-16 md:gap-24 mt-16">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-white text-black p-6 sm:p-10 md:p-14 border-4 border-black shadow-[8px_8px_0px_0px_rgba(198,232,41,1)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative group"
            >
              {/* Desktop link overlay button */}
              <div className="absolute top-6 right-6 text-2xl border-2 border-black p-2 bg-white hover:bg-primary transition-all hidden md:flex items-center justify-center">
                <LuArrowUpRight />
              </div>
              
              {/* Left Column - Meta & Copy (Cols: 7) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-black/50 mb-3 block">
                    {study.industry}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8 leading-tight">
                    {study.title}
                  </h3>
                  
                  <div className="mb-6 border-l-4 border-black pl-4 py-1">
                    <h4 className="font-black uppercase text-xs text-black/60 mb-1 tracking-wider">The Problem</h4>
                    <p className="text-sm font-medium text-secondary/90 leading-relaxed">{study.problem}</p>
                  </div>
                  
                  <div className="mb-8 border-l-4 border-primary pl-4 py-1">
                    <h4 className="font-black uppercase text-xs text-black/60 mb-1 tracking-wider">The Solution</h4>
                    <p className="text-sm font-medium text-secondary/90 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div>
                  <h4 className="font-black uppercase text-xs tracking-wider text-black/50 mb-3">Tech Stack Utilized</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.techStack.map(tech => (
                      <span 
                        key={tech} 
                        className="bg-white border-2 border-black px-2.5 py-1 text-2xs md:text-xs font-black uppercase tracking-wider hover:bg-primary transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right Column - Tech Diagram & Metrics (Cols: 5) */}
              <div className="lg:col-span-5 flex flex-col justify-between border-t-2 lg:border-t-0 lg:border-l-2 border-black/10 pt-8 lg:pt-0 lg:pl-8">
                <div>
                  <h4 className="font-black uppercase text-xs tracking-wider text-black/50 mb-3">System Architecture Snapshot</h4>
                  <div className="mb-8">
                    <ArchitectureFlow type={study.flowType} />
                  </div>
                </div>
                
                <div>
                  <h4 className="font-black uppercase text-xs tracking-wider text-black/50 mb-3">Business Impact & Metrics</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                    {study.metrics.map((metric, i) => (
                      <div 
                        key={i} 
                        className="bg-primary text-black border-2 border-black p-3.5 flex items-center justify-between font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center text-xs tracking-tight"
                      >
                        <span>{metric.split(' ')[0]}</span>
                        <span className="font-mono text-black/60 text-[10px] text-right">
                          {metric.split(' ').slice(1).join(' ')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
