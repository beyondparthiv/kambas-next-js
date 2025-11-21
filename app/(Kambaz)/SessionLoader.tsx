/* eslint-disable @typescript-eslint/no-explicit-any */
// app/(Kambaz)/SessionLoader.tsx
"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { setCurrentUser } from "./Store/accountReducer";
import type { AppDispatch, RootState } from "./Store/store";

const API_BASE = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

/**
 * This component runs on mount and checks if there's a session on the server.
 * If yes, it loads the current user into Redux.
 * This makes "reload browser, still logged in" work.
 */
export default function SessionLoader() {
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector((s: RootState) => s.account.currentUser);

  useEffect(() => {
    // Only fetch if we don't already have a user in Redux
    if (currentUser) return;

    const loadSession = async () => {
      try {
        const response = await axios.get(
          `${API_BASE}/api/users/profile`,
          { withCredentials: true }
        );

        const user = response.data;
        if (user) {
          dispatch(setCurrentUser(user));
        }
      } catch (e: any) {
        // No session or error - that's ok, user is not logged in
        console.log("No active session");
      }
    };

    loadSession();
  }, [dispatch, currentUser]);

  return null; // This component doesn't render anything
}