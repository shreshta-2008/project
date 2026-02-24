import { useState } from "react";

import Login from "./components/Login";
import Signup from "./components/Signup";
import JobList from "./components/JobList";
import JobDetail from "./components/JobDetail";
import ApplyForm from "./components/ApplyForm";

import SavedJobs from "./components/SavedJobs";
import AppliedJobs from "./components/AppliedJobs";
import Trends from "./components/Trends";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Sidebar from "./components/Sidebar";

import { jobs } from "./data/jobs";

export default function App() {
  const [page, setPage] = useState("login");
  const [selectedJob, setSelectedJob] = useState(null);

  const renderPage = () => {
    switch (page) {
      case "login":
        return <Login setPage={setPage} />;

      case "signup":
        return <Signup setPage={setPage} />;

      case "jobs":
        return (
          <JobList
            jobs={jobs}
            openDetails={(job) => {
              setSelectedJob(job);
              setPage("details");
            }}
          />
        );

      case "details":
        return (
          <JobDetail
            job={selectedJob}
            back={() => setPage("jobs")}
            apply={() => setPage("apply")}
          />
        );

      case "apply":
        return (
          <ApplyForm
            job={selectedJob}
            back={() => setPage("details")}
          />
        );

      case "saved":
        return <SavedJobs />;

      case "applied":
        return <AppliedJobs />;

      case "trends":
        return <Trends />;

      case "profile":
        return <Profile />;

      case "settings":
        return <Settings />;

      default:
        return <Login setPage={setPage} />;
    }
  };

  // login/signup pages WITHOUT sidebar
  if (page === "login" || page === "signup") {
    return renderPage();
  }

  // dashboard pages WITH sidebar
  return (
    <div className="dashboard-layout">
      <Sidebar setPage={setPage} />
      <div className="dashboard-content">{renderPage()}</div>
    </div>
  );
}