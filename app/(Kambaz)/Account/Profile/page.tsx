/* eslint-disable @typescript-eslint/no-explicit-any */
// app/(Kambaz)/Account/Profile/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

import { setCurrentUser } from "../../Store/accountReducer";
import type { RootState, AppDispatch } from "../../Store/store";

const API_BASE = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

export default function ProfilePage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const currentUser = useSelector((s: RootState) => s.account.currentUser);

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    role: "STUDENT",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!currentUser) {
      router.push("/Account/Signin");
    } else {
      // Format date properly for input type="date"
      let formattedDob = "";
      if (currentUser.dob) {
        try {
          const date = new Date(currentUser.dob);
          formattedDob = date.toISOString().split("T")[0];
        } catch (e) {
          console.error("Error parsing date:", e);
        }
      }

      setProfile({
        firstName: currentUser.firstName || "",
        lastName: currentUser.lastName || "",
        email: currentUser.email || "",
        dob: formattedDob,
        role: currentUser.role || "STUDENT",
      });
    }
  }, [currentUser, router]);

  const updateProfile = async () => {
    try {
      setError("");
      setMessage("");

      console.log("Updating profile with:", profile);

      // Convert date to ISO format if present
      const updateData = {
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        role: profile.role,
        dob: profile.dob ? new Date(profile.dob).toISOString() : undefined,
      };

      console.log("Sending to server:", updateData);

      const response = await axios.put(
        `${API_BASE}/api/users/profile`,
        updateData,
        { withCredentials: true }
      );

      console.log("Profile update response:", response.data);

      const updatedUser = response.data;
      dispatch(setCurrentUser(updatedUser));

      setMessage("Profile updated successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (e: any) {
      console.error("Update profile error:", e);
      console.error("Error response:", e.response);
      setError(e.response?.data?.message || "Failed to update profile");
    }
  };

  if (!currentUser) {
    return null;
  }

  return (
    <>
      <h1>Profile</h1>

      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          className="form-control"
          value={currentUser.username}
          disabled
        />
        <small className="text-muted">Username cannot be changed</small>
      </div>

      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input
          className="form-control"
          value={profile.firstName}
          onChange={(e) =>
            setProfile({ ...profile, firstName: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input
          className="form-control"
          value={profile.lastName}
          onChange={(e) =>
            setProfile({ ...profile, lastName: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          className="form-control"
          type="email"
          value={profile.email}
          onChange={(e) =>
            setProfile({ ...profile, email: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Date of Birth</label>
        <input
          className="form-control"
          type="date"
          value={profile.dob}
          onChange={(e) =>
            setProfile({ ...profile, dob: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Role</label>
        <select
          className="form-control"
          value={profile.role}
          onChange={(e) =>
            setProfile({ ...profile, role: e.target.value })
          }
        >
          <option value="STUDENT">Student</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Admin</option>
          <option value="TA">TA</option>
        </select>
      </div>

      <div className="d-flex gap-2">
        <button onClick={updateProfile} className="btn btn-primary">
          Update Profile
        </button>

        <Link href="/Kambaz/Dashboard" className="btn btn-secondary">
          Back to Dashboard
        </Link>
      </div>
    </>
  );
}