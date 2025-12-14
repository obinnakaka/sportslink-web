"use client";

import { useEffect } from "react";

export default function OpenPage() {
  useEffect(() => {
    const ua = navigator.userAgent || "";
    const isAndroid = /Android/i.test(ua);
    const isiOS = /iPhone|iPad|iPod/i.test(ua);

    const iosSchemeUrl = "sportslinkmobile://open";
    const androidIntentUrl =
      "intent://open#Intent;scheme=sportslinkmobile;package=com.obinnaokeke.sportslink;end";

    const fallbackUrl = "/download";

    if (isAndroid) {
      window.location.href = androidIntentUrl;
    } else if (isiOS) {
      window.location.href = iosSchemeUrl;
    } else {
      window.location.href = fallbackUrl;
      return;
    }

    const t = setTimeout(() => {
      window.location.href = fallbackUrl;
    }, 1200);

    return () => clearTimeout(t);
  }, []);

  return (
    <main style={{ minHeight: "60vh", padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 800 }}>Opening SportsLink…</h1>
      <p style={{ opacity: 0.7, marginTop: 8 }}>
        If the app isn’t installed, you’ll be redirected to download.
      </p>
    </main>
  );
}
