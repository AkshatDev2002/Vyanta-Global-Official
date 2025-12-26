"use client";

import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import styles from "./JobContact.module.css";

export default function JobContact({
  bannerText = "Vyanta Global Career Opportunities",
  submitText = "Submit Application",
}) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    if (!executeRecaptcha || loading) {
      setStatus("error");
      return;
    }

    setLoading(true);

    try {
      const recaptchaToken = await executeRecaptcha("job_application_submit");

      const formData = new FormData(e.target);
      formData.append("recaptchaToken", recaptchaToken);

      const res = await fetch("/api/job", {
        method: "POST",
        body: formData, // IMPORTANT: no headers
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Request failed");
      }

      setStatus("success");
      e.target.reset();
    } catch (err) {
      console.error("Job application error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.jobSection}>
      <div className={styles.jobBanner}>
        <h2>{bannerText}</h2>
      </div>

      <div className={styles.jobIntro}>
        <p>
          Share your details below and we’ll reach out when opportunities align.
        </p>
      </div>

      <div className={styles.jobFormWrapper}>
        <form className={styles.jobForm} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label>First Name *</label>
              <input name="firstName" required />
            </div>

            <div className={styles.formGroup}>
              <label>Last Name *</label>
              <input name="lastName" required />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Email *</label>
            <input name="email" type="email" required />
          </div>

          <div className={styles.formGroup}>
            <label>Years of Experience</label>
            <input name="experience" />
          </div>

          <div className={styles.formGroup}>
            <label>Preferred Location</label>
            <input name="location" />
          </div>

          <div className={styles.formGroup}>
            <label>Key Skills *</label>
            <textarea name="skills" rows={4} required />
          </div>

          {/* 🔥 RESUME UPLOAD */}
          <div className={styles.formGroup}>
            <label>Upload Resume (PDF/DOC)</label>
            <input
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : submitText}
          </button>

          {status === "success" && (
            <p className={styles.success}>
              Application submitted successfully.
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
