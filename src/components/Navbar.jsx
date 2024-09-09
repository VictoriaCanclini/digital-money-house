"use client";

import { Burguer } from "@/common/Icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { email } = useSelector((state) => state.auth);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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
              <Link href="/profile">VC</Link>
            </button>
            {/* <p className="mt-3">Hola, Victoria Canclini</p> */}
            <p className="hidden sm:block mt-3">Hola, Victoria Canclini</p>
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
