"use client";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();
  return (
    <div className="container py-4">
      <h1>Sign in</h1>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" />
      </div>
      <button className="btn btn-danger" onClick={() => router.push("/Account/Profile")}>Sign in</button>
    </div>
  );
}
