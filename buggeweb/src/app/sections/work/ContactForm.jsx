"use client";

import React from "react";
import "./Work.scss";
import Arrow from "../../components/Arrow";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion

// Parent container animation (stagger effect)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between children animations
    },
  },
};

// Contact-info animation (slide in from left)
const contactInfoVariants = {
  hidden: { x: 300, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

// Inner content animation (fade in from bottom)
const contentVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function ContactForm() {
  return (
    <motion.div className="form">
      <div className="form-cnt">
        <div className="form-bg form-left">
          <div className="header">
            <h2>Har du noe du ønsker å realisere?</h2>
            <h1>Jeg hadde elsket å jobbe med deg.</h1>
          </div>
        </div>
        <div className="form-right">
          <div className="form-bg right-top">
            {/* Parent wrapper for stagger effect */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={containerVariants}
            >
              {[
                // Contact information array for DRY code
                {
                  title: "Send meg en epost",
                  info: "marcus_bugge@hotmail.com",
                },
                { title: "Ring meg", info: "+47 478 40 053" },
                {
                  title: "Send meg en epost",
                  info: "marcus_bugge@hotmail.com",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="contact-info"
                  variants={contactInfoVariants}
                >
                  <motion.div className="icon" variants={contentVariants}>
                    <Image src="/react.png" width={50} height={50} alt="Icon" />
                  </motion.div>
                  <motion.div className="info" variants={contentVariants}>
                    <h3>{contact.title}</h3>
                    <p>{contact.info}</p>
                  </motion.div>
                  <motion.div className="circle" variants={contentVariants}>
                    <Arrow />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
