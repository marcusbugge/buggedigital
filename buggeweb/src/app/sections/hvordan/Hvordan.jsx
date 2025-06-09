"use client";

import React from "react";
import "./Hvordan.scss";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import AnimatedParagraph from "../../components/ui/animations/AnimatedParagraph";
import AnimatedHeader from "../../components/ui/animations/AnimatedHeader";

export default function Hvordan() {
  const items = [];

  const ref = useRef(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"], // Starts scaling when entering viewport
  });

  // Animate scale from 0.5 to 1
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const scaleYProgress = { scale: scale };

  return (
    <div>
      <div className="hvordan-cnt">
        {" "}
        <div className="hvordan-left">
          <div className="test-how">
            <div className="text-left">
              {" "}
              <div className="stroke-left">
                <p>PROSESSEN</p>
              </div>
              <AnimatedHeader delay={0.5}>
                <h1>Jeg hjelper bedrifter med å løse problemer</h1>
              </AnimatedHeader>
            </div>
          </div>
        </div>
        <div className="hvordan-right">
          <div className="text-right">
            <motion.div className="card">
              <h1>Jeg stiller spørsmål</h1>
              <AnimatedParagraph>
                <p>
                  Det skal godt gjøres å lage et bra digitalt produkt uten at du
                  kjenner målgruppen din. Et prosjekt bør aldri starte med noe
                  annet enn grundig research.
                </p>
              </AnimatedParagraph>
              <AnimatedParagraph delay={1}>
                <ul>
                  <AnimatedParagraph delay={0.5}>
                    <li>Hva er brukerbehovene?</li>
                  </AnimatedParagraph>
                  <AnimatedParagraph delay={0.5}>
                    <li>Hva er forretningsmålene?</li>
                  </AnimatedParagraph>
                  <AnimatedParagraph delay={0.5}>
                    <li>Hvilken teknologi kan vi bruke?</li>
                  </AnimatedParagraph>
                </ul>
              </AnimatedParagraph>
              <AnimatedParagraph>
                <p>
                  Enhver vellykket forretningsstrategi finnes i skjæringspunktet
                  mellom disse tre spørsmålene. Jeg hjelper deg med å finne
                  svarene.
                </p>
              </AnimatedParagraph>
            </motion.div>
            <div className="card">
              <h1>Jeg konseptualiserer</h1>
              <AnimatedParagraph>
                <p>
                  Med innsikt fra brukerne, strategien, merkevaren og innholdet
                  jeg designer for, utforsker jeg en rekke konsepter og velger
                  en retning for designprosessen. Et vellykket konsept svarer
                  ikke bare på oppdagelser gjort i analysefasen, men inneholder
                  også elementer av innovasjon. Jeg loser deg gjennom prosessen.
                </p>
              </AnimatedParagraph>
            </div>
            <div className="card">
              <h1>Jeg designer og koder</h1>
              <AnimatedParagraph>
                <p>
                  Jeg er overbevist om at en digital designprosess uten
                  inngående forståelse for kode, leder til dårlige, dyre og ikke
                  veldig brukervennlige løsninger.
                </p>
              </AnimatedParagraph>
              <AnimatedParagraph>
                <strong>
                  <p>
                    Skisser alene kan aldri illustrere alle de kompliserte
                    interaksjonene i et digitalt produkt.
                  </p>
                </strong>
              </AnimatedParagraph>
              <AnimatedParagraph>
                <p>
                  Med designverktøy som penn og papir, Figma og front-end kode
                  (vanligvis en kombinasjon) blåser jeg liv i konsepter og
                  tester design og innhold på ekte brukere gjennom hele
                  designprosessen.
                </p>
              </AnimatedParagraph>
            </div>
            <div className="card">
              <h1>Jeg itererer</h1>
              <AnimatedParagraph>
                <p>
                  En digital tjeneste kan riktignok bli lansert, men den blir
                  aldri ferdig. Om du vil at et digitalt produkt skal skille seg
                  ut, må du gjøre kontinuerlige iterasjoner ved å teste
                  produktet på ekte brukere, høste data og samle
                  tilbakemeldinger fra brukerne.
                </p>
              </AnimatedParagraph>
              <AnimatedParagraph>
                <strong>
                  <p>Prøv. Feil. Gjør det igjen.</p>
                </strong>
              </AnimatedParagraph>
            </div>
          </div>
        </div>
      </div>

      <div className="resultatet" ref={ref} scale={scaleYProgress}>
        <h2>Resultatet?</h2>
        <h1 className="resultat"> Knakende gode applikasjoner 🚀</h1>

        <p>
          Men det er ikke til å skyve under en stol at godt arbeid ikke
          nødvendigvis gir gode resultater om du gjør alt arbeidet alene. De
          beste digitale produktene blir til når dyktige mennesker jobber sammen
          i tverrfaglige team.
        </p>

        <p>
          <strong>
            Jeg tror på <span className="teamwork">teamwork</span> – ikke
            enmannsshow.
          </strong>
        </p>
      </div>
    </div>
  );
}
