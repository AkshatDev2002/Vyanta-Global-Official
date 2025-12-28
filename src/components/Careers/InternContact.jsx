"use client";

import styles from "./InternContact.module.css";

export default function InternContact() {
  return (
    <section className={styles.section}>
      {/* Banner */}
      <div className={styles.banner}>
        <h2>
          Launch Your Career in Data Engineering With Vyanta’s Internship Program <br /> <br />

          — Gain industry certifications, work on 5+ real-world projects with industry leaders, and receive lifetime career support.
        </h2>
      </div>


        {/* Google Form Embed */}
        <div className={styles.formEmbed}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdcYBBRvOoPx1JwLzLAfm0EC8vRtgOvgKg5qIr9GmU8wgoDDA/viewform?embedded=true"
            title="Vyanta Internship Application Form"
            loading="lazy"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className={styles.iframe}
          >
            Loading…
          </iframe>
        </div>
    
    </section>
  );
}
