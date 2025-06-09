"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "./AnimatedLink.scss";

const AnimatedLink = ({ href, children, className, white }) => {
  return (
    <motion.div
      className={`link-container ${className || ""} ${white ? "white" : "gray"}`}
      data-white={white ? "true" : "false"}
    >
      <Link href={href} className="animated-link">
        <motion.div
          className="link-content"
          initial="initial"
          whileHover="hover"
          animate="initial"
        >
          <motion.span
            className="link-text"
            variants={{
              initial: {
                opacity: 1,
                y: 0,
              },
              hover: {
                opacity: 0,
                y: -20,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              },
            }}
          >
            {children}
          </motion.span>
          <motion.span
            className="link-text-hover"
            variants={{
              initial: {
                opacity: 0,
                y: 20,
              },
              hover: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              },
            }}
          >
            {children}
          </motion.span>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default AnimatedLink;
