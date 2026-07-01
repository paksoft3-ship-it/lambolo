import { listLeads } from "@/lib/leads-store";
import { LeadsTable, type Column } from "@/components/admin/LeadsTable";

export const dynamic = "force-dynamic";

const COLUMNS: Column[] = [
  { key: "name", label: "İsim" },
  { key: "email", label: "E-posta" },
  { key: "phone", label: "Telefon" },
  { key: "age_range", label: "Yaş" },
  { key: "source", label: "Kaynak" },
  { key: "consent", label: "İzin", type: "bool" },
  { key: "created_at", label: "Tarih", type: "date" },
];

export default async function WaitlistPage() {
  let rows: Array<Record<string, unknown>> = [];
  let error: string | null = null;
  try {
    rows = await listLeads("waitlist");
  } catch (err) {
    error = err instanceof Error ? err.message : "Kayıtlar yüklenemedi.";
  }

  return (
    <div>
      <h1 className="mb-1 font-display text-2xl font-bold text-navy">
        Bekleme Listesi
      </h1>
      <p className="mb-6 text-sm text-muted">
        Bekleme listesi ve bülten (footer) kayıtları.
      </p>

      {error ? (
        <div className="rounded-card border border-brand-pink/30 bg-brand-pink/10 p-4 text-sm text-navy">
          {error}
        </div>
      ) : (
        <LeadsTable
          kind="waitlist"
          columns={COLUMNS}
          rows={rows}
          exportName="lambolo-bekleme-listesi"
        />
      )}
    </div>
  );
}
