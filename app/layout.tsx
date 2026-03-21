import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Balaji Enterprise | Electrical & Electronics Supplier — Surat, Gujarat",
  description:
    "Balaji Enterprise supplies PVC Insulation Tape, HT Rubber Tape, Bare Copper Wire, Super Enameled Wire, Brass Hardware and more. Based in Kamrej, Surat — serving businesses across Gujarat.",
  keywords:
    "electrical supplier Surat, PVC insulation tape, HT rubber EPR tape, bare copper wire, enameled wire, brass nut bolt, electronics trader Gujarat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
