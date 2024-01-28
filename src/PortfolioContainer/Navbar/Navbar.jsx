import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  let [showMediaIcon, setShowMediaIcon] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">Monjirul Al Kadir</div>

        <div
          className={showMediaIcon ? "menu-link mobile-menu-link" : "menu-link"}
        >
          <ul className="menu">
            <li className="menu-item">
              {" "}
              <Link to={"/"}>
                {" "}
                <a href="#">Home</a>{" "}
              </Link>
            </li>
            <li className="menu-item">
              {" "}
              <Link to={"/projects"}>
                {" "}
                <a href="#">Projects</a>{" "}
              </Link>
            </li>
            <li className="menu-item">
              {" "}
              <Link to={"/achievements"}>
                {" "}
                <a href="#">Achievements</a>
              </Link>
            </li>
            <li className="menu-item">
              {" "}
              <Link to={"/contact"}>
                <a href="#">Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcon(!showMediaIcon)}>
            <i class="fa fa-bars "></i>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
