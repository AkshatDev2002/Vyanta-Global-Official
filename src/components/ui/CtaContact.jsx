"use client";

import { useState, useRef } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import styles from "./CtaContact.module.css";

export default function CtaContact({
  bannerText = "Start Your Big Data Transformation Today!",
  submitText = "Get in Touch",
}) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    if (!executeRecaptcha || loading) {
      setStatus("error");
      return;
    }

    setLoading(true);

    try {
      const recaptchaToken = await executeRecaptcha("cta_contact_submit");
      if (!recaptchaToken) throw new Error("reCAPTCHA token missing");

      const formData = Object.fromEntries(new FormData(e.target));

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      e.target.reset();
    } catch (err) {
      console.error("CTA Contact error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.ctaSection}>
      {/* Banner */}
      <div className={styles.ctaBanner}>
        <h2>{bannerText}</h2>

        {/* 🔥 NEW CTA BUTTON */}
        <button
          type="button"
          className={styles.bannerCta}
          onClick={scrollToForm}
        >
          Contact Us ↓
        </button>
      </div>

      {/* Form */}
      <div className={styles.ctaFormWrapper} ref={formRef}>
        <form className={styles.ctaForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input name="name" type="text" placeholder="Your full name" required />
          </div>

          <div className={styles.formGroup}>
            <label>Company Name</label>
            <input name="company" type="text" placeholder="Your company" />
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <input name="email" type="email" placeholder="you@company.com" required />
          </div>

          <div className={styles.formGroup}>
            <label>Your Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your data challenges or goals"
              required
            />
          </div>

          <button type="submit" className={styles.ctaSubmit} disabled={loading}>
            {loading ? "Sending..." : submitText}
          </button>

          {status === "success" && (
            <p className={styles.success}>
              Thanks! Message sent successfully. We’ll get back to you shortly.
            </p>
          )}

          {status === "error" && (
            <p className={styles.error}>
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
