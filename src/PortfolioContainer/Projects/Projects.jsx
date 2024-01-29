import React from "react";
import "./Projects.css";
function Projects() {
  return (
    <div>
      <div className="projects-container">
        <div
          className="profile-details-name text-center mt-4  "
          style={{
            color: "#ff7800",
            fontFamily: "Poppins bold",
            fontSize: "40px",
            marginBottom: "50px",
          }}
        >
          Lets see my works
        </div>
        <div className="project-container-row">
          <div className="project-title">
            <h3>1. ATM Simulator</h3>
            <p>
              I developed an interactive ATM simulator, leveraging the power of
              HTML, CSS, and JavaScript for the frontend, and Java technologies
              including JDBC, Servlets, and JSP for seamless database
              connectivity.
            </p>
            <h5 className="screenShot-h5">Screenshots-</h5>
          </div>
          <div className="image-container">
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/ATM/AtmHome.png")}
              alt=""
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/ATM/balance.png")}
              alt=""
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/ATM/depoSuccess.png")}
              alt=""
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/ATM/fundTrans.png")}
              alt=""
            />
          </div>

          <div className="profile-options text-center">
            <a
              href="https://github.com/Monjirul028/BankManagementSystem"
              className="btn primary-btn text-white mb-5"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="project-container-row">
          <div className="project-title">
            <h3>2. HYDROS</h3>
            <p>
              I developed an interactive ATM simulator, leveraging the power of
              HTML, CSS, and JavaScript for the frontend, and Java technologies
              including JDBC, Servlets, and JSP for seamless database
              connectivity.
            </p>
            <h5 className="screenShot-h5">Screenshots-</h5>
          </div>
          <div className="image-container-HYDROS">
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/HYDROS/adminHome.jpg")}
              alt=""
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/HYDROS/userHome.jpg")}
              alt=""
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/HYDROS/userSettings.jpg")}
              alt=""
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/HYDROS/welcomePage.jpg")}
              alt=""
            />
          </div>

          <div className="profile-options text-center">
            <a
              href="https://github.com/Monjirul028/"
              className="btn primary-btn text-white mb-5"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="project-container-row">
          <div className="project-title">
            <h3>3. Bank Management System</h3>
            <p>
              I developed an interactive ATM simulator, leveraging the power of
              HTML, CSS, and JavaScript for the frontend, and Java technologies
              including JDBC, Servlets, and JSP for seamless database
              connectivity.
            </p>
            <h5 className="screenShot-h5">Screenshots-</h5>
          </div>
          <div className="image-container">
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/Bank/home.png")}
              alt=""
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/Bank/customers.png")}
              alt=""
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/Bank/remove.png")}
              alt=""
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/Bank/status.png")}
              alt=""
            />
          </div>

          <div className="profile-options text-center">
            <a
              href="https://github.com/Monjirul028/"
              className="btn primary-btn text-white mb-5"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="project-container-row">
          <div className="project-title">
            <h3>4. Task Management System</h3>
            <p>
              I developed an interactive ATM simulator, leveraging the power of
              HTML, CSS, and JavaScript for the frontend, and Java technologies
              including JDBC, Servlets, and JSP for seamless database
              connectivity.
            </p>
            <h5 className="screenShot-h5">Screenshots-</h5>
          </div>
          <div className="image-container">
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/ATM.png")}
              alt=""
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/ATM.png")}
              alt=""
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/ATM.png")}
              alt=""
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/ATM.png")}
              alt=""
            />
          </div>

          <div className="profile-options text-center">
            <a
              href="https://github.com/Monjirul028/"
              className="btn primary-btn text-white mb-5"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="project-container-row">
          <div className="project-title">
            <h3>5. Calculator</h3>
            <p>
              I developed an interactive ATM simulator, leveraging the power of
              HTML, CSS, and JavaScript for the frontend, and Java technologies
              including JDBC, Servlets, and JSP for seamless database
              connectivity.
            </p>
            <h5 className="screenShot-h5">Screenshots-</h5>
          </div>
          <div className="image-container">
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/ATM.png")}
              alt=""
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/ATM.png")}
              alt=""
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/ATM.png")}
              alt=""
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/ATM.png")}
              alt=""
            />
            {/* 
            <div className="project-image"></div>
            <div className="project-image"></div>
            <div className="project-image"></div>
            <div className="project-image"></div> */}
          </div>

          <div className="profile-options text-center">
            <a
              href="https://github.com/Monjirul028/"
              className="btn primary-btn text-white mb-5"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
