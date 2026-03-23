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
  metadataBase: new URL("https://balajienterprise.com"),
  title: {
    default: "Balaji Enterprise | #1 Industrial Electrical Supplier — Surat, Gujarat",
    template: "%s | Balaji Enterprise Surat",
  },
  description:
    "Leading industrial electrical distributor in Kamrej, Surat. We supply premium PVC Tapes, HT Rubber Tapes, Bare Copper Wire, and Brass Hardware. Quality assured for Gujarat's top electrical projects and winding industries.",
  keywords: [
    "electrical supplier Surat",
    "Kamrej electrical distributor",
    "PVC insulation tape Surat",
    "copper wire supplier Gujarat",
    "brass hardware Surat",
    "industrial procurement Surat",
    "electrical winding material Gujarat",
    "high tension rubber tape Surat",
    "Steelgrip tape Surat",
    "copper wire price Surat",
  ],
  authors: [{ name: "Balaji Enterprise" }],
  creator: "Balaji Enterprise",
  publisher: "Balaji Enterprise",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Balaji Enterprise | Surat's Trusted Industrial Supplier",
    description: "Quality sourcing for industrial electrical components. Based in Surat, Gujarat.",
    url: "https://balajienterprise.com",
    siteName: "Balaji Enterprise",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Balaji Enterprise | Industrial Electrical Supplier Surat",
    description: "Quality sourcing for industrial electrical components. Based in Surat, Gujarat.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  themeColor: "#0F3D81",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "5wNlo0lEIEujLJM2GZuTLa8VfUKmfNiwHiHB3Gk6YHY",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Balaji Enterprise",
    "image": "https://balajienterprise.com/hero_final.png",
    "@id": "https://balajienterprise.com",
    "url": "https://balajienterprise.com",
    "telephone": "+917698787886",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 185, Swarna Bhumi Soc., Kamrej",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "394180",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.2721, // Approximate Kamrej coordinates
      "longitude": 72.9494
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://wa.me/917698787886"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${arvo.variable} ${geistMono.variable}`} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="w-full overflow-x-hidden min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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

