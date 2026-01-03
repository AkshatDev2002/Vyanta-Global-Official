"use client";

import dynamic from "next/dynamic";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const AI = dynamic(() => import("./AI"), {
  ssr: false,
});

export default function AiWrapper() {
  return (
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        scriptProps={{
          async: true,
          defer: true,
          appendTo: "head",
        }}
      >
        <AI />
      </GoogleReCaptchaProvider>
    );
  }