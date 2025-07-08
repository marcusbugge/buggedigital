"use client";

import React, { useEffect } from "react";
import "./booking.scss";
import LandingPageLayout from "../components/layout/LandingPageLayout";
import AnimatedParagraph from "../components/ui/animations/AnimatedParagraph";

export default function Page() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="booking">
      <LandingPageLayout
        title="La oss gjøre en forskjell 🚀"
        description="Ta kontakt med oss for en helt uforpliktende samtale om ditt prosjekt"
      />
      <div className="booking-content">
        <div className="left">
          <p>Book en videosamtale</p>
          <AnimatedParagraph>
            <h1>Ønsker du å diskutere prosjektet?</h1>
          </AnimatedParagraph>
        </div>

        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/kapto98/30min?background_color=121212&text_color=ffffff&primary_color=ffffff"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </div>
  );
}
