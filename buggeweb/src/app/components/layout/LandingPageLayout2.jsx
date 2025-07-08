import React from "react";
import styles from "./LandingPageLayout2.scss";

export default function LandingPageLayout2(props) {
  return (
    <div className="header-container">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}
