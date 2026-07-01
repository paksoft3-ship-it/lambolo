import Link from "next/link";
import { Users, Handshake, AlertTriangle, ArrowRight } from "lucide-react";
import { listLeads, storageMode, type LeadRow } from "@/lib/leads-store";

export const dynamic = "force-dynamic";

async function safeCount(kind: "waitlist" | "partnership"): Promise<{
  count: number | null;
  latest: LeadRow | null;
}> {
  try {
    const rows = await listLeads(kind);
    return { count: rows.length, latest: rows[0] ?? null };
  } catch {
    return { count: null, latest: null };
  }
}

function StorageBanner() {
  const mode = storageMode();
  if (mode === "supabase") return null;

  const isMock = mode === "mock";
  return (
    <div
      className={`mb-6 flex items-start gap-3 rounded-card border p-4 text-sm ${
        isMock
          ? "border-brand-orange/30 bg-brand-orange/10 text-navy"
          : "border-brand-pink/30 bg-brand-pink/10 text-navy"
      }`}
    >
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
      <div>
        {isMock ? (
          <p>
            <strong>Geliştirme modu (geçici bellek):</strong> Kayıtlar yalnızca
            sunucu belleğinde tutulur ve yeniden başlatıldığında silinir. Kalıcı
            saklama için Supabase ortam değişkenlerini tanımlayın.
          </p>
        ) : (
          <p>
            <strong>Depolama yapılandırılmadı:</strong> Formlar şu an
            kaydedilmiyor. Lütfen sunucuda Supabase ortam değişkenlerini ayarlayın.
          </p>
        )}
      </div>
    </div>
  );
}

const CARDS = [
  {
    kind: "waitlist" as const,
    href: "/admin/waitlist",
    label: "Bekleme Listesi",
    Icon: Users,
    accent: "bg-brand-blue/10 text-brand-blue",
  },
  {
    kind: "partnership" as const,
    href: "/admin/partnership",
    label: "İş Birliği Başvuruları",
    Icon: Handshake,
    accent: "bg-brand-pink/10 text-brand-pink",
  },
];

export default async function AdminDashboard() {
  const stats = Object.fromEntries(
    await Promise.all(
      CARDS.map(async (c) => [c.kind, await safeCount(c.kind)] as const),
    ),
  );

  return (
    <div>
      <h1 className="mb-1 font-display text-2xl font-bold text-navy">Genel Bakış</h1>
      <p className="mb-6 text-sm text-muted">Form kayıtlarının özeti.</p>

      <StorageBanner />

      <div className="grid gap-4 sm:grid-cols-2">
        {CARDS.map(({ kind, href, label, Icon, accent }) => {
          const s = stats[kind];
          return (
            <Link
              key={kind}
              href={href}
              className="group rounded-card bg-white p-6 shadow-soft transition-shadow hover:shadow-soft-lg"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${accent}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <ArrowRight className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1" />
              </div>
              <p className="mt-4 text-3xl font-bold text-navy">
                {s.count === null ? "—" : s.count}
              </p>
              <p className="text-sm font-semibold text-muted">{label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
