import React, { useEffect } from "react";
import Typical from "react-typical";
import "./Profile.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

export default function () {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 100, // Offset (in pixels) from the top of the document to trigger animations
    });
  }, []);
  return (
    <div className="profile-container" id="home">
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
            <Link to="contact" smooth={true} duration={1500}>
              {" "}
              <button className="btn primary-btn">Hire me</button>{" "}
            </Link>
            <a
              href="https://drive.google.com/uc?export=download&id=1bN81isfDsB46LD44o0U3YApBi5pYnqna"
              download="MonjirulCV.pdf"
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
