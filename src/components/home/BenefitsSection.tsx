import { Lightbulb, ShieldCheck, Target, Wrench } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { BenefitCard, type Benefit } from "@/components/home/BenefitCard";

const BENEFITS: Benefit[] = [
  {
    title: "Işığı Kendi Açıp Kapatsın",
    description:
      "Günlük ışık açma–kapama alışkanlığını eğlenceli bir oyuna dönüştürmeyi hedefler.",
    Icon: Lightbulb,
    iconBg: "#FFC900",
  },
  {
    title: "Çocuk Dostu Tasarım",
    description:
      "Yuvarlak hatları ve sevimli karakterleriyle çocuk odaları düşünülerek tasarlanıyor.",
    Icon: ShieldCheck,
    iconBg: "#41B84E",
  },
  {
    title: "Günlük Rutin Oluşturur",
    description:
      "Uyku öncesi ışığı kapatma alışkanlığını desteklemeyi amaçlar.",
    Icon: Target,
    iconBg: "#F53667",
  },
  {
    title: "Tak-Çıkar Kurulum",
    description:
      "Anahtara zarar vermeden kolayca takılıp çıkarılacak şekilde geliştiriliyor.",
    Icon: Wrench,
    iconBg: "#087CF0",
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
          Eğlenceli görünür, ama asıl amacı çocukların günlük ışık alışkanlığını
          kendi başlarına kazanmasına yardımcı olmak.
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
