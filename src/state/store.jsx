import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import servicesReducer from "./features/servicesSlice";

// Función para recuperar el estado desde localStorage
const getStoredAuth = () => {
  if (typeof window !== "undefined") {
    // Solo accede a localStorage en el cliente
    return localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {
          email: "",
          user_id: 0,
          id: 0,
          cvu: 0,
          alias: "",
          available_amount: 0,
          amount: 0,
        };
  }
  // Estado por defecto en el servidor
  return {
    email: "",
    user_id: 0,
    id: 0,
    cvu: 0,
    alias: "",
    available_amount: 0,
    amount: 0,
  };
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    services: servicesReducer,
  },
  preloadedState: {
    auth: getStoredAuth(), // Llama a la función para inicializar el estado de auth
  },
});
