import React from "react";
import Typical from "react-typical";
import "./Profile.css";
export default function () {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/monjirul-al-kadir-589569215/">
                <i className="fa fa-linkedin-square"></i>{" "}
              </a>
              <a href="https://github.com/Monjirul028">
                <i className="fa fa-github"></i>{" "}
              </a>

              <a href="https://www.youtube.com/@WrongNotes0">
                <i className="fa fa-youtube"></i>{" "}
              </a>
              <a href="https://www.facebook.com/moonahmed.ahmed.58?mibextid=ZbWKwL">
                <i className="fa fa-facebook-square"></i>{" "}
              </a>
              <a href="https://www.instagram.com/manjir_ul_?igsh=cDljcGczMWF6NHg3">
                <i className="fa fa-instagram"></i>{" "}
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            Hello, I'm{" "}
            <span className="highlighted-text">Monjirul Al Kadir</span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev💻",
                    1500,
                    "Java Full stack☕️",
                    1500,
                    "React Dev⚛️",
                    1500,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                knack of building applications with front and back end
                operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire me</button>
            <a
              href="https://drive.usercontent.google.com/u/0/uc?id=1JytKs92rLwUSad-RBTHo9f5zcpdEkM44&export=download"
              download="Resume MONJIRULF.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
