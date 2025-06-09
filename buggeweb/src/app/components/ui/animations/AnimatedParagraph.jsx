"use client";

import { motion } from "framer-motion";
import React from "react";

const AnimatedParagraph = ({ children, className, delay = 0 }) => {
  // Forbedret splitWords-funksjon med memoization
  const splitWords = React.useCallback((text) => {
    if (typeof text !== "string") {
      return text;
    }
    return text.split(" ").map((word, i) => (
      <motion.span
        key={`word-${word}-${i}`} // Forbedret key
        className="inline-block"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          delay: delay + Math.min(i * 0.05, 1.5), // Begrenset maksimal forsinkelse
        }}
      >
        {word}{" "}
      </motion.span>
    ));
  }, []);

  // Memoized animateChildren-funksjon
  const animateChildren = React.useCallback(
    (children) => {
      return React.Children.map(children, (child) => {
        if (typeof child === "string") {
          return splitWords(child);
        }
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            children: animateChildren(child.props.children),
          });
        }
        return child;
      });
    },
    [splitWords]
  );

  // Memoized children
  const animatedContent = React.useMemo(
    () => animateChildren(children),
    [children, animateChildren]
  );

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        once: true,
        margin: "0px 0px 200px 0px",
      }}
      transition={{ duration: 0.3 }}
    >
      {animatedContent}
    </motion.div>
  );
};

export default AnimatedParagraph;
