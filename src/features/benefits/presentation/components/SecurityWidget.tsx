"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from '@/shared/assets/images/logo.svg';

export const SecurityWidget = () => {
  return (
    <motion.div
      className="w-full max-w-[560px] mx-auto p-6 md:p-7 rounded-[28px] border border-border bg-white shadow-sm"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="relative h-[250px] w-full mb-6 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 60 H 160 V 125 H 180" stroke="#E5E7EB" strokeWidth="1.5" />
          <path d="M300 60 H 240 V 125 H 220" stroke="#E5E7EB" strokeWidth="1.5" />
          <path d="M120 190 H 160 V 135 H 180" stroke="#E5E7EB" strokeWidth="1.5" />
          <path d="M300 160 H 240 V 135 H 220" stroke="#E5E7EB" strokeWidth="1.5" />
        </svg>

        <motion.div
          className="z-10 w-16 h-16 bg-white border-2 border-gray-50 rounded-2xl shadow-xl flex items-center justify-center text-accent"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-7 h-7 overflow-hidden flex items-center justify-start">
            <Image
              src={logo}
              alt="Monotree mark"
              width={92}
              height={28}
              className="h-7 w-auto max-w-none"
            />
          </div>
        </motion.div>

        <div className="absolute top-8 left-12 w-12 h-12 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-center p-2.5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
            alt="Figma"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute top-8 right-12 w-12 h-12 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-center p-2.5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
            alt="YouTube"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute bottom-8 left-16 w-12 h-12 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-center p-2.5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
            alt="Spotify"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute bottom-16 right-12 w-12 h-12 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-center p-2.5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

    </motion.div>
  );
};
