"use client";

import React, { useState, useRef } from "react";
import "./Contact.scss";
import AnimatedParagraph from "../ui/animations/AnimatedParagraph";
import AnimatedHeader from "../ui/animations/AnimatedHeader";
import { motion, useInView } from "framer-motion";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    navn: "",
    selskap: "",
    email: "",
    telefon: "",
    interesser: [],
    prosjekt: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const tagVariant = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    },
  };

  const tagsRef = useRef(null);
  const isInView = useInView(tagsRef, {
    once: true,
    amount: 0.3,
    margin: "100px",
  });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.navn.trim()) {
      newErrors.navn = "Navn er påkrevd";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email er påkrevd";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Ugyldig email format";
    }

    if (!formData.telefon.trim()) {
      newErrors.telefon = "Telefonnummer er påkrevd";
    } else if (!/^(\+47)?[0-9]{8}$/.test(formData.telefon.replace(/\s/g, ""))) {
      newErrors.telefon = "Ugyldig telefonnummer";
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => {
      const interesser = prev.interesser.includes(service)
        ? prev.interesser.filter((s) => s !== service)
        : [...prev.interesser, service];
      return { ...prev, interesser };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Vennligst rett opp feilene i skjemaet", {
        description: "Sjekk at alle påkrevde felt er fylt ut riktig.",
      });
      return;
    }

    setIsSubmitting(true);

    const submitPromise = new Promise(async (resolve, reject) => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          resolve(result);
        } else {
          reject(new Error(result.message || "Noe gikk galt"));
        }
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(submitPromise, {
      loading: "Sender melding...",
      success: () => {
        setFormData({
          navn: "",
          selskap: "",
          email: "",
          telefon: "",
          interesser: [],
          prosjekt: "",
        });
        setIsSubmitting(false);
        return "Takk! Meldingen er sendt 🚀";
      },
      error: (err) => {
        setIsSubmitting(false);
        console.error("Feil ved sending:", err);
        return `Feil: ${err.message || "Kunne ikke sende meldingen"}`;
      },
    });
  };

  return (
    <div className="contact-cnt" id="contact-form">
      <div className="form-glow-container">
        <div className="glow-blob glow-1"></div>
        <div className="glow-blob glow-2"></div>
        <div className="glow-blob glow-3"></div>
      </div>
      <form onSubmit={handleSubmit} className="contact">
        <div className="left">
          <AnimatedParagraph>
            <h1>La oss gjøre en forskjell 🚀</h1>
          </AnimatedParagraph>
        </div>

        <div className="right">
          <div className="contact-data">
            <div>
              <AnimatedHeader>
                <label>Navn *</label>
              </AnimatedHeader>
              <input
                type="text"
                name="navn"
                value={formData.navn}
                onChange={handleInputChange}
                placeholder="Darth Vader"
                className={errors.navn ? "error" : ""}
              />
              {errors.navn && (
                <span className="error-message">{errors.navn}</span>
              )}
            </div>
            <div>
              <AnimatedHeader>
                <label>Selskap</label>
              </AnimatedHeader>
              <input
                type="text"
                name="selskap"
                value={formData.selskap}
                onChange={handleInputChange}
                placeholder="Bugge Digital"
              />
            </div>
            <div>
              <AnimatedHeader>
                <label>Din Email *</label>
              </AnimatedHeader>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="starwars@gmail.com"
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
            <div>
              <AnimatedHeader>
                <label>Ditt telefonnummer *</label>
              </AnimatedHeader>
              <input
                type="tel"
                name="telefon"
                value={formData.telefon}
                onChange={handleInputChange}
                placeholder="+47 98765432"
                className={errors.telefon ? "error" : ""}
              />
              {errors.telefon && (
                <span className="error-message">{errors.telefon}</span>
              )}
            </div>
          </div>

          <div className="interestedIn">
            <label>Hva er du interessert i?</label>

            <motion.div
              ref={tagsRef}
              className="tags"
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={container}
            >
              {[
                "Webdesign",
                "SEO",
                "UI/UX",
                "Webutvikling",
                "Landingsside",
              ].map((service, index) => (
                <motion.div
                  key={service}
                  className={`service-tag ${
                    formData.interesser.includes(service) ? "active" : ""
                  }`}
                  variants={tagVariant}
                  onClick={() => handleServiceToggle(service)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    color: formData.interesser.includes(service)
                      ? "black"
                      : "white",
                    backgroundColor: formData.interesser.includes(service)
                      ? "var(--white-100)"
                      : "",
                  }}
                  transition={{
                    backgroundColor: { duration: 0.2 },
                    layout: { duration: 0.3 },
                  }}
                >
                  <p>{service}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="project-info">
            <label>Fortell mer om prosjektet</label>

            <textarea
              name="prosjekt"
              value={formData.prosjekt}
              onChange={handleInputChange}
              placeholder=""
            />
          </div>

          <button type="submit" className="send-button" disabled={isSubmitting}>
            {isSubmitting ? "Sender..." : "Send"}
          </button>
        </div>

        <div className="aurora-container">
          <div className="aurora-blob blob-1"></div>
          <div className="aurora-blob blob-2"></div>
          <div className="aurora-blob blob-3"></div>
          <div className="aurora-blob blob-4"></div>
          <div className="aurora-grain"></div>
        </div>
      </form>
    </div>
  );
}

const ServiceTag = ({ service, isSelected, onClick }) => {
  return (
    <div
      className={`service-tag ${isSelected ? "selected" : ""} ${
        isSelected ? "active" : ""
      }`}
      onClick={onClick}
    >
      <p>{service}</p>
    </div>
  );
};
