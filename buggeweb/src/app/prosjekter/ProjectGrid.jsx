import React from "react";
import { getProjects } from "../lib/sanity";
import styles from "./ProjectGrid.module.scss";
import ProjectCard from "./ProjectCard";

export default async function ProjectGrid() {
  const projects = await getProjects();

  return (
    <div className={styles.projectGrid}>
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          name={project.title}
          desc={project.shortDescription}
          color={project.color}
          url={project.slug}
          services={project.services}
          tags={project.tags}
        />
      ))}
    </div>
  );
}
