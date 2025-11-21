/* eslint-disable @typescript-eslint/no-explicit-any */
// app/(Kambaz)/Account/Signup/page.tsx
"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

import { setCurrentUser } from "../../Store/accountReducer";
import type { AppDispatch } from "../../Store/store";

const API_BASE = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

export default function SignupPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [error, setError] = useState("");

  const signup = async () => {
    try {
      setError("");

      // Validate required fields
      if (!credentials.username || !credentials.password) {
        setError("Username and password are required");
        return;
      }

      const response = await axios.post(
        `${API_BASE}/api/users/signup`,
        credentials,
        { withCredentials: true }
      );

      const user = response.data;
      if (!user) {
        setError("Invalid response from server");
        return;
      }

      // Save logged in user into Redux
      dispatch(setCurrentUser(user));

      // Navigate to Dashboard - FIXED PATH
      router.push("/Dashboard");
    } catch (e: any) {
      console.error("Signup error:", e);
      setError(e.response?.data?.message || "Failed to create account");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      signup();
    }
  };

  return (
    <>
      <h1>Sign up</h1>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <input
        className="form-control mb-2"
        placeholder="username"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        onKeyPress={handleKeyPress}
      />

      <input
        className="form-control mb-2"
        placeholder="password"
        type="password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        onKeyPress={handleKeyPress}
      />

      <input
        className="form-control mb-2"
        placeholder="first name"
        value={credentials.firstName}
        onChange={(e) =>
          setCredentials({ ...credentials, firstName: e.target.value })
        }
        onKeyPress={handleKeyPress}
      />

      <input
        className="form-control mb-2"
        placeholder="last name"
        value={credentials.lastName}
        onChange={(e) =>
          setCredentials({ ...credentials, lastName: e.target.value })
        }
        onKeyPress={handleKeyPress}
      />

      <input
        className="form-control mb-3"
        placeholder="email"
        type="email"
        value={credentials.email}
        onChange={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
        onKeyPress={handleKeyPress}
      />

      <button onClick={signup} className="btn btn-primary w-100">
        Sign up
      </button>

      <div className="mt-3 text-center">
        <Link href="/Account/Signin">Already have an account? Sign in</Link>
      </div>
    </>
  );
}