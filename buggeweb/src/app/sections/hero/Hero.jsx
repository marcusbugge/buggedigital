"use client";

import React from "react";
import "./Hero.css";
import Image from "next/image";
import Marcus from "../../assets/marcus-removebg.png";
import AnimatedParagraph from "../../components/ui/animations/AnimatedParagraph";
import AnimatedHeader from "../../components/ui/animations/AnimatedHeader";
import { motion, useScroll, useTransform } from "framer-motion";
import { StarsBackground } from "../../components/ui/StarsBackground";
import { HeroHighlight } from "../../components/ui/HeroHighlight";
import LandingPageLayout from "../../components/layout/LandingPageLayout";
export default function Hero() {
  return (
    <div className="hero">
      <LandingPageLayout title="Vi er et komplett design- og utviklingsstudio" />
    </div>
  );
}
