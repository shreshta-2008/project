import "./Pages.css";

export default function AppliedJobs() {
  const applied = [
    { title: "Backend Developer", status: "Under Review" },
    { title: "Full Stack Engineer", status: "Interview Scheduled" },
  ];

  return (
    <div className="page">
      <h1>📄 Applied Jobs</h1>

      {applied.map((job, i) => (
        <div key={i} className="card">
          <h3>{job.title}</h3>
          <p>Status: {job.status}</p>
        </div>
      ))}
    </div>
  );
}