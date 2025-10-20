"use client";

import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { courses } from "../../Database";
import "./index.css"; 

// --- inline breadcrumb (there was some error in seperate file) ---
function Breadcrumb({ course }: { course: string }) {
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
// 

type Course = { _id: string; name: string; number: string; description: string };

export default function CourseLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { cid: string };
}) {
  const pathname = (usePathname() || "").toLowerCase();

  const list = courses as Course[];
  const course = list.find((c) => c._id === params.cid);
  if (!course) return notFound();

  const base = `/Courses/${params.cid}`;
  const links = [
    { label: "Home", path: `${base}/Home` },
    { label: "Modules", path: `${base}/Modules` },
    { label: "Piazza", path: `${base}/Piazza` },
    { label: "Zoom", path: `${base}/Zoom` },
    { label: "Assignments", path: `${base}/Assignments` },
    { label: "Quizzes", path: `${base}/Quizzes` },
    { label: "Grades", path: `${base}/Grades` },
    { label: "People", path: `${base}/People` },
  ];
  const isActive = (p: string) => pathname.startsWith(p.toLowerCase());

  return (
    <div id="wd-course-shell">
      <aside id="wd-course-navigation" aria-label="Course navigation">
        <h4>Course</h4>
        <ul>
          {links.map((l) => (
            <li key={l.path} className={isActive(l.path) ? "wd-active" : ""}>
              <Link href={l.path}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </aside>

      <main id="wd-course-main">
        <h2 className="text-danger m-0 fw-bold">{course.name}</h2>
        <div className="text-muted">{course.number}</div>

        {/* breadcrumb right here */}
        <Breadcrumb course={course.name} />

        <hr />
        {children}
      </main>
    </div>
  );
}
