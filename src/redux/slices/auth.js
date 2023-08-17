import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      debugger;
      const { user, token } = action.payload;
      state.user = user;
      state.isAuthenticated = true;
      Cookies.set("access-token", token, { expires: 1 });
    },
    logoutSuccess(state) {
      state.user = null;
      state.isAuthenticated = false;
      Cookies.remove("access-token");
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
