import "./Pages.css";

export default function SavedJobs() {
  const saved = [
    { title: "Frontend Developer", company: "Google" },
    { title: "React Engineer", company: "Amazon" },
  ];

  return (
    <div className="page">
      <h1>⭐ Saved Jobs</h1>

      {saved.map((job, i) => (
        <div key={i} className="card">
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <button>Apply Now</button>
        </div>
      ))}
    </div>
  );
}