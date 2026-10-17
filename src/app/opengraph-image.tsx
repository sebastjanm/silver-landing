import { ImageResponse } from "next/og";

export const alt = "NakupSrebra.com — Brezplačen posvet za naložbe v srebro in zlato";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default OG image built from existing brand text + colour tokens (navy #1a365d, gold #d69e2e). */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #1a365d, #2c5282)",
          color: "white",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 36, color: "#d69e2e", marginBottom: 24 }}>NakupSrebra.com</div>
        <div style={{ fontSize: 68, lineHeight: 1.15, marginBottom: 32 }}>
          Srebro in zlato še nikoli nista izgubila vrednosti.
        </div>
        <div style={{ fontSize: 32, opacity: 0.85 }}>
          Brezplačen posvet · Brez DDV · Švicarska hramba
        </div>
      </div>
    ),
    size
  );
}
