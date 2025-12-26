import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const experience = formData.get("experience");
    const location = formData.get("location");
    const skills = formData.get("skills");
    const resume = formData.get("resume");
    const recaptchaToken = formData.get("recaptchaToken");

    if (!firstName || !lastName || !email || !skills || !resume) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    /* ================= reCAPTCHA ================= */
    const verify = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        }),
      }
    );

    const recaptcha = await verify.json();

    if (!recaptcha.success || recaptcha.score < 0.5) {
      return Response.json(
        { success: false, message: "reCAPTCHA failed" },
        { status: 403 }
      );
    }

    /* ================= EMAIL ================= */
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    await transporter.sendMail({
      from: `"Vyanta Careers" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: "New Job Application",
      html: `
        <h3>Job Application</h3>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Experience:</b> ${experience || "-"}</p>
        <p><b>Location:</b> ${location || "-"}</p>
        <p><b>Skills:</b></p>
        <p>${skills}</p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
      ],
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Job API error:", err);
    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
