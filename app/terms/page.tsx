export default function TermsPage() {
  return (
    <div className="card">
      <div className="kicker">Legal</div>

      <h1 className="h1" style={{ fontSize: 34 }}>
        Terms of Service
      </h1>

      <p className="p">
        By using SportsLink, you agree to these Terms. If you do not agree, do not use the app.
      </p>

      <hr className="hr" />

      <h2 style={{ margin: "0 0 8px" }}>1. Use of the Service</h2>
      <p className="small">
        SportsLink provides profile, discovery, and messaging features for sports networking. You
        agree to use the service lawfully and responsibly.
      </p>

      <h2 style={{ margin: "16px 0 8px" }}>2. Accounts & Content</h2>
      <p className="small">
        You are responsible for your account activity and the content you post. Do not post illegal,
        harmful, or infringing content. We may remove content or restrict accounts that violate rules.
      </p>

      <h2 style={{ margin: "16px 0 8px" }}>3. Messaging</h2>
      <p className="small">
        Messaging is provided to connect users. You agree not to harass, spam, or abuse other users.
      </p>

      <h2 style={{ margin: "16px 0 8px" }}>4. Termination</h2>
      <p className="small">
        We may suspend or terminate access if we believe you violated these Terms. You can delete your
        account anytime from the app.
      </p>

      <h2 style={{ margin: "16px 0 8px" }}>5. Disclaimer</h2>
      <p className="small">
        The service is provided “as is” without warranties. SportsLink is not responsible for
        agreements made between users outside the platform.
      </p>

      <h2 style={{ margin: "16px 0 8px" }}>6. Changes</h2>
      <p className="small">
        We may update these Terms from time to time. Continued use means you accept updated Terms.
      </p>

      <p className="small" style={{ marginTop: 16 }}>
        For questions, contact Support.
      </p>
    </div>
  );
}
