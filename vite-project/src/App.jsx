// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Letsconnect from "./components/Letsconnect";
import StarBackground from "./components/StarBackground";

function App() {
  return (
    <div>
      {/* ✅ Global star background behind everything */}
      <StarBackground />

      {/* ✅ Foreground content always above background */}
      <div style={{ position: "relative", zIndex: 11}}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/letsconnect" element={<Letsconnect />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
