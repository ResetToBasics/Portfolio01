"use client";

import React from 'react';
import { ChevronDown, X } from 'lucide-react';

export const PaymentWidget = () => {
  return (
    <div className="flex flex-col items-center justify-center p-2 rounded-3xl w-full max-w-[320px] mx-auto scale-[0.9] origin-top">
      {/* Currency Selector Button */}
      <button
        type="button"
        aria-label="Select currency"
        className="bg-accent hover:brightness-105 transition-all w-full rounded-full py-4 px-6 flex items-center justify-between mb-8 shadow-sm group"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full border-2 border-white bg-white/80 flex items-center justify-center text-[10px] font-bold text-primary">
            US
          </div>
          <span className="font-bold text-primary text-lg">USD</span>
        </div>
        <ChevronDown className="w-6 h-6 text-primary group-hover:translate-y-0.5 transition-transform" />
      </button>

      {/* Main Payment Card */}
      <div className="bg-white rounded-[32px] p-7 w-full shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="bg-muted border-none rounded-xl py-2.5 px-4 flex items-center gap-2 text-base font-medium text-primary">
            Dovra Inc
            <ChevronDown className="w-4 h-4 opacity-40" />
          </div>
          
          <div className="bg-muted w-10 h-10 flex items-center justify-center rounded-xl text-primary">
            <X className="w-5 h-5" />
          </div>
        </div>

        <div className="text-center font-black text-primary text-6xl tracking-tighter leading-none py-2">
          $120
        </div>

        <button
          type="button"
          aria-label="Create payment link"
          className="bg-primary hover:bg-black transition-colors text-white rounded-[20px] py-4.5 font-bold text-base w-full shadow-lg"
        >
          Create link
        </button>
      </div>
    </div>
  );
};
