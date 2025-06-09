"use client";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLink from "../../components/AnimatedLink";
import "./Footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <motion.div
            className="social-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants}>Følg oss på:</motion.h3>
            <div className="social-icons">
              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="footer-links"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div className="footer-column" variants={containerVariants}>
              <motion.h3 variants={itemVariants}>Selskap</motion.h3>
              <motion.div variants={itemVariants}>
                <AnimatedLink href="/om">Om</AnimatedLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <AnimatedLink href="/prosjekter">Prosjekter</AnimatedLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <AnimatedLink href="/lab">Lab</AnimatedLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <AnimatedLink href="/artikler">Blogg</AnimatedLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <AnimatedLink href="/kontakt">Kontakt</AnimatedLink>
              </motion.div>
            </motion.div>

            <motion.div className="footer-column" variants={containerVariants}>
              <motion.h3 variants={itemVariants}>Tjenester</motion.h3>
              <motion.div variants={itemVariants}>
                <AnimatedLink href="/tjenester/web-design">
                  Web Design
                </AnimatedLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <AnimatedLink href="/tjenester/branding">Branding</AnimatedLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <AnimatedLink href="/tjenester/ux-ui">UX/UI</AnimatedLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <AnimatedLink href="/tjenester/motion">Motion</AnimatedLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <AnimatedLink href="/tjenester/seo">SEO</AnimatedLink>
              </motion.div>
            </motion.div>

            <motion.div className="footer-column" variants={containerVariants}>
              <motion.h3 variants={itemVariants}>Bransjer</motion.h3>
              <motion.div variants={itemVariants}>
                <AnimatedLink href="/bransjer/helse">Helse</AnimatedLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <AnimatedLink href="/bransjer/fintech">Fintech</AnimatedLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <AnimatedLink href="/bransjer/teknologi">
                  Teknologi
                </AnimatedLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <AnimatedLink href="/bransjer/eiendom">Eiendom</AnimatedLink>
              </motion.div>
              <motion.div variants={itemVariants}>
                <AnimatedLink href="/bransjer/e-handel">E-handel</AnimatedLink>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="footer-logo">
            <svg
              width="60"
              height="60"
              viewBox="0 0 215 213"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 113H210V173C210 195.091 192.091 213 170 213H0V113Z"
                fill="#F97288"
              />
              <path
                d="M0 12C0 5.37258 5.37258 0 12 0H88C94.6274 0 100 5.37258 100 12V88C100 94.6274 94.6274 100 88 100H12C5.37258 100 0 94.6274 0 88V12Z"
                fill="#00FF94"
              />
              <rect x="115" width="100" height="100" rx="50" fill="white" />
            </svg>{" "}
            <h1> BuggeDigital </h1>
          </div>
          <div className="footer-info">
            <p>© {currentYear} Bugge Digital. Alle rettigheter reservert</p>
            <AnimatedLink href="/personvern">Personvern</AnimatedLink>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
