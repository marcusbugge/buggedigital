"use client";

import React, { useState, useRef } from "react";
import styles from "./Portofolio.module.css";
import Image from "next/image";
import Project from "./Project";
import { motion } from "framer-motion";
import AnimatedParagraph from "../../components/ui/animations/AnimatedParagraph";
import AnimatedHeader from "../../components/ui/animations/AnimatedHeader";
import Hvorfor from "../hvorfor/Hvorfor";
import Carousel from "./Carousel";
import About from "../about/About";
export default function Portofolio({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsRef = useRef(null);

  return (
    <div className={styles["portofolio-page"]}>
      <motion.div className={styles["porto-header"]}>
        <AnimatedHeader>
          <h1 className={styles["porto-header-h1"]}>
            Applikasjoner som skaper engasjement og inspirer til handling 🚀
          </h1>
        </AnimatedHeader>

        <div className={styles.arrows}>
          <AnimatedParagraph>
            <p className={styles.portoHeaderDescription}>
              Jeg fokuserer på å lage digitale applikasjoner som er enkle å
              bruke, morsomme, og som får jobben gjort. Jeg elsker å løse
              utfordrende problemer og skape løsninger som virkelig betyr noe
              for mennesker.
            </p>
          </AnimatedParagraph>
          <div className={styles.arrow}>
            <Image
              className={`${styles["arrow-rotate"]} ${styles.arrowImage}`}
              src="/Right.png"
              width={40}
              height={120}
              alt="Naviger til venstre"
            />
            <Image
              className={styles.arrowImage}
              src="/Right.png"
              width={40}
              height={120}
              alt="Naviger til høyre"
            />
          </div>
        </div>
      </motion.div>

      <Hvorfor />
      <About />
    </div>
  );
}
