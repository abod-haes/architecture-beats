import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { siteData } from "@/data/siteData";

const cairo = Cairo({ subsets: ["arabic", "latin"], weight: ["400", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteData.seo.siteUrl),
  title: {
    default: siteData.seo.defaultTitle,
    template: siteData.seo.titleTemplate,
  },
  description: siteData.seo.description,
  keywords: siteData.seo.keywords,
  category: "architecture",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_SY",
    siteName: siteData.company.nameEn,
    title: siteData.seo.defaultTitle,
    description: siteData.seo.description,
    url: siteData.seo.siteUrl,
    images: [{ url: "/opengraph-image.png", width: 1536, height: 1024, alt: siteData.company.nameEn }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seo.defaultTitle,
    description: siteData.seo.description,
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/icon.png",
  },
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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} bg-brand-dark text-zinc-100 antialiased`}>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <FloatingWhatsApp />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
