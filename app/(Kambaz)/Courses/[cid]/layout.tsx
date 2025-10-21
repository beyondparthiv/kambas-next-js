

import { notFound } from "next/navigation";
import { courses } from "../../Database";
import "./index.css";

import Breadcrumb from "./Breadcrumb";
import SidebarNav from "./SidebarNav";

type Course = { _id: string; name: string; number: string; description: string };

export default async function CourseLayout(
  { children, params }: LayoutProps<"/Courses/[cid]">
) {
  // In Next 15 validator typings, params is a Promise
  const { cid } = await params;

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
        <h2 className="text-danger m-0 fw-bold">{course.name}</h2>
        <div className="text-muted">{course.number}</div>

        <Breadcrumb course={course.name} />

        <hr />
        {children}
      </main>
    </div>
  );
}
