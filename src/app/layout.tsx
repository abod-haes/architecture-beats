import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CursorFollower from "@/components/layout/CursorFollower";
import MobileActionBar from "@/components/layout/MobileActionBar";
import LocaleProvider from "@/context/LocaleContext";
import ThemeProvider from "@/context/ThemeContext";
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
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: siteData.company.nameEn }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seo.defaultTitle,
    description: siteData.seo.description,
    images: ["/twitter-image.jpg"],
  },
  icons: {
    icon: "/icon-512.png",
    apple: "/apple-icon-180.png",
    shortcut: "/icon-512.png",
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
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.className} cursor-reactive mobile-safe-bottom bg-[var(--site-bg)] text-[var(--site-text)] antialiased transition-colors duration-300`}>
        <ThemeProvider>
          <LocaleProvider>
            <SmoothScroll>
              <ScrollProgress />
              <CursorFollower />
              <Navbar />
              <main>{children}</main>
              <FloatingWhatsApp />
              <MobileActionBar />
              <Footer />
            </SmoothScroll>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
