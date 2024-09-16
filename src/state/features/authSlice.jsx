import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, email: "", user_id: 0, alias: "", cvu: 0 },
  reducers: {
    setCredentials: (state, { payload }) => {
      const { user, email, user_id, alias, cvu } = payload;
      state.user = user;
      state.email = email;
      state.user_id = user_id;
      state.alias = alias;
      state.cvu = cvu;

      // Guardar el estado en localStorage
      if (email) {
        localStorage.setItem("auth", JSON.stringify(state));
      } else {
        localStorage.removeItem("auth");
      }
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
