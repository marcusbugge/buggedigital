"use client";

import React from "react";
import styles from "./GrainEffect.module.scss";

export default function GrainEffect({ opacity = 0.05 }) {
  return (
    <div className={styles.grain}>
      <style jsx global>{`
        .${styles.grain}::before {
          opacity: ${opacity};
        }
      `}</style>
    </div>
  );
}

