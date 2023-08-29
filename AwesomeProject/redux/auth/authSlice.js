import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: null,
  email: null,
  photoURL: null,
  userId: null,
  stateChange: false,
  isLoggedIn: false,
  isLoading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      login: payload.login,
      userId: payload.userId,
      // email: payload.email,
      // photoURL: payload.photoURL,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSignOut: () => initialState,
  },
});

export const { updateUserProfile, authStateChange, authSignOut } =
  authSlice.actions;

export const authReducer = authSlice.reducer;
