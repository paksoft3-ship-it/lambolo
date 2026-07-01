"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, Lock } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/admin";

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = (await res.json()) as { ok: boolean; message?: string };
      if (res.ok && data.ok) {
        router.replace(next.startsWith("/admin") ? next : "/admin");
        router.refresh();
      } else {
        setError(data.message ?? "Giriş başarısız.");
      }
    } catch {
      setError("Bağlantı hatası. Tekrar dene.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm rounded-card bg-white p-8 shadow-soft-lg"
    >
      <div className="mb-6 flex flex-col items-center text-center">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
          <Lock className="h-6 w-6" />
        </div>
        <h1 className="font-display text-xl font-bold text-navy">Lambolo Yönetim</h1>
        <p className="mt-1 text-sm text-muted">Devam etmek için giriş yap.</p>
      </div>

      <label htmlFor="admin-pw" className="mb-1.5 block text-sm font-semibold text-navy">
        Şifre
      </label>
      <input
        id="admin-pw"
        type="password"
        autoComplete="current-password"
        autoFocus
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="h-12 w-full rounded-input border border-soft-border bg-white px-4 text-[15px] text-body outline-none transition focus:border-brand-blue focus-visible:ring-4 focus-visible:ring-brand-blue/30"
      />

      {error && (
        <p role="alert" className="mt-3 text-sm font-semibold text-brand-pink">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading || !password}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-blue font-display font-bold text-white transition-all hover:bg-brand-blue-dark disabled:opacity-60"
      >
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Giriş Yap"}
      </button>
    </form>
  );
}

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-soft-blue px-4">
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
