"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BarChart3, Database, Plus, X } from "lucide-react";
import { motion, useInView } from "framer-motion";
import logo from "@/shared/assets/images/logo.svg";

const itemTransition = { duration: 0.5, ease: "easeOut" as const };
const revealTransition = { duration: 0.72, ease: [0.25, 1, 0.5, 1] as const };
const revealVariants = {
  closed: { opacity: 0, y: 14, height: 0, marginTop: 0 },
  open: { opacity: 1, y: 0, height: "auto", marginTop: 16 },
};

export const AgentChatWidget = () => {
  const [step, setStep] = useState(1);
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const chatBodyRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(widgetRef, { once: true, amount: 0.45 });

  useEffect(() => {
    if (!isInView) return;

    const timers = [
      window.setTimeout(() => setStep(2), 1200),
      window.setTimeout(() => setStep(3), 4200),
      window.setTimeout(() => setStep(4), 6200),
      window.setTimeout(() => setStep(5), 9300),
    ];

    return () => {
      timers.forEach(timer => window.clearTimeout(timer));
    };
  }, [isInView]);

  useEffect(() => {
    if (!chatBodyRef.current) return;
    const container = chatBodyRef.current;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });

    const followScroll = window.setInterval(() => {
      container.scrollTop = container.scrollHeight;
    }, 48);

    const clearFollow = window.setTimeout(() => {
      window.clearInterval(followScroll);
    }, 900);

    return () => {
      window.clearInterval(followScroll);
      window.clearTimeout(clearFollow);
    };
  }, [step]);

  return (
    <div ref={widgetRef} className="w-full max-w-[430px] h-[374px] mx-auto p-1.5">
      <div className="bg-muted rounded-[20px] p-2 border border-border shadow-[0_10px_24px_rgba(0,0,0,0.04)] h-full">
        <div className="bg-white rounded-[16px] overflow-hidden h-full flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-accent/25 text-accent flex items-center justify-center">
                <div className="w-3.5 h-3.5 overflow-hidden flex items-center justify-start">
                  <Image
                    src={logo}
                    alt="Monotree mark"
                    width={92}
                    height={28}
                    className="h-3.5 w-auto max-w-none"
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close assistant panel"
              className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-secondary"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div
            ref={chatBodyRef}
            className="px-4 py-3 flex-1 min-h-0 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex flex-col items-end">
              <div className="bg-muted text-primary rounded-[14px] rounded-br-[4px] px-3 py-2 text-[11px] leading-relaxed max-w-[88%]">
                Hey, can you generate the latest 2-month spending report?
              </div>
              <span className="text-[9px] text-secondary mt-1">You</span>
            </div>

            <motion.div
              initial={false}
              animate={step >= 2 ? "open" : "closed"}
              variants={revealVariants}
              transition={revealTransition}
              className="overflow-hidden"
            >
              <div className="flex flex-col items-start">
                <div className="w-4.5 h-4.5 rounded-full bg-accent mb-1.5" />
                <div className="text-[11px] leading-relaxed text-primary max-w-[95%]">
                  Sure. Before I generate it, do you want:
                  <div className="mt-2 space-y-1.5 max-w-[220px]">
                    <div className="border border-border rounded-[9px] px-3 py-1.5 flex items-center justify-between text-[10px]">
                      Total balance only
                      <span className="w-3.5 h-3.5 rounded-full border border-border" />
                    </div>
                    <div className={`rounded-[9px] px-3 py-1.5 flex items-center justify-between text-[10px] ${step >= 3 ? "border border-accent shadow-[0_2px_10px_rgba(144,238,144,0.2)]" : "border border-border"}`}>
                      Full breakdown with trends
                      <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${step >= 3 ? "border-accent" : "border-border"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full bg-accent transition-transform ${step >= 3 ? "scale-100" : "scale-0"}`} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={false}
              animate={step >= 3 ? "open" : "closed"}
              variants={revealVariants}
              transition={revealTransition}
              className="overflow-hidden"
            >
              <div className="flex flex-col items-end">
                <div className="bg-muted text-primary rounded-[14px] rounded-br-[4px] px-3 py-2 text-[11px] leading-relaxed max-w-[88%]">
                  Full breakdown with trends
                </div>
                <span className="text-[9px] text-secondary mt-1">You</span>
              </div>
            </motion.div>

            <motion.div
              initial={false}
              animate={step >= 4 ? "open" : "closed"}
              variants={revealVariants}
              transition={revealTransition}
              className="overflow-hidden"
            >
              <div className="flex flex-col items-start">
                <div className="w-4.5 h-4.5 rounded-full bg-accent mb-1.5" />
                <div className="text-[11px] text-primary mb-1">Got it.</div>
                <motion.div
                  initial={false}
                  animate={step < 5 ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex items-center gap-1.5 text-[10px] text-secondary">
                    <span className="w-3 h-3 rounded-full border-2 border-accent border-dashed animate-spin" />
                    Generating your spending trend...
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={false}
              animate={step >= 5 ? "open" : "closed"}
              variants={revealVariants}
              transition={revealTransition}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={step >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={itemTransition}
                className="border border-border rounded-[12px] p-2.5 bg-muted/60"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[11px] font-semibold text-primary flex items-center gap-1.5">
                    <BarChart3 className="w-3 h-3" />
                    Spending Report
                  </div>
                </div>

                <div className="text-[20px] font-bold text-primary tracking-tight mb-2">$12,465</div>

                <div className="flex items-center gap-3 text-[9px] text-secondary mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                    This period
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    Last period
                  </div>
                </div>

                <div className="h-[72px] w-full">
                  <svg viewBox="0 0 400 120" className="w-full h-full">
                    <line x1="0" y1="30" x2="400" y2="30" stroke="#F0F0F0" />
                    <line x1="0" y1="75" x2="400" y2="75" stroke="#F0F0F0" />
                    <line x1="0" y1="120" x2="400" y2="120" stroke="#F0F0F0" />
                    <motion.path
                      d="M0,90 L80,100 L160,90 L240,20 L320,60 L400,70"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.8, ease: "easeOut" }}
                    />
                    <motion.path
                      d="M0,80 L80,110 L160,30 L240,40 L320,90 L400,30"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
                    />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="px-4 pb-3 shrink-0">
            <div className="border border-border rounded-[11px] p-2">
              <div className="flex items-center justify-between mb-2">
                <div className="bg-muted px-2 py-0.5 rounded-[6px] text-[9px] font-medium text-primary flex items-center gap-1">
                  <Database className="w-2.5 h-2.5" />
                  Data
                </div>
                <div className="bg-muted px-2 py-0.5 rounded-[6px] text-[9px] font-medium text-primary">
                  Agent 4.5
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  aria-label="Add input source"
                  className="w-6 h-6 rounded-[7px] bg-muted text-secondary flex items-center justify-center"
                >
                  <Plus className="w-3 h-3" />
                </button>
                <div className="flex-1 text-[10px] text-secondary">Ask anything</div>
                <button
                  type="button"
                  aria-label="Send message"
                  className="w-6 h-6 rounded-[7px] bg-gradient-to-b from-accent to-[#76c776] text-black flex items-center justify-center text-[11px] font-bold"
                >
                  ↑
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
