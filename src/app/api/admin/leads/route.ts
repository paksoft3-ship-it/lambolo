import { NextResponse } from "next/server";
import { deleteLead, listLeads, type LeadKind } from "@/lib/leads-store";

export const runtime = "nodejs";

const KINDS: LeadKind[] = ["waitlist", "partnership"];

function parseKind(value: string | null): LeadKind | null {
  return KINDS.includes(value as LeadKind) ? (value as LeadKind) : null;
}

export async function GET(request: Request) {
  const kind = parseKind(new URL(request.url).searchParams.get("kind"));
  if (!kind) {
    return NextResponse.json({ ok: false, message: "Geçersiz tür." }, { status: 400 });
  }
  try {
    const rows = await listLeads(kind);
    return NextResponse.json({ ok: true, rows });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Bilinmeyen hata.";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const params = new URL(request.url).searchParams;
  const kind = parseKind(params.get("kind"));
  const id = params.get("id");
  if (!kind || !id) {
    return NextResponse.json(
      { ok: false, message: "kind ve id gerekli." },
      { status: 400 },
    );
  }
  try {
    await deleteLead(kind, id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Bilinmeyen hata.";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
