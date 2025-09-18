// src/components/Footer.jsx
import React from "react";
import { HashLink } from "react-router-hash-link";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
  ];

  return (
    <footer className="py-5" style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>
      <div className="container">
        <div className="row">
          {/* Left Side: Message */}
          <div className="col-md-6 d-flex flex-column align-items-start mb-4">
            <h2
              className="display-6 fw-bold mb-3"
              style={{ lineHeight: "1.2", color: "#cfcacaff" }}
            >
              Let's create something <br />
              beautiful together.
            </h2>
            <span className="h6">
              Start by{" "}
              <span className="fw-bold" style={{ color: "#ff6bda" }}>
                saying Hello!
              </span>
            </span>
          </div>

          {/* Right Side: Vertical Nav Links */}
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-md-end align-items-start">
            {navLinks.map((link, i) => (
              <HashLink
                smooth
                key={i}
                to={link.href}
                className="mb-2"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  textShadow: "0 0 6px rgba(255, 107, 218, 0.4)",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#ff77dd")}
                onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
              >
                {link.label}
              </HashLink>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row mt-5 pt-4" style={{ borderTop: "1px solid #333" }}>
          <div className="col-md-6 d-flex align-items-center mb-3 mb-md-0">
            <div
              className="rounded-circle d-inline-flex align-items-center justify-content-center me-3"
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: "#ff6bda",
                boxShadow: "0 0 12px rgba(255, 107, 218, 0.6)",
              }}
            >
              <span className="text-white fw-bold" style={{ fontSize: "14px" }}>
                SD
              </span>
            </div>
            <small>©2024 Samikshya Dhamala. All rights reserved.</small>
          </div>
          <div className="col-md-6 text-md-end">
            <small>
              Designed by <span className="fw-bold">Samikshya Dhamala</span>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
