import { ImageResponse } from "next/og"

import { site } from "@/config/site"

export const alt = "Cauce — outbound workspace for B2B teams"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f1216",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#c8f04b",
              color: "#0f1216",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            C
          </div>
          <div style={{ display: "flex", color: "#f7f6f2", fontSize: 34, fontWeight: 600 }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", color: "#f7f6f2", fontSize: 76, lineHeight: 1.05 }}>
            Find the signal
          </div>
          <div style={{ display: "flex", color: "#c8f04b", fontSize: 76, lineHeight: 1.05 }}>
            before the market does.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", width: 120, height: 6, background: "#c8f04b", borderRadius: 999 }} />
          <div style={{ display: "flex", color: "rgba(247,246,242,0.55)", fontSize: 26 }}>
            {`${site.tagline} · English / Español`}
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
