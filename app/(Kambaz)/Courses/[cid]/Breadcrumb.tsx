"use client";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ course }: { course: string }) {
  const pathname = (usePathname() || "").split("?")[0];
  const parts = pathname.split("/").filter(Boolean); // ["Courses","<cid>","<Section>", ...]
  const section = parts[3] || "Home";
  return (
    <div className="mb-2">
      <span className="text-danger fw-bold">{course}</span>
      <span> &nbsp;›&nbsp; </span>
      <span className="text-muted">{section}</span>
    </div>
  );
}
