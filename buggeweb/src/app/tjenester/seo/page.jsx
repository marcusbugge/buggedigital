"use client";

import React from "react";
import ServicePageLayout from "../../components/layout/ServicePageLayout";
import styles from "../../components/layout/ServicePageLayout.module.scss";
import { motion } from "framer-motion";
import GrainEffect from "../../components/ui/GrainEffect";

export default function SEOPage() {
  return (
    <ServicePageLayout
      title="Søkemotoroptimalisering"
      description="Bli funnet av de som leter etter deg. Vi optimaliserer ditt digitale fotavtrykk for maksimal synlighet og organisk vekst."
      tags={["Technical SEO", "Content Strategy", "Analytics", "Ranking"]}
      color="255, 213, 113" // Yellow/Gold
    >
      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2>Synlighet som varer</h2>
            <p>
              SEO handler ikke om å lure systemet, men om å levere verdi. Vi
              hjelper deg å strukturere innholdet ditt slik at både Google og dine
              kunder forstår hva du tilbyr. Gjennom teknisk optimalisering sørger
              vi for at nettsiden din er lynrask, mobilvennlig og lett å indeksere.
            </p>
            <p>
              Vi jobber langsiktig for å bygge autoritet i din bransje, slik at du
              klatrer på resultatlistene og blir der.
            </p>
          </div>
          <motion.div
            className={styles.visual}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
             <GrainEffect opacity={0.15} />
             <div style={{
                 display: "flex",
                 alignItems: "flex-end",
                 gap: "15px",
                 width: "80%",
                 height: "60%"
             }}>
                 {[40, 60, 45, 80, 70, 95, 100].map((height, i) => (
                    <motion.div 
                        key={i}
                        style={{
                            width: "100%",
                            background: `linear-gradient(to top, rgba(255, 213, 113, 0.2), rgba(255, 213, 113, ${0.5 + (i*0.05)}))`,
                            borderRadius: "4px 4px 0 0",
                            borderTop: "2px solid #FFD571"
                        }}
                        initial={{height: "10%"}}
                        whileInView={{height: `${height}%`}}
                        transition={{duration: 1, delay: i * 0.1, ease: "circOut"}}
                        viewport={{ once: true }}
                    />
                 ))}
             </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.grid} ${styles.reversed}`}>
          <div className={styles.text}>
            <h2>Datadrevet strategi</h2>
            <p>
              Vi synser ikke. Vi analyserer søkeord, konkurrenter og trafikkdata for
              å finne mulighetene andre overser. Med en skreddersydd
              innholdsstrategi treffer du målgruppen din i alle faser av
              kjøpsreisen.
            </p>
            <p>
              Vi måler alt. Du får full oversikt over utviklingen, slik at vi
              kontinuerlig kan justere kursen og maksimere din ROI.
            </p>
          </div>
          <motion.div
            className={styles.visual}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GrainEffect opacity={0.12} />
            <div style={{ width: "80%", height: "80%", position: "relative" }}>
                <svg width="100%" height="100%" viewBox="0 0 200 200" style={{ overflow: "visible" }}>
                    {/* Grid lines */}
                    <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <line x1="0" y1="150" x2="200" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    
                    <motion.path
                        d="M 0 180 C 40 160, 60 140, 100 100 S 160 80, 200 20"
                        fill="none"
                        stroke="#FFD571"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    
                    {/* Area under curve */}
                    <motion.path
                        d="M 0 180 C 40 160, 60 140, 100 100 S 160 80, 200 20 L 200 200 L 0 200 Z"
                        fill="url(#gradientSEO)"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.2 }}
                        transition={{ duration: 2, delay: 0.5 }}
                    />
                    
                    <defs>
                        <linearGradient id="gradientSEO" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FFD571" stopOpacity="1"/>
                            <stop offset="100%" stopColor="#FFD571" stopOpacity="0"/>
                        </linearGradient>
                    </defs>

                    {[
                        {x: 100, y: 100},
                        {x: 200, y: 20}
                    ].map((point, i) => (
                         <motion.circle 
                            key={i}
                            cx={point.x} 
                            cy={point.y} 
                            r="6" 
                            fill="#121212"
                            stroke="#FFD571"
                            strokeWidth="3"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 1 + i * 0.5, type: "spring" }}
                        />
                    ))}
                </svg>
            </div>
          </motion.div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
