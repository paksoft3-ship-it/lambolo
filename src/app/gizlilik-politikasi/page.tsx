import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Gizlilik Politikası ve KVKK Aydınlatma Metni",
  description:
    "Lambolo kişisel verilerin korunması ve gizlilik politikası (KVKK aydınlatma metni).",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Gizlilik Politikası & KVKK Aydınlatma Metni"
      updated="1 Temmuz 2026"
    >
      <p>
        Lambolo olarak kişisel verilerinizin güvenliğine önem veriyoruz. Bu metin,
        6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
        kapsamında, veri sorumlusu sıfatıyla kişisel verilerinizi nasıl
        işlediğimizi açıklar.
      </p>

      <h2>Hangi verileri topluyoruz?</h2>
      <ul>
        <li>Ad ve soyad</li>
        <li>E-posta adresi</li>
        <li>Telefon numarası (isteğe bağlı)</li>
        <li>
          Bekleme listesi ve iş birliği formlarında paylaştığınız diğer bilgiler
          (ör. çocuğun yaş aralığı, şirket adı, mesaj içeriği)
        </li>
      </ul>

      <h2>Verileri hangi amaçla işliyoruz?</h2>
      <ul>
        <li>Bekleme listesi ve bülten taleplerinizi yönetmek</li>
        <li>Ürün lansmanı ve gelişmeler hakkında sizi bilgilendirmek</li>
        <li>İş birliği başvurularınızı değerlendirmek ve size geri dönmek</li>
        <li>Yasal yükümlülüklerimizi yerine getirmek</li>
      </ul>

      <h2>Verileri kimlerle paylaşıyoruz?</h2>
      <p>
        Verileriniz, yalnızca yukarıdaki amaçlarla sınırlı olarak ve gerekli
        olduğu ölçüde, hizmet aldığımız altyapı ve e-posta sağlayıcıları gibi iş
        ortaklarımızla paylaşılabilir. Verileriniz pazarlama amacıyla üçüncü
        taraflara satılmaz.
      </p>

      <h2>Verilerin saklanma süresi</h2>
      <p>
        Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca ve ilgili
        mevzuatta öngörülen süreler kadar saklanır; sürenin sonunda silinir, yok
        edilir veya anonim hâle getirilir.
      </p>

      <h2>KVKK kapsamındaki haklarınız</h2>
      <p>KVKK&apos;nın 11. maddesi uyarınca şu haklara sahipsiniz:</p>
      <ul>
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme</li>
        <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
        <li>Silinmesini veya yok edilmesini isteme</li>
        <li>İşlemenin sınırlandırılmasını veya itiraz etme</li>
      </ul>

      <h2>İletişim</h2>
      <p>
        Haklarınızı kullanmak veya sorularınız için{" "}
        <a href="mailto:info@lambolo.com">info@lambolo.com</a> adresinden bize
        ulaşabilirsiniz.
      </p>
    </LegalPage>
  );
}
