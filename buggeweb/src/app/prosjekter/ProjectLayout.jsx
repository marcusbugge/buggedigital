import React from "react";
import styles from "./ProjectLayout.module.scss";
import Image from "next/image";
import Tag from "../components/Tag";
import AnimatedHeader from "../components/ui/animations/AnimatedHeader";
import AnimatedParagraph from "../components/ui/animations/AnimatedParagraph";

export default function ProjectLayout({ project }) {
  if (!project) return null;

  const year = project.publishedAt
    ? new Date(project.publishedAt).getFullYear()
    : "";

  return (
    <div className={styles.projectLayout}>
      <div
        className={styles.projectLeft}
        style={{
          "--bg-image": `url(${project.mainImage})`,
        }}
      >
        {project.mainImage && (
          <Image
            src={project.mainImage}
            alt={project.title}
            width={1920}
            height={1080}
          />
        )}
      </div>

      <div className={styles.projectRight}>
        <div>
          <h1>{project.title}</h1>

          <AnimatedParagraph>
            <p>{project.description}</p>
          </AnimatedParagraph>
        </div>

        <div className={styles.projectRightInfo}>
          <h2>{project.where}</h2>

          <div className={styles.InfoTags}>
            {project.services?.map((tech, index) => (
              <Tag key={index} text={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
