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
  title: siteData.seo.defaultTitle,
  description: siteData.seo.description,
  keywords: siteData.seo.keywords,
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
