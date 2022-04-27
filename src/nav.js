import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  //logo scroll when active
  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles-list">Articles</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
