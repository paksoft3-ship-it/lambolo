import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CharacterSection } from "@/components/home/CharacterSection";
import { KitchenSection } from "@/components/home/KitchenSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { WaitlistSection } from "@/components/home/WaitlistSection";
import { InformationSection } from "@/components/home/InformationSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CharacterSection />
        <KitchenSection />
        <BenefitsSection />
        <HowItWorksSection />
        <WaitlistSection />
        <InformationSection />
      </main>
      <Footer />
    </>
  );
}
