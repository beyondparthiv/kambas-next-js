// app/(Kambaz)/SessionLoader.tsx
"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setCurrentUser } from "./Store/accountReducer";
import { setCourses } from "./Courses/[cid]/reducer";
import type { AppDispatch } from "./Store/store";

const API_BASE = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

export default function SessionLoader() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadSession = async () => {
      try {
        // Try to get current user from backend session
        const response = await axios.get(
          `${API_BASE}/api/users/profile`,
          { withCredentials: true }
        );

        if (response.data) {
          console.log("✅ Session restored from backend:", response.data);
          dispatch(setCurrentUser(response.data));
          
          // Load enrolled courses
          try {
            const coursesResponse = await axios.get(
              `${API_BASE}/api/users/current/courses`,
              { withCredentials: true }
            );
            dispatch(setCourses(coursesResponse.data));
          } catch (e) {
            console.log("Could not load courses");
          }
        }
      } catch (error) {
        console.log("No active backend session - using localStorage");
        // LocalStorage will auto-restore via Redux persistence
      }
    };

    loadSession();
  }, [dispatch]);

  return null; // This component doesn't render anything
}