"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import Link from "next/link";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setAmount } from "@/state/features/authSlice";

const AccountNumberPage = () => {
  const [number, setNumber] = useState("");
  // const dispatch = useDispatch();

  // Función para manejar el cambio en el input
  const handleAmountChange = (e) => {
    setNumber(e.target.value);
  };

  // const handleContinue = () => {
  //   dispatch(setAmount(parseFloat(amount))); // Guardamos el amount en el store
  // };

  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col justify-center w-full ml-10">
          <div className="bg-black md:w-[1000px] sm:w-[500px] w-[350px] md:h-[300px] h-[200px] md:p-6 p-4 md:mr-60 rounded-xl">
            <h2 className="text-lg text-[#C1FD35] font-semibold mb-4">
              Número de cuenta sin el primer 2
            </h2>
            <input
              type="number"
              className="p-2 md:w-[300px] sm:w-[500px] w-[300px] h-[60px] bg-white rounded-md text-black md:mt-8"
              value={number}
              onChange={handleAmountChange}
            />
            <h3 className="text-sm md:mt-8 mt-4">
              Son 11 números sin espacios, sin el “2” inicial. Agregá ceros
              adelante si tenés menos.{" "}
            </h3>
            <div className="flex justify-end text-[#C1FD35] md:mt-6 mt-10">
              <Link href="client-pay">
                <button
                  // onClick={handleContinue}
                  className="rounded-lg p-3 text-[15px] text-black font-bold border-lg bg-[#C1FD35] text-center md:mr-6 md:w-[200px] w-[180px]"
                >
                  Continuar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountNumberPage;
