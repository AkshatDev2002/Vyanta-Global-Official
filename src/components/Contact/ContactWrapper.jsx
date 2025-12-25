"use client";

import dynamic from "next/dynamic";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const Contact = dynamic(() => import("./Contact"), {
  ssr: false,
});

export default function ContactWrapper() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      scriptProps={{ async: true, defer: true }}
    >
      <Contact />
    </GoogleReCaptchaProvider>
  );
}
