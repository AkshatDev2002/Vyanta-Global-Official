"use client";

import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import styles from "./InternContact.module.css";

export default function InternContact() {
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
      const recaptchaToken = await executeRecaptcha("internship_submit");

      const formData = Object.fromEntries(new FormData(e.target));

      const res = await fetch("/api/intern", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setStatus("success");
      e.target.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        <h2>Launch Your Career in Data Engineering With Vyanta's Internship Program</h2>
      </div>

      <div className={styles.wrapper}>
        <p className={styles.intro}>
          Apply for our structured, project-based internship program and kickstart
          your career in data engineering with real-world exposure.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <input name="firstName" placeholder="First Name*" required />
            <input name="middleName" placeholder="Middle Name" />
            <input name="lastName" placeholder="Last Name*" required />
          </div>

          <input name="email" type="email" placeholder="Email Address*" required />
          <input name="phone" placeholder="Phone Number*" required />
          <input name="currentLocation" placeholder="Current Location" />
          <input name="preferredLocation" placeholder="Preferred Work Location" />
          <input name="degree" placeholder="Highest Qualification / Degree*" required />

          <select name="passingYear" required>
            <option value="">Expected Graduation Year*</option>
            <option value="Before 2024">Before 2024</option>
            <option value="2025–2026">2025–2026</option>
            <option value="2026–2027">2026–2027</option>
          </select>

          <select name="source">
            <option value="">How did you hear about us?</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Naukri">Naukri</option>
            <option value="Social Media">Social Media</option>
            <option value="Referral">Referral</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            name="skills"
            rows={4}
            placeholder="Briefly describe your current technical skills*"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Apply for Internship"}
          </button>

          {status === "success" && (
            <p className={styles.success}>
              Application submitted successfully. We’ll get back to you soon.
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
