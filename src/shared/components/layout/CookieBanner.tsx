"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/shared/components/ui/button/Button';
import { Cookie, X } from 'lucide-react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          className="fixed bottom-6 left-0 right-0 px-4 md:px-6 z-[60] flex justify-center pointer-events-none"
        >
          <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.12)] rounded-[24px] w-full max-w-4xl p-5 md:p-6 flex flex-col md:flex-row items-center gap-6 pointer-events-auto">
            
            <div className="flex items-start md:items-center gap-4 flex-1">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col gap-1 text-center md:text-left">
                <h4 className="font-bold text-primary text-sm">Cookie Settings</h4>
                <p className="text-secondary text-[13px] leading-relaxed">
                  We use cookies to ensure a secure banking experience. By clicking "Accept", you agree to our <a href="#" className="font-semibold underline decoration-accent hover:text-black transition-colors">Privacy Policy</a>.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
              <Button 
                variant="primary" 
                size="sm" 
                className="flex-1 md:flex-none px-8 rounded-full py-2.5 h-auto text-sm" 
                onClick={() => setIsVisible(false)}
              >
                Accept
              </Button>
              <button 
                onClick={() => setIsVisible(false)}
                className="p-2.5 hover:bg-gray-50 rounded-full transition-colors text-gray-400 hover:text-primary"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


