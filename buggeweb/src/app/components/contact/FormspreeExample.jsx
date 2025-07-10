"use client";

import React, { useState } from "react";

export default function FormspreeExample() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Takk for din henvendelse!");
        e.target.reset();
      } else {
        alert("Beklager, noe gikk galt. Prøv igjen senere.");
      }
    } catch (error) {
      console.error("Feil ved sending:", error);
      alert("Beklager, noe gikk galt. Prøv igjen senere.");
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="navn" placeholder="Navn" required />
      <input type="email" name="email" placeholder="E-post" required />
      <textarea name="melding" placeholder="Melding" required />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sender..." : "Send"}
      </button>
    </form>
  );
}
