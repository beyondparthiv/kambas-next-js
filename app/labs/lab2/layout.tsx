// app/labs/lab2/layout.tsx
import { ReactNode } from "react";
import "./index.css"; // Lab-2 styles

export const metadata = { title: "Lab 2" };

export default function Lab2Layout({ children }: { children: ReactNode }) {
  return <div id="wd-lab2-layout">{children}</div>;
}
