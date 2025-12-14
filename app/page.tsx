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
      }}
    >
      <h1 style={{ fontSize: 42, fontWeight: 900 }}>SportsLink</h1>

      <p style={{ marginTop: 12, fontSize: 18, color: "#9ca3af" }}>
        Connecting players, coaches, scouts, and clubs worldwide.
      </p>

      <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link
          href="/download"
          style={{
            padding: "14px 18px",
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
          href="/open"
          style={{
            padding: "14px 18px",
            borderRadius: 999,
            border: "1px solid #334155",
            color: "white",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          Open in App
        </Link>

        <Link
          href="/download"
          style={{
            padding: "14px 18px",
            borderRadius: 999,
            border: "1px solid #334155",
            color: "white",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          iOS (Coming Soon)
        </Link>
      </div>
    </main>
  );
}
