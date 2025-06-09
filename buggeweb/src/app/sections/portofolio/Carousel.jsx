"use client";

import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Project from "./Project";
import AnimatedParagraph from "../../components/ui/animations/AnimatedParagraph";

export default function Carousel({ projects }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div>
      <div className="sec-header">
        <div className="dot-container">
          <div className="dot-line">
            <div className="dott"></div>
            <p>Min tilnærming</p>
          </div>
        </div>
        <AnimatedParagraph>
          <h1>Første steg for å løse et problem er å gjenkjenne det.</h1>
        </AnimatedParagraph>
      </div>

      <div ref={targetRef} className="caroselCnt">
        <div className="caro-cnt">
          <motion.div className="prj" style={{ x }}>
            {projects.map((project, index) => (
              <Project
                key={index}
                name={project.title}
                desc={project.shortDescription}
                color={project.color}
                url={project.slug}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
