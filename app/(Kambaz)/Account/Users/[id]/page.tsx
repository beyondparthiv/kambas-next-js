/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSelector } from "react-redux";
import * as client from "../../../client";
import type { RootState } from "../../../Store/store";
import Link from "next/link";

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
  dob?: string;
  password?: string;
};

export default function PeopleDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const userId = params.id as string;

  const currentUser = useSelector((s: RootState) => s.account.currentUser);

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<User | null>(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (!currentUser) {
      router.push("/Account/Signin");
      return;
    }

    fetchUserDetails();
  }, [currentUser, router, userId]);

  const fetchUserDetails = async () => {
    try {
      setLoading(true);
      setError("");

      // Fetch all users and find the one we need
      const allUsers = await client.fetchAllUsers();
      const foundUser = allUsers.find((u: User) => u._id === userId);

      if (foundUser) {
        setUser(foundUser);
        setEditForm(foundUser);
      } else {
        setError("User not found");
      }
    } catch (e: any) {
      console.error("Error fetching user details:", e);
      setError(e.response?.data?.message || "Failed to load user details");
    } finally {
      setLoading(false);
    }
  };

  const startEdit = () => {
    setIsEditing(true);
    setEditForm({ ...user! });
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditForm({ ...user! });
  };

  const saveUser = async () => {
    if (!editForm) return;

    try {
      setError("");
      setSuccessMessage("");

      // Update user in backend
      await client.updateUserById(editForm._id, editForm);

      // Update UI immediately
      setUser(editForm);
      setIsEditing(false);
      setSuccessMessage("User updated successfully!");

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (e: any) {
      console.error("Error updating user:", e);
      setError(e.response?.data?.message || "Failed to update user");
    }
  };

  if (!currentUser) {
    return null;
  }

  if (loading) {
    return (
      <div className="container-fluid">
        <h1>User Details</h1>
        <p>Loading user details...</p>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="container-fluid">
        <h1>User Details</h1>
        <div className="alert alert-danger" role="alert">
          {error || "User not found"}
        </div>
        <Link href="/Account/Users" className="btn btn-secondary">
          Back to Users
        </Link>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <h1>User Details</h1>

      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="card">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0">{user.username}</h4>
          {!isEditing && (
            <button className="btn btn-light btn-sm" onClick={startEdit}>
              Edit
            </button>
          )}
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-3 fw-bold">User ID:</div>
            <div className="col-md-9">{user._id}</div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3 fw-bold">Username:</div>
            <div className="col-md-9">
              {isEditing ? (
                <input
                  type="text"
                  className="form-control"
                  value={editForm?.username || ""}
                  onChange={(e) => setEditForm({ ...editForm!, username: e.target.value })}
                />
              ) : (
                user.username
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3 fw-bold">First Name:</div>
            <div className="col-md-9">
              {isEditing ? (
                <input
                  type="text"
                  className="form-control"
                  value={editForm?.firstName || ""}
                  onChange={(e) => setEditForm({ ...editForm!, firstName: e.target.value })}
                />
              ) : (
                user.firstName || "-"
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3 fw-bold">Last Name:</div>
            <div className="col-md-9">
              {isEditing ? (
                <input
                  type="text"
                  className="form-control"
                  value={editForm?.lastName || ""}
                  onChange={(e) => setEditForm({ ...editForm!, lastName: e.target.value })}
                />
              ) : (
                user.lastName || "-"
              )}
            </div>
          </div>

          {!isEditing && (
            <div className="row mb-3">
              <div className="col-md-3 fw-bold">Full Name:</div>
              <div className="col-md-9">
                {user.firstName && user.lastName
                  ? `${user.firstName} ${user.lastName}`
                  : "-"}
              </div>
            </div>
          )}

          <div className="row mb-3">
            <div className="col-md-3 fw-bold">Email:</div>
            <div className="col-md-9">
              {isEditing ? (
                <input
                  type="email"
                  className="form-control"
                  value={editForm?.email || ""}
                  onChange={(e) => setEditForm({ ...editForm!, email: e.target.value })}
                />
              ) : (
                user.email || "-"
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3 fw-bold">Role:</div>
            <div className="col-md-9">
              {isEditing ? (
                <select
                  className="form-select"
                  value={editForm?.role || "STUDENT"}
                  onChange={(e) => setEditForm({ ...editForm!, role: e.target.value })}
                >
                  <option value="STUDENT">Student</option>
                  <option value="FACULTY">Faculty</option>
                  <option value="TA">TA</option>
                  <option value="ADMIN">Admin</option>
                </select>
              ) : (
                <span className={`badge bg-${
                  user.role === "FACULTY" ? "primary" :
                  user.role === "ADMIN" ? "danger" :
                  user.role === "TA" ? "warning" :
                  "secondary"
                }`}>
                  {user.role || "STUDENT"}
                </span>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3 fw-bold">Login ID:</div>
            <div className="col-md-9">{user.loginId || "-"}</div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3 fw-bold">Section:</div>
            <div className="col-md-9">{user.section || "-"}</div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3 fw-bold">Date of Birth:</div>
            <div className="col-md-9">
              {user.dob ? new Date(user.dob).toLocaleDateString() : "-"}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3 fw-bold">Last Activity:</div>
            <div className="col-md-9">{user.lastActivity || "-"}</div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3 fw-bold">Total Activity:</div>
            <div className="col-md-9">{user.totalActivity || "-"}</div>
          </div>
        </div>
        <div className="card-footer">
          {isEditing ? (
            <div className="d-flex gap-2">
              <button className="btn btn-success" onClick={saveUser}>
                Save
              </button>
              <button className="btn btn-secondary" onClick={cancelEdit}>
                Cancel
              </button>
            </div>
          ) : (
            <Link href="/Account/Users" className="btn btn-secondary">
              Back to Users
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
