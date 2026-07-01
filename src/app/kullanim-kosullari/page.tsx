import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "Lambolo web sitesi kullanım koşulları.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Kullanım Koşulları" updated="1 Temmuz 2026">
      <p>
        Bu Kullanım Koşulları, Lambolo web sitesini kullanımınıza ilişkin kuralları
        belirler. Siteyi kullanarak bu koşulları kabul etmiş sayılırsınız.
      </p>

      <h2>Sitenin kullanımı</h2>
      <p>
        Site içeriği bilgilendirme amaçlıdır. Site şu anda ürün lansmanı öncesi
        bir tanıtım ve bekleme listesi sayfası olarak sunulmaktadır. İçerikler
        önceden haber verilmeksizin değiştirilebilir.
      </p>

      <h2>Fikri mülkiyet</h2>
      <p>
        Sitedeki tüm marka, logo, görsel, metin ve tasarımlar Lambolo&apos;ya
        aittir ve izinsiz kullanılamaz, çoğaltılamaz veya dağıtılamaz.
      </p>

      <h2>Sorumluluğun sınırlandırılması</h2>
      <p>
        Site &quot;olduğu gibi&quot; sunulmaktadır. İçeriğin doğruluğu için makul
        çaba gösterilmekle birlikte, sitenin kesintisiz veya hatasız olacağı
        garanti edilmez.
      </p>

      <h2>Değişiklikler</h2>
      <p>
        Bu koşullar zaman zaman güncellenebilir. Güncel sürüm bu sayfada
        yayımlanır.
      </p>

      <h2>İletişim</h2>
      <p>
        Sorularınız için{" "}
        <a href="mailto:info@lambolo.com">info@lambolo.com</a> adresinden bize
        ulaşabilirsiniz.
      </p>
    </LegalPage>
  );
}
