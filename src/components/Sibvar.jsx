"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { setCredentials } from "../state/features/authSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const Sibvar = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/logout`, {});
      Cookies.remove("token");
      dispatch(setCredentials({ user: null, email: "" }));
      router.push("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="w-64 bg-[#C1FD35] text-black p-4 h-screen">
      <ul>
        <li className="mb-2">
          <button>Inicio</button>
        </li>
        <li className="mb-2">
          <button>Actividad</button>
        </li>
        <li className="mb-2">
          <button>Tu perfil</button>
        </li>
        <li className="mb-2">
          <button>Cargar dinero</button>
        </li>
        <li className="mb-2">
          <button>Cargar servicios</button>
        </li>
        <li className="mb-2">
          <button>Tarjetas</button>
        </li>
        <li className="text-gray-500">
          <button onClick={handleLogout}>Cerrar sesión</button>
        </li>
      </ul>
    </div>
  );
};

export default Sibvar;
