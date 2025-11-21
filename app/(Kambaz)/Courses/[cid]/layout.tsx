/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ReactNode, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import type { RootState } from "../../Store/store";
import { FaAlignJustify } from "react-icons/fa";
import "./index.css";

import Breadcrumb from "./Breadcrumb";
import SidebarNav from "./SidebarNav";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  // read cid from the URL
  const { cid } = useParams<{ cid: string }>();

  // pull courses from Redux
  const { courses } = useSelector((s: RootState) => s.coursesReducer);
  const course = useMemo(
    () => courses.find((c: any) => c._id === cid),
    [courses, cid]
  );

  // left navigation toggle
  const [navOpen, setNavOpen] = useState(true);

  // build the left-nav links (same as your previous SidebarNav use)
  const base = `/Courses/${cid}`;
  const links = [
    { label: "Home",        path: `${base}/Home` },
    { label: "Modules",     path: `${base}/Modules` },
    { label: "Piazza",      path: `${base}/Piazza` },
    { label: "Zoom",        path: `${base}/Zoom` },
    { label: "Assignments", path: `${base}/Assignments` },
    { label: "Quizzes",     path: `${base}/Quizzes` },
    { label: "Grades",      path: `${base}/Grades` },
    { label: "People",      path: `${base}/People` },
  ];

  return (
    <div id="wd-courses">
      {/* Header with sandwich icon and course name */}
      <h2 className="wd-breadcrumb-title d-flex align-items-center">
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          role="button"
          aria-label="Toggle course navigation"
          onClick={() => setNavOpen((v) => !v)}
        />
        <span>{course?.name ?? "Course"}</span>
      </h2>
      <hr />

      {/* Two-column layout: left nav (toggleable) + main content */}
      <div className="d-flex">
        {navOpen && (
          <div className="me-4">
            <SidebarNav links={links} />
          </div>
        )}
        <div className="flex-fill">
          {/* If you still want the breadcrumb inline under the title, keep it; otherwise remove */}
          {/* <Breadcrumb course={course?.name ?? "Course"} /> */}
          {children}
        </div>
      </div>
    </div>
  );
}
