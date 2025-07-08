"use client";

import React from "react";
import styles from "./LandingPageLayout.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import LandingPageArrow from "./LandingPageArrow";
import FadeOutText from "../ui/animations/FadeOutText";
import { ColorfulText } from "../ui/ColorfulText";
import { StarsBackground } from "../ui/StarsBackground";
import { ShootingStars } from "../ui/ShootingStars";
import { HeroHighlight } from "../ui/HeroHighlight";
import { BackgroundLines } from "../ui/BackgroundLines";

export default function LandingPageLayout({ title, description }) {
  const { scrollYProgress } = useScroll({
    offset: ["start -20%", "start -50%"],
  });

  return (
    <motion.div
      className={styles.prosjektPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <BackgroundLines
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          borderRadius: "20px",
          overflow: "hidden",
        }}
        svgOptions={{ duration: 8 }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "20px",
          }}
        />
      </BackgroundLines>

      <motion.div className={styles.header}>
        <h1>{title}</h1>
      </motion.div>

      <motion.p className={styles.description}>{description}</motion.p>

      <LandingPageArrow />
    </motion.div>
  );
}
