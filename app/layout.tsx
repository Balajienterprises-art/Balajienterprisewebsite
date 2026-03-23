import type { Metadata } from "next";
import { Inter, Arvo, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const arvo = Arvo({
  variable: "--font-arvo",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Balaji Enterprise | #1 Industrial Electrical Supplier — Surat, Gujarat",
  description:
    "Leading industrial electrical distributor in Kamrej, Surat. We supply premium PVC Tapes, HT Rubber Tapes, Bare Copper Wire, and Brass Hardware. Quality assured for Gujarat's top electrical projects and winding industries.",
  keywords:
    "electrical supplier Surat, Kamrej electrical distributor, PVC insulation tape Surat, copper wire supplier Gujarat, brass hardware Surat, industrial procurement Surat, electrical winding material Gujarat, high tension rubber tape Surat",
  openGraph: {
    title: "Balaji Enterprise | Surat's Trusted Industrial Supplier",
    description: "Quality sourcing for industrial electrical components. Based in Surat, Gujarat.",
    type: "website",
  },
};

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { MobileDock } from "./components/MobileDock";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${arvo.variable} ${geistMono.variable}`} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="w-full overflow-x-hidden min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
        <MobileDock />
      </body>
    </html>
  );
}
