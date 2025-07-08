"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Project.module.scss";
import ProfilePicture from "../components/ProfilePicture";
import Image from "next/image";
import Pb from "./Pb";
import ContactButton from "../components/ContactButton";

export default function AboutProject({ project }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const targetNumber = project?.developmentTime || 6;

  useEffect(() => {
    if (isInView && count < targetNumber) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [count, isInView, targetNumber]);

  if (!project) return null;

  return (
    <div className={styles["about-project"]}>
      <h1>Prosjektet</h1>

      <div className={styles.wrapper}>
        <div className="about-left">
          <p className={styles.gray}>Industri</p>
          <p>{project.industry}</p>

          <div className={styles.about_left_info}>
            <div className={styles.about_left_info_item}>
              <p className={styles.gray}>Utviklingstid</p>
              <div className={styles["time-wrapper"]} ref={ref}>
                <motion.p
                  className={styles.time}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  {count}
                </motion.p>
                <p className={styles.gray}>uker</p>
              </div>
            </div>
            <div className={styles.about_left_info_item}>
              <p className={styles.gray}>Services</p>

              <div className={styles["service-tags"]}>
                {project.services?.map((service, index) => (
                  <p key={index}>{service}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aboutRight}>
          <p>{project.description}</p>
          <div className={styles.testContactButton}>
            <div className={styles.contactDataTest}>
              <ProfilePicture name={"marcus-removebg"} color={project.color} />
              <div className={styles.contactDataTest2}>
                <p>Marcus Bugge</p>
                <p className="gray">Eier, designer og utvikler</p>
              </div>
            </div>

            <ContactButton size="big" />
          </div>
        </div>
      </div>

      <div className={styles["picture-grid"]}>
        {project.gallery && project.gallery.length > 0 && (
          <>
            <div className={styles.upper}>
              {project.gallery.slice(0, 2).map((image, index) => (
                <div
                  key={index}
                  className={`${styles.element} ${index === 0 ? styles["upper-left"] : styles["upper-right"]}`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} bilde ${index + 1}`}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    priority={index === 0}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
            <div className={styles.lower}>
              {project.gallery.slice(2, 5).map((image, index) => (
                <div
                  key={index}
                  className={
                    styles.element +
                    " " +
                    (styles["picture-" + (index + 1)] ||
                      "picture-" + (index + 1))
                  }
                >
                  <Image
                    src={image}
                    alt={`${project.title} bilde ${index + 3}`}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
