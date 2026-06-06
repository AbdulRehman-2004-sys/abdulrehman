"use client";

import React from 'react';
import { LuArrowUp } from 'react-icons/lu';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t border-white/10 py-10">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <div className="text-2xs font-mono font-bold uppercase tracking-wider text-white/40 text-center md:text-left">
          &copy; {new Date().getFullYear()} ABDUL REHMAN. ALL RIGHTS RESERVED. DESIGNED & BUILT BY REHMAN.
        </div>
        
        {/* Back to Top */}
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 text-2xs font-black uppercase tracking-widest hover:text-primary border-b border-transparent hover:border-primary transition-all pb-0.5 cursor-pointer"
        >
          BACK TO TOP <LuArrowUp className="text-sm" />
        </button>
      </div>
    </footer>
  );
}
