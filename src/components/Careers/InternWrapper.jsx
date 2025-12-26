"use client"

import InternContact from "@/components/Careers/InternContact";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function InternPage() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
      }}
    >
      <InternContact />
    </GoogleReCaptchaProvider>
  );
}
