"use client";

import React from "react";
import ServicePageLayout from "../../components/layout/ServicePageLayout";
import styles from "../../components/layout/ServicePageLayout.module.scss";
import { motion } from "framer-motion";
import GrainEffect from "../../components/ui/GrainEffect";

export default function HostingPage() {
  return (
    <ServicePageLayout
      title="Drift & Hosting"
      description="Sov godt om natten. Vi sørger for at dine løsninger er trygge, raske og alltid tilgjengelige for dine kunder."
      tags={["Cloud Hosting", "Security", "Maintenance", "24/7 Monitoring"]}
      color="100, 100, 255" // Indigo/Blue
    >
      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2>Hastighet er alt</h2>
            <p>
              Ingen liker å vente. Vi hoster dine løsninger på lynraske servere
              optimalisert for ytelse. Med CDN-teknologi leveres innholdet ditt
              fra servere nærmest brukeren, uansett hvor i verden de befinner seg.
            </p>
            <p>
              Raske nettsider gir ikke bare fornøyde brukere, men også bedre
              ranking i Google. Vi finjusterer infrastrukturen for maksimal
              respons.
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
             <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 {/* Server Ring */}
                 <motion.div
                    style={{
                        width: "250px",
                        height: "250px",
                        borderRadius: "50%",
                        border: "1px solid rgba(100, 100, 255, 0.3)",
                        position: "absolute"
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 >
                    <div style={{ width: "10px", height: "10px", background: "#6464FF", borderRadius: "50%", position: "absolute", top: "-5px", left: "50%", transform: "translateX(-50%)", boxShadow: "0 0 10px #6464FF" }} />
                 </motion.div>

                 {/* Speedometer */}
                 <div style={{
                     width: "180px",
                     height: "180px",
                     borderRadius: "50%",
                     background: "radial-gradient(circle, rgba(100, 100, 255, 0.2) 0%, transparent 70%)",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     position: "relative"
                 }}>
                     <svg width="100%" height="100%" viewBox="0 0 200 200" style={{ transform: "rotate(135deg)" }}>
                        <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" strokeDasharray="565" strokeDashoffset="141" strokeLinecap="round" />
                        <motion.circle 
                            cx="100" cy="100" r="90" 
                            fill="none" 
                            stroke="#6464FF" 
                            strokeWidth="10" 
                            strokeDasharray="565" 
                            strokeDashoffset="565" 
                            strokeLinecap="round" 
                            animate={{ strokeDashoffset: 145 }} // approx 75%
                            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                        />
                     </svg>
                     <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        style={{ position: "absolute", textAlign: "center", transform: "rotate(0deg)" }}
                     >
                        <span style={{ fontSize: "2.5rem", fontWeight: "bold", color: "white" }}>99</span>
                        <span style={{ fontSize: "1.2rem", color: "#aaa" }}>/100</span>
                     </motion.div>
                 </div>
             </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.grid} ${styles.reversed}`}>
          <div className={styles.text}>
            <h2>Sikkerhet i høysetet</h2>
            <p>
              Trusselbildet er i stadig endring. Vi tar sikkerhet på alvor med
              automatiske oppdateringer, brannmurer og jevnlige sikkerhetssjekker.
              Dine data er trygge hos oss.
            </p>
            <p>
              Vi overvåker systemene 24/7 og reagerer proaktivt på eventuelle
              problemer før de påvirker dine kunder. Du fokuserer på bedriften, vi
              tar oss av teknikken.
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
             <div style={{
                 width: "180px",
                 height: "220px",
                 background: "rgba(100, 100, 255, 0.05)",
                 border: "2px solid #6464FF",
                 borderRadius: "20px",
                 display: "flex",
                 flexDirection: "column",
                 alignItems: "center",
                 justifyContent: "center",
                 position: "relative",
                 boxShadow: "0 0 30px rgba(100, 100, 255, 0.2)"
             }}>
                 {/* Shield Icon Animation */}
                 <svg width="80" height="100" viewBox="0 0 80 100">
                    <motion.path 
                        d="M40 95 C 40 95, 5 75, 5 30 L 5 10 L 40 0 L 75 10 L 75 30 C 75 75, 40 95, 40 95 Z"
                        fill="none"
                        stroke="#6464FF"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5 }}
                    />
                    <motion.path 
                        d="M25 45 L 35 55 L 55 35"
                        fill="none"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                    />
                 </svg>
                 
                 <motion.div
                    style={{
                        position: "absolute",
                        bottom: "20px",
                        fontSize: "0.8rem",
                        color: "#6464FF",
                        fontWeight: "bold",
                        letterSpacing: "1px"
                    }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                 >
                    SECURE
                 </motion.div>
             </div>
          </motion.div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
