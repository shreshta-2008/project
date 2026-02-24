import { useState } from "react";

export default function ApplyForm({ job, back }) {
  const [status, setStatus] = useState("idle");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    await new Promise((r) => setTimeout(r, 1200));

    setStatus("success");
  };

  if (status === "success")
    return (
      <div className="center-success">
        <h2>✅ Application Submitted Successfully</h2>
      </div>
    );

  return (
    <div className="dashboard">

      <button onClick={back} className="back-btn">⬅ Back</button>

      <form onSubmit={submit} className="apply-card">

        <h2>Apply for {job.title}</h2>

        {/* BLOCK inputs */}
        <div className="field">
          <label>Name</label>
          <input type="text" required />
        </div>

        <div className="field">
          <label>Email</label>
          <input type="email" required />
        </div>

        <div className="field">
          <label>Cover Letter</label>
          <textarea rows="4" />
        </div>

        {/* Resume Upload */}
        <div className="field">
          <label>Upload Resume (PDF/DOC)</label>
          <input type="file" accept=".pdf,.doc,.docx" required />
        </div>

        <button className="submit-btn">
          {status === "loading" ? "Submitting..." : "Submit Application"}
        </button>

      </form>
    </div>
  );
}