import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";

// Recuperar el estado desde localStorage
export const storedAuth = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : { user: null, email: "" };

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: {
    auth: storedAuth, // Inicializar el estado de auth con los datos almacenados
  },
});
