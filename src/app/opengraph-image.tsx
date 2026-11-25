import { ImageResponse } from "next/og";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

// PNG link preview (LinkedIn, X, WhatsApp don't render SVG previews).
export const alt = `${PORTFOLIO_DATA.personal.name} — AI/ML Engineer portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const { personal, projects } = PORTFOLIO_DATA;
  const featured = projects.filter((p) => p.featured).map((p) => p.title);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "radial-gradient(ellipse at top left, #1e1b4b 0%, #030611 60%)",
          color: "#f3f4f6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#22d3ee" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#34d399" }} />
          {personal.statusBadge}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -2 }}>{personal.name}</div>
          <div style={{ fontSize: 40, color: "#a5b4fc", marginTop: 8 }}>{personal.role}</div>
          <div style={{ fontSize: 28, color: "#a1a1aa", marginTop: 28, maxWidth: 980 }}>{personal.headline}</div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {featured.map((title) => (
            <div
              key={title}
              style={{
                display: "flex",
                fontSize: 24,
                padding: "10px 20px",
                borderRadius: 12,
                border: "1px solid rgba(34,211,238,0.35)",
                background: "rgba(34,211,238,0.08)",
                color: "#cffafe",
              }}
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
