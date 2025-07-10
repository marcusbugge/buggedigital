"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function EmailJSExample() {
  const [formData, setFormData] = useState({
    navn: "",
    email: "",
    melding: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "YOUR_SERVICE_ID", // Fra EmailJS
        "YOUR_TEMPLATE_ID", // Fra EmailJS
        {
          from_name: formData.navn,
          from_email: formData.email,
          message: formData.melding,
        },
        "YOUR_PUBLIC_KEY" // Fra EmailJS
      );

      console.log("E-post sendt:", result);
      alert("Takk for din henvendelse!");
      setFormData({ navn: "", email: "", melding: "" });
    } catch (error) {
      console.error("Feil ved sending:", error);
      alert("Beklager, noe gikk galt. Prøv igjen senere.");
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Navn"
        value={formData.navn}
        onChange={(e) => setFormData({ ...formData, navn: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="E-post"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <textarea
        placeholder="Melding"
        value={formData.melding}
        onChange={(e) => setFormData({ ...formData, melding: e.target.value })}
        required
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sender..." : "Send"}
      </button>
    </form>
  );
}
