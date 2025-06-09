import React from "react";
import Image from "next/image";
import marcus from "../assets/marcus-removebg.png";
import styles from "./test.module.scss";

export default function ProfilePicture({ name, color = "var(--red)" }) {
  // Dynamisk import av bilde basert på navn
  const imagePath = `../../assets/${name}.png`;

  return (
    <div className={styles.profilePicturee} style={{ backgroundColor: color }}>
      <Image src={marcus} alt={name} width={100} height={100} />
    </div>
  );
}
