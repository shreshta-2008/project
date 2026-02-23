export default function JobList({ jobs, openDetails, logout }) {
  return (
    <div className="container">
      <header>
        <h1>Job Portal</h1>
        <button onClick={logout}>Logout</button>
      </header>

      <div className="grid">
        {jobs.map((job) => (
          <div key={job.id} className="card job">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <span>{job.location}</span>

            <button onClick={() => openDetails(job)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}