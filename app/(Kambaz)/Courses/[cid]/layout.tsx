import { notFound } from "next/navigation";
import { use } from "react";
import type { ReactNode } from "react";
import { courses } from "../../Database";
import "./index.css";

import Breadcrumb from "./Breadcrumb";
import SidebarNav from "./SidebarNav";

type Course = { _id: string; name: string; number: string; description: string };

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ cid: string }>;
};

export default function CourseLayout({ children, params }: LayoutProps) {
  // Unwrap the params Promise (Next 15+ pattern)
  const { cid } = use(params);

  const list = courses as Course[];
  const course = list.find((c) => c._id === cid);
  if (!course) notFound();

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
    <div id="wd-course-shell">
      <SidebarNav links={links} />
      <main id="wd-course-main">
        <h2 className="wd-breadcrumb-title">
          <Breadcrumb course={course.name} />
        </h2>
        <hr />
        {children}
      </main>
    </div>
  );
}
