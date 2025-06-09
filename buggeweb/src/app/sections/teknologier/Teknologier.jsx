"use client";

import React, { useEffect, useState } from "react";
import "./Teknologier.scss";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Importer bilder
import reactIcon from "../../assets/react.png";
import nextjsIcon from "../../assets/nextjs-icon.png";
import azureIcon from "../../assets/azure.png";
import javaIcon from "../../assets/microsoft.png";
import githubIcon from "../../assets/github.svg";
export default function Teknologier() {
  const [rotation, setRotation] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.2) % 360);
    }, 16); // Ca. 60 FPS

    return () => clearInterval(interval);
  }, []);

  const technologies = [
    {
      name: ".NET",
      description:
        "Et kraftig JavaScript-bibliotek for å bygge brukergrensesnitt. Jeg bruker React til å lage responsive og interaktive nettsider med gjenbrukbare komponenter.",
      image: javaIcon,
    },
    {
      name: "GitHub",
      description:
        "Et kraftig JavaScript-bibliotek for å bygge brukergrensesnitt. Jeg bruker React til å lage responsive og interaktive nettsider med gjenbrukbare komponenter.",
      image: githubIcon,
    },
    {
      name: "React",
      description:
        "Et kraftig JavaScript-bibliotek for å bygge brukergrensesnitt. Jeg bruker React til å lage responsive og interaktive nettsider med gjenbrukbare komponenter.",
      image: reactIcon,
    },
    {
      name: "Next.js",
      description:
        "Et React-rammeverk for produksjonsklare applikasjoner. Jeg bruker Next.js for å bygge raske, SEO-vennlige nettsider med server-side rendering.",
      image: nextjsIcon,
    },
    {
      name: "Azure",
      description:
        "Microsofts skyplattform for enterprise-løsninger. Jeg bruker Azure for å bygge og deploye skalerbare applikasjoner med høy tilgjengelighet.",
      image: azureIcon,
    },
  ];

  // Definerer hvor mange elementer vi vil ha på hver sirkel
  const elementsPerCircle = [2, 3, 4]; // Første sirkel: 2, andre: 3, tredje: 4

  // Definerer radius for hver sirkel (basert på CSS-verdiene)
  const circleRadii = [15, 30, 45]; // 30%, 60%, 90% delt på 2

  // Definerer hastighet for hver sirkel (1 er normal hastighet)
  const circleSpeeds = [0.5, 0.5, 0.3]; // Innerste sirkel går saktere, ytterste går raskere

  return (
    <div className="teknologier-page">
      <div className="circles-container">
        {[1, 2, 3].map((circle, index) => {
          const numberOfElements = elementsPerCircle[index];
          const startIndex =
            index === 0
              ? 0
              : elementsPerCircle.slice(0, index).reduce((a, b) => a + b, 0);
          const circleElements = technologies.slice(
            startIndex,
            startIndex + numberOfElements
          );

          return (
            <div
              key={circle}
              className={`circle circle-${circle}`}
              style={{
                transform: `rotate(${rotation * circleSpeeds[index]}deg)`,
              }}
            >
              {circleElements.map((tech, techIndex) => (
                <div
                  key={tech.name}
                  className="moving-element"
                  style={{
                    transform: `rotate(${(360 / numberOfElements) * techIndex}deg) translateX(calc(${circleRadii[index]}vw - clamp(30px, 4vw, 40px)))`,
                  }}
                >
                  <div
                    className="icon-wrapper"
                    style={{
                      transform: `rotate(${-(rotation * circleSpeeds[index] + (360 / numberOfElements) * techIndex)}deg)`,
                    }}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="icon-container">
                      <Image
                        src={tech.image}
                        alt={tech.name}
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {hoveredTech && (
          <motion.div
            className="tech-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <h3>{hoveredTech.name}</h3>
            <p>{hoveredTech.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
