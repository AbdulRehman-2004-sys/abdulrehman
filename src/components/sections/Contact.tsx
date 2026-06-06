"use client";

import React, { useState } from 'react';
import { LuMail, LuLinkedin, LuMessageSquare, LuChevronRight, LuGitBranch, LuGithub } from 'react-icons/lu';

export function Contact() {
  const [budget, setBudget] = useState('$10k - $25k');
  const budgetOptions = ['< $10k', '$10k - $25k', '$25k - $50k', '$50k+'];

  return (
    <section id="contact" className="section-padding bg-black text-white border-b-2 border-black relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline and Social Channels (Cols: 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <span className="text-primary text-xs font-black uppercase tracking-widest bg-primary/10 border border-primary px-3 py-1 mb-4 inline-block">
                GET IN TOUCH
              </span>
              <h2 className="text-5xl md:text-[5.5rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
                LET&apos;S BUILD <br/>
                <span className="text-primary">SOMETHING</span> <br/>
                REMARKABLE
              </h2>
              
              <p className="text-base md:text-xl text-white/70 mb-12 max-w-xl font-medium leading-relaxed">
                Looking for an experienced full-stack engineer to design a custom SaaS, build autonomous AI agent architectures, or optimize backend infrastructure? Drop a line to start scoping.
              </p>
            </div>

            {/* Direct Links Directory */}
            <div className="flex flex-col gap-4 max-w-md border-t border-white/10 pt-8">
              <h4 className="text-3xs font-mono font-bold text-white/40 tracking-widest uppercase mb-2">DIRECT CHANNELS</h4>
              
              <a 
                href="mailto:abdrehmanryk80@gmail.com" 
                id="contact-link-email"
                className="flex items-center justify-between border-2 border-white/10 hover:border-primary p-4 bg-neutral-900 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <LuMail className="text-xl text-primary" />
                  <div className="text-left">
                    <div className="text-xs font-black uppercase">Email Address</div>
                    <div className="text-[10px] text-white/50 font-mono">abdrehmanryk80@gmail.com</div>
                  </div>
                </div>
                <LuChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="https://www.linkedin.com/in/abdul-rehman4002" 
                id="contact-link-linkedin"
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between border-2 border-white/10 hover:border-primary p-4 bg-neutral-900 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <LuLinkedin className="text-xl text-primary" />
                  <div className="text-left">
                    <div className="text-xs font-black uppercase">LinkedIn Profile</div>
                    <div className="text-[10px] text-white/50 font-mono">in/Abdul Rehman</div>
                  </div>
                </div>
                <LuChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>

               <a 
                href="https://github.com/AbdulRehman-2004-sys" 
                id="contact-link-github"
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between border-2 border-white/10 hover:border-primary p-4 bg-neutral-900 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <LuGithub className="text-xl text-primary" />
                  <div className="text-left">
                    <div className="text-xs font-black uppercase">GitHub Profile</div>
                    <div className="text-[10px] text-white/50 font-mono">github/AbdulRehman-2004-sys</div>
                  </div>
                </div>
                <LuChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="https://wa.me/923258262894" 
                id="contact-link-whatsapp"
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between border-2 border-white/10 hover:border-primary p-4 bg-neutral-900 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <LuMessageSquare className="text-xl text-primary" />
                  <div className="text-left">
                    <div className="text-xs font-black uppercase">WhatsApp Messenger</div>
                    <div className="text-[10px] text-white/50 font-mono">chat/+923258262894</div>
                  </div>
                </div>
                <LuChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Intake Inquiry Form (Cols: 6) */}
          <div className="lg:col-span-6 w-full border-2 border-white/10 bg-neutral-950 p-6 md:p-10 shadow-[6px_6px_0px_0px_rgba(198,232,41,1)]">
            <h3 className="text-xl font-black uppercase tracking-tight text-white mb-6 border-b border-white/15 pb-4">
              START A PROJECT
            </h3>

            <form id="contact-intake-form" onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-input-name" className="text-3xs font-mono font-bold uppercase text-white/40 tracking-wider">FULL NAME *</label>
                <input 
                  type="text" 
                  id="contact-input-name"
                  required
                  placeholder="e.g. Satya Nadella"
                  className="bg-neutral-900 border-2 border-white/10 focus:border-primary p-4 outline-none font-mono text-xs font-bold text-white transition-colors uppercase"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-input-email" className="text-3xs font-mono font-bold uppercase text-white/40 tracking-wider">EMAIL ADDRESS *</label>
                <input 
                  type="email" 
                  id="contact-input-email"
                  required
                  placeholder="e.g. satya@microsoft.com"
                  className="bg-neutral-900 border-2 border-white/10 focus:border-primary p-4 outline-none font-mono text-xs font-bold text-white transition-colors"
                />
              </div>

              {/* Budget Range Selection */}
              <div className="flex flex-col gap-2.5">
                <label className="text-3xs font-mono font-bold uppercase text-white/40 tracking-wider">ESTIMATED BUDGET *</label>
                <div className="grid grid-cols-2 gap-2 font-mono text-2xs font-bold">
                  {budgetOptions.map(opt => (
                    <button
                      key={opt}
                      id={`contact-budget-btn-${opt.replace(/[^a-zA-Z0-9]/g, '')}`}
                      type="button"
                      onClick={() => setBudget(opt)}
                      className={`p-3 text-center border-2 uppercase transition-all duration-300 ${
                        budget === opt
                          ? 'border-primary bg-primary text-black font-black'
                          : 'border-white/10 bg-neutral-900 text-white hover:border-white/40'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Brief */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-input-summary" className="text-3xs font-mono font-bold uppercase text-white/40 tracking-wider">PROJECT SUMMARY *</label>
                <textarea 
                  id="contact-input-summary"
                  required
                  rows={4}
                  placeholder="Describe your goals, tech stack preferences, and schedule constraints..."
                  className="bg-neutral-900 border-2 border-white/10 focus:border-primary p-4 outline-none font-sans text-sm font-medium text-white transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="contact-submit-button"
                className="w-full py-4.5 bg-primary text-black font-black uppercase text-xs tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-center flex items-center justify-center gap-2"
              >
                SUBMIT INQUIRY <LuChevronRight className="text-lg" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
