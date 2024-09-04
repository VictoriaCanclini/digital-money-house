"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { setCredentials } from "../state/features/authSlice";

const Navbar = () => {
  const { email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/logout`,
        {}
        // { withCredentials: true }
      );
      Cookies.remove("token");
      dispatch(setCredentials({ user: null, email: "" }));
      router.push("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="flex justify-between bg-black h-[40px] sm:h-[50px]">
      <div className="mt-7 ml-2">
        <img src="/img/Logo 01.png" alt="Logo1" width={70} />
      </div>
      <div className="flex justify-end gap-2 sm:mt-6 mr-4 mt-7">
        {email ? (
          <button
            onClick={handleLogout}
            className="bg-[#C1FD35] text-black rounded-md pt-5 pb-5 pl-3 pr-3 flex items-center"
          >
            Cerrar sesión
          </button>
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
