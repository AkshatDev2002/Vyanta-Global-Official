"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import styles from "./Contact.module.css";
import contactAnimation from "@/assets/contact.json";

import { useLanguage } from "@/context/LanguageContext";
import { contactTranslations } from "@/lib/ContactTranslation";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contact() {
  const { language } = useLanguage();
  const t = contactTranslations[language] || contactTranslations.en;

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error | null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!window.grecaptcha) {
      setStatus("error");
      return;
    }

    setLoading(true);

    try {
      // 1️⃣ Generate reCAPTCHA token
      const recaptchaToken = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "contact" }
      );

      // 2️⃣ Send data to backend
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          recaptchaToken,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Submission failed");
      }

      // 3️⃣ Success
      setStatus("success");
      setForm({ name: "", company: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact submit error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <section className={styles.section}>
        <div className={styles.grid}>
          {/* LEFT CONTENT */}
          <motion.div className={styles.left} variants={fadeUp}>
            <h1 className={styles.title}>{t.title}</h1>
            <p className={styles.subtitle}>{t.subtitle}</p>

            <div className={styles.block}>
              <h3 className={styles.blockTitle}>{t.agendaTitle}</h3>
              <ul className={styles.list}>
                {t.agenda.map((item, index) => (
                  <li key={index}>
                    <strong>{item.label}</strong> ({item.time})
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.block}>
              <h3 className={styles.blockTitle}>{t.gainTitle}</h3>
              <ul className={styles.list}>
                {t.gains.map((gain, index) => (
                  <li key={index}>{gain}</li>
                ))}
              </ul>
            </div>

            <p className={styles.note}>{t.note}</p>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div className={styles.right} variants={fadeUp}>
            <div className={styles.formAnimation}>
              <Lottie animationData={contactAnimation} loop autoplay />
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label>{t.form.name}</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t.form.namePlaceholder}
                />
              </div>

              <div className={styles.field}>
                <label>{t.form.company}</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder={t.form.companyPlaceholder}
                />
              </div>

              <div className={styles.field}>
                <label>{t.form.email}</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t.form.emailPlaceholder}
                />
              </div>

              <div className={styles.field}>
                <label>{t.form.message}</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t.form.messagePlaceholder}
                />
              </div>

              <button type="submit" className={styles.button} disabled={loading}>
                {loading ? "Sending..." : t.form.submit}
              </button>

              {status === "success" && (
                <p className={styles.success}>Message sent successfully. Our expert team will get back to you shortly.</p>
              )}

              {status === "error" && (
                <p className={styles.error}>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
