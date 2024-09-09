import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, email: "", firstname: "", lastname: "" },
  reducers: {
    setCredentials: (state, { payload }) => {
      const { user, email, firstname, lastname } = payload;
      state.user = user;
      state.email = email;
      state.firstname = firstname;
      state.lastname = lastname;

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
