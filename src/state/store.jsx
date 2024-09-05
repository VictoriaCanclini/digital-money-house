// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./features/authSlice";

// // Recuperar el estado desde localStorage
// export const storedAuth = localStorage.getItem("auth")
//   ? JSON.parse(localStorage.getItem("auth"))
//   : { user: null, email: "" };

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
//   preloadedState: {
//     auth: storedAuth, // Inicializar el estado de auth con los datos almacenados
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";

// Función para recuperar el estado desde localStorage
const getStoredAuth = () => {
  if (typeof window !== "undefined") {
    // Solo accede a localStorage en el cliente
    return localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : { user: null, email: "" };
  }
  // Estado por defecto en el servidor
  return { user: null, email: "" };
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: {
    auth: getStoredAuth(), // Llama a la función para inicializar el estado de auth
  },
});
