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
