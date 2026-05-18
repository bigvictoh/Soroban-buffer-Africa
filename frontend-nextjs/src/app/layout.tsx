import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soroban-Buffar_Africa",
  description: "Empowering African grassroots causes through transparent micro-donations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
