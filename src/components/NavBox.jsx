export default function NavBox({ show }) {
  return (
    <div
      className="navBox"
      style={{ opacity: show ? "1" : "0", zIndex: show ? "2" : "-1" }}
    >
      <a href="#" className="navBox-link">
        Post
      </a>
      <a href="#" className="navBox-link">
        Logout
      </a>
    </div>
  );
}
