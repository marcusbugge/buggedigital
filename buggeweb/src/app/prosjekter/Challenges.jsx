"use client";

import React from "react";
import styles from "./Challenges.module.scss";

export default function Challenges({ project }) {
  return (
    <div className={styles.challenges}>
      <h1>Utfordringer</h1>

      <div>
        <div className={styles["upper-challenge"]}>
          <p className={styles.testp}>Utfordringer</p>
          <div className={styles.text}>{project.challenges}</div>
        </div>

        <div>
          <p className={styles.testp}>Løsning</p>
          <div className={styles.text}>{project.solution}</div>
        </div>
      </div>
    </div>
  );
}
