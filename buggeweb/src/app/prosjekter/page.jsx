import React from "react";

import LandingPageLayout from "../components/layout/LandingPageLayout";
import ProjectGrid from "./ProjectGrid";

export default function page() {
  return (
    <div className="prosjekter-page">
      <LandingPageLayout
        title="Bra design ser kult ut, men godt design løser et problem"
        description="Scroll for å se tidligere prosjekter"
      />
      <ProjectGrid />
    </div>
  );
}
