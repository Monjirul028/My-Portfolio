import React from "react";
import "./MyFooter.css";
import Footer from "../Home/Footers/Footer";
function MyFooter() {
  return (
    <div className="footer-section">
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
      <span>
        <i className="fa fa-phone-square "> 9101298008</i>
      </span>
      <span>
        <i className="fa fa-envelope"> monjirul028@gmail.com</i>
      </span>
    </div>
  );
}

export default MyFooter;
