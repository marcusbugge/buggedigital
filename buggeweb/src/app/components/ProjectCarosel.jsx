"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Project from "../sections/portofolio/Project";
import "./components.scss";

const ProjectCarosel = ({ projects, currentIndex }) => {
  const targetRef = useRef(null);

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <div ref={targetRef} className="caroselCnt">
      <div className="caro-cnt">
        <motion.div
          className="prj"
          animate={{ x: `${-currentIndex * 30}vw` }}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
        >
          {projects.map((project) => (
            <Project
              key={project.slug}
              name={project.title}
              desc={project.shortDescription}
              color={project.color}
              url={project.slug}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCarosel;
