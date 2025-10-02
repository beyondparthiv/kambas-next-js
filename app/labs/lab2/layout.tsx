import { ReactNode } from "react";
import "./index.css";

export const metadata = { title: "Lab 2" };

export default function Lab2Layout({ children }: { children: ReactNode }) {
  // Wrap the whole page in a Bootstrap container with thin padding
  return (
    <div id="wd-lab2-layout" className="container p-2">
      {children}
    </div>
  );
}
