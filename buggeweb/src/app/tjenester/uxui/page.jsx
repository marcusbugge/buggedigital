"use client";

import React from "react";
import ServicePageLayout from "../../components/layout/ServicePageLayout";
import styles from "../../components/layout/ServicePageLayout.module.scss";
import { motion } from "framer-motion";
import GrainEffect from "../../components/ui/GrainEffect";

export default function UIUXPage() {
  return (
    <ServicePageLayout
      title="UI/UX Design"
      description="Design som setter brukeren i sentrum. Vi skaper intuitive, engasjerende og vakre grensesnitt som folk elsker å bruke."
      tags={["User Research", "Prototyping", "Interaction Design", "Wireframing"]}
      color="173, 156, 255" // Purple/Lavender
    >
      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2>Forstå brukeren</h2>
            <p>
              Godt design starter med empati. Vi dykker ned i dine brukeres behov,
              ønsker og frustrasjoner for å forstå hva som virkelig betyr noe.
              Gjennom brukerreiser, intervjuer og testing avdekker vi innsikten
              som danner grunnlaget for enestående opplevelser.
            </p>
            <p>
              Vi gjetter ikke. Vi baserer våre designvalg på data og reelle
              brukerbehov for å sikre at løsningen treffer blink.
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
                {/* Central "User" node */}
                 <motion.div 
                    style={{
                        width: "80px", 
                        height: "80px",
                        borderRadius: "50%",
                        background: "#AD9CFF",
                        zIndex: 10,
                        boxShadow: "0 0 30px rgba(173, 156, 255, 0.4)"
                    }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                 />
                 
                 {/* Orbiting Insight Nodes */}
                 {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        style={{
                            position: "absolute",
                            width: "200px",
                            height: "200px",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "50%",
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                    >
                        <motion.div 
                            style={{
                                width: "20px",
                                height: "20px",
                                background: "rgba(255, 255, 255, 0.8)",
                                borderRadius: "50%",
                                position: "absolute",
                                top: "-10px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)"
                            }}
                        />
                    </motion.div>
                 ))}
             </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.grid} ${styles.reversed}`}>
          <div className={styles.text}>
            <h2>Sømløs interaksjon</h2>
            <p>
              Et grensesnitt skal føles usynlig. Vi designer flyt som leder brukeren
              naturlig gjennom applikasjonen, uten friksjon eller forvirring.
              Mikrointeraksjoner, animasjoner og tydelige tilbakemeldinger gir
              liv til designet og gjør det til en fryd å bruke.
            </p>
            <p>
              Vi balanserer estetikk og funksjonalitet for å skape produkter som
              ikke bare fungerer feilfritt, men som også ser fantastiske ut.
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
                width: "60%",
                background: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(173, 156, 255, 0.3)",
                borderRadius: "15px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                position: "relative"
            }}>
                 {/* Cursor element */}
                 <motion.div
                    style={{
                        position: "absolute",
                        width: "20px", height: "20px",
                        background: "white",
                        borderRadius: "50%",
                        zIndex: 20,
                        pointerEvents: "none",
                        mixBlendMode: "difference"
                    }}
                    animate={{
                        x: [20, 150, 150, 20],
                        y: [100, 100, 140, 100],
                        scale: [1, 0.8, 1, 1]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                 />

                <div style={{width: "40%", height: "10px", background: "rgba(173, 156, 255, 0.5)", borderRadius: "5px"}}></div>
                <div style={{width: "100%", height: "10px", background: "rgba(255,255,255,0.05)", borderRadius: "5px"}}></div>
                <div style={{width: "100%", height: "10px", background: "rgba(255,255,255,0.05)", borderRadius: "5px"}}></div>
                
                <motion.div 
                    style={{
                        width: "40%", height: "40px", 
                        background: "#AD9CFF", 
                        borderRadius: "8px", 
                        marginTop: "20px",
                        alignSelf: "flex-end"
                    }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, times: [0.4, 0.5, 0.6] }}
                />
            </div>
          </motion.div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
