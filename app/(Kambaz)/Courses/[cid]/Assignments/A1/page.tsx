import Link from "next/link";

export default function A1({ params }: { params: { cid: string } }) {
  const { cid } = params;

  return (
    <div id="wd-course-shell">
      <aside id="wd-course-navigation">
        <h4>Course</h4>
        <ul>
          <li><Link href={`/Courses/${cid}/Home`}>Home</Link></li>
          <li><Link href={`/Courses/${cid}/Modules`}>Modules</Link></li>
          <li><Link href="https://piazza.com/" target="_blank">Piazza</Link></li>
          <li><Link href="https://northeastern.zoom.us/" target="_blank">Zoom</Link></li>
          <li className="wd-active"><Link href={`/Courses/${cid}/Assignments`}>Assignments</Link></li>
          <li><Link href={`/Courses/${cid}/Quizzes`}>Quizzes</Link></li>
          <li><Link href={`/Courses/${cid}/Grades`}>Grades</Link></li>
          <li><Link href={`/Courses/${cid}/People`}>People</Link></li>
        </ul>
      </aside>

      <main id="wd-course-main">
        <div id="wd-assignment">
          <h1 className="mb-2">A2 — Kambaz + Labs</h1>
          <div className="wd-assign-details">
            <p className="mb-2">
              Implement Kambaz navigation, dashboard, and course pages following the rubric. Include lab landing links.
            </p>

            <dl className="wd-assign-meta">
              <dt>Due</dt><dd>Oct 05 at 11:59pm</dd>
              <dt>Available</dt><dd>Sep 28 — Oct 06</dd>
              <dt>Points</dt><dd>375</dd>
              <dt>Group</dt><dd>ASSIGNMENTS</dd>
              <dt>Submission</dt><dd>Online (URL)</dd>
            </dl>

            <div className="mt-3 d-flex gap-2">
              <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary">Back</Link>
              <Link href={`/Courses/${cid}/Assignments/Editor`} className="btn btn-danger">Edit Assignment</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
