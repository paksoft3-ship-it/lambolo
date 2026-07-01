export type NavLink = {
  label: string;
  href: string;
};

/** Section anchors live on the homepage; partnership is its own route. */
export const NAV_LINKS: NavLink[] = [
  { label: "Karakterler", href: "/#karakterler" },
  { label: "Nasıl Çalışır?", href: "/#nasil-calisir" },
  { label: "Neden Lambolo?", href: "/#neden-lambolo" },
  { label: "SSS", href: "/#sss" },
  { label: "Birlikte Büyüyelim", href: "/birlikte-buyuyelim" },
];

export const HEADER_CTA = {
  label: "Bekleme Listesine Katıl",
  href: "/#bekleme-listesi",
};

export const FOOTER_EXPLORE: NavLink[] = [
  { label: "Karakterler", href: "/#karakterler" },
  { label: "Nasıl Çalışır?", href: "/#nasil-calisir" },
  { label: "Neden Lambolo?", href: "/#neden-lambolo" },
  { label: "Merak Ettikleriniz", href: "/#sss" },
  { label: "Birlikte Büyüyelim", href: "/birlikte-buyuyelim" },
];

export const FOOTER_SUPPORT: NavLink[] = [
  { label: "İletişim", href: "mailto:info@lambolo.com" },
  { label: "Gizlilik Politikası", href: "#" },
  { label: "KVKK Aydınlatma Metni", href: "#" },
  { label: "Kullanım Koşulları", href: "#" },
];
