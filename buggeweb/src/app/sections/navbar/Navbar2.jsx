"use client";

import React, { useState, useEffect, useCallback } from "react";
import "./Navbar2.scss";
import Link from "next/link";
import Arrow from "../../components/Arrow";
import NavHover from "./NavHover";
import AnimatedLink from "../../components/AnimatedLink";

// Throttle funksjon for å begrense scroll-hendelser
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export default function Navbar2() {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showServices, setShowServices] = useState(false);

  const services = [
    "Webdesign",
    "Webhosting",
    "Webutvikling",
    "SEO",
    "Digital markering",
  ];

  const handleScroll = useCallback(
    throttle(() => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    }, 100),
    [prevScrollPos]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className={`navbar2 ${visible ? "navbar-visible" : "navbar-hidden"}`}>
      <div className="logo-container">
        <svg
          width="25"
          height="25"
          viewBox="0 0 215 213"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 113H210V173C210 195.091 192.091 213 170 213H0V113Z"
            fill="#F97288"
          />
          <path
            d="M0 12C0 5.37258 5.37258 0 12 0H88C94.6274 0 100 5.37258 100 12V88C100 94.6274 94.6274 100 88 100H12C5.37258 100 0 94.6274 0 88V12Z"
            fill="#00FF94"
          />
          <rect x="115" width="100" height="100" rx="50" fill="white" />
        </svg>{" "}
        <h1> BuggeDigital </h1>
      </div>
      <div className="tags">
        <AnimatedLink href="/" className="nav-link" white="true">
          Hjem
        </AnimatedLink>
        <AnimatedLink href="/ai" className="nav-link" white="true">
          AI
        </AnimatedLink>

        <AnimatedLink href="/prosjekter" className="nav-link" white="true">
          Prosjekter
        </AnimatedLink>
        <AnimatedLink href="/artikler" className="nav-link" white="true">
          Artikler
        </AnimatedLink>

        <Link href="/booking" className="ta-kontakt" white="true">
          <span>Book et møte</span>
        </Link>
      </div>
    </div>
  );
}
