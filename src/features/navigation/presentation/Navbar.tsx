"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/shared/assets/images/logo.svg';
import { Button } from '@/shared/components/ui/button/Button';
import { ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-300 pointer-events-none">
      <motion.nav
        initial={false}
        animate={{
          width: isScrolled ? "92%" : "100%",
          maxWidth: isScrolled ? "1100px" : "1280px",
          paddingLeft: isScrolled ? "24px" : "24px",
          paddingRight: isScrolled ? "24px" : "24px",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.82)" : "rgba(255, 255, 255, 0)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
          borderRadius: isScrolled ? "9999px" : "0px",
          boxShadow: isScrolled ? "0 10px 40px rgba(0,0,0,0.08)" : "0 0px 0px rgba(0,0,0,0)",
          borderWidth: isScrolled ? "1px" : "0px",
          borderColor: "rgba(0,0,0,0.08)",
          y: isScrolled ? 12 : 0
        }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className="flex items-center justify-between py-3 h-16 pointer-events-auto"
      >
        <Link href="/" className="flex items-center gap-2 cursor-pointer shrink-0">
          <Image src={logo} alt="Monotree Logo" width={133} height={40} className="h-6 w-auto" priority />
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-[14px] font-medium text-gray-700 mx-12">
          <li className="flex items-center gap-1 cursor-pointer hover:text-black transition-colors">
            Accounts <ChevronDown className="w-4 h-4 opacity-50" />
          </li>
          <li className="cursor-pointer hover:text-black transition-colors">Cards</li>
          <li className="cursor-pointer hover:text-black transition-colors">Wealth</li>
          <li className="cursor-pointer hover:text-black transition-colors">Security</li>
        </ul>

        <div className="flex items-center gap-4 shrink-0">
          <Button variant="secondary" size="sm" className="px-5 py-2 rounded-full text-xs md:text-sm shadow-sm">
            Book a demo
          </Button>
          <div className="hidden md:flex items-center gap-1 cursor-pointer text-sm font-medium border-l border-gray-100 pl-4 ml-2">
            English <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </motion.nav>
    </div>
  );
};
