"use client";

import { motion } from "framer-motion";
import "./Skeleton.scss";

export function Skeleton({
  width,
  height,
  className = "",
  variant = "rectangular",
}) {
  return (
    <motion.div
      className={`skeleton ${variant} ${className}`}
      style={{
        width: width || "100%",
        height: height || "1.2em",
      }}
      initial={{ opacity: 0.5 }}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function SkeletonText({ lines = 1, width }) {
  return (
    <>
      {Array(lines)
        .fill(null)
        .map((_, i) => (
          <Skeleton
            key={i}
            width={typeof width === "function" ? width(i) : width}
            className="mb-2"
          />
        ))}
    </>
  );
}
