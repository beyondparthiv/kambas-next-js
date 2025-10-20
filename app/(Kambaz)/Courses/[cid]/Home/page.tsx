export default function Home() {
  return (
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
  );
}
