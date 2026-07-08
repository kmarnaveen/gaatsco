import { ImageResponse } from "next/og"

export const alt = "GAATSCO — Accounting. Tax. Advisory."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#00311f",
          color: "#f7f4e8",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 30,
            letterSpacing: "0.04em",
            opacity: 0.9,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              marginRight: 18,
              borderRadius: 8,
              border: "2px solid rgba(247,244,232,0.9)",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            G
          </div>
          GAATSCO
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 132,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
            }}
          >
            GAATSCO
          </div>
          <div
            style={{
              marginTop: 12,
              fontSize: 52,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              opacity: 0.92,
            }}
          >
            Accounting. Tax. Advisory.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 30, opacity: 0.85 }}>
          Compliance, closing, and financial clarity — for India &amp; the USA
        </div>
      </div>
    ),
    { ...size },
  )
}
