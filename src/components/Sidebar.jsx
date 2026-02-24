export default function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2 className="logo">CareerPulse</h2>

      <button onClick={() => setPage("jobs")}>Browse Jobs</button>
      <button onClick={() => setPage("saved")}>Saved Items</button>
      <button onClick={() => setPage("applied")}>Applied Jobs</button>
      <button onClick={() => setPage("trends")}>Job Trends</button>
      <button onClick={() => setPage("profile")}>Profile</button>
      <button onClick={() => setPage("settings")}>Settings</button>

      <button className="logout" onClick={() => setPage("login")}>
        Logout
      </button>
    </div>
  );
}