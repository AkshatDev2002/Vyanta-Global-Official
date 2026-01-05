"use client";

import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import styles from "./JobContact.module.css";

const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export default function JobContact({
  bannerText = "Vyanta Global Career Opportunities",
  submitText = "Submit Application",
}) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [fileError, setFileError] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setFileError(null);

    if (!file) {
      setFileName("");
      return;
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      setFileError("Only PDF or Word documents (.pdf, .doc, .docx) are allowed.");
      e.target.value = "";
      setFileName("");
      return;
    }

    setFileName(file.name);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    if (!executeRecaptcha || loading) {
      setStatus("error");
      return;
    }

    if (!fileName) {
      setFileError("Please upload your resume.");
      return;
    }

    setLoading(true);

    try {
      const recaptchaToken = await executeRecaptcha("job_application_submit");

      const formData = new FormData(e.target);
      formData.append("recaptchaToken", recaptchaToken);

      const res = await fetch("/api/job", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setFileName("");
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

          {/* ✅ PROFESSIONAL RESUME UPLOAD */}
          <div className={styles.formGroup}>
            <label>Resume (PDF / DOC / DOCX)</label>

            {/* Hidden native input */}
            <input
              id="resumeUpload"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className={styles.hiddenFileInput}
              required
            />

            <div className={styles.fileUploadRow}>
              <label htmlFor="resumeUpload" className={styles.fileButton}>
                {fileName ? "Choose another file" : "Choose file"}
              </label>

              <span className={styles.fileName}>
                {fileName || "No file selected"}
              </span>
            </div>

            {fileError && (
              <span className={styles.fileError}>{fileError}</span>
            )}
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
