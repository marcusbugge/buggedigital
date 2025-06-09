"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const TechStack = () => {
  const items = [
    "React",
    "Next.js",
    "TailwindCSS",
    "Framer Motion",
    "Firebase",
    "Node.js",
    "Express",
    "MongoDB",
    "GraphQL",
    "Apollo Client",
    "React",
    "Next.js",
    "TailwindCSS",
    "Framer Motion",
    "Firebase",
    "Node.js",
    "Express",
    "MongoDB",
    "GraphQL",
    "Apollo Client",
  ];
  return (
    <div className="tech">
      {items.map((item, index) => {
        return (
          <motion.div
            key={index}
            ref={null}
            className="tech-item"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.2,
              delay: index * 0.05,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            <div className="tech-tag">
              <Image width={20} height={20} src={"/react.png"} />
              <p>{item}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
