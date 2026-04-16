"use client";

import { ArrowRight, Lightbulb, Rocket, ShoppingBag, Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    description: "For solo operators launching core finance workflows.",
    accounts: "2",
    automations: "10",
    support: "Standard",
    price: 29,
    icon: Lightbulb,
    featured: false,
  },
  {
    name: "Growth",
    description: "For teams scaling payments, cards, and operations.",
    accounts: "10",
    automations: "Unlimited",
    support: "Priority",
    price: 79,
    icon: Rocket,
    featured: true,
  },
  {
    name: "Enterprise",
    description: "For regulated businesses with advanced controls and SLAs.",
    accounts: "Unlimited",
    automations: "Unlimited",
    support: "Dedicated",
    price: 149,
    icon: ShoppingBag,
    featured: false,
  },
];

export const PricingSection = () => {
  return (
    <section className="w-full bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-[34px] md:text-[46px] font-semibold text-primary leading-tight tracking-tight mb-4">
            Pricing built for modern finance teams
          </h2>
          <p className="text-secondary text-base md:text-lg">
            Pick a plan that fits your operation, from first transactions to enterprise scale.
          </p>

          <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 text-sm font-medium">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <span className="text-secondary opacity-70">Plan type:</span>
              <div className="bg-white p-1 rounded-full border border-gray-100 flex shadow-sm">
                <button type="button" className="bg-primary text-white px-6 py-1.5 rounded-full text-xs md:text-sm">
                  Business
                </button>
                <button type="button" className="text-secondary px-6 py-1.5 text-xs md:text-sm">
                  Enterprise
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <span className="text-secondary opacity-70">Billing cycle:</span>
              <div className="bg-white p-1 rounded-full border border-gray-100 flex shadow-sm">
                <button type="button" className="bg-primary text-white px-5 py-1.5 rounded-full text-xs md:text-sm">
                  Monthly
                </button>
                <button type="button" className="text-secondary px-5 py-1.5 text-xs md:text-sm">
                  Quarterly
                </button>
                <button type="button" className="text-secondary px-5 py-1.5 text-xs md:text-sm">
                  Yearly
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                className={`pricing-card rounded-[36px] border p-8 md:p-9 ${
                  plan.featured
                    ? "bg-primary text-white border-primary shadow-2xl md:scale-[1.03]"
                    : "bg-white text-primary border-gray-100 shadow-sm"
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-[28px] font-semibold">{plan.name}</h3>
                    <p className={`text-sm mt-2 max-w-[180px] ${plan.featured ? "text-gray-400" : "text-secondary"}`}>
                      {plan.description}
                    </p>
                  </div>
                  <div className={`p-2 rounded-lg ${plan.featured ? "bg-white/10" : "bg-muted"}`}>
                    <Icon className={`w-5 h-5 ${plan.featured ? "text-white" : "text-primary"}`} />
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className={`flex justify-between pb-2 border-b ${plan.featured ? "border-white/15" : "border-gray-100"}`}>
                    <span className="font-medium text-lg">{plan.accounts}</span>
                    <span className={`uppercase text-xs self-center ${plan.featured ? "text-gray-500" : "text-secondary"}`}>ACCOUNTS</span>
                  </div>
                  <div className={`flex justify-between pb-2 border-b ${plan.featured ? "border-white/15" : "border-gray-100"}`}>
                    <span className="font-medium text-lg">{plan.automations}</span>
                    <span className={`uppercase text-xs self-center ${plan.featured ? "text-gray-500" : "text-secondary"}`}>AUTOMATIONS</span>
                  </div>
                  <div className={`flex justify-between pb-2 border-b ${plan.featured ? "border-white/15" : "border-gray-100"}`}>
                    <span className="font-medium text-lg">{plan.support}</span>
                    <span className={`uppercase text-xs self-center ${plan.featured ? "text-gray-500" : "text-secondary"}`}>SUPPORT</span>
                  </div>
                </div>

                <div className="mb-8">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className={plan.featured ? "text-gray-400" : "text-secondary"}> / month</span>
                </div>

                <button
                  type="button"
                  className={`w-full py-4 rounded-2xl flex items-center justify-between px-6 transition-colors ${
                    plan.featured ? "bg-accent text-black font-bold hover:brightness-95" : "bg-primary text-white hover:bg-black"
                  }`}
                >
                  <span>Get started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-11 flex flex-col items-center gap-2.5 text-secondary text-sm">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-accent" />
            <span>All plans include bank-grade security and audit trails</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-accent" />
            <span>Scale instantly as transaction volume grows</span>
          </div>
        </div>
      </div>
    </section>
  );
};
