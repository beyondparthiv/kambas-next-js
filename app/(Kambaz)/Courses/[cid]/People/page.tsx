"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";

const API_BASE = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  loginId: string;
  username: string;
  section: string;
  role: string;
  lastActivity: string;
  totalActivity: string;
};

export default function People() {
  const { cid } = useParams() as { cid: string };
  const [list, setList] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrolledUsers = async () => {
      try {
        const response = await axios.get(`${API_BASE}/api/courses/${cid}/users`);
        setList(response.data);
      } catch (error) {
        console.error("Error fetching enrolled users:", error);
        setList([]);
      } finally {
        setLoading(false);
      }
    };

    if (cid) {
      fetchEnrolledUsers();
    }
  }, [cid]);

  if (loading) {
    return (
      <div id="wd-people">
        <h1>People</h1>
        <p>Loading enrolled users...</p>
      </div>
    );
  }

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
                <td className="wd-login-id">{user.loginId || user.username}</td>
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
