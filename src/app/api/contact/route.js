import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, company, email, message, recaptchaToken } = await req.json();

    // 1. Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!recaptchaToken) {
      return Response.json(
        { success: false, message: "reCAPTCHA token missing" },
        { status: 400 }
      );
    }

    // 2. Verify reCAPTCHA v3
    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        }),
      }
    );

    const recaptcha = await verifyRes.json();

    if (!recaptcha.success || recaptcha.score < 0.5) {
      return Response.json(
        { success: false, message: "reCAPTCHA verification failed" },
        { status: 403 }
      );
    }

    // 3. Send email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Vyanta Global" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Company:</b> ${company || "-"}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
