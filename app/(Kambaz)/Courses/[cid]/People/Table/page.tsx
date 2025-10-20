"use client";

import { useParams } from "next/navigation";
import { users, enrollments } from "../../../../Database";

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

export default function PeopleTable() {
  const { cid } = useParams() as { cid: string };

  const userList = users as unknown as User[];
  const enrollList = enrollments as unknown as Enrollment[];

  const courseUsers = userList.filter((u) =>
    enrollList.some((e) => e.user === u._id && e.course === cid)
  );

  return (
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
          {courseUsers.map((u) => (
            <tr key={u._id}>
              <td className="wd-full-name text-nowrap">
                {/* match your existing markup/classes */}
                <span className="wd-first-name">{u.firstName}</span>{" "}
                <span className="wd-last-name">{u.lastName}</span>
              </td>
              <td className="wd-login-id">{u.loginId}</td>
              <td className="wd-section">{u.section}</td>
              <td className="wd-role">{u.role}</td>
              <td className="wd-last-activity">{u.lastActivity}</td>
              <td className="wd-total-activity">{u.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
