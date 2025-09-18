// src/components/Projects.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Example images (replace with your project thumbnails/screenshots)
import eventifyImg from "../assets/img/eventify.png";
import lensOcrImg from "../assets/img/lensocr.png";
import waterImg from "../assets/img/water.png";
import hospitalImg from "../assets/img/hospital.png";
import darazImg from "../assets/img/daraz.png";
import aiImg from "../assets/img/ai.png"; // new AI project

const projects = [
  {
    title: "Eventify",
    desc: "An event management platform simplifying registration, scheduling, and ticketing.",
    tech: ["React", "Node.js", "MongoDB"],
    img: eventifyImg,
  },
  {
    title: "Lens OCR",
    desc: "A deep learning-powered Optical Character Recognition system to extract text from images.",
    tech: ["Python", "OpenCV", "TensorFlow"],
    img: lensOcrImg,
  },
  {
    title: "Water Uses Monitoring System",
    desc: "An IoT-based solution to monitor and analyze household and industrial water usage.",
    tech: ["Arduino", "IoT", "Data Analytics"],
    img: waterImg,
  },
  {
    title: "Hospital Management",
    desc: "A digital hospital management system for patient records, appointments, and billing.",
    tech: ["Java", "MySQL", "Spring Boot"],
    img: hospitalImg,
  },
  {
    title: "Web Scraping in Daraz",
    desc: "A data scraping project to collect product information and analyze e-commerce trends.",
    tech: ["Python", "Selenium", "Pandas"],
    img: darazImg,
  },
  {
    title: "AI – Customer Segmentation",
    desc: "An AI/ML solution for customer segmentation to enhance business marketing strategies.",
    tech: ["Python", "Scikit-learn", "Machine Learning"],
    img: aiImg,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-5"
      style={{
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{
          paddingTop: "100px",  // more space above
          paddingBottom: "100px", // more space below
        }}>
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold" style={{ color: "#ffffffff" }}>
            My Projects
          </h2>
          <p className="mt-3" style={{ fontSize: "1.1rem", color: "#ddd" }}>
            A showcase of my technical work combining AI, ML, Web, and IoT solutions.
          </p>
        </div>

        {/* Project Cards */}
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card h-100 shadow-lg border-0"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="card-img-top"
                  style={{
                    borderRadius: "15px 15px 0 0",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="fw-bold" style={{ color: "#ff77dd" }}>
                    {project.title}
                  </h5>
                  <p style={{ color: "#eee", fontSize: "0.95rem" }}>{project.desc}</p>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          background: "#222",
                          color: "#6be1ff",
                          padding: "5px 12px",
                          borderRadius: "12px",
                          fontSize: "0.8rem",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/samikshyadhamala?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm"
                    style={{
                      border: "2px solid #6be1ff",
                      color: "#fff",
                      fontWeight: "600",
                      borderRadius: "8px",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#6be1ff";
                      e.target.style.color = "#000";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "transparent";
                      e.target.style.color = "#fff";
                    }}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
