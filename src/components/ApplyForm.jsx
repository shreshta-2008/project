import { useState } from "react";

export default function ApplyForm({ job, back }) {
  const [status, setStatus] = useState("idle");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  if (status === "success")
    return <h2 className="success">Application Sent 🎉</h2>;

  return (
    <div className="container">
      <button onClick={back}>⬅ Back</button>

      <form onSubmit={submit} className="card">
        <h2>Apply for {job.title}</h2>
        <input placeholder="Name" required />
        <input placeholder="Email" required />
        <textarea placeholder="Cover Letter" />
        <button>{status === "loading" ? "Sending..." : "Submit"}</button>
      </form>
    </div>
  );
}