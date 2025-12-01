"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function CourseNavigation() {
  const params = useParams();
  const pathname = usePathname();
  const cid = params?.cid as string;

  const isActive = (path: string) => pathname?.includes(path);

  return (
    <aside id="wd-course-navigation">
      <h4>Course</h4>
      <ul>
        <li className={isActive("/Home") ? "wd-active" : ""}>
          <Link href={`/Courses/${cid}/Home`}>Home</Link>
        </li>
        <li className={isActive("/Modules") ? "wd-active" : ""}>
          <Link href={`/Courses/${cid}/Modules`}>Modules</Link>
        </li>
        <li>
          <Link href={`https://piazza.com/`} target="_blank">Piazza</Link>
        </li>
        <li>
          <Link href={`https://northeastern.zoom.us/`} target="_blank">Zoom</Link>
        </li>
        <li className={isActive("/Assignments") ? "wd-active" : ""}>
          <Link href={`/Courses/${cid}/Assignments`}>Assignments</Link>
        </li>
        <li className={isActive("/Quizzes") ? "wd-active" : ""}>
          <Link href={`/Courses/${cid}/Quizzes`}>Quizzes</Link>
        </li>
        <li className={isActive("/Grades") ? "wd-active" : ""}>
          <Link href={`/Courses/${cid}/Grades`}>Grades</Link>
        </li>
        <li className={isActive("/People") ? "wd-active" : ""}>
          <Link href={`/Courses/${cid}/People`}>People</Link>
        </li>

      </ul>
    </aside>
  );
}
