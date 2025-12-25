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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!window.grecaptcha) {
      alert("reCAPTCHA not loaded");
      return;
    }

    const token = await window.grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      { action: "contact" }
    );

    const payload = { ...form, token };
    console.log(payload);
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

              <button type="submit" className={styles.button}>
                {t.form.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
