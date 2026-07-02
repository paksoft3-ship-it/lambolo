import { Sparkles, Zap, Home, Box } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { BenefitCard, type Benefit } from "@/components/home/BenefitCard";

const BENEFITS: Benefit[] = [
  {
    title: "Evinize Karakter Katar",
    description: "Sıradan anahtarları dekoratif karakterlere dönüştürür.",
    Icon: Sparkles,
    iconBg: "#FFC900",
  },
  {
    title: "Kolay Kurulum",
    description: "Mevcut anahtarın üzerine saniyeler içinde takılır.",
    Icon: Zap,
    iconBg: "#087CF0",
  },
  {
    title: "Yaşam Alanına Uygun",
    description: "Çocuk odası, mutfak, oyuncu odası ve daha fazlası…",
    Icon: Home,
    iconBg: "#41B84E",
  },
  {
    title: "3D Tasarım",
    description: "Premium tasarım, dayanıklı üretim.",
    Icon: Box,
    iconBg: "#F53667",
  },
];

export function BenefitsSection() {
  return (
    <section
      id="neden-lambolo"
      className="relative scroll-mt-24 bg-brand-blue"
      aria-label="Neden Lambolo?"
    >
      {/* Top wave (white → blue) */}
      <svg
        aria-hidden
        className="block w-full text-white"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        style={{ height: 50 }}
      >
        <path
          d="M0,40 C 360,0 1080,80 1440,30 L1440,0 L0,0 Z"
          fill="currentColor"
        />
      </svg>

      <Container className="pb-6 pt-2 lg:pb-10">
        <h2 className="text-center font-display text-[30px] font-bold text-white lg:text-[38px]">
          Neden Lambolo?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-[15px] text-white/85">
          Sıradan anahtarları eğlenceli karakterlere dönüştüren, her yaşam
          alanına uygun dekoratif kapaklar.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </Container>

      {/* Bottom wave (blue → cream) */}
      <svg
        aria-hidden
        className="block w-full text-cream"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        style={{ height: 50 }}
      >
        <path
          d="M0,40 C 360,80 1080,0 1440,40 L1440,70 L0,70 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
