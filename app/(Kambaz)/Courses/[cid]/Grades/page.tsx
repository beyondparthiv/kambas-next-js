// app/(Kambaz)/Courses/5610/Grades/page.tsx
import Link from "next/link";

export default function Grades() {
  return (
    <div id="wd-course-shell">
      <aside id="wd-course-navigation">
        <h4>Course</h4>
        <ul>
          <li><Link href="/Courses/5610/Home">Home</Link></li>
          <li><Link href="/Courses/5610/Modules">Modules</Link></li>
          <li><Link href="https://piazza.com/" target="_blank">Piazza</Link></li>
          <li><Link href="https://northeastern.zoom.us/" target="_blank">Zoom</Link></li>
          <li><Link href="/Courses/5610/Assignments">Assignments</Link></li>
          <li><Link href="/Courses/5610/Quizzes">Quizzes</Link></li>
          <li className="wd-active"><Link href="/Courses/5610/Grades">Grades</Link></li>
          <li><Link href="/Courses/5610/People">People</Link></li>
        </ul>
      </aside>

      <main id="wd-course-main">
        <h1>Grades</h1>
        <p>Coming soon.</p>
      </main>
    </div>
  );
}
