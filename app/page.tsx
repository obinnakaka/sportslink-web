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

      import Link from "next/link";

function GetAppCTA() {
  return (
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

      <a
        href="sportslinkmobile://"
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
      </a>

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
  );
}

export default function Home() {
  return (
    <main>
      {/* keep your existing hero content here */}

      {/* Add this where you want the buttons */}
      <GetAppCTA />
    </main>
  );
}

    >
      <h1 style={{ fontSize: 42, fontWeight: 900 }}>SportsLink</h1>

      <p style={{ marginTop: 12, fontSize: 18, color: "#9ca3af" }}>
        Connecting players, coaches, scouts, and clubs worldwide.
      </p>

      <div style={{ marginTop: 24 }}>
        <a
          href="/download"
          style={{
            padding: "12px 18px",
            backgroundColor: "#22c55e",
            color: "#020617",
            fontWeight: 800,
            borderRadius: 999,
            textDecoration: "none",
          }}
        >
          Download APK
        </a>
      </div>
    </main>
  );
}
