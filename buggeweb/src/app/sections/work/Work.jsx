"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  easeInOut,
  animate,
} from "framer-motion";
import "./Work.scss";
import ContactForm from "./ContactForm";
import { TechStack } from "../../components/TechStack";

export default function CV() {
  const targetRef = useRef(null);
  const [showNewContent, setShowNewContent] = useState(false);

  // Get scroll progress for the target element
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "start 30px"], // Start at top, finish animation quickly
  });

  // Shrink effect for the CV container
  const scale = useTransform(scrollYProgress, [1, 0], [1, 0.8]);
  const smoothScale = useSpring(scale, { stiffness: 500, damping: 90 });

  // Fade & move up effect for the <h1>
  const opacity = useTransform(scrollYProgress, [1, 0.1], [1, 0]); // Fade out
  const translateY = useTransform(scrollYProgress, [1, 0.9], [0, -70]); // Move up

  // Detect when old text has disappeared and update state
  useEffect(() => {
    const unsubscribe = opacity.onChange((latest) => {
      if (latest === 0) {
        setShowNewContent(true);
      } else {
        setShowNewContent(false);
      }
    });

    return () => unsubscribe();
  }, [opacity]);

  return (
    <div className="test-buy">
      <div className="buy-cnt">
        <motion.div
          style={{ scale: smoothScale }}
          ref={targetRef}
          className="cv"
        >
          {showNewContent ? null : (
            <motion.h1 className="cv-h" style={{ opacity }}>
              Ønsker du å <span className="red">jobbe</span> med meg?
            </motion.h1>
          )}
          {/* New Content Appears After Old Text Fades */}
          {showNewContent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="new-content"
            >
              <ContactForm />
            </motion.div>
          )}
        </motion.div>
      </div>
      <div className="contact-text">
        <div>
          <h1>La oss realisere ideen din – helt uforpliktende!</h1>
          <p>
            Har du en idé, et prosjekt eller en utfordring du trenger hjelp med?
            Jeg vil gjerne høre om det! Å ta kontakt er helt gratis og 100 %
            uforpliktende.
          </p>
        </div>
        <div>
          <p>
            Sammen kan vi utforske mulighetene, diskutere løsninger og finne ut
            hvordan jeg kan bidra – uten at du forplikter deg til noe.
          </p>
          <p>
            Ingen spørsmål er for små, ingen idéer er for store. Jeg gleder meg
            til å høre fra deg!
          </p>
        </div>
      </div>
      <div className="tech-sky">
        <div className="tech-header">
          <p className="tech-p">...men Marcus, hva kan du egentlig?</p>
          <h1>
            Tjaa, jeg har et bredt spekter av teknologier, og bruker de nyeste
            verktøyene.
          </h1>
        </div>

        <TechStack />
      </div>
    </div>
  );
}
