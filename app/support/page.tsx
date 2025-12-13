const SUPPORT_EMAIL = "obinnajunior5@gmail.com";
export default function SupportPage() {
  return (
    <div className="card">
      <div className="kicker">Support</div>

      <h1 className="h1" style={{ fontSize: 34 }}>
        Support
      </h1>

      <p className="p">
        For help with login, installation, messaging, or account issues, contact us:
      </p>

      <div className="btnRow">
        <a className="btn btnPrimary" href={`mailto:${SUPPORT_EMAIL}`}>
          Email Support
        </a>

        <a className="btn" href="/privacy">
          Privacy
        </a>
      </div>

      <hr className="hr" />

      <p className="small">
        Please include your device type (Android/iPhone) and a screenshot of the issue.
      </p>
    </div>
  );
}
