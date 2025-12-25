"use client";

import dynamic from "next/dynamic";

const Industries = dynamic(() => import("./Industries"), {
  ssr: false,
});

export default function IndustryWrapper() {
  return <Industries />;
}