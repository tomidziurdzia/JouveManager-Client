import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../interfaces/AuthState";

const initialState: AuthState = {
  loading: false,
  user: null,
  status: "checking",
  errorMessage: {
    msg: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
