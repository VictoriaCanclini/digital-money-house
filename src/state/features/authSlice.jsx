import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    user_id: 0,
    id: 0,
    alias: "",
    cvu: 0,
    available_amount: 0,
  },
  reducers: {
    setCredentials: (state, { payload }) => {
      const { email, user_id, alias, cvu, available_amount, id } = payload;
      state.email = email;
      state.user_id = user_id;
      state.alias = alias;
      state.cvu = cvu;
      state.available_amount = available_amount;
      state.id = id;

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
