"use client";

import dynamic from "next/dynamic";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const Supply = dynamic(() => import("./Supply"), {
  ssr: false,
});

export default function SupplyWrapper() {
  return (
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        scriptProps={{
          async: true,
          defer: true,
          appendTo: "head",
        }}
      >
        <Supply />
      </GoogleReCaptchaProvider>
    );
  }