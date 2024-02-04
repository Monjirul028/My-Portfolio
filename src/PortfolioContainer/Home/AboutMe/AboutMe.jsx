import React, { useEffect } from "react";
import "./AboutMe.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the styles
function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 100,
    });
  }, []);

  return (
    <div className="about-me-body">
      <div className="header1">
        <h1>About me</h1>
      </div>

      <div className="about-me-container">
        <div className="about-me-image" data-AOS="slide-right">
          <img
            src={require("../../../assets/Home/profilephoto3.jpg")}
            alt="Your Alt Text"
            className="about-me-picture"
          />
        </div>
        <div className="about-me-info ">
          <div className="education-div " data-aos="fade-up">
            <i className="fa fa-graduation-cap"></i>

            <h3>Education</h3>

            <p>BCA, Computer Application</p>

            <p>Java Full Stack</p>
          </div>

          <div className="intro-div " data-aos="fade-up">
            <p>
              <h3 style={{ fontFamily: "Poppins SemiBol" }}>Hey folks! 👋</h3>
              I'm Monjirul Al Kadir, a passionate software developer who finds
              joy in crafting digital solutions. By day, I'm immersed in the
              world of code, and when the coding screen takes a break, you'll
              catch me with a guitar or keyboard in hand, lost in the magic of
              music.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
