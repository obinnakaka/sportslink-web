const APK_URL = "https://github.com/obinnakaka/sportslink-web/releases/download/v1.0.1/application-6732d6d9-3ae1-4512-8af9-279897b723a2.apk";
const IOS_STATUS = "iOS version coming soon.";

export default function DownloadPage() {
  return (
    <div className="card">
      <div className="kicker">Download</div>

      <h1 className="h1" style={{ fontSize: 34 }}>
        Get SportsLink
      </h1>

      <p className="p">
        Download SportsLink for Android below. {IOS_STATUS}
      </p>

      <div className="btnRow">
        <a
          className="btn btnPrimary"
          href={APK_URL}
          target="_blank"
          rel="noreferrer"
        >
          Download Android APK
        </a>

        <a className="btn" href="/support">
          Need help?
        </a>
      </div>

      <hr className="hr" />

      <p className="small">
        <b>Android install note:</b> If installation is blocked, enable
        <i> “Install unknown apps”</i> for your browser or file manager.
      </p>
    </div>
  );
}
