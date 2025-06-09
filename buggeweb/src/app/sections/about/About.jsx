"use client";

import React, { useRef, useEffect } from "react";

import "./about.scss";
import Image from "next/image";
import Marcus from "../../assets/marcus.png";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedParagraph from "../../components/ui/animations/AnimatedParagraph";
import { ColorfulText } from "../../components/ui/ColorfulText";

export default function Page() {
  const logoVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const pinkVariants = {
    initial: {
      d: "M0 213C100 150 210 213 210 113V173C210 195.091 192.091 213 170 213H0V113Z",
      y: 50,
      opacity: 0,
    },
    animate: {
      d: "M0 113H210V173C210 195.091 192.091 213 170 213H0V113Z",
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const greenVariants = {
    initial: {
      scale: 0,
      x: -100,
      rotate: 180,
      opacity: 0,
    },
    animate: {
      scale: 1,
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "backOut",
      },
    },
  };

  const circleVariants = {
    initial: {
      scale: 2,
      x: 100,
      opacity: 0,
    },
    animate: {
      scale: 1,
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-450px"]);

  useEffect(() => {
    // Force a re-render after mount to ensure correct positioning
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="om-oss-page">
      <div className="sec-header">
        <div className="dot-container">
          <div className="dot-line">
            <div className="dott"></div>
            <p>Hvem er vi?</p>
          </div>
        </div>
        <AnimatedParagraph>
          <h1>
            Vi er utforskere. Bugge Digital ser etter måter å skape bedre
            løsninger ved hjelp av kreativitet.
          </h1>
        </AnimatedParagraph>
      </div>

      <div className="who-are-we">
        <div className="us">
          <Image src={Marcus} alt="marcus" width={600} height={600} />

          <div className="us-text">
            <div className="us-text-header">
              <p>Marcus Bugge</p>
              <p className="us-text-p">Eier, designer og utvikler</p>
            </div>

            <div className="linked-in-logo">
              <Image
                src="/linkedin.png"
                alt="linkedin"
                width={30}
                height={30}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/marcus-bugge-7158271a4/",
                    "_blank"
                  )
                }
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
        <div className="us">
          <div className="logo-containerr">
            <motion.svg
              width="215"
              height="213"
              viewBox="0 0 215 213"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ overflow: "visible" }}
            >
              <path
                d="M0 113H210V173C210 195.091 192.091 213 170 213H0V113Z"
                fill="#F97288"
              />
              <path
                d="M0 12C0 5.37258 5.37258 0 12 0H88C94.6274 0 100 5.37258 100 12V88C100 94.6274 94.6274 100 88 100H12C5.37258 100 0 94.6274 0 88V12Z"
                fill="#00FF94"
              />
              <motion.rect
                x="115"
                width="100"
                height="100"
                rx="50"
                fill="white"
                animate={{
                  y: [0, -50, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: [0.76, 0, 0.24, 1],
                  repeatDelay: 0.2,
                }}
              />
            </motion.svg>
          </div>

          <div className="us-text">
            <div className="us-text-header">
              <p></p>
              <p className="us-text-p"></p>
            </div>
          </div>
        </div>
      </div>

      <div className="sec-header">
        <div className="dot-container">
          <div className="dot-line">
            <div className="dott"></div>
            <p>Min tilnærming</p>
          </div>
        </div>
        <AnimatedParagraph>
          <h1>Første steg for å løse et problem er å gjenkjenne det.</h1>
        </AnimatedParagraph>
      </div>

      <div className="problems">
        {[
          {
            title: "Dyp Dykk",
            number: "01",
            description: "Grundig utforskning av virksomheten og produktet.",
          },
          {
            title: "Før-Produksjon",
            number: "02",
            description:
              "Identifisering av kjerneutfordringer, smertepunkter og kunstnerisk retning.",
          },
          {
            title: "Design Forslag",
            number: "03",
            description: "Presentasjon av konseptløsninger.",
          },
          {
            title: "Design Utvikling",
            number: "04",
            description: "Videre utvikling av konseptet til ferdig produkt.",
          },
          {
            title: "Levering og Testing",
            number: "05",
            description:
              "Design ferdigstilling, testing, levering og overlevering.",
          },
        ].map((problem, index) => (
          <div className="problem" key={index}>
            <div className="problem-header">
              <div className="dot-container">
                <div className="dot-line">
                  <div className="dott"></div>
                  <p>{problem.title}</p>
                </div>
              </div>
              <p className="number">{problem.number}</p>
            </div>
            <p className="description">{problem.description}</p>
          </div>
        ))}
      </div>

      <div ref={containerRef} style={{ position: "relative" }}>
        <div className="sec-header">
          <div className="dot-container">
            <div className="dot-line">
              <div className="dott"></div>
              <p>Min ekspertise</p>
            </div>
          </div>
        </div>

        <div style={{ height: "200vh", position: "relative" }}>
          <div className="expertise-container">
            <motion.div className="expertise-grid" style={{ x }}>
              <div className="expertise-item">
                <h3>3+</h3>
                <p>Års erfaring med å bygge smarte løsninger</p>
              </div>
              <div className="expertise-item">
                <h3>10+</h3>
                <p>Vellykkede prosjekter</p>
              </div>
              <div className="expertise-item">
                <h3>5+</h3>
                <p>Bransjer med variert erfaring</p>
              </div>
              <div className="expertise-item">
                <h3>20+</h3>
                <p>Fornøyde kunder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="sec-header">
        <div className="dot-container">
          <div className="dot-line">
            <div className="dott"></div>
            <p>Mitt mål</p>
          </div>
        </div>
        <AnimatedParagraph>
          <h1>Å lage løsninger basert på gjennomtenkt design og erfaringer</h1>
        </AnimatedParagraph>
      </div>

      <div className="values">
        <h1>Verdier og mål</h1>
        <div className="values-container">
          <div className="value-item">
            <div className="left-value">
              <p>01</p>
              <p>Tillit</p>
            </div>

            <div className="right-value">
              <p>
                Tillit danner grunnlaget for våre relasjoner. Vi prioriterer
                åpenhet, pålitelighet og integritet i all vår samhandling, og
                bygger tillit med både kunder og partnere.
              </p>
            </div>
          </div>
          <div className="value-item">
            <div className="left-value">
              <p>02</p>
              <p>Kommunikasjon</p>
            </div>

            <div className="right-value">
              <p>
                Effektiv kommunikasjon er nøkkelen i vår prosess. Vi tror på
                åpen dialog, aktiv lytting og klar, konsis formidling for å
                sikre at alle er på samme side og at ideer blir forstått og
                verdsatt.
              </p>
            </div>
          </div>
          <div className="value-item">
            <div className="left-value">
              <p>03</p>
              <p>Integritet</p>
            </div>

            <div className="right-value">
              <p>
                Vi setter din autentisitet høyt og verdsetter ærlighet. Vår
                forpliktelse til åpenhet kommer fra vår dype respekt for våre
                interessenter og de høyeste arbeidsstandarder. Integritet er
                grunnlaget for vellykkede relasjoner.
              </p>
            </div>
          </div>
          <div className="value-item">
            <div className="left-value">
              <p>04</p>
              <p>Bygge langvarige forhold</p>
            </div>

            <div className="right-value">
              <p>
                Gjennom tillit, kommunikasjon og integritet sikrer vi at hvert
                prosjekt blir en vellykket og givende opplevelse for alle
                involverte.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sec-header smaller">
        <div className="dot-container">
          <div className="dot-line">
            <div className="dott"></div>
            <p>Klar til å starte?</p>
          </div>
        </div>
        <AnimatedParagraph>
          <h1>Klar for å ta det neste steget?</h1>
        </AnimatedParagraph>
      </div>
    </div>
  );
}
