/* eslint-disable @typescript-eslint/no-explicit-any */
// app/(Kambaz)/Store/store.ts - COMPLETE FIXED VERSION
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./accountReducer";
import coursesReducer from "../Courses/[cid]/reducer";
import modulesReducer from "../Courses/[cid]/Modules/reducer";
import assignmentsReducer from "../Courses/[cid]/Assignments/reducer";

// Load state from localStorage
const loadState = () => {
  if (typeof window === "undefined") {
    return undefined;
  }
  
  try {
    const serializedState = localStorage.getItem("kambazState");
    console.log("📦 Loading from localStorage:", serializedState);
    
    if (serializedState === null) {
      console.log("⚠️ No saved state found");
      return undefined;
    }
    
    const parsed = JSON.parse(serializedState);
    console.log("✅ Loaded state:", parsed);
    return parsed;
  } catch (err) {
    console.error("❌ Error loading state:", err);
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state: any) => {
  if (typeof window === "undefined") {
    return;
  }
  
  try {
    const stateToSave = {
      account: state.account,
      courses: state.courses,
      modules: state.modules,
      assignments: state.assignments,
    };
    
    const serializedState = JSON.stringify(stateToSave);
    localStorage.setItem("kambazState", serializedState);
    console.log("💾 Saved to localStorage:", stateToSave);
  } catch (err) {
    console.error("❌ Error saving state:", err);
  }
};

// Load persisted state
const persistedState = loadState();

export const store = configureStore({
  reducer: {
    account: accountReducer,
    courses: coursesReducer,
    modules: modulesReducer,
    assignments: assignmentsReducer,
  },
  preloadedState: persistedState,
});

// Subscribe to store changes and save to localStorage
if (typeof window !== "undefined") {
  store.subscribe(() => {
    const state = store.getState();
    console.log("🔔 Store changed, current user:", state.account.currentUser);
    saveState(state);
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;