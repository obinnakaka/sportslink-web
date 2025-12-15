"use client";

import Link from "next/link";
import { useMemo } from "react";

export default function OpenPage() {
  const { isAndroid, isiOS } = useMemo(() => {
    const ua = typeof navigator !== "undefined" ? navigator.userAgent || "" : "";
    return {
      isAndroid: /Android/i.test(ua),
      isiOS: /iPhone|iPad|iPod/i.test(ua),
    };
  }, []);

  // Your app.json scheme
  const IOS_SCHEME = "sportslinkmobile://open";

  // More reliable on Android Chrome
  const ANDROID_INTENT =
    "intent://open#Intent;scheme=sportslinkmobile;package=com.obinnaokeke.sportslink;end";

  // IMPORTANT: Use <a href> for deep links (not <Link>)
  const openHref = isAndroid ? ANDROID_INTENT : IOS_SCHEME;

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
      <h1 style={{ fontSize: 38, fontWeight: 900 }}>Open in App</h1>

      <p style={{ color: "#9ca3af", marginTop: 10, lineHeight: 1.7, maxWidth: 820 }}>
        Tap the button below to open the SportsLink app. If nothing happens, the app
        may not be installed on this device.
      </p>

      <div style={{ marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a
          href={openHref}
          style={{
            padding: "14px 18px",
            borderRadius: 999,
            background: "#22c55e",
            color: "#020617",
            fontWeight: 900,
            textDecoration: "none",
          }}
        >
          Open SportsLink App
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
          Download Android APK
        </Link>

        <Link
          href="/"
          style={{
            padding: "14px 18px",
            borderRadius: 999,
            border: "1px solid #334155",
            color: "white",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          Back to Home
        </Link>
      </div>

      <div
        style={{
          marginTop: 24,
          maxWidth: 820,
          border: "1px solid #1f2937",
          borderRadius: 16,
          padding: 16,
          background: "rgba(255,255,255,0.02)",
        }}
      >
        {isiOS ? (
          <p style={{ color: "#9ca3af", lineHeight: 1.7, margin: 0 }}>
            <b>iPhone note:</b> Deep links work only if the iOS app is installed
            (TestFlight/App Store). Android APK cannot open on iPhone.
          </p>
        ) : isAndroid ? (
          <p style={{ color: "#9ca3af", lineHeight: 1.7, margin: 0 }}>
            <b>Android note:</b> If the app is installed and the button still does nothing,
            try again using Chrome, and ensure you installed the APK version with package{" "}
            <code style={{ color: "#e5e7eb" }}>com.obinnaokeke.sportslink</code>.
          </p>
        ) : (
          <p style={{ color: "#9ca3af", lineHeight: 1.7, margin: 0 }}>
            <b>Desktop note:</b> “Open in App” works on mobile devices only.
          </p>
        )}
      </div>
    </main>
  );
}
