import React from "react";

import LandingPageLayout from "../components/layout/LandingPageLayout";
import ProjectGrid from "./ProjectGrid";

// Bruk tag-based revalidation i stedet for time-based
// Dette gir bedre kontroll og umiddelbar oppdatering når Sanity sender webhook
export const dynamic = 'force-dynamic';

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
