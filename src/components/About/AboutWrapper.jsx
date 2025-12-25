"use client";

import dynamic from "next/dynamic";

const About = dynamic(() => import("./About"), {
  ssr: false,
});

export default function AboutWrapper() {
  return <About />;
}