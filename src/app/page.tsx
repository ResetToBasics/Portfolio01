import { Navbar } from "@/features/navigation";
import { HeroSection } from "@/features/hero";
import { BenefitsSection } from "@/features/benefits";
import { PricingSection } from "@/features/pricing";
import { FAQSection } from "@/features/faq";
import { CookieBanner } from "@/shared/components/layout/CookieBanner";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <BenefitsSection />
        <PricingSection />
        <FAQSection />
      </main>
      <CookieBanner />
    </div>
  );
}
