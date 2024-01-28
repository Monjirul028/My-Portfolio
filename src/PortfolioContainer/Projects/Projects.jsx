import React from "react";
import "./Projects.css";
function Projects() {
  return (
    <div>
      <div className="project-container">
        <div className="project-container-row">
          <div className="project-container-col">
            <div class="main">
              <div class="card" id="c1"></div>
              <div class="card" id="c2"></div>
              <div class="card" id="c3"></div>
              <div class="card" id="c4"></div>
            </div>
          </div>
          <div className="project-container-col">
            <div class="main">
              <div class="card" id="c1"></div>
              <div class="card" id="c2"></div>
              <div class="card" id="c3"></div>
              <div class="card" id="c4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
