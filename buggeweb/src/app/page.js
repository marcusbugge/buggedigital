import React from "react";
import bg from "../app/assets/bg.png";
import Image from "next/image";
import Hero from "../app/sections/hero/Hero.jsx";
import Portofolio from "./sections/portofolio/Portofolio";
import Details from "./sections/details/Details";

import Hvordan from "./sections/hvordan/Hvordan";
import Work from "./sections/work/Work";
import CV from "./sections/cv/CV";
import Services from "./sections/services/Services";
import Footer from "./sections/footer/Footer";
import Navbar2 from "./sections/navbar/Navbar2";
import LandingPageLayout from "./components/layout/LandingPageLayout";
import Contact from "./components/contact/Contact";
import Teknologier from "./sections/teknologier/Teknologier";
import { getProjects } from "./lib/sanity";
import Carousel from "./sections/portofolio/Carousel";
import Hero2 from "./sections/hero/Hero2";
export default async function Home() {
  const projects = await getProjects();

  console.log(projects);

  return (
    <main className="page">
      <Hero />
      <Portofolio projects={projects} />
      <Details />
    </main>
  );
}
