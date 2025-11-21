/* eslint-disable @typescript-eslint/no-explicit-any */
// app/(Kambaz)/Store/accountReducer.ts
"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AccountState = {
  currentUser: any | null;
};

const initialState: AccountState = {
  currentUser: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<any>) {
      state.currentUser = action.payload;
    },
    updateProfile(state, action: PayloadAction<any>) {
      if (!state.currentUser) return;
      state.currentUser = { ...state.currentUser, ...action.payload };
    },
    signout(state) {
      state.currentUser = null;
    },
  },
});

export const { setCurrentUser, updateProfile, signout } =
  accountSlice.actions;

export default accountSlice.reducer;