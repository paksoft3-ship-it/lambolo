import { listLeads } from "@/lib/leads-store";
import { LeadsTable, type Column } from "@/components/admin/LeadsTable";

export const dynamic = "force-dynamic";

const COLUMNS: Column[] = [
  { key: "name", label: "İsim" },
  { key: "company", label: "Şirket" },
  { key: "email", label: "E-posta" },
  { key: "phone", label: "Telefon" },
  { key: "type", label: "Tür" },
  { key: "message", label: "Mesaj" },
  { key: "created_at", label: "Tarih", type: "date" },
];

export default async function PartnershipPage() {
  let rows: Array<Record<string, unknown>> = [];
  let error: string | null = null;
  try {
    rows = await listLeads("partnership");
  } catch (err) {
    error = err instanceof Error ? err.message : "Kayıtlar yüklenemedi.";
  }

  return (
    <div>
      <h1 className="mb-1 font-display text-2xl font-bold text-navy">
        İş Birliği Başvuruları
      </h1>
      <p className="mb-6 text-sm text-muted">
        &quot;Birlikte Büyüyelim&quot; sayfasından gelen başvurular.
      </p>

      {error ? (
        <div className="rounded-card border border-brand-pink/30 bg-brand-pink/10 p-4 text-sm text-navy">
          {error}
        </div>
      ) : (
        <LeadsTable
          kind="partnership"
          columns={COLUMNS}
          rows={rows}
          exportName="lambolo-is-birligi-basvurulari"
        />
      )}
    </div>
  );
}
