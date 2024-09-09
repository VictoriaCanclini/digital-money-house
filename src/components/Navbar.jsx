"use client";

import { Burguer } from "@/common/Icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Navbar = () => {
  const { email } = useSelector((state) => state.auth);
  const [isClient, setIsClient] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setIsClient(true);
    const user_id = localStorage.getItem("user_id");
    console.log(user_id);
    if (user_id) {
      const fetchUserData = async () => {
        try {
          const token = localStorage.getItem("token"); // Obtener el token de localStorage
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${user_id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Pasar el token en los headers
              },
            }
          );
          setUserData(response.data); // Guardar la data del usuario en el estado
        } catch (error) {
          console.error("Error al obtener los datos del usuario:", error);
        }
      };

      fetchUserData();
    }
  }, []);

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
              VC
            </button>
            {userData && (
              <p className="hidden sm:block mt-3">
                Hola, {userData.firstname} {userData.lastname}
              </p>
            )}
            <button className="sm:hidden flex items-center">
              <Burguer />
            </button>
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
    </div>
  );
};

export default Navbar;
