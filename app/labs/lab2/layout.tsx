
import { ReactNode } from "react";
import "./index.css";

export const metadata = { title: "Lab 2" };

export default function Lab2Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Rubric: responsive breakpoint badge (bottom-right), Lab 2 only */}
      <div
        id="wd-breakpoint"
        className="position-fixed bottom-0 end-0 m-2 px-2 py-1 bg-dark text-white rounded"
        style={{ zIndex: 1050, fontSize: 12 }}
      >
        <span className="d-inline d-sm-none">xs</span>
        <span className="d-none d-sm-inline d-md-none">sm</span>
        <span className="d-none d-md-inline d-lg-none">md</span>
        <span className="d-none d-lg-inline d-xl-none">lg</span>
        <span className="d-none d-xl-inline d-xxl-none">xl</span>
        <span className="d-none d-xxl-inline">xxl</span>
      </div>

      {/* Lab 2 content wrapper */}
      <div id="wd-lab2-layout" className="container p-2">
        {children}
      </div>
    </>
  );
}
