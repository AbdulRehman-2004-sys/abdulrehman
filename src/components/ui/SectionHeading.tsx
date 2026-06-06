import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-16 md:mb-24 flex flex-col items-start"
    >
      <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-black mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-secondary max-w-2xl font-medium">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-24 bg-black mt-8"></div>
    </motion.div>
  );
}
