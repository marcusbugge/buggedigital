"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  IconBrain,
  IconDatabase,
  IconRobot,
  IconRocket,
  IconCode,
  IconCpu,
} from "@tabler/icons-react";
import LandingPageLayout from "../components/layout/LandingPageLayout";
import AnimatedParagraph from "../components/ui/animations/AnimatedParagraph";
import styles from "./ai.module.scss";

export default function AiPage() {
  return (
    <div className={styles.pageWrapper}>
      <LandingPageLayout
        title="Intelligente systemer som skaper verdi i din bedrift"
        description="Jeg utvikler skreddersydde applikasjoner med AI i kjernen."
      />

      {/* Section Header for Bento Grid */}
      <div className={styles.secHeader}>
        <div className={styles.dotLine}>
          <div className={styles.dott}></div>
          <p>Ekspertise</p>
        </div>
      </div>

      {/* Bento Grid Content */}
      <div className={styles.bentoGrid}>
        {/* Card 1: System Architecture (Large) */}
        <div className={`${styles.card} ${styles.span2}`}>
          <div
            className={`${styles.gradientOrb} ${styles.gradientBlue}`}
            style={{
              width: "400px",
              height: "400px",
              top: "-100px",
              right: "-100px",
            }}
          ></div>
          <div className={styles.cardContent}>
            <div className={styles.cardIcon}>
              <IconCpu />
            </div>
            <div className={styles.cardText}>
              <h3>Systemarkitektur</h3>
              <p>
                Integrasjon av LLM-er i eksisterende infrastruktur krever nøye
                planlegging. Jeg designer systemer som er skalerbare, sikre og
                pålitelige, slik at AI-en blir en naturlig del av arbeidsflyten.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: RAG */}
        <div className={styles.card}>
          <div
            className={`${styles.gradientOrb} ${styles.gradientGreen}`}
            style={{
              width: "300px",
              height: "300px",
              bottom: "-50px",
              left: "-50px",
            }}
          ></div>
          <div className={styles.cardContent}>
            <div className={styles.cardIcon}>
              <IconDatabase />
            </div>
            <div className={styles.cardText}>
              <h3>RAG & Data</h3>
              <p>
                Dine data er gull verdt. Med RAG (Retrieval Augmented
                Generation) kan vi trygt koble bedriftens kunnskap til
                AI-modeller for presise svar uten hallusinasjoner.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Agents */}
        <div className={styles.card}>
          <div
            className={`${styles.gradientOrb} ${styles.gradientPink}`}
            style={{
              width: "300px",
              height: "300px",
              top: "10%",
              right: "-20%",
            }}
          ></div>
          <div className={styles.cardContent}>
            <div className={styles.cardIcon}>
              <IconRobot />
            </div>
            <div className={styles.cardText}>
              <h3>Autonome Agenter</h3>
              <p>
                Neste generasjons automatisering. Agenter som kan planlegge,
                resonnere og utføre komplekse oppgaver på egenhånd.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4: Tech Stack (Span 2) */}
        <div className={`${styles.card} ${styles.span2}`}>
          <div
            className={`${styles.gradientOrb} ${styles.gradientPurple}`}
            style={{
              width: "350px",
              height: "350px",
              bottom: "-100px",
              right: "20%",
            }}
          ></div>
          <div className={styles.cardContent}>
            <div className={styles.cardIcon}>
              <IconCode />
            </div>
            <div className={styles.cardText}>
              <h3>Verktøykasse</h3>
              <p style={{ marginBottom: "2rem" }}>
                Jeg velger teknologier basert på ytelse og stabilitet, ikke
                hype.
              </p>
              <div className={styles.techList}>
                <span>OpenAI API</span>
                <span>Anthropic Claude</span>
                <span>LangChain</span>
                <span>Vercel AI SDK</span>
                <span>Pinecone</span>
                <span>Supabase</span>
                <span>Next.js</span>
                <span>Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY AI Section */}
      <div className={styles.secHeader}>
        <div className={styles.dotLine}>
          <div className={styles.dott}></div>
          <p>Verdi</p>
        </div>
        <AnimatedParagraph>
          <h1>
            Hvorfor investere i AI nå? Det handler ikke om å følge en trend, men
            om å bygge langsiktig konkurransekraft.
          </h1>
        </AnimatedParagraph>
      </div>

      <div className={styles.whyContainer}>
        {/* Item 01 */}
        <div className={styles.whyRow}>
          <div className={styles.whyHeader}>
            <span className={styles.whyNumber}>01</span>
            <h4>Automatisering som skalerer</h4>
          </div>
          <div className={styles.whyBody}>
            <p>
              Manuelle prosesser er ofte flaskehalsen for vekst. Ved å la
              intelligente systemer håndtere rutineoppgaver, fra datafangst til
              saksbehandling, frigjør du menneskelige ressurser til
              verdiskapende arbeid. Dette er ikke bare effektivisering, det er å
              gjøre bedriften din rigget for fremtiden.
            </p>
            <div className={styles.benefitList}>
              <span>Redusert tidsbruk</span>
              <span>Færre menneskelige feil</span>
              <span>Økt kapasitet</span>
              <span>Kostnadsbesparelser</span>
            </div>
          </div>
        </div>

        {/* Item 02 */}
        <div className={styles.whyRow}>
          <div className={styles.whyHeader}>
            <span className={styles.whyNumber}>02</span>
            <h4>En kundeopplevelse i verdensklasse</h4>
          </div>
          <div className={styles.whyBody}>
            <p>
              Kunder forventer umiddelbare svar, men de ønsker også å bli
              forstått. Moderne AI muliggjør personlig oppfølging i stor skala.
              Vi kan bygge systemer som husker historikk, forstår kontekst og
              løser problemer proaktivt – døgnet rundt.
            </p>
            <div className={styles.benefitList}>
              <span>24/7 Tilgjengelighet</span>
              <span>Personalisering</span>
              <span>Raskere responstid</span>
              <span>Høyere kundetilfredshet</span>
            </div>
          </div>
        </div>

        {/* Item 03 */}
        <div className={styles.whyRow}>
          <div className={styles.whyHeader}>
            <span className={styles.whyNumber}>03</span>
            <h4>Fra rådata til strategisk innsikt</h4>
          </div>
          <div className={styles.whyBody}>
            <p>
              De fleste bedrifter sitter på enorme mengder data de ikke
              utnytter. AI kan se mønstre, trender og sammenhenger som er
              usynlige for det blotte øye. Gå fra å ta beslutninger basert på
              magefølelse til å handle basert på prediktiv analyse og harde
              fakta.
            </p>
            <div className={styles.benefitList}>
              <span>Prediktiv analyse</span>
              <span>Mønstergjenkjenning</span>
              <span>Datadrevne beslutninger</span>
              <span>Konkurransefortrinn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
