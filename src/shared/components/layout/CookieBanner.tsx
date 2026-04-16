"use client";

import React, { useState } from 'react';
import { Button } from '@/shared/components/ui/button/Button';
import { Cookie } from 'lucide-react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full px-6 z-50 flex justify-center animate-slide-up">
      <div className="bg-white border-t border-x border-gray-100 shadow-[0_-8px_30px_rgb(0,0,0,0.06)] rounded-t-2xl w-full max-w-5xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2 font-semibold shrink-0">
            <Cookie className="w-5 h-5" />
            Cookie Settings
          </div>
          <p className="text-secondary leading-relaxed">
            We use cookies to ensure a secure and personalized banking experience. By clicking "Accept", you agree to our <a href="#" className="text-gray-500 underline decoration-gray-300 underline-offset-4 hover:text-black transition-colors">Privacy & Cookie Policy</a>.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Button variant="outline" size="sm" className="px-6" onClick={() => setIsVisible(false)}>
            Accept
          </Button>
          <Button variant="ghost" size="sm" className="px-6" onClick={() => setIsVisible(false)}>
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
};


