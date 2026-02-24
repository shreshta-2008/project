import { useState } from "react";

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    darkMode: false,
    publicProfile: true,
    language: "English"
  });

  const toggle = (key) => setSettings({ ...settings, [key]: !settings[key] });

  return (
    <div className="page">
      <h1>⚙ Settings</h1>
      
      <section className="card">
        <h3>Notifications</h3>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>Email alerts for new jobs</span>
          <input type="checkbox" checked={settings.emailNotifications} onChange={() => toggle('emailNotifications')} />
        </div>
      </section>

      <section className="card">
        <h3>Privacy & Security</h3>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
          <span>Public Profile Visibility</span>
          <button onClick={() => toggle('publicProfile')} style={{ background: settings.publicProfile ? "#10b981" : "#ef4444" }}>
            {settings.publicProfile ? "Public" : "Private"}
          </button>
        </div>
        <button style={{ background: "#374151" }}>Change Password</button>
      </section>

      <section className="card">
        <h3>Preferences</h3>
        <label>Display Language</label>
        <select value={settings.language} onChange={(e) => setSettings({...settings, language: e.target.value})} 
                style={{ width: "100%", padding: "10px", marginTop: "10px", borderRadius: "8px" }}>
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
        </select>
      </section>

      <button style={{ background: "#ef4444", marginTop: "40px" }}>Delete Account</button>
    </div>
  );
}