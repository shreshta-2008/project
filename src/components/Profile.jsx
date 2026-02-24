import { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "demo@careerpulse.com",
    bio: "Passionate Full Stack Developer",
    skills: "React, Node.js, CSS"
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile Updated!");
  };

  return (
    <div className="card" style={{ maxWidth: "600px", margin: "20px auto" }}>
      <h2>👤 My Profile</h2>
      <div className="field">
        <label>Full Name</label>
        {isEditing ? (
          <input value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} />
        ) : <p><b>{user.name}</b></p>}
      </div>

      <div className="field">
        <label>Bio</label>
        {isEditing ? (
          <textarea value={user.bio} onChange={(e) => setUser({...user, bio: e.target.value})} />
        ) : <p>{user.bio}</p>}
      </div>

      <button onClick={() => isEditing ? handleSave() : setIsEditing(true)}>
        {isEditing ? "Save Profile" : "Edit Profile"}
      </button>
    </div>
  );
}