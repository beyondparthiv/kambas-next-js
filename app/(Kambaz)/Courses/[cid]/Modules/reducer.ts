/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { modules as seed } from "../../../Database";

const initialState = {
  modules: seed,
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, { payload: module }) => {
      const newModule = {
        _id: Date.now().toString(),
        lessons: [] as any[],
        name: module.name as string,
        course: module.course as string,
      };
      state.modules = [...(state.modules as any), newModule] as any;
    },
    deleteModule: (state, { payload: moduleId }) => {
      state.modules = (state.modules as any).filter(
        (m: any) => m._id !== moduleId
      ) as any;
    },
    updateModule: (state, { payload: module }) => {
      state.modules = (state.modules as any).map((m: any) =>
        m._id === module._id ? module : m
      ) as any;
    },
    editModule: (state, { payload: moduleId }) => {
      state.modules = (state.modules as any).map((m: any) =>
        m._id === moduleId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});

export const { addModule, deleteModule, updateModule, editModule } =
  modulesSlice.actions;
export default modulesSlice.reducer;
