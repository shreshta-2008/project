import "./Pages.css";

export default function Profile() {
  return (
    <div className="page">
      <h1>👤 Profile</h1>

      <div className="card">
        <p><strong>Name:</strong> Demo User</p>
        <p><strong>Email:</strong> demo@careerpulse.com</p>
        <p><strong>Skills:</strong> React, Java, SQL</p>

        <button>Edit Profile</button>
      </div>
    </div>
  );
}