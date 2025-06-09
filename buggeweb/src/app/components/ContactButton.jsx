import React from "react";

export default function ContactButton({ size }) {
  const scrollToContactForm = () => {
    const contactFormElement = document.getElementById("contact-form");
    if (contactFormElement) {
      contactFormElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`contact-button ${size}`} onClick={scrollToContactForm}>
      <p>Ta kontakt 👋</p>
    </div>
  );
}
