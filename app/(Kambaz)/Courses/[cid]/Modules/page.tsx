export default function Modules() {
  return (
    <div id="wd-modules">
      {/* Top controls */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
        <button>Collapse All</button>
        <button>View Progress</button>
        <select aria-label="Publish All">
          <option>Publish All</option>
        </select>
        <button>+ Module</button>
      </div>

      {/* Modules list */}
      <ul>
        <li className="wd-module">
          <div className="wd-title">
            Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content" style={{ listStyleType: "square" }}>
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content" style={{ listStyleType: "square" }}>
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 1 - Introduction
                </li>
                <li className="wd-content-item">
                  Full Stack Developer - Chapter 2 - Creating User
                </li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content" style={{ listStyleType: "square" }}>
                <li className="wd-content-item">Introduction to Web Development</li>
                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                <li className="wd-content-item">Creating a React Application</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module" style={{ marginTop: 12 }}>
          <div className="wd-title">
            Week 1, Lecture 2 - Formatting User Interfaces with HTML
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content" style={{ listStyleType: "square" }}>
                <li className="wd-content-item">
                  Learn how to create user interfaces with HTML
                </li>
                <li className="wd-content-item">Deploy the assignment to Netlify</li>
              </ul>
            </li>

            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content" style={{ listStyleType: "square" }}>
                <li className="wd-content-item">Introduction to HTML and the DOM</li>
                <li className="wd-content-item">Formatting Web content with Headings</li>
                <li className="wd-content-item">Formatting content with Lists and Tables</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
