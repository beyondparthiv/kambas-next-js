import { createSlice } from "@reduxjs/toolkit";
import { assignments as seed } from "../../../Database"; // (Kambaz)/Database
// NOTE: this path is from app/(Kambaz)/Courses/Assignments → ../../Database

export type Assignment = {
  _id: string;
  course: string; // cid
  title: string;
  description?: string;
  points?: number;
  due?: string;             // YYYY-MM-DD
  availableFrom?: string;   // YYYY-MM-DD
  availableUntil?: string;  // YYYY-MM-DD
};

const initialState: { assignments: Assignment[] } = {
  assignments: seed as Assignment[],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload }: { payload: Omit<Assignment, "_id"> }) => {
      const _id = Date.now().toString(); // no uuid needed
      state.assignments = [...state.assignments, { _id, ...payload }];
    },
    updateAssignment: (state, { payload }: { payload: Assignment }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === payload._id ? payload : a
      );
    },
    deleteAssignment: (state, { payload: id }: { payload: string }) => {
      state.assignments = state.assignments.filter((a) => a._id !== id);
    },
  },
});

export const { addAssignment, updateAssignment, deleteAssignment } =
  assignmentsSlice.actions;

export default assignmentsSlice.reducer;
