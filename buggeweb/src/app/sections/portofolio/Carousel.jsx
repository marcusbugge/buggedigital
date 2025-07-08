"use client";

import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Project from "./Project";
import AnimatedParagraph from "../../components/ui/animations/AnimatedParagraph";
import styles from "./Portofolio.module.css";

export default function Carousel({ projects }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div>
      <div className={styles["sec-header"]}>
        <div className="dot-container">
          <div className={styles["dot-line"]}>
            <div className={styles["dott"]}></div>
            <p className={styles["dotLineText"]}>Min tilnærming</p>
          </div>
        </div>
        <AnimatedParagraph>
          <h1 className={styles["secHeaderTitle"]}>
            Første steg for å løse et problem er å gjenkjenne det.
          </h1>
        </AnimatedParagraph>
      </div>

      <div ref={targetRef} className={styles["caroselCnt"]}>
        <div className={styles["caro-cnt"]}>
          <motion.div className={styles["prj"]} style={{ x }}>
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
