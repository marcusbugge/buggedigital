import React from "react";
import styles from "./artikler.module.scss";
import ArticleContainer from "./ArticleContainer";

export default function page() {
  return (
    <div className={styles.artiklerPage}>
      <h1 className={styles.artiklerTitle}>Utvalgte artikler</h1>
      <ArticleContainer />
    </div>
  );
}
