// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlayrLink – Athlete Network",
  description:
    "PlayrLink is an athlete networking platform connecting players, coaches, scouts, and clubs worldwide.",
  applicationName: "PlayrLink",
  keywords: [
    "PlayrLink",
    "Athlete Network",
    "football",
    "soccer",
    "players",
    "coaches",
    "scouts",
    "clubs",
    "recruitment",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
