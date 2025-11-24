// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Filmes & Séries",
  description: "App simples com filmes usando TMDb API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
