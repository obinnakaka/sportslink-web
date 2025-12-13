const PRIVACY_URL = "https://sites.google.com/view/sportslink-privacy/home";

export default function PrivacyPage() {
  return (
    <div className="card">
      <div className="kicker">Privacy</div>

      <h1 className="h1" style={{ fontSize: 34 }}>
        Privacy Policy
      </h1>

      <p className="p">
        SportsLink is committed to protecting your privacy.
      </p>

      <p className="p">
        Please read our full Privacy Policy using the button below.
      </p>

      <div className="btnRow">
        <a
          className="btn btnPrimary"
          href={PRIVACY_URL}
          target="_blank"
          rel="noreferrer"
        >
          Open Privacy Policy
        </a>
      </div>

      <hr className="hr" />

      <p className="small">
        This policy explains how we collect, use, and protect your data when you
        use the SportsLink app and website.
      </p>
    </div>
  );
}
