import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { CookieSettingsLink } from "@/components/cookies/CookieSettingsLink";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "Lambolo çerez politikası ve çerez tercihleri.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Çerez Politikası" updated="1 Temmuz 2026">
      <p>
        Bu Çerez Politikası, Lambolo web sitesinde çerezlerin ve benzer
        teknolojilerin nasıl kullanıldığını açıklar. Siteyi kullanarak bu
        politikada belirtilen çerez kullanımını kabul etmiş olursunuz.
      </p>

      <h2>Çerez nedir?</h2>
      <p>
        Çerezler, bir web sitesini ziyaret ettiğinizde cihazınıza kaydedilen
        küçük metin dosyalarıdır. Sitenin doğru çalışmasını sağlamak, tercihlerinizi
        hatırlamak ve deneyiminizi iyileştirmek için kullanılırlar.
      </p>

      <h2>Kullandığımız çerez türleri</h2>
      <ul>
        <li>
          <strong>Zorunlu çerezler:</strong> Sitenin temel işlevleri ve güvenliği
          için gereklidir. Bu çerezler olmadan site düzgün çalışmaz ve
          kapatılamaz.
        </li>
        <li>
          <strong>Analitik çerezler:</strong> Ziyaretçilerin siteyi nasıl
          kullandığını anlamamıza yardımcı olur; böylece deneyimi geliştirebiliriz.
          Yalnızca izniniz ile çalışır.
        </li>
        <li>
          <strong>Pazarlama çerezleri:</strong> Size daha alakalı içerik ve
          reklamlar sunmak için kullanılabilir. Yalnızca izniniz ile çalışır.
        </li>
      </ul>

      <h2>Tercihlerinizi yönetme</h2>
      <p>
        Analitik ve pazarlama çerezlerine dair onayınızı istediğiniz zaman
        değiştirebilirsiniz. Tarayıcı ayarlarınızdan da çerezleri silebilir veya
        engelleyebilirsiniz; ancak bu durumda sitenin bazı bölümleri düzgün
        çalışmayabilir.
      </p>
      <p>
        <CookieSettingsLink /> bağlantısına tıklayarak çerez tercihlerinizi
        güncelleyebilirsiniz.
      </p>

      <h2>İletişim</h2>
      <p>
        Çerez kullanımı hakkında sorularınız için{" "}
        <a href="mailto:info@lambolo.com">info@lambolo.com</a> adresinden bize
        ulaşabilirsiniz.
      </p>
    </LegalPage>
  );
}
