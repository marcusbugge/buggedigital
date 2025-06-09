import React from "react";
import "./CV.scss";
import CVElement from "./CVElement";

export default function CV() {
  return (
    <div className="cv-container">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none" // Ensures it stretches to cover the container
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cv-svg"
      >
        <rect width="100" height="100" fill="url(#gradient-fill)" />
        <defs>
          <linearGradient
            id="gradient-fill"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#000000" />
            <stop offset="1" stopColor="var(--black-50)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="cv-page">
        <h1>Erfaring og CV</h1>

        <div className="cv-cnt">
          <div className="utdanning">
            <p className="cv-p">Utdanning</p>
            <CVElement
              title="NTNU - Master Kunstig Intelligens"
              description="Påbegynt master - 2022"
            />
            <CVElement
              title="OsloMet - Dataingeniør"
              description="Bachelorgrad - 2019-2022"
            />
            <CVElement title="Fagbrev - Dataelektroniker" description="2016" />
          </div>
          <div className="utdanning">
            <p className="cv-p">Arbeidshistorikk</p>
            <CVElement
              title="Fullstack-utvikler og UX-designer"
              description="Bugge Digital - 2024-"
            />
            <CVElement
              title="Fullstack-utvikler"
              description="Experis Academy - 2022-2024"
            />
            <CVElement
              title="IT - Support"
              description="Capgemini - 2021-2022"
            />
            <CVElement title="Eier" description="TAE Esports - 2020-" />
            <CVElement
              title="Grafisk Designer"
              description="Sparta Sport - 2016-2021"
            />
          </div>
          <div className="utdanning">
            <p className="cv-p">Sertifiseringer</p>
            <div className="serts">
              {" "}
              <div>
                <h2>Azure Fundamentals - AZ900</h2>
              </div>
              <div>
                <h2>Azure AI Fundamentals - AI900</h2>
              </div>
              <div>
                <h2>Noroff Fullstack Developer</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
