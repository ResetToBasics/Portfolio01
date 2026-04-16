"use client";

import React from 'react';
import { Wallet, TrendingUp } from 'lucide-react';

export const AutomationWidget = () => {
  return (
    <div className="w-full max-w-[280px] mx-auto py-6 relative flex flex-col gap-4 scale-[0.9] origin-top">
      {/* Connector Line */}
      <div className="absolute top-[48px] bottom-[48px] left-[38px] w-[2px] bg-gray-200 z-0" />
      
      {/* Step 1: Trigger */}
      <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-[0_8px_24px_rgba(0,0,0,0.04)] border border-gray-50 z-10 relative">
        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
          <Wallet className="w-6 h-6 text-primary" />
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] uppercase font-bold text-gray-400 tracking-wider">When</span>
          <span className="text-base font-semibold text-primary">Salary arrives</span>
        </div>
      </div>

      {/* Step 2: Action */}
      <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-[0_8px_24px_rgba(0,0,0,0.04)] border border-gray-50 z-10 relative">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col flex-grow">
          <span className="text-[11px] uppercase font-bold text-gray-400 tracking-wider">Invest</span>
          <span className="text-base font-semibold text-primary">
            <span className="text-emerald-500 font-bold">15%</span> Portfolio
          </span>
        </div>
        {/* Toggle Switch */}
        <div className="w-10 h-5 bg-accent rounded-full relative cursor-pointer">
          <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
        </div>
      </div>
    </div>
  );
};
