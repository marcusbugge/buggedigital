import React from "react";
import Link from "next/link";
import styles from "./ProjectCard.module.scss";

export default function ProjectCard({
  name,
  desc,
  color,
  url,
  tags = [],
  services = [],
}) {
  return (
    <Link href={`/prosjekter/${url}`} className={styles.projectCard}>
      <div
        className={styles.projectContent}
        style={{
          backgroundColor: `${color}`,
          "--hover-color": color,
        }}
      >
        <div className={styles.arrowContainer}>
          <div className={styles.services}>
            {services?.slice(0, 3).map((service, index) => (
              <span key={index} className={styles.service}>
                {service}
              </span>
            ))}
          </div>
          <div className={styles.arrowSvg}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="var(--black)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="var(--black)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className={styles.projectInfo}>
          <div className={styles.tags}>
            {tags?.slice(0, 3).map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className={styles.mainContent}>
            <p className={styles.title}>{name}</p>
            <h2 className={styles.description}>{desc}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
