"use client";

import dynamic from "next/dynamic";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const BigData = dynamic(() => import("./BigData"), {
  ssr: false,
});

export default function BigDataWrapper() {
  return (
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        scriptProps={{
          async: true,
          defer: true,
          appendTo: "head",
        }}
      >
        <BigData />
      </GoogleReCaptchaProvider>
    );
  }