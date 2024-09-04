import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, email: "" },
  reducers: {
    setCredentials: (state, { payload }) => {
      const { user, email } = payload;
      state.user = user;
      state.email = email;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
