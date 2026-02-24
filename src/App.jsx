import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import JobList from "./components/JobList";
import JobDetail from "./components/JobDetail";
import ApplyForm from "./components/ApplyForm";
import { jobs } from "./data/jobs";

export default function App() {
  const [page, setPage] = useState("login");
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div>
      {page === "login" && <Login setPage={setPage} />}
      {page === "signup" && <Signup setPage={setPage} />}

      {page === "jobs" && (
        <JobList
          jobs={jobs}
          openDetails={(job) => {
            setSelectedJob(job);
            setPage("details");
          }}
          logout={() => setPage("login")}
        />
      )}

      {page === "details" && (
        <JobDetail
          job={selectedJob}
          back={() => setPage("jobs")}
          apply={() => setPage("apply")}
        />
      )}

      {page === "apply" && (
        <ApplyForm
          job={selectedJob}
          back={() => setPage("details")}
        />
      )}
    </div>
  );
}