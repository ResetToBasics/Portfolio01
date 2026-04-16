"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const HeadingUnderline = ({ className = '', ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 100 15" 
    preserveAspectRatio="none" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`${className}`}
    {...props}
  >
    {/* Traço contínuo 'rassurado' - Simula a caneta sem sair do papel */}
    <motion.path 
      d="M2 12C30 9 70 7 98 12C101 11 98 10.5 95 10.2C65 7.5 35 7.5 5 10C2 11 5 8.5 12 7.8C40 5.5 70 5.5 95 7.5" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.8 }}
      transition={{ 
        duration: 1.8, 
        ease: "easeInOut", 
        delay: 0.5 
      }}
    />
  </svg>
);



