"use client";

import React from 'react';
import { SectionHeading } from '@/components/ui/portfolio/SectionHeading';
import { motion } from 'framer-motion';
import { LuGitCommitVertical, LuGitPullRequest, LuStar, LuUsers, LuArrowUpRight, LuFolderGit2 } from 'react-icons/lu';

// Generates a mock grid of contributions for the last 26 weeks (7 days each)
function GithubActivityGrid() {
  const intensities = [
    'bg-[#F3ECE1]', // Zero
    'bg-primary/20', // Low
    'bg-primary/50', // Medium
    'bg-primary border border-black/20', // High
    'bg-black', // Very High
  ];

  // Generate a random-seeded contribution grid so it's consistent but looks real
  const columns = 28; // Weeks
  const rows = 7; // Days
  const grid = [];

  for (let r = 0; r < rows; r++) {
    const rowCells = [];
    for (let c = 0; c < columns; c++) {
      // Seeded random-like generation based on indices
      const val = (r * 3 + c * 7) % 5;
      rowCells.push(val);
    }
    grid.push(rowCells);
  }

  return (
    <div className="border-2 border-black bg-white p-4 overflow-x-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="min-w-[420px] flex flex-col gap-1 select-none">
        <div className="flex justify-between items-center text-3xs font-mono font-bold text-black/50 border-b border-black/10 pb-2 mb-2">
          <span>CONTRIBUTIONS GRAPH (LATEST 28 WEEKS)</span>
          <span className="flex items-center gap-1">
            LESS <span className="w-2.5 h-2.5 bg-[#F3ECE1] border border-black/15"></span>
            <span className="w-2.5 h-2.5 bg-primary/20"></span>
            <span className="w-2.5 h-2.5 bg-primary/50"></span>
            <span className="w-2.5 h-2.5 bg-primary"></span>
            <span className="w-2.5 h-2.5 bg-black"></span> MORE
          </span>
        </div>
        
        <div className="grid grid-rows-7 gap-1">
          {grid.map((row, rIdx) => (
            <div key={rIdx} className="flex gap-1">
              {row.map((intensity, cIdx) => (
                <div 
                  key={cIdx} 
                  className={`w-3 h-3 transition-colors duration-300 hover:scale-125 ${intensities[intensity]}`}
                  title={`${rIdx * cIdx + 3} commits on week ${cIdx + 1}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function OpenSource() {
  const stats = [
    { label: "COMMITS LOGGED", value: "1,204", icon: <LuGitCommitVertical /> },
    { label: "STARS COLLECTED", value: "350+", icon: <LuStar /> },
    { label: "PRS MERGED", value: "85", icon: <LuGitPullRequest /> },
    { label: "FOLLOWERS", value: "120", icon: <LuUsers /> },
  ];

  const repos = [
    {
      name: "awesome-agentic-ai",
      description: "A curated list of frameworks, tutorials, multi-agent runtimes, vector database setups, and resources.",
      stars: 184,
      language: "TypeScript",
      langColor: "bg-blue-500",
      link: "https://github.com/AbdulRehman-2004-sys/awesome-agentic-ai"
    },
    {
      name: "langgraph-router-template",
      description: "A plug-and-play FastAPI template implementing supervisor agent patterns with tool-calling capabilities.",
      stars: 112,
      language: "Python",
      langColor: "bg-green-600",
      link: "https://github.com/AbdulRehman-2004-sys/langgraph-router-template"
    }
  ];

  return (
    <section id="opensource" className="section-padding bg-background border-b-2 border-black">
      <div className="container-custom">
        <div className="mb-20">
          <span className="text-black bg-[#C6E829] text-xs font-black uppercase tracking-widest border-2 border-black px-3 py-1 mb-4 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            BUILDING IN PUBLIC
          </span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            OPEN SOURCE
          </h2>
          <p className="text-lg md:text-xl text-secondary/60 max-w-2xl font-medium">
            Contributing back to the engineering community and sharing production architecture snippets.
          </p>
          <div className="h-1.5 w-32 bg-black mt-8"></div>
        </div>
        
        <div className="mt-16 bg-white border-2 border-black p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {/* Header Stats Console */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-black pb-8">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-1">GITHUB METRICS</h3>
              <p className="text-xs font-mono font-bold text-black/50">PROFILE: @AbdulRehman-2004-sys</p>
            </div>
            <a 
              href="https://github.com/AbdulRehman-2004-sys" 
              id="github-follow-button"
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 bg-black text-white text-xs font-black uppercase tracking-widest border-2 border-black shadow-[3px_3px_0px_0px_rgba(198,232,41,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-primary hover:text-black transition-all"
            >
              FOLLOW ON GITHUB
            </a>
          </div>

          {/* Stats Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-[#FDF8F0] p-6 flex flex-col items-center justify-center text-center border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="text-2xl mb-3 text-black/60 border border-black/10 bg-white p-2">{stat.icon}</div>
                <div className="text-3xl font-black mb-1">{stat.value}</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-black/40">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Contribution Matrix */}
          <div className="mb-12">
            <h4 className="text-xs font-black uppercase tracking-widest text-black/60 mb-4 flex items-center gap-1">
              <span>●</span> COMMITS DENSITY
            </h4>
            <GithubActivityGrid />
          </div>

          {/* Featured Repositories */}
          <div className="border-t border-black/15 pt-8">
            <h4 className="text-xs font-black uppercase tracking-widest text-black/60 mb-6 flex items-center gap-1">
              <span>●</span> FEATURED REPOSITORIES
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {repos.map((repo, i) => (
                <div 
                  key={i} 
                  className="bg-white border-2 border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(198,232,41,1)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4 border-b border-black/10 pb-3">
                      <h5 className="font-black text-lg text-black uppercase flex items-center gap-1.5">
                        <LuFolderGit2 className="text-primary text-xl border border-black p-0.5 bg-black" />
                        {repo.name}
                      </h5>
                      <span className="flex items-center gap-1 text-xs font-black border border-black/20 bg-muted/40 px-2 py-0.5">
                        <LuStar className="text-yellow-500 fill-yellow-500" /> {repo.stars}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-secondary/80 mb-6 leading-relaxed">
                      {repo.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center border-t border-black/10 pt-4 mt-auto">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold">
                      <span className={`w-3.5 h-3.5 border border-black rounded-none ${repo.langColor}`}></span>
                      <span>{repo.language}</span>
                    </div>
                    <a 
                      href={repo.link} 
                      id={`repo-clone-${i}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-xs font-black uppercase tracking-wider border-b border-black hover:text-primary hover:border-primary transition-all"
                    >
                      CLONE REPO <LuArrowUpRight />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
