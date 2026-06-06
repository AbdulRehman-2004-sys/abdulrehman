"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuMenu, LuX } from 'react-icons/lu';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Selected Projects', href: '#selected-projects' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'AI Expertise', href: '#expertise' },
  { name: 'Toolkit', href: '#toolkit' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background border-b-2 border-black py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl md:text-2xl font-black tracking-tighter uppercase flex items-center gap-1 group"
        >
          <span className="bg-black text-white px-2 py-1 transition-colors group-hover:bg-primary group-hover:text-black">
            ABDUL
          </span>
          <span className="border-2 border-black px-2 py-0.5 font-bold transition-colors group-hover:bg-black group-hover:text-white">
            REHMAN
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-black uppercase tracking-widest text-black/80 hover:text-black hover:bg-primary px-3 py-1.5 transition-all border border-transparent hover:border-black"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="text-xs font-black uppercase tracking-widest px-5 py-2.5 bg-primary text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            LET'S TALK
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden border-2 border-black bg-white p-2 hover:bg-primary transition-all text-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <LuX /> : <LuMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden absolute top-full left-0 w-full bg-background border-b-4 border-black"
          >
            <nav className="flex flex-col py-8 gap-4 container-custom">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-black uppercase tracking-widest text-black hover:bg-primary p-3 border-2 border-black hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-black uppercase tracking-widest text-center mt-2 p-3 bg-black text-white hover:bg-primary hover:text-black border-2 border-black hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                LET'S TALK
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
