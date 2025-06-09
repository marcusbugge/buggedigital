import React from "react";
import Image from "next/image";
import img from "../assets/hommeren.png";
import styles from "./artikler.module.scss";
export default function Article() {
  return (
    <div className={styles.article}>
      <Image src={img} alt="Article 1" />
      <h2 className={styles.articleTitle}>
        Hva gjør at Bugge Digital utvikler godesolide løsninger?
      </h2>
      <p>20.02.2025</p>
    </div>
  );
}
