import Link from "next/link";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";

export default function Modules({ params }: { params: { cid: string } }) {
  const { cid } = params;

  return (
    <div id="wd-course-shell">
      <aside id="wd-course-navigation">
        <h4>Course</h4>
        <ul>
          <li><Link href={`/Courses/${cid}/Home`}>Home</Link></li>
          <li className="wd-active"><Link href={`/Courses/${cid}/Modules`}>Modules</Link></li>
          <li><Link href="https://piazza.com/" target="_blank">Piazza</Link></li>
          <li><Link href="https://northeastern.zoom.us/" target="_blank">Zoom</Link></li>
          <li><Link href={`/Courses/${cid}/Assignments`}>Assignments</Link></li>
          <li><Link href={`/Courses/${cid}/Quizzes`}>Quizzes</Link></li>
          <li><Link href={`/Courses/${cid}/Grades`}>Grades</Link></li>
          <li><Link href={`/Courses/${cid}/People`}>People</Link></li>
        </ul>
      </aside>

      <main id="wd-course-main">
        <div id="wd-modules">
          <h1>Course {cid}</h1>

          <div id="wd-modules-toolbar">
            <a href="#" className="btn-grey">Collapse All</a>
            <a href="#" className="btn-grey">View Progress</a>

            <div id="wd-publish-all">
              <a href="#" className="btn-grey">
                Publish All <FaCheckCircle className="wd-ok" />
                <span style={{ marginLeft: 4 }}>▼</span>
              </a>
              <ul id="wd-publish-menu">
                <li><FaCheckCircle className="wd-ok" /> Publish all</li>
                <li>○ Publish all items and modules</li>
                <li>🚫 Unpublish all</li>
                <li>✖ Unpublish all modules</li>
              </ul>
            </div>

            <a href="#" className="btn-red">+ Module</a>
          </div>

          {/* Week 1 */}
          <div className="wd-module">
            <div className="wd-module-title">
              <span>▤ Week 1</span>
              <div className="wd-actions">
                <FaCheckCircle className="wd-ok" />
                <FaPlus className="wd-plus" />
                <FaEllipsisV className="wd-kebab" />
              </div>
            </div>

            <div className="wd-lesson">
              <div className="d-flex align-items-center">
                <span className="wd-drag">▤</span>
                <span>LEARNING OBJECTIVES</span>
              </div>
              <div className="wd-actions">
                <FaCheckCircle className="wd-ok" />
                <FaEllipsisV className="wd-kebab" />
              </div>
            </div>

            <div className="wd-lesson">
              <div className="d-flex align-items-center">
                <span className="wd-drag">▤</span>
                <span>Introduction to the course</span>
              </div>
              <div className="wd-actions">
                <FaCheckCircle className="wd-ok" />
                <FaEllipsisV className="wd-kebab" />
              </div>
            </div>

            <div className="wd-lesson">
              <div className="d-flex align-items-center">
                <span className="wd-drag">▤</span>
                <span>Learn what is Web Development</span>
              </div>
              <div className="wd-actions">
                <FaCheckCircle className="wd-ok" />
                <FaEllipsisV className="wd-kebab" />
              </div>
            </div>

            <div className="wd-lesson">
              <div className="d-flex align-items-center">
                <span className="wd-drag">▤</span>
                <span>LESSON 1</span>
              </div>
              <div className="wd-actions">
                <FaCheckCircle className="wd-ok" />
                <FaEllipsisV className="wd-kebab" />
              </div>
            </div>

            <div className="wd-lesson">
              <div className="d-flex align-items-center">
                <span className="wd-drag">▤</span>
                <span>LESSON 2</span>
              </div>
              <div className="wd-actions">
                <FaCheckCircle className="wd-ok" />
                <FaEllipsisV className="wd-kebab" />
              </div>
            </div>
          </div>

          {/* Week 2 */}
          <div className="wd-module">
            <div className="wd-module-title">
              <span>▤ Week 2</span>
              <div className="wd-actions">
                <FaCheckCircle className="wd-ok" />
                <FaPlus className="wd-plus" />
                <FaEllipsisV className="wd-kebab" />
              </div>
            </div>

            <div className="wd-lesson">
              <div className="d-flex align-items-center">
                <span className="wd-drag">▤</span>
                <span>LEARNING OBJECTIVES</span>
              </div>
              <div className="wd-actions">
                <FaCheckCircle className="wd-ok" />
                <FaEllipsisV className="wd-kebab" />
              </div>
            </div>

            <div className="wd-lesson">
              <div className="d-flex align-items-center">
                <span className="wd-drag">▤</span>
                <span>LESSON 1</span>
              </div>
              <div className="wd-actions">
                <FaCheckCircle className="wd-ok" />
                <FaEllipsisV className="wd-kebab" />
              </div>
            </div>

            <div className="wd-lesson">
              <div className="d-flex align-items-center">
                <span className="wd-drag">▤</span>
                <span>LESSON 2</span>
              </div>
              <div className="wd-actions">
                <FaCheckCircle className="wd-ok" />
                <FaEllipsisV className="wd-kebab" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
