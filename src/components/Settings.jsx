import "./Pages.css";

export default function Settings() {
  return (
    <div className="page">
      <h1>⚙ Settings</h1>

      <div className="card">
        <button>Change Password</button>
        <button>Dark Mode</button>
        <button>Logout</button>
      </div>
    </div>
  );
}