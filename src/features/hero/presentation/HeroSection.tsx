"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/shared/components/ui/button/Button";
import { Input } from "@/shared/components/ui/input/Input";
import { HeadingUnderline } from "@/shared/components/ui/icons/HeadingUnderline";
import { Star } from "lucide-react";
import bankingHero from "@/shared/assets/images/bank2.png";

export const HeroSection = () => {
  return (
    <section className="flex-1 w-full max-w-7xl mx-auto px-6 pt-14 md:pt-20 pb-12 md:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-12 items-center animate-fade-in">
      {/* 1. Title - Always on top in mobile, Top-Left in desktop */}
      <div className="order-1 lg:col-start-1 lg:row-start-1 text-center lg:text-left pt-6 lg:pt-0">
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] tracking-tight">
          Banking for the{" "}
          <span className="relative inline-block">
            modern
            <HeadingUnderline className="absolute -bottom-2 left-0 w-full text-primary" />
          </span>{" "}
          world
        </h1>
      </div>

      {/* 2. Image - Below Title in mobile, Full Right in desktop */}
      <div className="relative w-full aspect-[16/10] flex justify-center items-start order-2 lg:col-start-2 lg:row-span-2 mt-4 lg:mt-0">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={bankingHero}
            alt="Premium Banking App Illustration"
            fill
            className="object-contain object-top mix-blend-multiply"
            priority
          />
        </div>
      </div>

      {/* 3. Rest of Content - Below Image in mobile, Bottom-Left in desktop */}
      <div className="max-w-xl order-3 lg:col-start-1 lg:row-start-2 flex flex-col items-center lg:items-start text-center lg:text-left">
        <p className="text-base text-secondary mt-6 lg:mt-0 mb-8 leading-relaxed pr-0 lg:pr-4">
          Fast, secure, and beautifully designed — manage your finances, invest in your future, and streamline your daily transactions with a premium banking experience.
        </p>

        <div className="flex items-center w-full max-w-sm bg-white border border-border rounded-2xl p-1.5 mb-10 shadow-sm focus-within:ring-2 focus-within:ring-accent/50 transition-all">
          <label htmlFor="work-email" className="sr-only">
            Work email
          </label>
          <Input 
            id="work-email"
            type="email" 
            placeholder="Enter work email" 
          />
          <Button variant="primary" size="md" className="whitespace-nowrap">
            Book a demo
          </Button>
        </div>

        <div className="flex flex-row items-center gap-6 md:gap-10 mb-8 border-b border-gray-100 pb-8 w-full justify-center lg:justify-start">
          <div className="text-center lg:text-left">
            <div className="text-2xl md:text-3xl font-semibold mb-0.5">99.99%</div>
            <div className="text-[11px] md:text-[13px] text-gray-400 font-medium">Uptime reliability</div>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="text-center lg:text-left">
            <div className="text-2xl md:text-3xl font-semibold mb-0.5">Instant</div>
            <div className="text-[11px] md:text-[13px] text-gray-400 font-medium">Money transfers</div>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-start gap-3 w-full">
          <div className="flex text-black gap-0.5">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.1 * i, 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20 
                }}
              >
                <Star className="w-6 h-6 fill-current" />
              </motion.div>
            ))}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 20 }}
            >
              <Star className="w-6 h-6 text-black" />
              <motion.div 
                className="absolute inset-0 overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              >
                <Star className="w-6 h-6 fill-current" />
              </motion.div>
            </motion.div>
          </div>
          <motion.div 
            className="text-[13px] font-bold flex items-center gap-1.5"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            4.5 <span className="text-gray-400 font-normal">Average user rating</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

