import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
    setMenuOpen(false);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="home" smooth={true} duration={1000} onClick={scrollToTop}>
            Home
          </Link>{" "}
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            onClick={handleMenuClick}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={1000}
            onClick={handleMenuClick}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            onClick={handleMenuClick}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
