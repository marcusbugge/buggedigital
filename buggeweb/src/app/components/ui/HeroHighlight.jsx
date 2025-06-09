"use client";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";
import "./HeroHighlight.scss";

export const HeroHighlight = ({ children, className, containerClassName }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`hero-highlight-container ${containerClassName || ""}`}
      onMouseMove={handleMouseMove}
    >
      <div className="dot-pattern-base" />
      <motion.div
        className="dot-pattern-highlight"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <div className={`hero-content ${className || ""}`}>{children}</div>
    </div>
  );
};
