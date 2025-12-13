import "./globals.css";

export const metadata = {
  title: "SportsLink",
  description: "Connect athletes, coaches, scouts, and clubs worldwide.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <a className="brand" href="/">SportsLink</a>

          <nav className="nav">
            <a href="/download">Download</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/delete-account">Delete</a>
            <a href="/support">Support</a>
          </nav>
        </header>

        <main className="main">{children}</main>

        <footer className="footer">
          <span>© {new Date().getFullYear()} SportsLink</span>
          <span>•</span>
          <a href="/privacy">Privacy</a>
          <span>•</span>
          <a href="/terms">Terms</a>
          <span>•</span>
          <a href="/support">Support</a>
        </footer>
      </body>
    </html>
  );
}
