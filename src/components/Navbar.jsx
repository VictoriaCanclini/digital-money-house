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
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { email, user_id } = useSelector((state) => state.auth);
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [initials, setInitials] = useState("");

  useEffect(() => {
    setIsClient(true);
    if (user_id) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${user_id}`,
            {
              headers: {
                Authorization: `${Cookies.get("token")}`,
              },
            }
          );
          const user = response.data;
          setUserData(user);
          const userInitials =
            user.firstname?.charAt(0).toUpperCase() +
            user.lastname?.charAt(0).toUpperCase();
          setInitials(userInitials);
        } catch (error) {
          console.error("Error al obtener los datos del usuario:", error);
        }
      };
      fetchUserData();
    }
  }, [user_id]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/logout`, {});
      Cookies.remove("token");
      dispatch(setCredentials({ user: null, email: "" }));
      router.push("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="flex justify-between bg-black h-[60px]">
      <div className="mt-5 ml-2">
        <Link href="/home">
          <Image src="/img/Logo 01.png" alt="Logo1" width={70} height={70} />
        </Link>
      </div>
      <div className="flex justify-end gap-2 sm:mt-4 mr-4 mt-5 sm:mb-2">
        {isClient && email ? (
          <>
            <button className="bg-[#C1FD35] text-black rounded-lg pt-4 pb-4 pl-3 pr-3 mb-1 flex items-center">
              <Link href={`/profile/${user_id}`}>{initials}</Link>
            </button>
            <p className="hidden sm:block mt-3">
              Hola, {userData?.firstname} {userData?.lastname}
            </p>
            {pathname !== "/" && (
              <button
                className="sm:hidden flex items-center"
                onClick={toggleMenu}
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
      {isMenuOpen && (
        <div className="absolute top-[60px] right-0 bg-[#C1FD35] bg-opacity-90 text-black w-[35%] rounded-md sm:hidden">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <Link href="/home" onClick={toggleMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/activity/" onClick={toggleMenu}>
                Actividad
              </Link>
            </li>
            <li>
              <Link href={`/profile/${user_id}`} onClick={toggleMenu}>
                Tu perfil
              </Link>
            </li>
            <li>
              <Link href="/add-money" onClick={toggleMenu}>
                Cargar dinero
              </Link>
            </li>
            <li>
              <Link href="/pay-service" onClick={toggleMenu}>
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
