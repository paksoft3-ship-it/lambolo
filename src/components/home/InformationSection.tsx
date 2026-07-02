import { ChevronDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Faq = {
  question: string;
  answer: string;
};

const FAQS: Faq[] = [
  {
    question: "Hangi anahtarlarla uyumlu?",
    answer:
      "Yaygın kullanılan standart ışık anahtarlarıyla uyumlu olacak şekilde tasarlanıyor. Lansmanda desteklenen anahtar tiplerini ayrıntılı olarak paylaşacağız.",
  },
  {
    question: "Montaj gerekir mi?",
    answer:
      "Alet ya da vida gerekmez. Mevcut anahtarınızın üzerine saniyeler içinde takılıp çıkarılacak şekilde geliştiriliyor.",
  },
  {
    question: "Çocuk odasında kullanılabilir mi?",
    answer:
      "Evet. Sevimli karakterleriyle çocuk odaları için idealdir; ışığı kendi başına açıp kapatmayı eğlenceli hale getirir.",
  },
  {
    question: "Mutfakta kullanılabilir mi?",
    answer:
      "Evet. Mutfak Serisi karakterleriyle (çilek, kahve, avokado, limon) mutfağınıza da karakter katar.",
  },
  {
    question: "Boyanabilir mi?",
    answer:
      "Karakterler renkli olarak üretiliyor. Kişiselleştirilebilir ve boyanabilir seçenekler üzerinde çalışıyoruz.",
  },
  {
    question: "3D baskı mı?",
    answer:
      "Tasarımlarımızı 3D olarak hazırlıyoruz. Prototiplerde 3D baskıdan yararlanıyor, seri üretimi dayanıklılık ve kalite önceliğiyle planlıyoruz.",
  },
];

export function InformationSection() {
  return (
    <section id="sss" className="scroll-mt-24 bg-white py-16 lg:py-20" aria-label="Sıkça Sorulan Sorular">
      <Container className="max-w-3xl">
        <SectionHeading decorated>Merak Ettikleriniz</SectionHeading>
        <p className="mx-auto mt-3 max-w-xl text-center text-[15px] text-muted">
          Lambolo hakkında en çok merak edilenleri senin için topladık.
        </p>

        <div className="mt-10 space-y-3">
          {FAQS.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-product border border-soft-border bg-white px-5 shadow-soft transition-colors open:bg-cream/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-base font-bold text-navy [&::-webkit-details-marker]:hidden">
                {question}
                <ChevronDown
                  aria-hidden
                  className="h-5 w-5 shrink-0 text-brand-blue transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted">{answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
