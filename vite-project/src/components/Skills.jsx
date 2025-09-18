// src/components/Skills.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPython, FaReact, FaDatabase, FaBrain, FaGithub, FaUsers, FaLightbulb, FaComments } from "react-icons/fa";
import {SiOpencv, SiNumpy, SiPandas } from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container" >
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold" style={{ color: "#edf1f1ff" }}>
            My Skills
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#d1d1d1" }}>
            Technical expertise & personal strengths shaping my journey in AI & technology.
          </p>
        </div>

        <div className="row">
          {/* Hard Skills */}
          <div className="col-lg-6 mb-5">
            <h3 className="fw-bold mb-4" style={{ color: "#77ddff" }}>
              Hard Skills
            </h3>
            <div className="row g-4">
              {[
                { icon: <SiOpencv />, label: "OpenCV" },
                { icon: <SiNumpy />, label: "NumPy" },
                { icon: <SiPandas />, label: "Pandas" },
                { icon: <FaDatabase />, label: "SQL & Databases" },
                { icon: <FaReact />, label: "React.js" },
                { icon: <FaGithub />, label: "Git & GitHub" },
              ].map((skill, index) => (
                <div key={index} className="col-6">
                  <div
                    className="text-center p-4 h-100"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "12px",
                      border: "1px solid rgba(132,228,255,0.3)",
                      boxShadow: "0 0 15px rgba(132,228,255,0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 0 20px rgba(132,228,255,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 0 15px rgba(132,228,255,0.1)";
                    }}
                  >
                    <div style={{ fontSize: "2rem", marginBottom: "10px", color: "#84e4ff" }}>
                      {skill.icon}
                    </div>
                    <h6 style={{ color: "#fff" }}>{skill.label}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="col-lg-6 mb-5">
            <h3 className="fw-bold mb-4" style={{ color: "#ff9ff3" }}>
              Soft Skills
            </h3>
            <div className="row g-4">
              {[
                { icon: <FaUsers />, label: "Teamwork" },
                { icon: <FaLightbulb />, label: "Problem Solving" },
                { icon: <FaComments />, label: "Communication" },
                { icon: <FaBrain />, label: "Critical Thinking" },
                { icon: <FaUsers />, label: "Leadership" },
                { icon: <FaLightbulb />, label: "Creativity" },
              ].map((skill, index) => (
                <div key={index} className="col-6">
                  <div
                    className="text-center p-4 h-100"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255,159,243,0.3)",
                      boxShadow: "0 0 15px rgba(255,159,243,0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 0 20px rgba(255,159,243,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 0 15px rgba(255,159,243,0.1)";
                    }}
                  >
                    <div style={{ fontSize: "2rem", marginBottom: "10px", color: "#ff9ff3" }}>
                      {skill.icon}
                    </div>
                    <h6 style={{ color: "#fff" }}>{skill.label}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
