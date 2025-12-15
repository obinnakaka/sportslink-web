// app/download/page.tsx
import Link from "next/link";

const SUPPORT_EMAIL = "obinnajunior5@gmail.com";
const APK_URL =
  "https://github.com/obinnakaka/sportslink-web/releases/download/v1.0.1/SportsLink-v1.0.1.apk";

export default function DownloadPage() {
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
      <h1 style={{ fontSize: 38, fontWeight: 900, margin: 0 }}>
        Download PlayrLink
      </h1>

      <p style={{ color: "#9ca3af", marginTop: 10, maxWidth: 820, lineHeight: 1.6 }}>
        Get the official PlayrLink Android app. iOS version coming soon.
      </p>

      <div style={{ marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a
          href={APK_URL}
          target="_blank"
          rel="noreferrer"
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
        </a>

        <Link
          href="/privacy"
          style={{
            padding: "14px 18px",
            borderRadius: 999,
            border: "1px solid #334155",
            color: "white",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          Privacy Policy
        </Link>

        <Link
          href="/terms"
          style={{
            padding: "14px 18px",
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

      <div
        style={{
          marginTop: 24,
          maxWidth: 860,
          border: "1px solid #1f2937",
          borderRadius: 16,
          padding: 16,
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <p style={{ color: "#9ca3af", lineHeight: 1.7, marginTop: 0 }}>
          <strong>Android install note:</strong> If installation is blocked, enable{" "}
          <em>“Install unknown apps”</em> for your browser or file manager.
        </p>

        <p style={{ color: "#9ca3af", lineHeight: 1.7 }}>
          Support:{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            style={{ color: "#22c55e", fontWeight: 800 }}
          >
            {SUPPORT_EMAIL}
          </a>
        </p>

        <p style={{ color: "#9ca3af", lineHeight: 1.7, marginBottom: 0 }}>
          Version: <strong>v1.0.1</strong>
        </p>
      </div>

      <div style={{ marginTop: 20 }}>
        <Link href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
