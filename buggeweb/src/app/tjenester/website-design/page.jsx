"use client";

import React from "react";
import ServicePageLayout from "../../components/layout/ServicePageLayout";
import styles from "../../components/layout/ServicePageLayout.module.scss";
import { motion } from "framer-motion";
import GrainEffect from "../../components/ui/GrainEffect";

export default function DesignPage() {
  return (
    <ServicePageLayout
      title="Design & Identitet"
      description="Vi former merkevarer som ikke bare blir sett, men husket. Gjennom strategisk design skaper vi visuelle språk som kommuniserer dine verdier."
      tags={["Brand Identity", "Visual Systems", "Digital Design", "Art Direction"]}
      color="249, 114, 136" // Pinkish
    >
      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2>Identitet som står ut</h2>
            <p>
              I et hav av støy er det de tydeligste stemmene som blir hørt. Vi
              hjelper deg å finne din unike stemme gjennom en grundig
              designprosess. Det handler ikke bare om en logo, men om hele
              økosystemet av visuelle elementer som utgjør din merkevare.
            </p>
            <p>
              Vi utvikler komplette designsystemer som sikrer konsistens på tvers
              av alle flater, fra nettsider og apper til presentasjoner og
              markedsmateriell.
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
               {/* Abstract Typography Art */}
               <motion.div
                 style={{
                    fontSize: "12rem",
                    fontWeight: "800",
                    lineHeight: 1,
                    position: "absolute",
                    color: "transparent",
                    WebkitTextStroke: "2px rgba(249, 114, 136, 0.3)",
                    zIndex: 1
                 }}
                 animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                 }}
                 transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                 }}
               >
                 Aa
               </motion.div>
               <motion.div
                 style={{
                    fontSize: "12rem",
                    fontWeight: "800",
                    lineHeight: 1,
                    position: "absolute",
                    color: "#F97288",
                    opacity: 0.8,
                    zIndex: 2,
                    mixBlendMode: "overlay"
                 }}
                 animate={{
                    y: [0, -10, 0],
                 }}
                 transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                 }}
               >
                 Aa
               </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.grid} ${styles.reversed}`}>
          <div className={styles.text}>
            <h2>Visuell historiefortelling</h2>
            <p>
              Design er språk uten ord. Vi bruker farger, typografi, rom og form
              for å vekke følelser og bygge tillit. Hvert valg er intensjonelt,
              forankret i din strategi og rettet mot dine målgrupper.
            </p>
            <p>
              Ved å kombinere estetikk med funksjonalitet, skaper vi design som
              ikke bare ser bra ut, men som løser problemer og driver
              resultater.
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
             <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
                padding: "60px",
                transform: "rotate(-10deg) scale(0.9)"
              }}
            >
                {[...Array(9)].map((_, i) => (
                    <motion.div 
                        key={i} 
                        style={{
                            background: i % 2 === 0 ? "rgba(249, 114, 136, 0.2)" : "rgba(255,255,255,0.05)",
                            borderRadius: "12px",
                            border: "1px solid rgba(255,255,255,0.1)",
                            aspectRatio: "1"
                        }} 
                        whileHover={{ scale: 1.1, backgroundColor: "#F97288" }}
                        transition={{ duration: 0.3 }}
                    />
                ))}
            </div>
          </motion.div>
        </div>
      </section>
      
       <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2>Fra konsept til virkelighet</h2>
            <p>
              Vi er med deg hele veien. Fra de første skissene på papiret til
              det ferdige produktet leveres. Vår prosess er iterativ og
              samarbeidsorientert, hvor dine innspill er en viktig del av
              reisen.
            </p>
            <p>
                Resultatet er et design som er autentisk for din bedrift og som
                står seg over tid.
            </p>
          </div>
          <motion.div
            className={styles.visual}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
             <GrainEffect opacity={0.12} />
             <div style={{ position: "relative" }}>
                 <motion.div 
                    style={{
                        width: "250px",
                        height: "250px",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 >
                    <div style={{ width: "10px", height: "10px", background: "white", borderRadius: "50%", position: "absolute", top: "-5px", left: "50%", transform: "translateX(-50%)" }} />
                 </motion.div>
                 
                 <div style={{
                     width: "180px",
                     height: "180px",
                     background: "linear-gradient(135deg, #F97288, #b83b5e)",
                     borderRadius: "50%",
                     boxShadow: "0 0 50px rgba(249, 114, 136, 0.4)",
                     position: "relative",
                     zIndex: 2
                 }}/>
             </div>
          </motion.div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
