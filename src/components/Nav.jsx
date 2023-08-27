import { Link } from "react-router-dom";
import { useState } from "react";
import NavBox from "./NavBox";
import "../styles/nav.css";

export default function Nav({ search, handleSearch }) {
  const [showNavBox, setShowNavBox] = useState(false);
  const navList = [
    "ri-menu-line",
    "ri-home-3-fill",
    "ri-briefcase-fill",
    "ri-file-list-fill",
    "ri-message-3-fill",
    "ri-information-fill",
    "ri-user-3-fill",
    "ri-indent-decrease",
  ];

  function handleShowNavBox() {
    setShowNavBox((prevShow) => !prevShow);
  }

  const navItems = navList.map((item, i) => {
    return (
      <Link to="/" key={i} className="nav-link">
        <i className={item}></i>
      </Link>
    );
  });

  return (
    <>
      <nav>
        <div className="nav-top">
          <div className="logo">
            <img src="/logo.png" alt="" />
            <p className="logoText">DEI ALUMNI</p>
          </div>
          <div className="search">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search here.."
              value={search}
              onChange={handleSearch}
            />
          </div>
          <div className="menu">
            {showNavBox ? (
              <i
                className="ri-close-line menu-icon"
                onClick={handleShowNavBox}
              ></i>
            ) : (
              <i
                className="ri-menu-line menu-icon"
                onClick={handleShowNavBox}
              ></i>
            )}
          </div>
        </div>
        <div className="nav-bottom">
          <ul className="nav-list">{navItems}</ul>
        </div>
        <NavBox show={showNavBox} />
      </nav>
    </>
  );
}
