// app/Labs/lab2/layout.tsx
import React from "react";
import "./index.css"; // this pulls in your Lab-2 styles

export const metadata = { title: "Lab 2" };

export default function Lab2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div id="wd-lab2-layout">{children}</div>;
}
