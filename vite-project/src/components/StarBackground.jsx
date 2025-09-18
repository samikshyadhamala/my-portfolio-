// src/components/StarBackground.jsx
import React, { useState, useEffect } from "react";

const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStar = () => ({
      id: Math.random(),
      startX: Math.random() * 100,
      startY: Math.random() * 50,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 5,
      size: 1 + Math.random() * 3,
      opacity: 0.3 + Math.random() * 0.7,
      createdAt: Date.now(),
    });

    const initialStars = Array.from({ length: 8 }, generateStar);
    setStars(initialStars);

    const interval = setInterval(() => {
      setStars((prevStars) => {
        const newStars = prevStars.filter(
          (star) =>
            Date.now() - star.createdAt < (star.duration + star.delay) * 1000
        );

        if (Math.random() < 0.3 && newStars.length < 12) {
          newStars.push({ ...generateStar(), createdAt: Date.now() });
        }

        return newStars;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const backgroundStars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 0.5 + Math.random() * 1.5,
    opacity: 0.2 + Math.random() * 0.6,
    twinkle: Math.random() * 4 + 2,
  }));

  return (
    <div
      className="star-background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: -1, // ← use negative z-index
        backgroundColor: "rgba(33, 37, 41, 1)", // optional dark background
      }}
    >
      {/* Static Stars */}
      {backgroundStars.map((star) => (
        <div
          key={star.id}
          className="position-absolute rounded-circle bg-light"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.twinkle}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {/* Shooting Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star position-absolute bg-light"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            width: `${star.size * 2}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `shoot ${star.duration}s ease-in-out ${star.delay}s forwards`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 1; }
        }

        @keyframes shoot {
          0% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(-200px, 200px); opacity: 0; }
        }

        .shooting-star {
          border-radius: 50%;
          box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  );
};

export default StarBackground;
