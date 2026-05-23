import type { MetadataRoute } from "next";
import { siteData } from "@/data/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["/", "/about", "/services", "/projects", "/contact"];

  return routes.map((route) => ({
    url: `${siteData.seo.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
