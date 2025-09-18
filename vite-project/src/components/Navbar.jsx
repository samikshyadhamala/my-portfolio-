// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";



import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      {/* Container adds left & right spacing */}
      <div className="container">
        {/* Logo */}
        <NavLink className="navbar-brand logo-font" to="/">
          Samikshya.
        </NavLink>

        {/* Toggle (for mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links + Socials */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Center links */}
          <ul className="navbar-nav mx-auto gap-4">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/skills">
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">
                Projects
              </NavLink>
            </li>
          </ul>

          {/* Socials + Connect button */}
          <div className="d-flex align-items-center gap-3">
           {/* LinkedIn */}
<a href="https://www.linkedin.com/in/samikshyadhamala/" target="_blank" rel="noreferrer">
  <FaLinkedin size={28} color="white" />
</a>

{/* GitHub */}
<a href="https://github.com/samikshyadhamala" target="_blank" rel="noreferrer">
  <FaGithub size={28} color="white" />
</a>

            <NavLink to="/letsconnect" className="btn connect-btn ms-2">
              Let’s Connect
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
