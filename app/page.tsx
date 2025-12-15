// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#020617",
        color: "white",
        padding: "40px",
        fontFamily: "system-ui, sans-serif",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: 980, width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <div style={{ fontWeight: 900, fontSize: 22 }}>PlayrLink</div>
          <Link
            href="/download"
            style={{ color: "#cbd5e1", textDecoration: "none" }}
          >
            Download
          </Link>
        </div>

        <h1 style={{ fontSize: 72, fontWeight: 950, margin: 0, letterSpacing: -1 }}>
          PlayrLink
        </h1>

        <p style={{ color: "#94a3b8", marginTop: 10, fontSize: 20, fontWeight: 800 }}>
          Athlete Network
        </p>

        <p style={{ color: "#94a3b8", marginTop: 14, fontSize: 20, lineHeight: 1.6 }}>
          Connecting players, coaches, scouts, and clubs worldwide.
        </p>

        <div style={{ marginTop: 26, display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link
            href="/download"
            style={{
              padding: "14px 20px",
              borderRadius: 999,
              background: "#22c55e",
              color: "#020617",
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            Download Android APK
          </Link>

          <Link
            href="/download"
            style={{
              padding: "14px 20px",
              borderRadius: 999,
              border: "1px solid #334155",
              color: "white",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            iOS (Coming Soon)
          </Link>

          <Link
            href="/privacy"
            style={{
              padding: "14px 20px",
              borderRadius: 999,
              border: "1px solid #334155",
              color: "white",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Privacy
          </Link>

          <Link
            href="/terms"
            style={{
              padding: "14px 20px",
              borderRadius: 999,
              border: "1px solid #334155",
              color: "white",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Terms
          </Link>
        </div>
      </div>
    </main>
  );
}
