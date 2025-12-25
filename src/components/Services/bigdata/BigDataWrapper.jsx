"use client";

import dynamic from "next/dynamic";

const BigData = dynamic(() => import("./BigData"), {
  ssr: false,
});

export default function BigDataWrapper() {
  return <BigData />;
}