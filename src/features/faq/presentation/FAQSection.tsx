"use client";

import { CreditCard, Landmark, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

type FAQItem = {
  number: string;
  title: string;
  text: string;
  bgColor: string;
  pinColor: string;
  rotation: string;
};

const faqs: FAQItem[] = [
  {
    number: "01",
    title: "How can I open my account?",
    text: "Download the app, verify your identity, and complete onboarding in minutes with guided steps.",
    bgColor: "bg-blue-50",
    pinColor: "bg-blue-500",
    rotation: "-rotate-2",
  },
  {
    number: "02",
    title: "Is my money protected?",
    text: "Yes. We use bank-grade encryption, continuous monitoring, and strict compliance controls.",
    bgColor: "bg-emerald-50",
    pinColor: "bg-emerald-500",
    rotation: "rotate-1",
  },
  {
    number: "03",
    title: "How do instant transfers work?",
    text: "Move funds 24/7 in real time, with transparent confirmation and secure recipient validation.",
    bgColor: "bg-rose-50",
    pinColor: "bg-rose-500",
    rotation: "-rotate-1",
  },
  {
    number: "04",
    title: "Can I increase my limits?",
    text: "Limits are reviewed based on account activity, profile completion, and internal risk assessment.",
    bgColor: "bg-amber-50",
    pinColor: "bg-amber-500",
    rotation: "rotate-2",
  },
];

const PushPin = ({ color }: { color: string }) => (
  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
    <div className={`w-4 h-4 rounded-full ${color} shadow-md border-2 border-white/30`} />
    <div className="w-1 h-3 bg-gray-400 mx-auto -mt-1 opacity-50" />
  </div>
);

const FAQCard = ({ number, title, text, bgColor, pinColor, rotation }: FAQItem) => (
  <motion.article
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.45, ease: "easeOut" }}
    className={`relative p-6 rounded-2xl shadow-xl ${bgColor} transition-transform duration-300 hover:scale-[1.03] hover:rotate-0 min-h-[220px] flex flex-col justify-start text-slate-800 ${rotation}`}
  >
    <PushPin color={pinColor} />
    <span className="text-sm font-bold opacity-60 mb-2">{number}</span>
    <h3 className="text-[22px] font-semibold leading-tight mb-3">{title}</h3>
    <p className="text-sm leading-relaxed opacity-80">{text}</p>
  </motion.article>
);

export const FAQSection = () => {
  return (
    <section className="w-full bg-white py-20 md:py-24 px-4">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute -top-10 left-0 animate-bounce hidden md:block">
          <Landmark size={48} className="text-blue-200" />
        </div>
        <div className="absolute top-20 right-0 animate-pulse hidden md:block">
          <CreditCard size={56} className="text-rose-200 rotate-12" />
        </div>
        <div className="absolute bottom-0 left-10 animate-bounce hidden md:block">
          <Smartphone size={40} className="text-emerald-200 -rotate-12" />
        </div>

        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900">
            4 Questions That Help You Decide Faster
          </h2>
          <p className="text-slate-500 text-lg">
            Quick answers to the most common questions about our financial platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2 md:px-4">
          {faqs.map((faq) => (
            <FAQCard key={faq.number} {...faq} />
          ))}
        </div>

        <p className="mt-16 text-center text-slate-400 text-sm italic">
          Need a deeper walkthrough? Our support team and in-app assistant are available 24/7.
        </p>
      </div>
    </section>
  );
};
