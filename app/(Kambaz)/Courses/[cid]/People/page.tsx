// app/(Kambaz)/Courses/[cid]/People/page.tsx
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

export default function People({ params }: { params: { cid: string } }) {
  const { cid } = params;

  return (
    <div id="wd-course-shell">{/* open: shell */}
      {/* Left course navigation */}
      <aside id="wd-course-navigation">
        <h4>Course</h4>
        <ul>
          <li><Link href={`/Courses/${cid}/Home`}>Home</Link></li>
          <li><Link href={`/Courses/${cid}/Modules`}>Modules</Link></li>
          <li><Link href="https://piazza.com/" target="_blank">Piazza</Link></li>
          <li><Link href="https://northeastern.zoom.us/" target="_blank">Zoom</Link></li>
          <li><Link href={`/Courses/${cid}/Assignments`}>Assignments</Link></li>
          <li><Link href={`/Courses/${cid}/Quizzes`}>Quizzes</Link></li>
          <li><Link href={`/Courses/${cid}/Grades`}>Grades</Link></li>
          <li className="wd-active"><Link href={`/Courses/${cid}/People`}>People</Link></li>
        </ul>
      </aside>

      {/* Main */}
      <main id="wd-course-main">{/* open: main */}
        <h1>People</h1>

        <div id="wd-people-table">{/* open: table wrapper */}
          <table className="table table-striped align-middle">
            <thead>
              <tr>
                <th>Name</th>
                <th>Login ID</th>
                <th>Section</th>
                <th>Role</th>
                <th>Last Activity</th>
                <th>Total Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">Salman</span>{" "}
                  <span className="wd-last-name">Khan</span>
                </td>
                <td>001234561S</td>
                <td>S101</td>
                <td>STUDENT</td>
                <td>2020-10-01T00:00:00.000Z</td>
                <td>10:21:32</td>
              </tr>

              <tr>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">Shahrukh</span>{" "}
                  <span className="wd-last-name">Khan</span>
                </td>
                <td>001234562S</td>
                <td>S101</td>
                <td>STUDENT</td>
                <td>2020-11-02T00:00:00.000Z</td>
                <td>15:32:43</td>
              </tr>

              <tr>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">Amir</span>{" "}
                  <span className="wd-last-name">Khan</span>
                </td>
                <td>001234563S</td>
                <td>S101</td>
                <td>STUDENT</td>
                <td>2020-10-02T00:00:00.000Z</td>
                <td>23:32:43</td>
              </tr>

              <tr>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">Amitabh</span>{" "}
                  <span className="wd-last-name">Bachan</span>
                </td>
                <td>001234564S</td>
                <td>S101</td>
                <td>TA</td>
                <td>2020-11-05T00:00:00.000Z</td>
                <td>13:23:34</td>
              </tr>

              <tr>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">Hrithik</span>{" "}
                  <span className="wd-last-name">Roshan</span>
                </td>
                <td>001234565S</td>
                <td>S101</td>
                <td>STUDENT</td>
                <td>2020-12-01T00:00:00.000Z</td>
                <td>11:22:33</td>
              </tr>

              <tr>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">Jethalal</span>{" "}
                  <span className="wd-last-name">Gada</span>
                </td>
                <td>001234566S</td>
                <td>S101</td>
                <td>STUDENT</td>
                <td>2020-12-01T00:00:00.000Z</td>
                <td>22:33:44</td>
              </tr>
            </tbody>
          </table>
        </div>{/* close: table wrapper */}
      </main>{/* close: main */}
    </div>/* close: shell */
  );
}
