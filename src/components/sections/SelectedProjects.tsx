"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LuExternalLink, LuGithub, LuFileText, LuMessageSquare, LuLayers, LuCalendar, LuPenTool, LuChartBar } from 'react-icons/lu';

interface MockupProps {
  type: 'resume' | 'chat' | 'crm' | 'social' | 'content' | 'analytics' | 'portal' | 'ecommerce';
}

function ProjectMockup({ type }: MockupProps) {
  const baseClass = "w-full aspect-video border-2 border-black bg-[#FDF8F0] p-3 mb-6 relative overflow-hidden font-mono text-[9px] font-bold text-black flex flex-col justify-between";

  if (type === 'portal') {
    return (
      <div className={baseClass}>
        <div className="flex items-center justify-between border-b border-black pb-1.5 mb-1.5">
          <span className="flex items-center gap-1"><LuLayers /> JOB_PORTAL_API</span>
          <span className="text-[8px] bg-black text-[#C6E829] px-1 border border-black">ACTIVE</span>
        </div>
        <div className="flex-grow flex flex-col gap-1">
          <div className="border border-black bg-white p-1 flex justify-between items-center text-[7px]">
            <span>RECRUITER PORTAL</span>
            <span className="text-black/40">3 APPS</span>
          </div>
          <div className="border border-black bg-white p-1 flex justify-between items-center text-[7px]">
            <span>APPLICANT DASHBOARD</span>
            <span className="text-primary">SUBMITTED</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'ecommerce') {
    return (
      <div className={baseClass}>
        <div className="flex items-center justify-between border-b border-black pb-1.5 mb-1.5">
          <span className="flex items-center gap-1"><LuChartBar /> STOREFRONT_OS</span>
          <span className="text-[8px] text-black/50">CART: 2 ITEMS</span>
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-1.5">
            <div className="border border-black bg-white p-1 text-center text-[7px]">
              <span>GPU RTX 4090</span>
              <span className="block text-primary font-bold">$1,599</span>
            </div>
            <div className="border border-black bg-white p-1 text-center text-[7px]">
              <span>KEYBOARD PRO</span>
              <span className="block text-black/40">$149</span>
            </div>
          </div>
          <div className="bg-primary border border-black p-1 text-center text-[7px] font-bold">
            CHECKOUT NOW
          </div>
        </div>
      </div>
    );
  }

  if (type === 'resume') {
    return (
      <div className={baseClass}>
        <div className="flex items-center justify-between border-b border-black pb-1.5 mb-1.5">
          <span className="flex items-center gap-1"><LuFileText /> RESUME_BUILDER.EXE</span>
          <span className="w-2 h-2 rounded-full bg-primary border border-black animate-pulse"></span>
        </div>
        <div className="flex-grow flex gap-2">
          {/* Resume layout mockup */}
          <div className="w-1/3 border-r border-black/20 pr-1 flex flex-col gap-1">
            <div className="w-6 h-6 bg-primary border border-black mb-1"></div>
            <div className="h-1.5 bg-black/60 w-full"></div>
            <div className="h-1.5 bg-black/40 w-2/3"></div>
            <div className="h-1 bg-black/20 w-full mt-2"></div>
            <div className="h-1 bg-black/20 w-4/5"></div>
          </div>
          <div className="w-2/3 flex flex-col gap-2">
            <div className="h-2.5 bg-black w-4/5"></div>
            <div className="h-1.5 bg-black/40 w-1/3"></div>
            <div className="flex flex-col gap-1 mt-1 border-t border-black/10 pt-1">
              <div className="h-1 bg-black/30 w-full"></div>
              <div className="h-1 bg-black/30 w-full"></div>
              <div className="h-1 bg-black/30 w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'chat') {
    return (
      <div className={baseClass}>
        <div className="flex items-center justify-between border-b border-black pb-1.5 mb-1.5">
          <span className="flex items-center gap-1"><LuMessageSquare /> SUPPORT_BOT_V2</span>
          <span className="text-[8px] text-black/50">ONLINE</span>
        </div>
        <div className="flex-grow flex flex-col gap-2 justify-end pb-1">
          {/* Chat bubbles */}
          <div className="self-end bg-black text-white p-1 border border-black max-w-[80%] text-[8px] leading-tight">
            How do I cache API calls?
          </div>
          <div className="self-start bg-primary text-black p-1 border border-black max-w-[80%] text-[8px] leading-tight">
            Utilize Redis client.setex() with an expiry timeout.
          </div>
        </div>
      </div>
    );
  }

  if (type === 'crm') {
    return (
      <div className={baseClass}>
        <div className="flex items-center justify-between border-b border-black pb-1.5 mb-1.5">
          <span className="flex items-center gap-1"><LuLayers /> CRM_CONSOLE</span>
          <span className="bg-primary px-1 border border-black text-[7px]">V1.0</span>
        </div>
        <div className="flex-grow grid grid-cols-3 gap-1.5 items-center">
          <div className="border border-black bg-white p-1 text-center">
            <div className="text-[10px] font-black">10K</div>
            <div className="text-[6px] text-black/50 font-sans">REPS</div>
          </div>
          <div className="border border-black bg-white p-1 text-center">
            <div className="text-[10px] font-black">94%</div>
            <div className="text-[6px] text-black/50 font-sans">CONV</div>
          </div>
          <div className="border border-black bg-primary p-1 text-center">
            <div className="text-[10px] font-black">$45K</div>
            <div className="text-[6px] text-black/50 font-sans">ARR</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'social') {
    return (
      <div className={baseClass}>
        <div className="flex items-center justify-between border-b border-black pb-1.5 mb-1.5">
          <span className="flex items-center gap-1"><LuCalendar /> SOCIAL_SCHEDULER</span>
          <span className="text-[8px] text-black/50">QUEUE: 8</span>
        </div>
        <div className="flex-grow grid grid-cols-4 gap-1">
          {['M', 'T', 'W', 'T'].map((day, idx) => (
            <div key={idx} className="border border-black/20 bg-white p-1 flex flex-col justify-between">
              <span className="text-[7px] text-black/40 border-b border-black/10 pb-0.5">{day}</span>
              {idx % 2 === 0 ? (
                <div className="h-2.5 bg-primary border border-black"></div>
              ) : (
                <div className="h-1 bg-black/10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'content') {
    return (
      <div className={baseClass}>
        <div className="flex items-center justify-between border-b border-black pb-1.5 mb-1.5">
          <span className="flex items-center gap-1"><LuPenTool /> EDITOR_SHELL</span>
          <span className="text-[7px] bg-black text-white px-1">AI READY</span>
        </div>
        <div className="flex-grow flex flex-col gap-1.5">
          <div className="h-2 bg-black/10 w-full flex items-center justify-between px-1 border border-black/20">
            <span>FILE.MD</span>
            <span>234 WORDS</span>
          </div>
          <div className="flex flex-col gap-1 pt-1">
            <div className="h-1 bg-black w-full"></div>
            <div className="h-1 bg-primary w-4/5"></div>
            <div className="h-1 bg-black/40 w-11/12"></div>
          </div>
        </div>
      </div>
    );
  }

  // analytics
  return (
    <div className={baseClass}>
      <div className="flex items-center justify-between border-b border-black pb-1.5 mb-1.5">
        <span className="flex items-center gap-1"><LuChartBar /> LTV_METRICS</span>
        <span className="text-[8px] text-black/50">LIVE SPEED</span>
      </div>
      <div className="flex-grow flex items-end justify-between px-2 pt-2 border border-black/10 bg-white">
        <div className="w-1.5 bg-black h-[20%]"></div>
        <div className="w-1.5 bg-black h-[45%]"></div>
        <div className="w-1.5 bg-primary h-[85%] border-x border-t border-black"></div>
        <div className="w-1.5 bg-black h-[60%]"></div>
        <div className="w-1.5 bg-black h-[75%]"></div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Dynamic AI-Powered Resume System",
    description: "Create a resume once and get a permanent shareable link that updates automatically as your skills, projects, and experience evolve. Includes AI-powered ATS analysis, resume optimization suggestions, PDF export, and secure authentication.",
    tech: "Next.js • TypeScript • Supabase • OpenAI API • Tailwind CSS",
    link: "https://resume-builder-eight-dun.vercel.app/",
    github: "https://github.com/AbdulRehman-2004-sys/Resume-builder",
    type: "resume" as const
  },
  {
    title: "No-Code AI Support Agent SaaS",
    description: "Create, train, and deploy AI customer support agents using business data, PDFs, and FAQs. Get an embeddable script tag and launch an intelligent support assistant on any website in minutes.",
    tech: "Next.js • OpenAI • Supabase • Vector Search",
    link: "https://customer-support-agent-embed-system-delta.vercel.app/",
    github: "https://github.com/AbdulRehman-2004-sys/Customer-Support-Agent-Embed-System",
    type: "chat" as const
  },
  {
    title: "AI Social Media Automation SaaS",
    description: "Manage multiple social platforms from a single dashboard with AI-generated content, smart scheduling, automated publishing, and AI-powered engagement workflows.",
    tech: "Next.js • Supabase • OAuth • OpenAI API",
    link: "https://github.com/AbdulRehman-2004-sys/social-media-automation",
    github: "https://github.com/AbdulRehman-2004-sys/social-media-automation",
    type: "social" as const
  },
  {
    title: "Job Portal Platform",
    description: "A full-stack recruitment platform connecting companies and job seekers through a role-based workflow. Recruiters can register organizations, publish job openings, manage applications, and review candidates, while students can discover opportunities, apply for positions, and track their application status through a dedicated dashboard.",
    tech: "Next.js • Node.js • MongoDB • JWT • RBAC",
    link: "https://job-portal-25.vercel.app/",
    github: "https://github.com/AbdulRehman-2004-sys/Job-Portal",
    type: "portal" as const
  }
  ,
  {
    title: "Dropzone Gaming",
    description: "A dynamic e-commerce solution for gaming hardware and accessories featuring product management, multi-admin controls, configurable payment methods, customer ticketing, order management, email notifications, and a fully customizable admin dashboard for managing store settings, themes, and business operations.",
    tech: "Next.js • Node.js • MongoDB • Admin Dashboard • Email Services",
    link: "https://gaming-zone-chi.vercel.app/",
    github: "https://gaming-zone-chi.vercel.app/",
    type: "ecommerce" as const
  }

];

export function SelectedProjects() {
  return (
    <section id="selected-projects" className="section-padding bg-background border-b-2 border-black">
      <div className="container-custom">
        <div className="mb-20">
          <span className="text-black bg-[#C6E829] text-xs font-black uppercase tracking-widest border-2 border-black px-3 py-1 mb-4 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            SELECTED PROJECTS
          </span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            ADDITIONAL APPLICATIONS
          </h2>
          <p className="text-lg md:text-xl text-secondary/60 max-w-2xl font-medium">
            A curated list of utilities, tools, libraries, and boilerplates designed with scaling and product-mindsets.
          </p>
          <div className="h-1.5 w-32 bg-black mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-white border-2 border-black p-6 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full relative"
            >
              {/* Project Card Graphic Header */}
              <ProjectMockup type={project.type} />

              <div className="mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/50 group-hover:text-primary transition-colors bg-muted/40 border border-black/10 px-2 py-1">
                  {project.tech}
                </span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-3 text-black group-hover:underline decoration-primary decoration-4">
                {project.title}
              </h3>
              <p className="text-secondary/80 font-medium text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Links with clean borders */}
              <div className="flex gap-4 mt-auto border-t border-black/10 pt-4">
                <a
                  href={project.link}
                  id={`project-demo-${idx}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider hover:text-primary transition-colors"
                >
                  <LuExternalLink className="text-sm" /> LIVE DEMO
                </a>
                <a
                  href={project.github}
                  id={`project-github-${idx}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider hover:text-primary transition-colors border-l border-black/10 pl-4"
                >
                  <LuGithub className="text-sm" /> VIEW GITHUB
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
