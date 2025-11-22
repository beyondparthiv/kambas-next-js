/* eslint-disable @typescript-eslint/no-explicit-any */
// app/(Kambaz)/Account/Signin/page.tsx
"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

import { setCurrentUser } from "../../Store/accountReducer";
import type { AppDispatch } from "../../Store/store";

const API_BASE = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

export default function SigninPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const signin = async () => {
    try {
      setError("");
      
      const response = await axios.post(
        `${API_BASE}/api/users/signin`,
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
      console.error("Signin error:", e);
      setError(e.response?.data?.message || "Invalid username or password");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      signin();
    }
  };

  return (
    <>
      <h1>Sign in</h1>

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
        className="form-control mb-3"
        placeholder="password"
        type="password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        onKeyPress={handleKeyPress}
      />

      <button onClick={signin} className="btn btn-primary w-100">
        Sign in
      </button>

      <div className="mt-3 text-center">
        <Link href="/Signup">Don&apos;t have an account? Sign up</Link>
      </div>
    </>
  );
}