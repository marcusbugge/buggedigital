"use client";

import React, { useRef, useState, useEffect } from "react";
import "./Details.css";
import Teknologier from "../teknologier/Teknologier";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Arrow from "../../components/Arrow";

const services = [
  { number: "01", name: "Website Design", link: "/tjenester/website-design" },
  { number: "02", name: "Branding", link: "/tjenester/branding" },
  { number: "03", name: "UX/UI", link: "/tjenester/uxui" },
  { number: "04", name: "Motion Design", link: "/tjenester/motion-design" },
  { number: "05", name: "SEO", link: "/tjenester/seo" },
  {
    number: "06",
    name: "Content Creation",
    link: "/tjenester/content-creation",
  },
  { number: "07", name: "Landing Page", link: "/tjenester/landing-page" },
];

export default function Details() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 4, 4]);
  const opacity = useTransform(
    smoothProgress,
    [0, 0.5, 0.5, 0.6],
    [1, 1, 1, 0]
  );

  return (
    <div className="details-page" ref={containerRef}>
      <motion.div className="services-section">
        <div className="services-header"></div>

        <motion.div
          className="services-grid"
          initial="visible"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.a
              key={service.number}
              href={service.link}
              className="service-item"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <motion.div
                className="service-number"
                variants={{
                  hover: {
                    color: "white",
                    x: 20,
                    transition: {
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                {service.number}
              </motion.div>
              <motion.h3
                className="service-name"
                variants={{
                  initial: { x: 0 },
                  hidden: { x: 0 },
                  visible: { x: 0 },
                  hover: {
                    x: 20,
                    transition: {
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                {service.name}
              </motion.h3>
              <motion.div
                className="arrow-container"
                variants={{
                  initial: { rotate: 0 },
                  hidden: { rotate: 0 },
                  visible: { rotate: 0 },
                  hover: {
                    rotate: -45,
                    transition: {
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                <Arrow color="var(--white-200)" />
              </motion.div>
              <motion.div
                className="service-bg"
                variants={{
                  initial: { height: "0%" },
                  hidden: { height: "0%" },
                  visible: { height: "0%" },
                  hover: {
                    height: "100%",
                    transition: {
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: -1,
                }}
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
