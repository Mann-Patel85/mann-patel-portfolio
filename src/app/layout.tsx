import type { Metadata } from "next";
import "./globals.css";

// Use system fonts; removed Google Font imports to avoid network fetch issues.

import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const metadata: Metadata = {
  metadataBase: new URL("https://mann-patel-portfolio-dun.vercel.app"),
  title: "Mann Patel | AI/ML Engineer & Generative AI Developer",
  description: "Explore Mann Patel's AI engineering portfolio featuring Agentic AI, GraphRAG, Generative AI, advanced RAG systems, computer vision, and full-stack intelligent applications.",
  alternates: { canonical: "/" },
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Deep Learning",
    "Generative AI",
    "LLM",
    "RAG",
    "Computer Vision",
    "GraphRAG",
    PORTFOLIO_DATA.personal.name,
  ],
  authors: [{ name: PORTFOLIO_DATA.personal.name }],
  openGraph: {
    title: "Mann Patel | AI/ML Engineer & Generative AI Developer",
    description: "Agentic AI, GraphRAG, Generative AI, computer vision, and full-stack intelligent applications.",
    type: "website",
    url: "/",
    images: [{ url: "/opengraph-image.svg", width: 1200, height: 630, alt: "Mann Patel AI engineering portfolio" }],
  },
  twitter: { card: "summary_large_image", title: "Mann Patel | AI/ML Engineer & Generative AI Developer", description: PORTFOLIO_DATA.personal.tagline, images: ["/opengraph-image.svg"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark antialiased scroll-smooth"
    >
      <body className="min-h-screen bg-[#030611] text-[#f3f4f6] font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
