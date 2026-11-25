import type { MetadataRoute } from "next";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function sitemap(): MetadataRoute.Sitemap {
  const { url } = PORTFOLIO_DATA.site;
  return [
    { url, changeFrequency: "monthly", priority: 1 },
    ...PORTFOLIO_DATA.projects.map((project) => ({
      url: `${url}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: project.featured ? 0.9 : 0.7,
    })),
  ];
}
