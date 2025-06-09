"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FadeOutText = ({ children, className, scrollRange = [0, 200] }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, scrollRange, [1, 0]);
  const y = useTransform(scrollY, scrollRange, [0, -50]);

  return (
    <motion.div className={className} style={{ opacity, y }}>
      {children}
    </motion.div>
  );
};

export default FadeOutText;
