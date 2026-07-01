"use client";

import { useId, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().trim().email();

type Status = "idle" | "loading" | "success" | "error";

/** Footer email-capture. Reuses the waitlist API with source "footer". */
export function NewsletterForm() {
  const uid = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!emailSchema.safeParse(email).success) {
      setStatus("error");
      setMessage("Geçerli bir e-posta adresi gir.");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Bülten Aboneliği", email, source: "footer" }),
      });
      const data = (await res.json()) as { ok: boolean; message?: string };
      if (res.ok && data.ok) {
        setStatus("success");
        setMessage("Teşekkürler! Seni haberdar edeceğiz.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message ?? "Bir hata oluştu.");
      }
    } catch {
      setStatus("error");
      setMessage("Bağlantı hatası. Tekrar dene.");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2">
      <label htmlFor={`${uid}-news`} className="sr-only">
        E-posta adresiniz
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id={`${uid}-news`}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="E-posta adresiniz"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={status === "error" ? true : undefined}
          aria-describedby={message ? `${uid}-news-msg` : undefined}
          className="h-12 flex-1 rounded-input border border-white/25 bg-white/15 px-4 text-[15px] text-white placeholder:text-white/70 outline-none transition focus:border-white focus:bg-white/25 focus-visible:ring-4 focus-visible:ring-white/30"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 font-display font-bold text-navy transition-all hover:brightness-95 hover:-translate-y-0.5 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
        >
          {status === "loading" ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              Abone Ol
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      {message && (
        <p
          id={`${uid}-news-msg`}
          role={status === "error" ? "alert" : "status"}
          className={`text-xs font-semibold ${status === "success" ? "text-brand-green-soft" : "text-brand-yellow"}`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
