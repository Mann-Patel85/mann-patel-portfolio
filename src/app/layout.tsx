import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.role}`,
  description: PORTFOLIO_DATA.personal.bio,
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Deep Learning",
    "PyTorch",
    "CUDA",
    "LLM",
    "RAG",
    "Computer Vision",
    "TensorRT",
    "Triton Inference Server",
    PORTFOLIO_DATA.personal.name,
  ],
  authors: [{ name: PORTFOLIO_DATA.personal.name }],
  openGraph: {
    title: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.role}`,
    description: PORTFOLIO_DATA.personal.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#030611] text-[#f3f4f6] font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
