"use client";

import styles from "./CtaContact.module.css";

export default function CtaContact({
  bannerText = "Start Your Big Data Transformation Today!",
  submitText = "Get in Touch",
}) {
  return (
    <section className={styles.ctaSection}>
      {/* Full-width banner */}
      <div className={styles.ctaBanner}>
        <h2>{bannerText}</h2>
      </div>

      {/* Form */}
      <div className={styles.ctaFormWrapper}>
        <form className={styles.ctaForm}>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" placeholder="Your full name" required />
          </div>

          <div className={styles.formGroup}>
            <label>Company Name</label>
            <input type="text" placeholder="Your company" />
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" placeholder="you@company.com" required />
          </div>

          <div className={styles.formGroup}>
            <label>Your Message</label>
            <textarea
              rows={4}
              placeholder="Tell us about your data challenges or goals"
              required
            />
          </div>

          <button type="submit" className={styles.ctaSubmit}>
            {submitText}
          </button>
        </form>
      </div>
    </section>
  );
}
