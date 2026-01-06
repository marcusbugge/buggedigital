"use client";

import React from "react";
import styles from "./ServicePageLayout.module.scss";
import { motion } from "framer-motion";
import { BackgroundLines } from "../ui/BackgroundLines";
import LandingPageArrow from "./LandingPageArrow";
import GrainEffect from "../ui/GrainEffect";

export default function ServicePageLayout({
  title,
  description,
  tags = [],
  color = "255, 255, 255",
  children,
}) {
  return (
    <div className={styles.servicePage} style={{ "--gradient-color": color }}>
      <GrainEffect opacity={0.04} />
      <div className={styles.hero}>
        <BackgroundLines
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            opacity: 0.5,
          }}
          svgOptions={{ duration: 10 }}
        >
          <div className={styles.gradientBg} />
        </BackgroundLines>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {description}
        </motion.p>

        {tags.length > 0 && (
          <motion.div
            className={styles.tags}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </motion.div>
        )}

        <LandingPageArrow />
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
}

