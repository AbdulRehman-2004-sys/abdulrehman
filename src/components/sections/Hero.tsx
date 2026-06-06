"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { LuArrowRight, LuGithub, LuLinkedin, LuMail, LuMapPin, LuGlobe, LuEarth } from 'react-icons/lu';
import { smoothScrollTo } from '@/utils/scroll';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    },
  };

 const stats = [
  { value: "MERN", label: "FULL-STACK DEVELOPMENT" },
  { value: "PERN", label: "POSTGRESQL EXPERTISE" },
  { value: "GENAI", label: "AI INTEGRATIONS" },
  { value: "SAAS", label: "PRODUCT BUILDING" }
];

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-background pt-32 pb-16 md:pt-40 md:pb-24 border-b-2 border-black overflow-hidden grid-bg">
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl"
        >
          {/* Header Metadata Grid */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-y-4 gap-x-8 mb-8 text-xs md:text-sm font-black uppercase tracking-widest text-black/60 border-b-2 border-black/10 pb-6"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary border border-black"></span>
              </span>
              <span className="text-black bg-primary px-2 py-0.5 border border-black font-bold">
                AVAILABLE FOR AI & SaaS PRODUCTS
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-bold">
              <LuMapPin className="text-black" /> REMOTE / WORLDWIDE
            </div>
            <div className="flex items-center gap-1.5 font-bold">
              <LuGlobe className="text-black" /> PKT (UTC+5) / EST (UTC-5) ALIGNED
            </div>
          </motion.div>

          {/* Large Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] mb-6">
              ABDUL <br />
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #000000' }}>REHMAN</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-secondary flex flex-wrap items-center gap-x-3 gap-y-2">
              <span>FULL-STACK ENGINEER</span>
              <span className="text-black/30 text-lg md:text-2xl">×</span>
              <span className="highlight bg-primary text-black px-2 py-0.5 border border-black">MERN • PERN</span>
              <span className="text-black/30 text-lg md:text-2xl">×</span>
              <span className="highlight bg-primary text-black px-2 py-0.5 border border-black">GEN AI • AGENTIC AI</span>
            </h2>
          </motion.div>

          {/* Headline Statement */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-3xl text-secondary max-w-4xl mb-12 font-medium leading-relaxed"
          >
            Helping startups build <span className="underline decoration-black decoration-2 underline-offset-4 font-bold text-black">scalable SaaS products</span>, AI-powered applications, <span className="bg-primary/20 px-1 font-bold text-black border border-transparent hover:border-black transition-all">intelligent agentic workflows</span>, and robust web systems optimized for product-market fit.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-20">
            <Button
              id="hero-cta-cases"
              onClick={() => smoothScrollTo('work')}
              className="text-sm font-black py-5 px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              VIEW CASE STUDIES <LuArrowRight className="ml-2 text-lg" />
            </Button>
            <Button
              id="hero-cta-touch"
              variant="outline"
              onClick={() => smoothScrollTo('contact')}
              className="text-sm font-black py-5 px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              GET IN TOUCH
            </Button>
          </motion.div>

          {/* Stats Dashboard Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 border-2 border-black bg-white"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`p-6 md:p-8 flex flex-col justify-center hover:bg-primary transition-all duration-300 ${i < stats.length - 1 ? 'border-b-2 lg:border-b-0 border-black' : ''
                  } ${i % 2 === 0 ? 'border-r-2' : 'lg:border-r-2'
                  } ${i === 1 ? 'lg:border-r-2' : ''
                  } ${i === 2 ? 'border-r-2' : ''
                  }`}
              >
                <span className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-2 text-black">
                  {stat.value}
                </span>
                <span className="text-2xs md:text-xs font-black uppercase tracking-wider text-black/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Retro aesthetic decorative lines */}
      <div className="absolute right-0 top-1/4 w-32 h-64 border-l-2 border-y-2 border-black/10 hidden xl:block" />
      <div className="absolute left-8 bottom-0 w-[2px] h-32 bg-black" />
    </section>
  );
}
