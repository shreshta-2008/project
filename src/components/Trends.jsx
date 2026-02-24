export default function Trends({ back }) {
  return (
    <div className="dashboard">
      <h2 className="welcome-title">CareerPulse 📈</h2>
      <p className="welcome-sub">Live job market insights & trending skills</p>

      <div className="trend-grid">
        <div className="trend-card">
          <h3>AI Engineer</h3>
          <p>Growth: +45%</p>
          <p>Salary: ₹10–22 LPA</p>
        </div>

        <div className="trend-card">
          <h3>Cloud Engineer</h3>
          <p>Growth: +35%</p>
          <p>Salary: ₹8–18 LPA</p>
        </div>

        <div className="trend-card">
          <h3>Frontend Dev</h3>
          <p>Growth: +28%</p>
          <p>Salary: ₹6–12 LPA</p>
        </div>

        <div className="trend-card">
          <h3>Full Stack Dev</h3>
          <p>Growth: +30%</p>
          <p>Salary: ₹7–15 LPA</p>
        </div>
      </div>

      <button style={{ marginTop: "25px" }} onClick={back}>
        ← Back to Jobs
      </button>
    </div>
  );
}