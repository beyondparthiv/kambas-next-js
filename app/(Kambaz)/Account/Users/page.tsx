/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import * as client from "../../client";
import type { RootState } from "../../Store/store";

type User = {
  _id: string;
  username: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
  loginId?: string;
  section?: string;
  lastActivity?: string;
  totalActivity?: string;
};

export default function UsersPage() {
  const router = useRouter();
  const currentUser = useSelector((s: RootState) => s.account.currentUser);

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("ALL");
  const [nameFilter, setNameFilter] = useState<string>("");

  useEffect(() => {
    if (!currentUser) {
      router.push("/Account/Signin");
      return;
    }

    fetchUsers();
  }, [currentUser, router]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await client.fetchAllUsers();
      setUsers(data);
    } catch (e: any) {
      console.error("Error fetching users:", e);
      setError(e.response?.data?.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  if (!currentUser) {
    return null;
  }

  // Filter users based on role and name
  const filteredUsers = users
    .filter(user => roleFilter === "ALL" || user.role === roleFilter)
    .filter(user => {
      if (!nameFilter) return true;
      const searchTerm = nameFilter.toLowerCase();
      return (
        user.username?.toLowerCase().includes(searchTerm) ||
        user.firstName?.toLowerCase().includes(searchTerm) ||
        user.lastName?.toLowerCase().includes(searchTerm) ||
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm)
      );
    });

  const deleteUser = async (userId: string) => {
    if (!confirm("Are you sure you want to delete this user?")) {
      return;
    }

    try {
      // Remove from UI immediately
      setUsers(users.filter(u => u._id !== userId));

      // Delete from backend
      await client.deleteUser(userId);
    } catch (e: any) {
      console.error("Error deleting user:", e);
      // Reload users if backend delete failed
      fetchUsers();
      alert("Failed to delete user from server");
    }
  };

  const addNewUser = async () => {
    try {
      const newUser = await client.createUser({
        username: "newuser",
        password: "password123",
        firstName: "New",
        lastName: "User",
        role: "STUDENT",
      });

      // Add to UI immediately
      setUsers([...users, newUser]);

      // Navigate to edit the new user
      router.push(`/Account/Users/${newUser._id}`);
    } catch (e: any) {
      console.error("Error creating user:", e);
      alert(e.response?.data?.message || "Failed to create user");
    }
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="mb-0">Users</h1>
        <button className="btn btn-success" onClick={addNewUser}>
          + People
        </button>
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {/* Filters */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="nameFilter" className="form-label fw-bold">Search by Name:</label>
          <input
            id="nameFilter"
            type="text"
            className="form-control"
            placeholder="Enter name or username..."
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="roleFilter" className="form-label fw-bold">Filter by Role:</label>
          <select
            id="roleFilter"
            className="form-select"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="ALL">All Roles</option>
            <option value="STUDENT">Students</option>
            <option value="FACULTY">Faculty</option>
            <option value="TA">Teaching Assistants</option>
            <option value="ADMIN">Administrators</option>
          </select>
        </div>
      </div>

      {loading && <p>Loading users...</p>}

      {!loading && filteredUsers.length === 0 && (
        <p>No users found{roleFilter !== "ALL" ? ` with role: ${roleFilter}` : ""}.</p>
      )}

      {!loading && filteredUsers.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Login ID</th>
                <th>Section</th>
                <th>Last Activity</th>
                <th>Total Activity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user._id}>
                  <td>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(`/Account/Users/${user._id}`);
                      }}
                      className="text-primary text-decoration-underline"
                      style={{ cursor: "pointer" }}
                    >
                      {user.username}
                    </a>
                  </td>
                  <td>{user.firstName || "-"}</td>
                  <td>{user.lastName || "-"}</td>
                  <td>{user.email || "-"}</td>
                  <td>
                    <span className={`badge bg-${
                      user.role === "FACULTY" ? "primary" :
                      user.role === "ADMIN" ? "danger" :
                      user.role === "TA" ? "warning" :
                      "secondary"
                    }`}>
                      {user.role || "STUDENT"}
                    </span>
                  </td>
                  <td>{user.loginId || "-"}</td>
                  <td>{user.section || "-"}</td>
                  <td>{user.lastActivity || "-"}</td>
                  <td>{user.totalActivity || "-"}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-3">
        <p className="text-muted">
          Showing {filteredUsers.length} of {users.length} users
          {roleFilter !== "ALL" && <span> (filtered by {roleFilter})</span>}
        </p>
      </div>
    </div>
  );
}
