/* eslint-disable @typescript-eslint/no-explicit-any */
// app/(Kambaz)/Account/Navigation.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setCurrentUser } from "../Store/accountReducer";
import type { RootState, AppDispatch } from "../Store/store";

const API_BASE = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

export default function AccountNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  
  const currentUser = useSelector((s: RootState) => s.account.currentUser);

  const signout = async () => {
    try {
      await axios.post(
        `${API_BASE}/api/users/signout`,
        {},
        { withCredentials: true }
      );

      // Clear Redux state
      dispatch(setCurrentUser(null));

      // Navigate to signin - FIXED PATH
      router.push("/Account/Signin");
    } catch (e: any) {
      console.error("Signout error:", e);
      alert("Failed to sign out");
    }
  };

  const isActive = (path: string) => pathname === path;

  return (
    <aside id="wd-account-navigation">
      <h4>Account</h4>
      <ul>
        <li className={isActive("/Account/Signin") ? "wd-active" : ""}>
          <Link href="/Account/Signin">Signin</Link>
        </li>
        <li className={isActive("/Account/Signup") ? "wd-active" : ""}>
          <Link href="/Account/Signup">Signup</Link>
        </li>
        <li className={isActive("/Account/Profile") ? "wd-active" : ""}>
          <Link href="/Account/Profile">Profile</Link>
        </li>
        <li className={isActive("/Account/Users") ? "wd-active" : ""}>
          <Link href="/Account/Users">Users</Link>
        </li>

        {/* Signout button - only show if logged in */}
        {currentUser && (
          <li className="wd-signout-item">
            <button onClick={signout} className="wd-signout-link">
              Sign out
            </button>
          </li>
        )}
      </ul>
    </aside>
  );
}