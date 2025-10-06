import Link from "next/link";

export default function A3({ params }: { params: { cid: string } }) {
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
          <h1 className="mb-2">A3 — React + Next.js</h1>
          <div className="wd-assign-details">
            <p className="mb-2">
              Build basic React/Next.js features and deploy. Follow the specified component structure.
            </p>

            <dl className="wd-assign-meta">
              <dt>Due</dt><dd>Oct 19 at 11:59pm</dd>
              <dt>Available</dt><dd>Oct 10 — Oct 20</dd>
              <dt>Points</dt><dd>100</dd>
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
