"use client";

import { Burguer } from "@/common/Icons";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { setCredentials } from "../state/features/authSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { email, user_id } = useSelector((state) => state.auth);
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Función para alternar el estado del menú hamburguesa
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <div className="flex justify-between bg-black h-[60px]">
      <div className="mt-5 ml-2">
        <Link href="/">
          <img src="/img/Logo 01.png" alt="Logo1" width={70} />
        </Link>
      </div>
      <div className="flex justify-end gap-2 sm:mt-4 mr-4 mt-5 sm:mb-2">
        {isClient && email ? (
          <>
            <button className="bg-[#C1FD35] text-black rounded-lg pt-4 pb-4 pl-3 pr-3 mb-1 flex items-center">
              <Link href="/profile">VC</Link>
            </button>
            <p className="hidden sm:block mt-3">Hola, Victoria Canclini</p>
            {pathname !== "/" && (
              <button
                className="sm:hidden flex items-center"
                onClick={toggleMenu} // Al hacer clic, alternamos el estado del menú
              >
                <Burguer />
              </button>
            )}
          </>
        ) : (
          <>
            <button>
              <Link
                href="/login"
                className="text-[#C1FD35] border-2 border-[#C1FD35] rounded-md pl-4 pr-4 pt-2 pb-2"
              >
                Ingresar
              </Link>
            </button>
            <button>
              <Link
                href="/register"
                className="bg-[#C1FD35] text-black rounded-md pl-4 pr-4 pt-2 pb-2"
              >
                Crear cuenta
              </Link>
            </button>
          </>
        )}
      </div>

      {/* Mostrar menú hamburguesa cuando esté abierto */}
      {isMenuOpen && (
        <div className="absolute top-[60px] right-0 bg-[#C1FD35] bg-opacity-70 text-black w-[30%] rounded-md sm:hidden">
          <ul className="flex flex-col items-center gap-4 p-4">
            <li>
              <Link href="/home" onClick={toggleMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/" onClick={toggleMenu}>
                Actividad
              </Link>
            </li>
            <li>
              <Link href="/profile" onClick={toggleMenu}>
                Tu perfil
              </Link>
            </li>
            <li>
              <Link href="/home" onClick={toggleMenu}>
                Cargar dinero
              </Link>
            </li>
            <li>
              <Link href="/home" onClick={toggleMenu}>
                Pagar serv...
              </Link>
            </li>
            <li>
              <Link href="/credit-card" onClick={toggleMenu}>
                Tarjetas
              </Link>
            </li>
            <li>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
