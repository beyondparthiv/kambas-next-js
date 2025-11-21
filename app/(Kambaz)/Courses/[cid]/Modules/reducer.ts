/* eslint-disable @typescript-eslint/no-explicit-any */
// app/(Kambaz)/Courses/[cid]/Modules/reducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Module {
  _id: string;
  name: string;
  description?: string;
  course: string;
  lessons?: any[];
}

interface ModulesState {
  modules: Module[];
}

const initialState: ModulesState = {
  modules: [],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action: PayloadAction<Module[]>) => {
      state.modules = action.payload;
    },
    addModule: (state, action: PayloadAction<Module>) => {
      const newModule = {
        ...action.payload,
        _id: new Date().getTime().toString(),
      };
      state.modules = [...state.modules, newModule];
    },
    deleteModule: (state, action: PayloadAction<string>) => {
      state.modules = state.modules.filter((m) => m._id !== action.payload);
    },
    updateModule: (state, action: PayloadAction<Module>) => {
      state.modules = state.modules.map((m) =>
        m._id === action.payload._id ? action.payload : m
      );
    },
  },
});

export const { setModules, addModule, deleteModule, updateModule } =
  modulesSlice.actions;

export default modulesSlice.reducer;