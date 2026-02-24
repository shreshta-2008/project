export default function JobDetail({ job, back, apply }) {
  if (!job) return null;

  return (
    <div className="dashboard">

      <button className="back-btn" onClick={back}>⬅ Back</button>

      <div className="apply-card">
        <h2>{job.title}</h2>
        <p><b>Company:</b> {job.company}</p>
        <p><b>Location:</b> {job.location}</p>
        <p>{job.description}</p>

        <button onClick={apply}>Apply Now</button>
      </div>
    </div>
  );
}