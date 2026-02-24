export default function JobDetail({ job, back, apply }) {
  return (
    <div className="dashboard">
      <button onClick={back}>⬅ Back</button>

      <div className="job-card">
        <h2>{job.title}</h2>
        <h4>{job.company}</h4>
        <p>{job.description}</p>

        <button onClick={apply}>Apply Now</button>
      </div>
    </div>
  );
}