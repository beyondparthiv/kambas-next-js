import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./reducer";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import assignmentsReducer from "./Courses/[cid]/Assignments/reducer";

const store = configureStore({
  reducer: {
    coursesReducer,
    modulesReducer,
    assignmentsReducer, // ← NEW
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
