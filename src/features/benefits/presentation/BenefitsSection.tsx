"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

// Lazy loading widgets
const AutomationWidget = dynamic(() => import("./components/AutomationWidget").then(mod => mod.AutomationWidget), {
  loading: () => <div className="w-full h-full bg-muted/20 animate-pulse rounded-2xl" />,
  ssr: false
});

const AgentChatWidget = dynamic(() => import("./components/AgentChatWidget").then(mod => mod.AgentChatWidget), {
  loading: () => <div className="w-full h-full bg-muted/20 animate-pulse rounded-2xl" />,
  ssr: false
});

const SecurityWidget = dynamic(() => import("./components/SecurityWidget").then(mod => mod.SecurityWidget), {
  loading: () => <div className="w-full h-full bg-muted/20 animate-pulse rounded-2xl" />,
  ssr: false
});

const PaymentWidget = dynamic(() => import("./components/PaymentWidget").then(mod => mod.PaymentWidget), {
  loading: () => <div className="w-full h-full bg-muted/20 animate-pulse rounded-2xl" />,
  ssr: false
});

const benefitCards: Array<{
  title: string;
  description: string;
  graphicScale: string;
  widget: ReactNode;
}> = [
  {
    title: "Smart Automation",
    description: "Automate savings with intelligent rules.",
    graphicScale: "scale-[0.75]",
    widget: <AutomationWidget />
  },
  {
    title: "AI Spending Assistant",
    description: "Capture intent in chat and deliver full spending breakdowns with trend insights in seconds.",
    graphicScale: "scale-[1]",
    widget: <AgentChatWidget />
  },
  {
    title: "Cross-Platform Integration",
    description: "Unify payment methods and partner channels with one seamless integration layer.",
    graphicScale: "scale-[0.65]",
    widget: <SecurityWidget />
  },
  {
    title: "Get paid instantly",
    description: "Share secure payment links.",
    graphicScale: "scale-[0.66]",
    widget: <PaymentWidget />
  }
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="scroll-mt-28 w-full bg-white py-20 pb-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Restored Header */}
        <div className="text-center mb-20">
          <h2 className="text-[36px] md:text-[48px] font-semibold text-primary leading-tight tracking-tight mb-6">
            Built for speed <br />
            Designed for scale
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From daily spending to long-term wealth management, streamline every financial decision with automated tools—without the traditional bank complexity.
          </p>
        </div>

        <div className="grid grid-cols-1">
          {benefitCards.map((card, index) => {
            const shouldReverse = index % 2 === 1;

            return (
              <motion.div
                key={card.title}
                className={`flex flex-col md:h-[500px] ${shouldReverse ? "md:flex-row-reverse" : "md:flex-row"} py-6 md:py-8 border-b border-gray-100 last:border-b-0`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.04 }}
              >
                <div className="flex items-center justify-center min-h-[280px] md:h-[400px] md:w-[44%] bg-gradient-to-b from-gray-50/70 to-white border border-gray-100 overflow-hidden">
                  <div className={`${card.graphicScale} origin-center w-full`}>
                    {card.widget}
                  </div>
                </div>

                <div className="pt-6 md:pt-0 md:px-10 md:w-[56%] flex items-center">
                  <div className="max-w-[460px]">
                    <h3 className="text-[26px] md:text-[34px] font-semibold text-primary leading-tight tracking-tight mb-4">
                      {card.title}
                    </h3>
                    <p className="text-secondary text-base md:text-lg leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
