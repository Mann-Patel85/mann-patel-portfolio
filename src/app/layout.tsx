import type { Metadata } from "next";
import "./globals.css";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const { personal, site } = PORTFOLIO_DATA;
const title = `${personal.name} | AI/ML Engineer & Generative AI Developer`;
const description =
  "AI/ML engineering portfolio: agentic GraphRAG on TigerGraph, hierarchical RAG, multi-agent LLM pipelines, and computer-vision applications built with Python, FastAPI and Next.js.";

// The Open Graph image comes from ./opengraph-image.tsx (generated PNG).
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/" },
  keywords: ["AI Engineer", "Machine Learning Engineer", "Generative AI", "LLM", "RAG", "GraphRAG", "Agentic AI", "Computer Vision", personal.name],
  authors: [{ name: personal.name, url: site.url }],
  openGraph: { title, description, type: "website", url: "/" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark antialiased scroll-smooth">
      <body className="min-h-screen bg-[#030611] text-[#f3f4f6] font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
