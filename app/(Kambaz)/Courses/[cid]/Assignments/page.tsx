import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input
        placeholder="Search for Assignments"
        id="wd-search-assignment"
        style={{ marginRight: 8 }}
      />
      <button id="wd-add-assignment-group" style={{ marginRight: 8 }}>
        + Group
      </button>
      <button id="wd-add-assignment">+ Assignment</button>

      <h3 id="wd-assignments-title" style={{ marginTop: 16 }}>
        ASSIGNMENTS 40% of Total{" "}
        <button aria-label="Add group or assignment" style={{ marginLeft: 8 }}>
          +
        </button>
      </h3>

      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item" style={{ marginBottom: 16 }}>
          <Link href="/Courses/1234/Assignments/A1" className="wd-assignment-link">
            A1 - ENV + HTML
          </Link>
          <div className="wd-assignment-meta">
            Multiple Modules | <em>Not available until</em> May 6 at 12:00am |{" "}
            <strong>Due</strong> May 13 at 11:59pm | 100 pts
          </div>
        </li>

        <li className="wd-assignment-list-item" style={{ marginBottom: 16 }}>
          <Link href="/Courses/1234/Assignments/A2" className="wd-assignment-link">
            A2 - CSS + BOOTSTRAP
          </Link>
          <div className="wd-assignment-meta">
            Multiple Modules | <em>Not available until</em> May 13 at 12:00am |{" "}
            <strong>Due</strong> May 20 at 11:59pm | 100 pts
          </div>
        </li>

        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/A3" className="wd-assignment-link">
            A3 - JAVASCRIPT + REACT
          </Link>
          <div className="wd-assignment-meta">
            Multiple Modules | <em>Not available until</em> May 20 at 12:00am |{" "}
            <strong>Due</strong> May 27 at 11:59pm | 100 pts
          </div>
        </li>
      </ul>
    </div>
  );
}
