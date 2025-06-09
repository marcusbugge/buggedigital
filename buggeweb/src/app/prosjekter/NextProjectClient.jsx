"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./NextProject.module.scss";
import Arrow from "../components/Arrow";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCarosel from "../components/ProjectCarosel";

const NextProjectClient = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!projects || projects.length === 0) return null;

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className={styles.nextProjectsCnt}>
      <div className={styles.arrows}>
        <div className={styles.arrow1} onClick={previousProject}>
          <Arrow color="white" />
        </div>
        <div className={styles.arrow2} onClick={nextProject}>
          <Arrow color="white" />
        </div>
      </div>

      <ProjectCarosel
        projects={projects}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default NextProjectClient;
