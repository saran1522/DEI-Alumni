import "../styles/Sidebar.css";
export default function Sidebar({ isHome }) {
  const sideLinksData = [
    "About",
    "Contect Us",
    "Post a job",
    "Upload Resume",
    "Start a post",
    "Home",
  ];

  const sideLinks = sideLinksData.map((item, i) => {
    return (
      <div className="side-link" key={i}>
        <a href="">{item}</a>
      </div>
    );
  });
  return (
    <aside className="sidebar">
      {isHome && (
        <div className="importants">
          <div className="side-item">
            <a href="">Latest Announcements</a>
          </div>
          <div className="side-item">
            <a href="">Latest News</a>
          </div>
          <div className="side-item">
            <a href="">Latest Jobs</a>
          </div>
        </div>
      )}
      <div className="sideLinksBox">
        <p>Important Links</p>
        {sideLinks}
      </div>
    </aside>
  );
}
