import React from "react";
import Profile from "./Profile";
import Footer from "./Footers/Footer";
import "./Home.css";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills.jsx";
import MyWorks from "./MyWorks/MyWorks.jsx";
import Projects from "../Projects/Projects.jsx";
import Contact from "../ContactME/Contact.jsx";
function Home() {
  return (
    <>
      <div className="home-container">
        <Profile></Profile>
        <Footer></Footer>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
