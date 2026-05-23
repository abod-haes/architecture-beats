import type { Metadata } from "next";
import { siteData } from "@/data/siteData";

export function buildPageMetadata(title: string, description: string, path: string): Metadata {
  const url = new URL(path, siteData.seo.siteUrl).toString();

  return {
    title,
    description,
    keywords: siteData.seo.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "ar_SY",
      url,
      siteName: siteData.company.nameEn,
      title,
      description,
      images: [
        {
          url: "/logo.png",
          width: 1536,
          height: 1024,
          alt: siteData.company.nameEn,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"],
    },
  };
}
