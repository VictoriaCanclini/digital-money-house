import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, email: "" },
  reducers: {
    setCredentials: (state, { payload }) => {
      const { user, email } = payload;
      state.user = user;
      state.email = email;

      // Guardar el estado en localStorage
      if (payload.email) {
        localStorage.setItem("auth", JSON.stringify(state));
      } else {
        localStorage.removeItem("auth");
      }
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
