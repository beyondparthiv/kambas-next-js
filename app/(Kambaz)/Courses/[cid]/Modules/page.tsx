import Link from "next/link";
import { FaCheckCircle, FaRegCircle, FaBan, FaTimesCircle } from "react-icons/fa";

export default function Modules() {
  return (
    <div id="wd-course-shell">
      <aside id="wd-course-navigation">
        <h4>Course</h4>
        <ul>
          <li><Link href={`/Courses/5610/Home`}>Home</Link></li>
          <li className="wd-active"><Link href={`/Courses/5610/Modules`}>Modules</Link></li>
          <li><Link href={`https://piazza.com/`} target="_blank">Piazza</Link></li>
          <li><Link href={`https://northeastern.zoom.us/`} target="_blank">Zoom</Link></li>
          <li><Link href={`/Courses/5610/Assignments`}>Assignments</Link></li>
          <li><Link href={`/Courses/5610/Quizzes`}>Quizzes</Link></li>
          <li><Link href={`/Courses/5610/Grades`}>Grades</Link></li>
          <li><Link href={`/Courses/5610/People`}>People</Link></li>
        </ul>
      </aside>

      <main id="wd-course-main">
        <div id="wd-modules">
          <h1>Modules</h1>

          <div id="wd-modules-toolbar">
            <a href="#" className="btn-grey">Collapse All</a>
            <a href="#" className="btn-grey">View Progress</a>
            <a href="#" className="btn-red">+ Module</a>

            <div id="wd-publish-all">
              <a href="#" className="btn-grey">Publish All ▼</a>
              <ul id="wd-publish-menu">
                <li><FaCheckCircle /> Publish all</li>
                <li><FaRegCircle /> Publish all items and modules</li>
                <li><FaBan /> Unpublish all</li>
                <li><FaTimesCircle /> Unpublish all modules</li>
              </ul>
            </div>
          </div>

          <div className="wd-module">
            <div className="wd-module-title"><span>Week 1</span><span>⋮</span></div>
            <div className="wd-lesson">Welcome to Course</div>
            <div className="wd-lesson">Syllabus</div>
          </div>

          <div className="wd-module">
            <div className="wd-module-title"><span>Week 2</span><span>⋮</span></div>
            <div className="wd-lesson">Next.js Setup</div>
            <div className="wd-lesson">CSS Selectors</div>
          </div>
        </div>
      </main>
    </div>
  );
}
