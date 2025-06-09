import React from "react";

export default function CVElement({ title, description }) {
  return (
    <div className="cv-elem">
      <div className="elem-stripe"></div>
      <div className="elem-text">
        {" "}
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
