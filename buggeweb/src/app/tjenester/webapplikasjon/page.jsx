"use client";

import React from "react";
import ServicePageLayout from "../../components/layout/ServicePageLayout";
import styles from "../../components/layout/ServicePageLayout.module.scss";
import { motion } from "framer-motion";

export default function WebapplikasjonPage() {
  return (
    <ServicePageLayout
      title="Webapplikasjoner"
      description="Vi bygger fremtidens digitale verktøy. Skalerbare, sikre og lynraske applikasjoner som løser komplekse problemer."
      tags={["Next.js", "React", "Fullstack", "Cloud Architecture"]}
      color="0, 255, 148" // Greenish/Cyan
    >
      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2>Moderne teknologi</h2>
            <p>
              Nettet utvikler seg raskt, og vi holder følge. Vi utvikler applikasjoner
              på en moderne "stack" som sikrer høy ytelse, god sikkerhet og
              enestående brukeropplevelser. Med Next.js og React i bunn bygger vi
              løsninger som er like raske som de er kraftige.
            </p>
            <p>
              Enten du trenger et internt administrasjonspanel, en kundaportal
              eller en kompleks SaaS-løsning, har vi kompetansen til å realisere
              visjonen.
            </p>
          </div>
          <motion.div
            className={styles.visual}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                width: "85%",
                background: "rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
              }}
            >
                <div style={{
                    height: "36px", 
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)", 
                    display: "flex", 
                    gap: "8px", 
                    alignItems: "center", 
                    paddingLeft: "16px",
                    background: "rgba(255,255,255,0.03)"
                }}>
                    <div style={{width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57"}}></div>
                    <div style={{width: "12px", height: "12px", borderRadius: "50%", background: "#febc2e"}}></div>
                    <div style={{width: "12px", height: "12px", borderRadius: "50%", background: "#28c840"}}></div>
                </div>
                <div style={{padding: "24px", fontFamily: "'Courier New', monospace", fontSize: "0.9rem", color: "#e0e0e0", lineHeight: "1.6"}}>
                    <div><span style={{color: "#c792ea"}}>const</span> <span style={{color: "#82aaff"}}>App</span> = () ={">"} {"{"}</div>
                    <div style={{paddingLeft: "20px"}}><span style={{color: "#c792ea"}}>return</span> (</div>
                    <div style={{paddingLeft: "40px"}}>{`<`} <span style={{color: "#f78c6c"}}>Future</span></div>
                    <div style={{paddingLeft: "60px"}}><span style={{color: "#addb67"}}>performance</span>={"{"}<span style={{color: "#f78c6c"}}>100</span>{"}"}</div>
                    <div style={{paddingLeft: "60px"}}><span style={{color: "#addb67"}}>scalable</span>={"{"}<span style={{color: "#c792ea"}}>true</span>{"}"}</div>
                    <div style={{paddingLeft: "40px"}}>{`/>`}</div>
                    <div style={{paddingLeft: "20px"}}>)</div>
                    <div>{"}"}</div>
                    <br/>
                    <motion.div 
                        animate={{ opacity: [1, 0, 1] }} 
                        transition={{ duration: 0.8, repeat: Infinity }}
                        style={{ display: "inline-block", width: "10px", height: "18px", background: "#00FF94", verticalAlign: "middle" }}
                    />
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.grid} ${styles.reversed}`}>
          <div className={styles.text}>
            <h2>Skalerbarhet i fokus</h2>
            <p>
              En god applikasjon må kunne vokse med bedriften. Vi arkitekterer
              løsninger som tåler økt trafikk og nye funksjoner uten å knele.
              Gjennom modulær kode og skybasert infrastruktur legger vi til rette
              for smertefri skalering.
            </p>
            <p>
              Vi tenker langsiktig. Koden vi skriver i dag skal være like lett å
              vedlikeholde om to år. Ren kode, god dokumentasjon og beste praksis
              er en selvfølge.
            </p>
          </div>
          <motion.div
            className={styles.visual}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
             <div style={{display: "flex", gap: "20px", alignItems: "flex-end", height: "200px"}}>
                 <motion.div 
                    style={{width: "40px", background: "rgba(0, 255, 148, 0.2)", borderTop: "2px solid #00FF94", borderRadius: "4px 4px 0 0"}} 
                    initial={{ height: "40px" }}
                    whileInView={{height: "80px"}}
                    transition={{duration: 1.5, ease: "backOut"}}
                    viewport={{ once: true }}
                />
                 <motion.div 
                    style={{width: "40px", background: "rgba(0, 255, 148, 0.4)", borderTop: "2px solid #00FF94", borderRadius: "4px 4px 0 0"}} 
                    initial={{ height: "40px" }}
                    whileInView={{height: "120px"}}
                    transition={{duration: 1.5, delay: 0.2, ease: "backOut"}}
                    viewport={{ once: true }}
                />
                 <motion.div 
                    style={{width: "40px", background: "rgba(0, 255, 148, 0.6)", borderTop: "2px solid #00FF94", borderRadius: "4px 4px 0 0"}} 
                    initial={{ height: "40px" }}
                    whileInView={{height: "160px"}}
                    transition={{duration: 1.5, delay: 0.4, ease: "backOut"}}
                    viewport={{ once: true }}
                />
                 <motion.div 
                    style={{width: "40px", background: "rgba(0, 255, 148, 0.8)", borderTop: "2px solid #00FF94", borderRadius: "4px 4px 0 0", boxShadow: "0 0 20px rgba(0,255,148,0.5)"}} 
                    initial={{ height: "40px" }}
                    whileInView={{height: "200px"}}
                    transition={{duration: 1.5, delay: 0.6, ease: "backOut"}}
                    viewport={{ once: true }}
                />
             </div>
          </motion.div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
