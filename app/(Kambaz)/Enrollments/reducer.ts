// app/(Kambaz)/Enrollments/reducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface EnrollmentsState {
  enrollments: Enrollment[];
}

const initialState: EnrollmentsState = {
  enrollments: [],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action: PayloadAction<Enrollment[]>) => {
      state.enrollments = action.payload;
    },
    addEnrollment: (state, action: PayloadAction<Enrollment>) => {
      const newEnrollment = {
        ...action.payload,
        _id: new Date().getTime().toString(),
      };
      state.enrollments = [...state.enrollments, newEnrollment];
    },
    deleteEnrollment: (state, action: PayloadAction<string>) => {
      state.enrollments = state.enrollments.filter((e) => e._id !== action.payload);
    },
  },
});

export const { setEnrollments, addEnrollment, deleteEnrollment } =
  enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;