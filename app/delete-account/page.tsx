export default function DeleteAccountPage() {
  return (
    <div className="card">
      <div className="kicker">Account</div>

      <h1 className="h1" style={{ fontSize: 34 }}>
        Delete Account
      </h1>

      <p className="p">
        You can delete your SportsLink account inside the app at any time.
      </p>

      <hr className="hr" />

      <ol className="list">
        <li>Open the SportsLink app</li>
        <li>Go to <b>Profile</b></li>
        <li>Tap <b>Delete Account</b></li>
        <li>Confirm deletion</li>
      </ol>

      <p className="small" style={{ marginTop: 12 }}>
        <b>Important:</b> Deletion is permanent and cannot be undone.
      </p>
    </div>
  );
}
