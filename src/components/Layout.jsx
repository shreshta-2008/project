import Sidebar from "./Sidebar";
import JobList from "./JobList";
import Trends from "./Trends";

export default function Layout({ page, setPage, jobs, openDetails }) {

  const renderPage = () => {
    switch (page) {

      case "jobs":
        return (
          <JobList
            jobs={jobs}
            openDetails={openDetails}
          />
        );

      case "trends":
        return <Trends />;

      case "saved":
        return <h2>⭐ Saved Jobs</h2>;

      case "applied":
        return <h2>📄 Applied Jobs</h2>;

      case "profile":
        return <h2>👤 Profile</h2>;

      case "settings":
        return <h2>⚙ Settings</h2>;

      default:
        return <JobList jobs={jobs} openDetails={openDetails} />;
    }
  };

  return (
    <div className="layout">
      <Sidebar setPage={setPage} />
      <div className="content">{renderPage()}</div>
    </div>
  );
}