import { Repeat, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type InfoItem = {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  bg: string;
};

const ITEMS: InfoItem[] = [
  {
    title: "Günlük Alışkanlık",
    description:
      "Çocukların ışığı kendi başına açıp kapatma rutinini desteklemeyi hedefler.",
    Icon: Repeat,
    color: "#087CF0",
    bg: "#EAF4FF",
  },
  {
    title: "Güvenli Tasarım",
    description:
      "Çocuk odaları için yumuşak ve güvenli bir yapı hedefiyle geliştiriliyor.",
    Icon: ShieldCheck,
    color: "#41B84E",
    bg: "#EAF8EC",
  },
  {
    title: "Tak-Çıkar Kurulum",
    description:
      "Anahtara zarar vermeden, saniyeler içinde takılıp çıkarılacak şekilde tasarlanıyor.",
    Icon: Wrench,
    color: "#F53667",
    bg: "#FFE9F0",
  },
];

export function InformationSection() {
  return (
    <section id="sss" className="scroll-mt-24 bg-white py-16 lg:py-20" aria-label="Merak Ettikleriniz">
      <Container>
        <SectionHeading decorated>Merak Ettikleriniz</SectionHeading>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ITEMS.map(({ title, description, Icon, color, bg }) => (
            <article
              key={title}
              className="flex flex-col items-start gap-4 rounded-section border border-soft-border bg-white p-7 shadow-soft sm:flex-row sm:items-start md:flex-col"
            >
              <span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                style={{ backgroundColor: bg, color }}
              >
                <Icon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
