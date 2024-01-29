import React from "react";
import "./MyWorks.css";
import { NavLink } from "react-router-dom";
export default function MyWorks() {
  return (
    <div className="project-container">
      <div className="header3">
        <h1>My Works</h1>
      </div>
      <div className="project-container-col">
        <NavLink to="/projects">
          <div class="main">
            <div class="cardM" id="c1"></div>
            <div class="cardM" id="c2"></div>
            <div class="cardM" id="c3"></div>
            <div class="cardM" id="c4"></div>
          </div>
        </NavLink>
      </div>

      <div className="profile-options text-center">
        <button className="btn primary-btn  mb-5">
          <NavLink
            to="/projects"
            style={{ color: "white", textDecoration: "none" }}
          >
            See my works
          </NavLink>
        </button>
      </div>
    </div>
  );
}
