// app/(Kambaz)/Store/store.ts
"use client";

import { configureStore } from "@reduxjs/toolkit";

// Import all reducers
import coursesReducer from "../Courses/[cid]/reducer";
import modulesReducer from "../Courses/[cid]/Modules/reducer";
import assignmentsReducer from "../Courses/[cid]/Assignments/reducer";
import enrollmentsReducer from "../Enrollments/reducer";
import accountReducer from "./accountReducer";

export const store = configureStore({
  reducer: {
    // Each key here becomes a top-level property in state
    coursesReducer: coursesReducer,        // state.coursesReducer.courses
    modulesReducer: modulesReducer,        // state.modulesReducer.modules
    assignmentsReducer: assignmentsReducer, // state.assignmentsReducer.assignments
    enrollmentsReducer: enrollmentsReducer, // state.enrollmentsReducer.enrollments
    account: accountReducer,                // state.account.currentUser
  },
});

// Export types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;