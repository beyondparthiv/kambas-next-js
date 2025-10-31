"use client";

import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { users, enrollments } from "../../../Database"; // adjust relative path if your file lives deeper

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  loginId: string;
  section: string;
  role: string;
  lastActivity: string;
  totalActivity: string;
};

type Enrollment = { _id: string; user: string; course: string };

export default function People() {
  const { cid } = useParams() as { cid: string };

  const list = (users as User[]).filter((usr) =>
    (enrollments as Enrollment[]).some(
      (e) => e.user === usr._id && e.course === cid
    )
  );

  return (
    <div id="wd-people">
      <h1>People</h1>

      <div id="wd-people-table">
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
            {list.map((user) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))}
            {list.length === 0 && (
              <tr>
                <td colSpan={6} className="text-muted">
                  No people enrolled in this course.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
