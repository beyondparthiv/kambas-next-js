import Link from "next/link";

export default function Home({ params }: { params: { cid: string } }) {
  const { cid } = params;
  return (
    <div id="wd-course-shell">
      <aside id="wd-course-navigation">
        <h4>Course</h4>
        <ul>
          <li className="wd-active"><Link href={`/Courses/${cid}/Home`}>Home</Link></li>
          <li><Link href={`/Courses/${cid}/Modules`}>Modules</Link></li>
          <li><Link href="https://piazza.com/" target="_blank">Piazza</Link></li>
          <li><Link href="https://northeastern.zoom.us/" target="_blank">Zoom</Link></li>
          <li><Link href={`/Courses/${cid}/Assignments`}>Assignments</Link></li>
          <li><Link href={`/Courses/${cid}/Quizzes`}>Quizzes</Link></li>
          <li><Link href={`/Courses/${cid}/Grades`}>Grades</Link></li>
          <li><Link href={`/Courses/${cid}/People`}>People</Link></li>
        </ul>
      </aside>

      <main id="wd-course-main">
        <div id="wd-home">
          <h1>Home</h1>
          <div id="wd-home-grid">
            <section id="wd-home-modules">
              <h4>Modules</h4>

              <div className="wd-module">
                <div className="wd-module-title"><span>Week 1</span><span>⋮</span></div>
                <div className="wd-lesson">Introduction to Course</div>
                <div className="wd-lesson">Syllabus Overview</div>
              </div>

              <div className="wd-module">
                <div className="wd-module-title"><span>Week 2</span><span>⋮</span></div>
                <div className="wd-lesson">Next.js Basics</div>
                <div className="wd-lesson">CSS &amp; Bootstrap</div>
              </div>
            </section>

            <aside id="wd-home-status">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title m-0">Course Status</h5>
                  <ul className="mt-2 mb-0">
                    <li>Published</li>
                    <li>Modules: 2</li>
                    <li>Assignments: 3</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
