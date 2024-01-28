import React from "react";
import "./Skills.css";
function Skills() {
  return (
    <div className="skills-section">
      <div className="footer-parent ">
        <img
          src={require("../../../assets/Home/shape-bg.png")}
          alt="Photo not found"
          className="top-img"
        />
      </div>
      <div className="header">
        <h1>My skills</h1>
      </div>

      <div className="skills-container">
        <div className="skill-box">
          <div className="skill">
            <div className="img">
              <img
                src={require("../Skills/images/java.png")}
                alt="Description"
                className="skill-icon"
              />
            </div>

            <h3>Java</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill">
            <div className="img">
              <img
                src={require("../Skills/images/reactN.png")}
                alt="Description"
                className="skill-icon"
              />
            </div>

            <h3>React</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill">
            <div className="img">
              <img
                src={require("../Skills/images/javascript.png")}
                alt="Description"
                className="skill-icon"
              />
            </div>

            <h3>JavaScript</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill">
            <div className="img">
              <img
                src={require("../Skills/images/python.png")}
                alt="Description"
                className="skill-icon"
              />
            </div>

            <h3>Python</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill">
            <div className="img">
              <img
                src={require("../Skills/images/c.png")}
                alt="Description"
                className="skill-icon"
              />
            </div>

            <h3>C</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill">
            <div className="img">
              <img
                src={require("../Skills/images/c++.png")}
                alt="Description"
                className="skill-icon"
              />
            </div>

            <h3>C++</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill">
            <div className="img">
              <img
                src={require("../Skills/images/dataStructure.png")}
                alt="Description"
                className="skill-icon"
              />
            </div>

            <h3>DSA</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill">
            <div className="img">
              <img
                src={require("../Skills/images/jsp.png")}
                alt="Description"
                className="skill-icon"
              />
            </div>

            <h3>JSP</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill">
            <div className="img">
              <img
                src={require("../Skills/images/html.png")}
                alt="Description"
                className="skill-icon"
              />
            </div>

            <h3>HTML</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill">
            <div className="img">
              <img
                src={require("../Skills/images/css.png")}
                alt="Description"
                className="skill-icon"
              />
            </div>

            <h3>CSS</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill">
            <div className="img">
              <img
                src={require("../Skills/images/bootstrap.png")}
                alt="Description"
                className="skill-icon"
              />
            </div>

            <h3>Bootstrap</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill">
            <div className="img">
              <img
                src={require("../Skills/images/c#.png")}
                alt="Description"
                className="skill-icon"
              />
            </div>

            <h3>C#</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill">
            <div className="img">
              <img
                src={require("../Skills/images/tomcat1.png")}
                alt="Description"
                className="skill-icon"
              />
            </div>
            <h3>Tomcat</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill">
            <div className="img">
              <img
                src={require("../Skills/images/linux.png")}
                alt="Description"
                className="skill-icon"
              />
            </div>
            <h3>Linux</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill">
            <div className="img">
              <img
                src={require("../Skills/images/github.png")}
                alt="Description"
                className="skill-icon"
              />
            </div>
            <h3>GitHub</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill">
            <div className="img">
              <img
                src={require("../Skills/images/mysql.png")}
                alt="Description"
                className="skill-icon"
              />
            </div>
            <h3>MySQL</h3>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill">
            <div className="img">
              <img
                src={require("../Skills/images/oracleSqlDatabase.png")}
                alt="Description"
                className="skill-icon"
              />
            </div>
            <h3>Oracle SQL</h3>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill">
            <div className="img">
              <img
                src={require("../Skills/images/firebase.png")}
                alt="Description"
                className="skill-icon"
              />
            </div>
            <h3>Firebase</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
