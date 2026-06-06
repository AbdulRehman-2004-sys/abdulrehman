"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LuArrowUpRight, LuDatabase, LuCpu } from 'react-icons/lu';

interface ArchitectureFlowProps {
  type: 'ai' | 'automation' | 'builder';
}

function ArchitectureFlow({ type }: ArchitectureFlowProps) {
  if (type === 'ai') {
    return (
      <div className="border-2 border-black bg-[#FDF8F0] p-4 text-xs font-mono font-bold flex flex-col gap-3">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-black pb-2 mb-1">
          <span className="flex items-center gap-1.5">
            <LuCpu className="text-sm" /> NO-CODE AI SUPPORT AGENT
          </span>
          <span className="bg-primary px-1.5 py-0.5 border border-black text-[10px]">
            LIVE SaaS MVP
          </span>
        </div>

        <div className="flex flex-col gap-2">

          {/* Step 1 */}
          <div className="border border-black bg-white p-2 flex items-center justify-between">
            <span>1. BUSINESS INPUT</span>
            <span className="text-black/40">FORM / UPLOAD</span>
          </div>

          {/* Arrow */}
          <div className="flex justify-center my-[-2px] text-xs">▼</div>

          {/* Step 2 */}
          <div className="border border-black bg-white p-2 flex items-center justify-between">
            <span>2. KNOWLEDGE PROCESSING</span>
            <span className="text-primary">RAG PIPELINE</span>
          </div>

          {/* Arrow */}
          <div className="flex justify-center my-[-2px] text-xs">▼</div>

          {/* Step 3 */}
          <div className="border border-black bg-white p-2 flex items-center justify-between">
            <span>3. AI AGENT CONFIG GENERATION</span>
            <span className="text-black/40">LLM SETUP</span>
          </div>

          {/* Arrow */}
          <div className="flex justify-center my-[-2px] text-xs">▼</div>

          {/* Step 4 */}
          <div className="border border-black bg-primary text-black p-2 flex items-center justify-between">
            <span>4. EMBEDDABLE SCRIPT TAG GENERATED</span>
            <span className="text-xs">OUTPUT</span>
          </div>

          {/* Arrow */}
          <div className="flex justify-center my-[-2px] text-xs">▼</div>

          {/* Step 5 */}
          <div className="border border-black bg-white p-2 flex items-center justify-between">
            <span>5. WEBSITE DEPLOYMENT</span>
            <span className="text-black/40">COPY & PASTE</span>
          </div>

          {/* Arrow */}
          <div className="flex justify-center my-[-2px] text-xs">▼</div>

          {/* Step 6 */}
          <div className="border border-black bg-white p-2 flex items-center justify-between">
            <span>6. AI SUPPORT AGENT LIVE</span>
            <span className="text-primary">CUSTOMER CHAT</span>
          </div>

        </div>
      </div>
    );
  }

  if (type === 'automation') {
    return (
      <div className="border-2 border-black bg-[#FDF8F0] p-4 text-xs font-mono font-bold flex flex-col gap-3">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-black pb-2 mb-1">
          <span className="flex items-center gap-1.5">
            <LuDatabase className="text-sm" /> AI SOCIAL MEDIA AUTOMATION PLATFORM
          </span>
          <span className="bg-primary px-1.5 py-0.5 border border-black text-[10px]">
            SAAS SYSTEM
          </span>
        </div>

        <div className="flex flex-col gap-2">

          {/* Step 1 */}
          <div className="border border-black bg-white p-2 flex justify-between items-center">
            <span>USER CONNECTS SOCIAL ACCOUNTS</span>
            <span className="text-black/40">OAuth (Google, GitHub, Social APIs)</span>
          </div>

          <div className="flex justify-center my-[-2px] text-xs">▼</div>

          {/* Step 2 */}
          <div className="border border-black bg-white p-2 flex flex-col gap-1">
            <div className="flex justify-between">
              <span>AI CONTENT COMPOSER</span>
              <span className="text-primary">OPENAI GPT-4o</span>
            </div>
            <span className="text-[9px] text-black/50 font-sans font-medium">
              Generates Posts, Captions & Marketing Content
            </span>
          </div>

          <div className="flex justify-center my-[-2px] text-xs">▼</div>

          {/* Step 3 */}
          <div className="border border-black bg-white p-2 flex justify-between items-center">
            <span>MEDIA GENERATION / UPLOAD</span>
            <span className="text-black/40">AI Images + User Assets</span>
          </div>

          <div className="flex justify-center my-[-2px] text-xs">▼</div>

          {/* Step 4 */}
          <div className="border border-black bg-white p-2 flex justify-between items-center">
            <span>SMART SCHEDULING ENGINE</span>
            <span className="text-primary">CRON + QUEUE SYSTEM</span>
          </div>

          <div className="flex justify-center my-[-2px] text-xs">▼</div>

          {/* Step 5 */}
          <div className="border border-black bg-white p-2 flex justify-between items-center">
            <span>AUTO POSTING ENGINE</span>
            <span className="text-black/40">SOCIAL PLATFORM APIs</span>
          </div>

          <div className="flex justify-center my-[-2px] text-xs">▼</div>

          {/* Step 6 */}
          <div className="border border-black bg-primary text-black p-2 flex justify-between items-center">
            <span>REAL-TIME AUTO REPLY SYSTEM</span>
            <span className="text-xs">AI RESPONSE ENGINE</span>
          </div>

        </div>
      </div>
    );
  }

  return null;
}

const caseStudies = [
  {
    title: "No-Code AI Support Agent SaaS",
    industry: "Customer Support SaaS",
    problem: "Small businesses and startups often want AI-powered customer support but lack the technical resources to build, train, and deploy custom AI agents for their websites.",
    solution: "Built a no-code SaaS MVP that allows businesses to create an AI support agent by entering business information and uploading documents such as FAQs, PDFs, and product documentation. The platform automatically generates an embeddable script tag that can be added to any website, instantly deploying the AI support assistant without custom development.",
    techStack: ["Next.js", "Node.js", "OpenAI", "Supabase", "Vector Search", "LangChain"],
    archSnippet: "RAG-Powered AI Support Agent Platform",
    flowType: "ai" as const
  },
  {
    title: "AI Social Media Automation & Content Scheduling Platform",
    industry: "AI SaaS / Social Media Automation",
    problem: "Content creators, marketers, and businesses struggle to manage multiple social media platforms, create consistent content, and post at optimal times. Manual posting, content creation, and engagement handling across platforms like YouTube, Instagram, Facebook, TikTok, and Discord is time-consuming and inefficient.",
    solution: "Built an AI-powered multi-platform social media automation system where users can connect multiple accounts (YouTube, Instagram, Facebook, TikTok, Discord, etc.), create posts using an AI composer powered by OpenAI, generate AI images or upload custom media, and schedule posts for automated publishing. The system also includes an auto-reply engine that responds to comments and interactions in real-time using AI.",
    techStack: ["Next.js", "Node.js", "OpenAI API", "OAuth (Google & GitHub)", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
    archSnippet: "AI-Powered Social Media Orchestration & Scheduling Engine",
    flowType: "automation" as const
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
            In-depth analysis of complex SaaS and AI platforms I&apos;ve architected and shipped from zero to production.
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
              <a
                href="#contact"
                id={`case-study-link-${index}`}
                className="absolute top-6 right-6 text-2xl border-2 border-black p-2 bg-white hover:bg-primary transition-all hidden md:flex items-center justify-center cursor-pointer"
                aria-label={`Inquire about ${study.title}`}
              >
                <LuArrowUpRight />
              </a>

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

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
