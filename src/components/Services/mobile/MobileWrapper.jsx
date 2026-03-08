"use client";

import dynamic from "next/dynamic";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const Mobile = dynamic(() => import("./Mobile"), {
  ssr: false,
});

export default function MobileWrapper() {
  return (
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        scriptProps={{
          async: true,
          defer: true,
          appendTo: "head",
        }}
      >
        <Mobile />
      </GoogleReCaptchaProvider>
    );
  }