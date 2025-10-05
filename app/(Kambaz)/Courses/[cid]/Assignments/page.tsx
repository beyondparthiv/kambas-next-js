import Link from "next/link";
import { FaPlus, FaSearch } from "react-icons/fa";

export default function Assignments() {
  return (
    <div id="wd-course-shell">
      <aside id="wd-course-navigation">
        <h4>Course</h4>
        <ul>
          <li><Link href={`/Courses/5610/Home`}>Home</Link></li>
          <li><Link href={`/Courses/5610/Modules`}>Modules</Link></li>
          <li><Link href={`https://piazza.com/`} target="_blank">Piazza</Link></li>
          <li><Link href={`https://northeastern.zoom.us/`} target="_blank">Zoom</Link></li>
          <li className="wd-active"><Link href={`/Courses/5610/Assignments`}>Assignments</Link></li>
          <li><Link href={`/Courses/5610/Quizzes`}>Quizzes</Link></li>
          <li><Link href={`/Courses/5610/Grades`}>Grades</Link></li>
          <li><Link href={`/Courses/5610/People`}>People</Link></li>
        </ul>
      </aside>

      <main id="wd-course-main">
        <div id="wd-assignments" className="container-fluid p-0">
          <h1 className="mb-3">Assignments</h1>

          <div className="wd-assignments-toolbar mb-2">
            <div className="wd-search">
              <FaSearch className="wd-mag" />
              <input className="form-control" placeholder="Search for Assignment" />
            </div>

            <div className="d-flex gap-2">
              <button className="btn btn-secondary">
                <FaPlus className="me-1" /> Group
              </button>
              {/* Link to the Editor */}
              <Link href="./Editor" className="btn btn-danger">
                <FaPlus className="me-1" /> Assignment
              </Link>
            </div>
          </div>

          <div className="wd-assign-list">
            <div className="wd-assign-item">
              <Link href="./A1" className="wd-assign-title fw-semibold">A1 - ENV + HTML</Link>
              <div className="text-muted small">Due Sep 20 at 11:59pm | 100 pts</div>
            </div>
            <div className="wd-assign-item">
              <Link href="./Editor" className="wd-assign-title fw-semibold">A2 - Kambaz + Labs</Link>
              <div className="text-muted small">Due Oct 05 at 11:59pm | 375 pts</div>
            </div>
            <div className="wd-assign-item">
              <Link href="./Editor" className="wd-assign-title fw-semibold">A3 - React + Next.js</Link>
              <div className="text-muted small">Due Oct 19 at 11:59pm | 100 pts</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
