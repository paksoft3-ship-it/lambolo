import { Bell, Gift, Rocket, Tag } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

const PERKS = [
  { label: "Erken erişim", Icon: Rocket },
  { label: "Lansman fırsatları", Icon: Tag },
  { label: "Ürün gelişim haberleri", Icon: Bell },
  { label: "Sürprizler", Icon: Gift },
];

export function WaitlistSection() {
  return (
    <section
      id="bekleme-listesi"
      className="scroll-mt-24 bg-brand-pink py-16 text-white lg:py-20"
      aria-label="Bekleme listesi"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-xs font-bold tracking-wide text-brand-pink">
              ÇOK YAKINDA!
            </span>
            <h2 className="mt-4 font-display text-[30px] font-bold leading-tight lg:text-[40px]">
              Yeni ışık arkadaşına ilk sen sahip ol!
            </h2>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/90 lg:text-base">
              Sınırlı ilk üretim, ürün gelişim haberleri ve lansmana özel fırsatlardan
              ilk sen haberdar ol.
            </p>

            <ul className="mt-7 grid grid-cols-2 gap-4 sm:max-w-md">
              {PERKS.map(({ label, Icon }) => (
                <li key={label} className="flex items-center gap-2.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Compact white form */}
          <div className="rounded-section bg-white p-6 shadow-soft-lg sm:p-7">
            <h3 className="font-display text-xl font-bold text-navy">
              İlk üretimde yerini al
            </h3>
            <p className="mt-1.5 text-sm text-muted">
              Sadece adın ve e-postan yeterli.
            </p>
            <div className="mt-5">
              <WaitlistForm source="coming-soon" variant="compact" tone="light" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
