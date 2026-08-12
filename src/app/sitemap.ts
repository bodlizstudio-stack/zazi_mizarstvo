import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { getServicePages } from "@/data/services";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.siteUrl.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = [
    "",
    "/o-nas",
    "/storitve",
    "/projekti",
    "/kako-delamo",
    "/kontakt",
    "/politika-zasebnosti",
    "/piskotki",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = getServicePages().map((s) => ({
    url: `${base}/storitve/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projekti/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
