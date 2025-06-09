"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import "./Navbar2.scss";

export default function NavHover({ isVisible, services, position }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="nav-hover"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "absolute",
            top: "100%",
            left: position?.x || 0,
            transform: "translateX(-50%)",
          }}
        >
          <div className="nav-hover-grid">
            {services?.map((service, idx) => (
              <Link
                href={`/tjenester/${service.toLowerCase()}`}
                key={idx}
                className="nav-hover-item"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="hover-background"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.15, ease: "easeOut" },
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.95,
                        transition: { duration: 0.15, ease: "easeIn" },
                      }}
                    />
                  )}
                </AnimatePresence>
                <motion.div
                  className="nav-card"
                  initial={false}
                  animate={{
                    scale: hoveredIndex === idx ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                >
                  <div className="nav-card-content">
                    <div className="nav-card-inner">
                      <h4 className="nav-card-title">{service}</h4>
                      <p className="nav-card-description">
                        Utforsk våre {service.toLowerCase()} tjenester
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
