"use client";
import React, { useEffect, useRef } from "react";
import "./ShootingStars.scss";

export const ShootingStars = ({ className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const shootingStars = [];
    const maxShootingStars = 5;

    const createShootingStar = () => ({
      x: Math.random() * canvas.width,
      y: 0,
      length: Math.random() * 80 + 100,
      speed: Math.random() * 10 + 15,
      angle: (Math.random() * 20 + 20) * (Math.PI / 180),
      opacity: 1,
    });

    const updateCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    updateCanvas();
    const resizeObserver = new ResizeObserver(updateCanvas);
    resizeObserver.observe(canvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new shooting stars randomly
      if (shootingStars.length < maxShootingStars && Math.random() < 0.02) {
        shootingStars.push(createShootingStar());
      }

      // Update and draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];

        // Update position
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;

        // Fade out
        star.opacity -= 0.01;

        // Draw shooting star
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.lineWidth = 2;
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length
        );
        ctx.stroke();

        // Remove if out of bounds or faded out
        if (
          star.y > canvas.height ||
          star.x > canvas.width ||
          star.opacity <= 0
        ) {
          shootingStars.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.unobserve(canvas);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className={`shooting-stars ${className || ""}`} />
  );
};
