import "../styles/Jobs.css";
import Sidebar from "./Sidebar";

// const jobs = [
//   {
//     job_id: "19919191",
//     employer_logo: "/job.png",
//     employer_name: "the  xyz firm",
//     job_title: "frontend intern",
//     job_city: "bangalore",
//     job_country: "knarnataka",
//     job_apply_link: "http://",
//   },
// ];

export default function Jobs({ jobs, error, loading, handlePage }) {
  const jobsList = jobs.map((job) => (
    <div className="job-container" key={job.job_id}>
      <div className="job">
        <div className="job-title">
          <p>Saran Sinha posted a new job</p>
        </div>
        <div className="job-blog">
          <img
            src={job.employer_logo ? `${job.employer_logo}` : "/job.png"}
            alt=""
          />
          <div className="job-info">
            <p className="company">
              <i className="ri-building-line"></i>
              {job.employer_name}
            </p>
            <p className="position">
              <i className="ri-briefcase-2-line"></i>
              {job.job_title}
            </p>
            <p className="location">
              <i className="ri-map-pin-line"></i>
              {job.job_city} , {job.job_country}
            </p>
          </div>
          <div className="apply-btn">
            <a href={job.job_apply_link} rel="noreferrer" target="_blank">
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <main className="main-container">
      <Sidebar isHome={false} />
      <article className="job-section">
        {error && <div className="message">{error}</div>}
        {loading && <div className="message">Loading jobs...</div>}
        {jobs.length > 0 && (
          <>
            {jobsList}
            <div className="page-btn">
              <button onClick={handlePage}>Load More</button>
            </div>
          </>
        )}
      </article>
    </main>
  );
}
