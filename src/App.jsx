import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import JobList from "./components/JobList";
import JobDetail from "./components/JobDetail";
import ApplyForm from "./components/ApplyForm";
import { jobs } from "./data/jobs";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("login");
  const [selectedJob, setSelectedJob] = useState(null);

  const goToDetails = (job) => {
    setSelectedJob(job);
    setPage("details");
  };

  const goToApply = () => setPage("apply");

  return (
    <div className="app">
      {page === "login" && <Login setPage={setPage} />}
      {page === "signup" && <Signup setPage={setPage} />}

      {page === "jobs" && (
        <JobList
          jobs={jobs}
          openDetails={goToDetails}
          logout={() => setPage("login")}
        />
      )}

      {page === "details" && (
        <JobDetail
          job={selectedJob}
          back={() => setPage("jobs")}
          apply={goToApply}
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