import React, { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";
import "./Hvorfor.scss";

const Counter = ({ end, text }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const duration = 2000; // 2 sekunder

      const currentCount = Math.min(
        Math.floor((progress / duration) * end),
        end
      );

      setCount(currentCount);

      if (currentCount < end) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    if (isInView) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, isInView]);

  return (
    <div className="counter" ref={ref}>
      <h1>
        {count}
        <p>%</p>
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {text}
      </motion.p>
    </div>
  );
};

export default function Hvorfor() {
  return (
    <div className="why">
      <div className="hvorfor">
        <Counter end={120} text="økning i antall besøkende *" />
        <Counter end={348} text="økning i digital eksponering *" />
        <Counter end={90} text="økning i omsetning *" />

        <p className="hvorfor-p">
          * Potensielle resultater fra tidligere klienter og statistikk
        </p>
      </div>
    </div>
  );
}
