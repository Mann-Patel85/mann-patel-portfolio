import type { MetadataRoute } from "next";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const siteUrl = "https://mann-patel-portfolio-dun.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    ...PORTFOLIO_DATA.projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: project.slug === "graphscout" ? 0.9 : 0.7,
    })),
  ];
}
