"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Download, Search, Trash2, Loader2 } from "lucide-react";

/** Column defs are passed from server pages, so they must stay serializable. */
export type Column = {
  key: string;
  label: string;
  type?: "text" | "date" | "bool";
};

type Props = {
  kind: "waitlist" | "partnership";
  columns: Column[];
  rows: Array<Record<string, unknown>>;
  exportName: string;
};

function formatDate(value: unknown): string {
  if (typeof value !== "string") return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(d);
}

function cellText(col: Column, row: Record<string, unknown>): string {
  const raw = row[col.key];
  if (col.type === "date") return formatDate(raw);
  if (col.type === "bool") return raw ? "Evet" : "Hayır";
  if (raw === null || raw === undefined || raw === "") return "—";
  return String(raw);
}

function toCsv(columns: Column[], rows: Array<Record<string, unknown>>): string {
  const esc = (v: string) => `"${v.replace(/"/g, '""')}"`;
  const header = columns.map((c) => esc(c.label)).join(",");
  const body = rows
    .map((row) => columns.map((c) => esc(cellText(c, row))).join(","))
    .join("\n");
  return `${header}\n${body}`;
}

export function LeadsTable({ kind, columns, rows, exportName }: Props) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [deleting, setDeleting] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((row) =>
      columns.some((c) => cellText(c, row).toLowerCase().includes(q)),
    );
  }, [query, rows, columns]);

  function exportCsv() {
    const csv = toCsv(columns, filtered);
    const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${exportName}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function remove(id: string) {
    if (!confirm("Bu kaydı silmek istediğine emin misin?")) return;
    setDeleting(id);
    try {
      const res = await fetch(
        `/api/admin/leads?kind=${kind}&id=${encodeURIComponent(id)}`,
        { method: "DELETE" },
      );
      if (res.ok) router.refresh();
      else alert("Kayıt silinemedi.");
    } finally {
      setDeleting(null);
    }
  }

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative sm:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ara (isim, e-posta…)"
            className="h-11 w-full rounded-input border border-soft-border bg-white pl-9 pr-3 text-sm text-body outline-none focus:border-brand-blue focus-visible:ring-4 focus-visible:ring-brand-blue/20"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted">{filtered.length} kayıt</span>
          <button
            onClick={exportCsv}
            disabled={!filtered.length}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-green px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark disabled:opacity-50"
          >
            <Download className="h-4 w-4" />
            CSV indir
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-card bg-white shadow-soft">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-soft-border text-xs uppercase tracking-wide text-muted">
              {columns.map((c) => (
                <th key={c.key} className="whitespace-nowrap px-4 py-3 font-semibold">
                  {c.label}
                </th>
              ))}
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="px-4 py-10 text-center text-muted"
                >
                  Kayıt bulunamadı.
                </td>
              </tr>
            ) : (
              filtered.map((row) => {
                const id = String(row.id ?? "");
                return (
                  <tr
                    key={id}
                    className="border-b border-soft-border/60 last:border-0 hover:bg-soft-blue/40"
                  >
                    {columns.map((c) => (
                      <td key={c.key} className="px-4 py-3 align-top text-body">
                        {cellText(c, row)}
                      </td>
                    ))}
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => remove(id)}
                        disabled={deleting === id}
                        aria-label="Sil"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-brand-pink/10 hover:text-brand-pink disabled:opacity-50"
                      >
                        {deleting === id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { formatDate };
