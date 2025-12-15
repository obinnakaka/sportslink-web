// app/download/page.tsx
"use client";

import React, { useMemo } from "react";
import Link from "next/link";

const SUPPORT_EMAIL = "obinnajunior5@gmail.com";

// ✅ Your APK release link
const APK_URL =
  "https://github.com/obinnakaka/sportslink-web/releases/download/v1.0.1/SportsLink-v1.0.1.apk";

// ✅ Your Android package (from app.json)
const ANDROID_PACKAGE = "com.obinnaokeke.sportslink";

// ✅ Your app scheme (from app.json)
const APP_SCHEME = "sportslinkmobile";

// Android best-practice deep link open (Intent URI)
function buildAndroidIntentUrl() {
  // This will try to open the app; if not installed, Android shows an option / fails gracefully.
  return `intent://open#Intent;scheme=${APP_SCHEME};package=${ANDROID_PACKAGE};end`;
}

export default function DownloadPage() {
  const { isAndroid, isIOS } = useMemo(() => {
    if (typeof navigator === "undefined") return { isAndroid: false, isIOS: false };
    const ua = navigator.userAgent || "";
    return {
      isAndroid: /Android/i.test(ua),
      isIOS: /iPhone|iPad|iPod/i.test(ua),
    };
  }, []);

  const androidOpenUrl = buildAndroidIntentUrl();

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
      {/* Title */}
      <h1 style={{ fontSize: 38, fontWeight: 900, margin: 0 }}>Get SportsLink</h1>

      <p style={{ color: "#9ca3af", marginTop: 10, maxWidth: 820, lineHeight: 1.6 }}>
        Download the official SportsLink Android app below. iOS version coming soon.
      </p>

      {/* Buttons */}
      <div style={{ marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" }}>
        {/* Download APK */}
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

        {/* Open in App */}
        {isAndroid ? (
          <a
            href={androidOpenUrl}
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
        ) : (
          <button
            type="button"
            onClick={() => {
              alert(
                isIOS
                  ? "iPhone note: SportsLink iOS app is not available yet. (TestFlight/App Store coming soon.)"
                  : "Open in App works on Android when the app is installed."
              );
            }}
            style={{
              padding: "14px 18px",
              borderRadius: 999,
              border: "1px solid #334155",
              color: "white",
              fontWeight: 800,
              background: "transparent",
              cursor: "pointer",
            }}
          >
            Open in App
          </button>
        )}

        {/* Privacy / Terms */}
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

      {/* Info box */}
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

        {isAndroid ? (
          <p style={{ color: "#9ca3af", lineHeight: 1.7 }}>
            <strong>Android tip:</strong> After installing, come back here and tap{" "}
            <strong>Open in App</strong>.
          </p>
        ) : isIOS ? (
          <p style={{ color: "#9ca3af", lineHeight: 1.7 }}>
            <strong>iPhone note:</strong> APK files cannot install on iPhone. The iOS build will be
            available via TestFlight/App Store soon.
          </p>
        ) : (
          <p style={{ color: "#9ca3af", lineHeight: 1.7 }}>
            <strong>Desktop note:</strong> APK installs only on Android phones/tablets.
          </p>
        )}

        <p style={{ color: "#9ca3af", lineHeight: 1.7 }}>
          Support:{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: "#22c55e", fontWeight: 800 }}>
            {SUPPORT_EMAIL}
          </a>
        </p>

        <p style={{ color: "#9ca3af", lineHeight: 1.7, marginBottom: 0 }}>
          Version: <strong>v1.0.1</strong>
        </p>
      </div>

      {/* Back */}
      <div style={{ marginTop: 20 }}>
        <Link href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
