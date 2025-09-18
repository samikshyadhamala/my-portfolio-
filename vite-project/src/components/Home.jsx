// src/components/Home.jsx
import React from "react";
import profilePic from "../assets/head shot pic/brown3.png";
import resumePDF from "../assets/cv.pdf"; 
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div
      className="container-fluid min-vh-100"
      style={{
     // semi-transparent so stars show through
        position: "relative",
        zIndex: 10, // above the star background
      }}
    >
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-8 col-lg-6 text-center text-light">
          {/* Profile Image */}
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-circle mb-4"
            style={{
              width: "250px",
              height: "250px",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />

          {/* Intro Text */}
          <h1 className="fw-bold">
            <span className="gradient-text">Hello, I'm Samikshya Dhamala.</span>
            <br />
            A passionate data enthusiast who loves <br />
            turning ideas into reality.
          </h1>

          <p
            className="mt-3 mb-4 body-text"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            I enjoy working with Python, and data visualization tools, and I'm
            always curious about learning new technologies.
          </p>

          {/* Buttons */}
                    <div className="d-flex justify-content-center flex-wrap">
            {/* Connect Button */}
            <Link
                to="/letsconnect"
                className="btn btn-gradient rounded-pill me-3 mb-3"
                style={{
                width: "180px",
                fontWeight: "600",
                padding: "12px 0",
                textAlign: "center",
                }}
            >
                Connect with me
            </Link>

            <a
            href={resumePDF} // use the imported file
            download="Samikshya_Dhamala_Resume.pdf"
            className="btn btn-outline-light rounded-pill mb-3"
            style={{
                width: "180px",
                fontWeight: "600",
                padding: "12px 0",
                textAlign: "center",
            }}
            >
            My Resume
            </a>
                    </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(45deg, #ff6a88, #6a0dad);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .body-text {
          line-height: 1.8; 
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
        }

        .glow-text {
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.3);
        }

        .btn-gradient {
          background: linear-gradient(45deg, #ff00ff, #6a5acd);
          color: white;
          border: none;
          padding: 12px 24px;
          transition: all 0.3s ease;
        }

        .btn-gradient:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(255, 0, 255, 0.5);
        }

        .btn-outline-light:hover {
          background-color: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.9);
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(255, 255, 255, 0.2);
        }

        .min-vh-100 {
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default Home;
