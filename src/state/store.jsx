import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import servicesReducer from "./features/servicesSlice";
import creditCardReducer from "./features/creditCardSlice";
import activityReducer from "./features/activitySlice";

// Función para recuperar el estado desde localStorage
const getStoredAuth = () => {
  if (typeof window !== "undefined") {
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
    creditCard: creditCardReducer,
    activity: activityReducer,
  },
  preloadedState: {
    auth: getStoredAuth(),
  },
});
