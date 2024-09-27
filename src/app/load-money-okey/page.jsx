"use client";

import { Check } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import Link from "next/link";
import { useSelector } from "react-redux";

const LoadMoneyOkeyPage = () => {
  const amount = useSelector((state) => state.auth.amount);
  const cvu = useSelector((state) => state.auth.cvu);

  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col bg-[#C1FD35] text-black font-bold md:w-[1000px] sm:w-[500px] w-[350px] h-[150px] rounded-md justify-center items-center mb-10">
            <Check color={"#000000"} />
            <span className="text-lg mt-4">
              Ya cargamos el dinero en tu cuenta
            </span>
          </div>
          <div className="bg-black md:w-[1000px] sm:w-[500px] w-[350px] md:h-[250px] h-[250px] md:p-6 p-4  rounded-xl">
            <h3 className="text-sm mt-2">17 de agosto 2022 a las 16:34 hs.</h3>
            <p className="font-bold text-[#C1FD35]">${amount}</p>
            <h4 className="text-sm mt-6">para</h4>
            <h5 className="font-bold text-[#C1FD35]">Cuenta propia</h5>
            <h6 className="text-sm mt-6">Brubank</h6>
            <p className="text-sm text-[#C1FD35]">CVU: {cvu}</p>
          </div>

          <div className="flex justify-between md:mt-6 mt-10 p-3 text-[15px] text-black font-bold border-lg text-center">
            <Link href="/home">
              <button className=" bg-[#CECECE] md:w-[200px] w-[150px] h-[50px] rounded-lg mr-4">
                Ir al inicio
              </button>
            </Link>
            <button className=" bg-[#C1FD35] md:w-[200px] w-[150px] h-[50px] rounded-lg text-sm">
              Descargar comprobante
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoadMoneyOkeyPage;
