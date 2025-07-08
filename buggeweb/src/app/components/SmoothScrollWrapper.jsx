"use client";

import dynamic from "next/dynamic";
import React from "react";

// Lazy-loads SmoothScrolling kun på klienten, etter at appen er hydrert.
const SmoothScrolling = dynamic(() => import("./SmoothScrolling"), {
  ssr: false,
});

export default function SmoothScrollWrapper({ children }) {
  return <SmoothScrolling>{children}</SmoothScrolling>;
}
