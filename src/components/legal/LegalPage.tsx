import { type ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";

type Props = {
  title: string;
  updated: string;
  children: ReactNode;
};

/** Shared shell + prose styling for legal / policy pages. */
export function LegalPage({ title, updated, children }: Props) {
  return (
    <>
      <Header />
      <main className="bg-white py-14 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="font-display text-3xl font-bold text-navy lg:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-sm text-muted">Son güncelleme: {updated}</p>
            <div className="legal-prose mt-8 text-[15px] leading-relaxed text-body">
              {children}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
