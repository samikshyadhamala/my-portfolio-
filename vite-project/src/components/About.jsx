// src/components/About.jsx
import React from "react";
import profilePic from "../assets/head shot pic/brown3.png";
import resumePDF from "../assets/cv.pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-5"
      style={{
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="container"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold" style={{ color: "#f7f0f5ff" }}>
            About Me
          </h2>
          <p className="mt-3" style={{ fontSize: "1.1rem", color: "#fff6f6ff" }}>
            Who I am, my journey, and my passion for AI & technology.
          </p>
        </div>

        {/* Main Content */}
        <div className="row align-items-center" >
          {/* Left: Profile Image */}
          <div className="col-md-5 text-center mb-4 mb-md-8" style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                display: "inline-block",
                padding: "30px",
                borderRadius: "20px",
                background: "linear-gradient(135deg, #456d6dff, #4c484dff, #7c7a7eff)",
                overflow: "hidden",
              }}
            >
              {/* Decorative shapes */}
              <div style={{
                position: "absolute",
                width: "60px",
                height: "60px",
                background: "rgba(255,255,255,0.2)",
                borderRadius: "50%",
                top: "-20px",
                left: "-20px",
                transform: "rotate(45deg)",
              }} />
              <div style={{
                position: "absolute",
                width: "40px",
                height: "40px",
                background: "rgba(255,255,255,0.15)",
                borderRadius: "10px",
                bottom: "10px",
                right: "20px",
                transform: "rotate(-30deg)",
              }} />

              <img
                src={profilePic}
                alt="Samikshya Dhamala"
                className="img-fluid"
                style={{
                  maxWidth: "300px",
                  borderRadius: "15px",
                  border: "3px solid #fff",
                  position: "relative",
                  zIndex: "1",
                }}
              />
            </div>
          </div>

          {/* Right: About Me Text */}
          <div className="col-md-7">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#eee" }}>
              Hello! I'm <span style={{ color: "#f8f8f8ff", fontWeight: "600" }}>Samikshya Dhamala</span>, 
              currently pursuing my <span style={{ color: "#ffffffff", fontWeight: "600" }}>Bachelor in Computer Science with AI</span> from Sunway College Kathmandu. My journey focuses on <span style={{ color: "#f7f4f6ff" }}>Artificial Intelligence, Machine Learning, and research-driven solutions</span>.
            </p>

            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#eee" }}>
              I have participated in AI/ML research projects and authored research papers. Alongside technical expertise, I have developed strong <span style={{ color: "#fdfafcff" }}>soft skills</span> like teamwork, problem-solving, and communication through collaborative projects and hackathons.
            </p>

            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#eee" }}>
              I am passionate about <span style={{ color: "#fdf5fbff" }}>participating in hackathons</span> to explore cutting-edge technologies and connect with like-minded innovators.
            </p>

            {/* Techy Info Grid */}
            <div className="row g-3 mt-4">
              <div className="col-6">
                <div style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid #6be1ff",
                  borderRadius: "12px",
                  padding: "15px",
                  textAlign: "center",
                  transition: "0.3s",
                }}>
                  <FaUser size={22} color="#6be1ff" />
                  <p style={{ margin: "8px 0 0", fontSize: "0.95rem", color: "#eee" }}>Age: 19</p>
                </div>
              </div>

              <div className="col-6">
                <div style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid #6be1ff",
                  borderRadius: "12px",
                  padding: "15px",
                  textAlign: "center",
                }}>
                  <FaEnvelope size={22} color="#6be1ff" />
                  <p style={{ margin: "8px 0 0", fontSize: "0.95rem", color: "#eee" }}>samikshya.dhamala88@gmail.com</p>
                </div>
              </div>

              <div className="col-6">
                <div style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid #6be1ff",
                  borderRadius: "12px",
                  padding: "15px",
                  textAlign: "center",
                }}>
                  <FaPhone size={22} color="#6be1ff" />
                  <p style={{ margin: "8px 0 0", fontSize: "0.95rem", color: "#eee" }}>+977-9848867688</p>
                </div>
              </div>

              <div className="col-6">
                <div style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid #6be1ff",
                  borderRadius: "12px",
                  padding: "15px",
                  textAlign: "center",
                }}>
                  <FaMapMarkerAlt size={22} color="#6be1ff" />
                  <p style={{ margin: "8px 0 0", fontSize: "0.95rem", color: "#eee" }}>Nepaltar,Balaju</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-4 d-flex flex-wrap gap-3">
              <a
                href={resumePDF}
                download="Samikshya_Dhamala_Resume.pdf"
                className="btn"
                style={{
                  border: "2px solid #6be1ffff",
                  color: "#fff",
                  fontWeight: "600",
                  padding: "12px 30px",
                  borderRadius: "0px",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
              >
                Download Resume
              </a>

              <Link
                to="/letsconnect"
                className="btn"
                style={{
                  border: "2px solid #6bd0ffff",
                  color: "#fff",
                  fontWeight: "600",
                  padding: "12px 30px",
                  borderRadius: "0px",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
              >
                Connect With Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
