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
    amount: 0, // Añadimos el campo amount
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

      if (email) {
        localStorage.setItem("auth", JSON.stringify(state));
      } else {
        localStorage.removeItem("auth");
      }
    },
    setAmount: (state, { payload }) => {
      state.amount = payload;

      // Actualizar el localStorage con el nuevo valor de amount
      const authState = JSON.parse(localStorage.getItem("auth")) || {};
      authState.amount = payload;
      localStorage.setItem("auth", JSON.stringify(authState));
    },
  },
});

export const { setCredentials, setAmount } = authSlice.actions;
export default authSlice.reducer;
