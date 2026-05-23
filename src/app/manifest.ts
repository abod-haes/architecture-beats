import type { MetadataRoute } from "next";
import { siteData } from "@/data/siteData";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteData.company.nameEn,
    short_name: siteData.company.nameEn,
    description: siteData.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: siteData.branding.colors.dark,
    theme_color: siteData.branding.colors.primary,
    lang: "ar",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
