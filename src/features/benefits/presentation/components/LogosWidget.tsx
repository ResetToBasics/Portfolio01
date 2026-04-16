"use client";

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'S', color: 'bg-black', text: 'white' },
  { name: 'P', color: 'bg-[#003087]', text: 'white' },
  { name: 'A', color: 'bg-[#5CB85C]', text: 'white' },
  { name: 'T', color: 'bg-[#FF5A00]', text: 'white' },
  { name: 'M', color: 'bg-[#000000]', text: 'white' },
  { name: 'C', color: 'bg-[#6772E5]', text: 'white' },
];

export const LogosWidget = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-6 w-full max-w-[280px] mx-auto scale-[0.85] origin-top">
      <div className="grid grid-cols-3 gap-4">
        {logos.map((logo, i) => (
          <motion.div
            key={i}
            className={`w-14 h-14 rounded-2xl ${logo.color} border border-gray-100/10 shadow-lg flex items-center justify-center text-xl font-bold text-white`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {logo.name}
          </motion.div>
        ))}
      </div>
      
      <motion.button 
        className="bg-[#0A1C16] text-white font-semibold py-4 px-10 rounded-2xl w-full shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Pay now
      </motion.button>
    </div>
  );
};
