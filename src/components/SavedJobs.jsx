import { useState, useEffect } from "react";
import { jobs as allJobs } from "../data/jobs";

export default function SavedJobs({ openDetails }) {
  const [savedIds, setSavedIds] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedIds(data);
  }, []);

  const savedJobs = allJobs.filter(job => savedIds.includes(job.id));

  return (
    <div className="page">
      <h1>⭐ Saved Jobs</h1>
      <div className="job-grid">
        {savedJobs.length > 0 ? (
          savedJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <button onClick={() => openDetails(job)}>View & Apply</button>
            </div>
          ))
        ) : (
          <p>No saved jobs yet.</p>
        )}
      </div>
    </div>
  );
}