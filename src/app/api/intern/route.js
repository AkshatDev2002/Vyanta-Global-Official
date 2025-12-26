import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {
      firstName,
      middleName,
      lastName,
      email,
      phone,
      currentLocation,
      preferredLocation,
      degree,
      passingYear,
      source,
      skills,
      recaptchaToken,
    } = await req.json();

    /* ================= VALIDATION ================= */
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !degree ||
      !passingYear ||
      !skills ||
      !recaptchaToken
    ) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    /* ================= VERIFY reCAPTCHA ================= */
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
        { success: false, message: "reCAPTCHA verification failed" },
        { status: 403 }
      );
    }

    /* ================= EMAIL ================= */
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Vyanta Careers" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `Internship Application — ${firstName} ${lastName}`,
      html: `
        <h2>New Internship Application</h2>
        <hr/>
        <p><b>Name:</b> ${firstName} ${middleName || ""} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Degree:</b> ${degree}</p>
        <p><b>Passing Year:</b> ${passingYear}</p>
        <p><b>Current Location:</b> ${currentLocation || "—"}</p>
        <p><b>Preferred Location:</b> ${preferredLocation || "—"}</p>
        <p><b>Source:</b> ${source || "—"}</p>
        <p><b>Skills:</b></p>
        <p>${skills}</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Internship application submitted successfully",
    });
  } catch (err) {
    console.error("Intern API error:", err);
    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
