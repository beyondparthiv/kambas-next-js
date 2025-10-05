import Link from "next/link";

export default function AssignmentEditor() {
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
        <div id="wd-editor" className="container-fluid p-0">
          <h1>Assignment Editor</h1>

          <div className="text-muted mb-3">CS5610 › Assignments › A1</div>

          <div className="mb-3">
            <label className="form-label">Assignment Name</label>
            <input className="form-control" defaultValue="A1 - ENV + HTML" />
          </div>

          <div className="mb-4">
            <label className="form-label">Description</label>
            <textarea className="form-control" rows={4} defaultValue="The assignment is available online. Submit a link to the landing page." />
          </div>

          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Points</label>
              <input className="form-control" defaultValue={100} />
            </div>

            <div className="col-md-4">
              <label className="form-label">Assignment Group</label>
              <select className="form-control" defaultValue="assignments">
                <option value="assignments">ASSIGNMENTS</option>
                <option value="labs">LABS</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Display Grade as</label>
              <select className="form-control" defaultValue="percentage">
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
                <option value="complete_incomplete">Complete / Incomplete</option>
                <option value="letter">Letter Grade</option>
              </select>
            </div>
          </div>

          <div className="row g-3 mt-2">
            <div className="col-md-6">
              <label className="form-label">Submission Type</label>
              <select className="form-control" defaultValue="online">
                <option value="online">Online</option>
                <option value="onpaper">On Paper</option>
                <option value="external">External Tool</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Assign</label>
              <select className="form-control" defaultValue="everyone">
                <option value="everyone">Everyone</option>
                <option value="section1">Section 1</option>
              </select>
            </div>
          </div>

          <div className="row g-3 mt-2">
            <div className="col-md-4">
              <label className="form-label">Due</label>
              <input className="form-control" defaultValue="10/05/2025" />
            </div>
            <div className="col-md-4">
              <label className="form-label">Available from</label>
              <input className="form-control" defaultValue="09/28/2025" />
            </div>
            <div className="col-md-4">
              <label className="form-label">Until</label>
              <input className="form-control" defaultValue="10/06/2025" />
            </div>
          </div>

          <div className="mt-4 d-flex gap-2">
            <Link href="../" className="btn btn-secondary">Cancel</Link>
            <button className="btn btn-danger">Save</button>
          </div>
        </div>
      </main>
    </div>
  );
}
