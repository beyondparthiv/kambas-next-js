// app/(Kambaz)/Courses/[cid]/reducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Course {
  _id: string;
  name: string;
  number?: string;
  description: string;
  image?: string;
  startDate?: string;
  endDate?: string;
  department?: string;
  credits?: number;
  author?: string;
}

interface CoursesState {
  courses: Course[];
}

const initialState: CoursesState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload;
    },
    addNewCourse: (state, action: PayloadAction<Course>) => {
      const newCourse = {
        ...action.payload,
        _id: new Date().getTime().toString(),
      };
      state.courses = [...state.courses, newCourse];
    },
    deleteCourse: (state, action: PayloadAction<string>) => {
      state.courses = state.courses.filter((c) => c._id !== action.payload);
    },
    updateCourse: (state, action: PayloadAction<Course>) => {
      state.courses = state.courses.map((c) =>
        c._id === action.payload._id ? action.payload : c
      );
    },
  },
});

export const { setCourses, addNewCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;

export default coursesSlice.reducer;