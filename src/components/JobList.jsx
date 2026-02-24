import { useState, useEffect } from "react";

export default function JobList({ jobs, openDetails, logout }) {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSaved(data);
  }, []);

  const toggleSave = (id) => {
    let updated;

    if (saved.includes(id)) {
      updated = saved.filter((j) => j !== id);
    } else {
      updated = [...saved, id];
    }

    setSaved(updated);
    localStorage.setItem("savedJobs", JSON.stringify(updated));
  };

  return (
    <div className="dashboard">

  {/* HERO HEADER */}
  <div className="hero">
    <h1 className="brand">ElevateJobs</h1>
    <p className="tagline">
      Discover opportunities. Build your future.
    </p>
  </div>
      <header className="dash-header">
        <h1>💼 Job Portal</h1>
        <button onClick={logout}>Logout</button>
      </header>

      <div className="job-grid">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">

            <div className="job-head">
              <h3>{job.title}</h3>
              <span onClick={() => toggleSave(job.id)}>
                {saved.includes(job.id) ? "❤️" : "🤍"}
              </span>
            </div>

            <p>{job.company}</p>
            <p>{job.location}</p>

            <button onClick={() => openDetails(job)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}