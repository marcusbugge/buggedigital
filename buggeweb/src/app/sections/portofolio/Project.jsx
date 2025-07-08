import React from "react";
import Link from "next/link";
import styles from "./Portofolio.module.css";

export default function Project({ name, desc = "", color = "white", url }) {
  return (
    <Link href={`/prosjekter/${url}`} passHref>
      <div
        className={styles["project-div"]}
        style={{
          backgroundColor: `${color}`,
          "--hover-color": color, // Injecting dynamic color into CSS variable
        }}
      >
        <div className={styles["arrow-cnt"]}>
          <div className={styles["arrow-svg"]}>
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
        <div className={styles["project-data"]}>
          <p className={styles["projectDivParagraph"]}>{name}</p>
          <h2 className={styles["projectDivTitle"]}>{desc}</h2>
        </div>
      </div>
    </Link>
  );
}
