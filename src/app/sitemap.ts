import { MetadataRoute } from "next";
import { SERVICES_DATA } from "@/data/clinicData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kristaldentale.com.ng";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
