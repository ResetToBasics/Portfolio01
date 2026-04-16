"use client";

import React from 'react';
import { Watch } from 'lucide-react';
import { motion } from 'framer-motion';

export const CheckoutWidget = () => {
  return (
    <div className="w-full max-w-[500px] mx-auto p-4 scale-[0.8] origin-top">
      {/* Product Summary */}
      <motion.div 
        className="bg-white rounded-3xl p-5 shadow-xl border border-gray-100 mb-6 flex justify-between items-center"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gray-100 border border-gray-100 flex items-center justify-center text-primary">
            <Watch className="w-7 h-7" />
          </div>
          <div>
            <div className="text-gray-400 text-sm">Rosefield watches</div>
            <div className="font-bold text-lg text-primary">Heirloom mint</div>
          </div>
        </div>
        <div className="text-xl font-black text-primary">$129.00</div>
      </motion.div>

      {/* Checkout Form */}
      <div className="bg-white/40 backdrop-blur-sm rounded-[32px] p-6 border border-white/60 shadow-inner flex flex-col gap-4">
        <div className="bg-white rounded-xl p-4 text-gray-400 text-sm border border-gray-50 shadow-sm">
          Card holder name
        </div>
        <div className="bg-white rounded-xl p-4 text-gray-400 text-sm border border-gray-50 shadow-sm flex justify-between items-center">
          Card number
          <span className="text-gray-300 font-bold italic tracking-tighter">VISA</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 text-gray-400 text-sm border border-gray-50 shadow-sm text-center">
            Expire date : 02/28
          </div>
          <div className="bg-white rounded-xl p-4 text-gray-400 text-sm border border-gray-50 shadow-sm text-center">
            CCV : 024
          </div>
        </div>
      </div>
    </div>
  );
};
