import Link from "next/link";

export default function People() {
  return (
    <div id="wd-course-shell">
      <aside id="wd-course-navigation">
        <h4>Course</h4>
        <ul>
          <li><Link href={`/Courses/5610/Home`}>Home</Link></li>
          <li><Link href={`/Courses/5610/Modules`}>Modules</Link></li>
          <li><Link href={`https://piazza.com/`} target="_blank">Piazza</Link></li>
          <li><Link href={`https://northeastern.zoom.us/`} target="_blank">Zoom</Link></li>
          <li><Link href={`/Courses/5610/Assignments`}>Assignments</Link></li>
          <li><Link href={`/Courses/5610/Quizzes`}>Quizzes</Link></li>
          <li><Link href={`/Courses/5610/Grades`}>Grades</Link></li>
          <li className="wd-active"><Link href={`/Courses/5610/People`}>People</Link></li>
        </ul>
      </aside>

      <main id="wd-course-main">
        <div id="wd-people">
          <h1>People</h1>
          <table>
            <thead>
              <tr><th>Name</th><th>Role</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>Parthiv Modi</td><td>Student</td><td>Active</td></tr>
              <tr><td>Student Two</td><td>Student</td><td>Active</td></tr>
              <tr><td>Student Three</td><td>TA</td><td>Active</td></tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
