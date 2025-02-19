import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SafeLink - Msuic",
  description: "Baixe músicas do YouTube de forma segura e rápida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
