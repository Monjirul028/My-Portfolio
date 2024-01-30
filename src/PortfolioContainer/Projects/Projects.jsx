import React, { useEffect } from "react";
import "./Projects.css";
import "aos/dist/aos.css"; // Import the styles
import Aos from "aos";
import { useLocation } from "react-router-dom";
import Footer from "../Home/Footers/Footer";

function Projects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  return (
    <div id="projects" className="pt-5" style={{ marginTop: "50px" }}>
      <div className="project-container ">
        <div className="header3 mb-5" data-Aos="slide-right">
          <h1 className="">Lets see my works</h1>
        </div>

        <div className="project-container-row mt-5 " data-Aos="zoom-in">
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
              data-Aos="zoom-in"
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/ATM/balance.png")}
              alt=""
              data-Aos="zoom-in"
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/ATM/depoSuccess.png")}
              alt=""
              data-Aos="zoom-in"
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/ATM/fundTrans.png")}
              alt=""
              data-Aos="zoom-in"
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
        <div className="project-container-row" data-Aos="slide-right">
          <div className="project-title">
            <h3>2. HYDROS</h3>
            <p>
              I successfully developed this Android application catering to
              retailers' needs for ordering water bottles and jars. I utilized
              Java, Firebase for real-time data handling, and XML for the app's
              layout. The entire project was crafted using Android Studio.
            </p>
            <h5 className="screenShot-h5">Screenshots-</h5>
          </div>
          <div className="image-container-HYDROS">
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/HYDROS/adminHome.jpg")}
              alt=""
              data-Aos="zoom-in"
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/HYDROS/userHome.jpg")}
              alt=""
              data-Aos="zoom-in"
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/HYDROS/userSettings.jpg")}
              alt=""
              data-Aos="zoom-in"
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/HYDROS/welcomePage.jpg")}
              alt=""
              data-Aos="zoom-in"
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
        <div className="project-container-row" data-Aos="slide-right">
          <div className="project-title">
            <h3>3. Bank Management System</h3>
            <p>
              I took the lead in developing this comprehensive system to
              streamline bank operations and improve the customer experience.
              The system includes sections tailored for Bank Managers. The
              technologies used in this project include Java, JDBC, Servlet for
              backend functionality, MySQL for efficient data management, and
              HTML, CSS, JavaScript, and Bootstrap for creating a user-friendly
              and visually appealing interface. This initiative successfully
              optimized various aspects of bank operations while prioritizing
              simplicity and effectiveness.
            </p>
            <h5 className="screenShot-h5">Screenshots-</h5>
          </div>
          <div className="image-container">
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/Bank/home.png")}
              alt=""
              data-Aos="zoom-in"
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/Bank/customers.png")}
              alt=""
              data-Aos="zoom-in"
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/Bank/remove.png")}
              alt=""
              data-Aos="zoom-in"
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/Bank/status.png")}
              alt=""
              data-Aos="zoom-in"
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

        <div className="project-container-row" data-Aos="slide-up">
          <div className="project-title">
            <h3>4. Calculator</h3>
            <p>
              I have created this Calculator application using HTML, CSS,
              JavaScript, and Bootstrap. The HTML and CSS elements contribute to
              a clean and visually pleasing interface. JavaScript powers the
              calculator's functionality, enabling users to perform various
              calculations with ease. Bootstrap was employed to ensure a
              responsive design, making the calculator accessible across
              different devices. This project showcases a simple yet effective
              tool for performing mathematical operations, with a focus on
              user-friendly design and functionality.
            </p>
            <h5 className="screenShot-h5">Screenshots-</h5>
          </div>
          <div className="image-container-calc">
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/Calculator/pic1.png")}
              alt=""
              data-Aos="zoom-in"
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/Calculator/pic2.png")}
              alt=""
              data-Aos="zoom-in"
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

        <div className="project-container-row" data-Aos="fade-up">
          <div className="project-title">
            <h3>5. Task Management System</h3>
            <p>
              I designed and implemented this Task Management System, leveraging
              HTML, CSS, JavaScript, and Bootstrap. This system provides a
              user-friendly interface for effective task organization and
              management. The HTML and CSS ensure a clean and visually appealing
              layout, while JavaScript adds dynamic functionality to enhance the
              user experience. Bootstrap was utilized to streamline the
              development process and create a responsive design that works
              seamlessly across different devices. The Task Management System is
              a practical solution for efficiently organizing and tracking
              tasks, contributing to improved productivity and workflow.
            </p>
            <h5 className="screenShot-h5">Screenshots-</h5>
          </div>
          <div className="image-container-calc">
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/Todo/home.png")}
              alt=""
              data-Aos="zoom-in"
            />
            <img
              className="project-image"
              src={require("../../assets/ScreenShots/Todo/task.png")}
              alt=""
              data-Aos="zoom-in"
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
      </div>
    </div>
  );
}

export default Projects;
