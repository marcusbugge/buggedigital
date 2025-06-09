"use client";

import React from "react";
import styles from "./Challenges.module.scss";
import ContactButton from "../components/ContactButton";
export default function Feedback({ project }) {
  return (
    <div className={styles.challenges}>
      <h1>Tilbakemelding</h1>

      <div>
        <div className={styles["upper-challenge"]}>
          <p className="gray">Tilbakemelding</p>
          <div className={styles.text}>{project.feedback}</div>
        </div>

        <div className="feedback">
          <div className={styles.from}>
            <div className={styles.circle}></div>
            <div className={styles["data-cnt"]}>
              <div className={styles.data}>
                <p>{project.feedbackFrom}</p>
                <p className="gray">{project.feedbackFromPosition}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
