"use client";

import { Note } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import Link from "next/link";
import Cookies from "js-cookie";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoadMoneyCheckPage = () => {
  const router = useRouter();
  const amount = useSelector((state) => state.auth.amount);
  const id = useSelector((state) => state.auth.id);
  const cvu = useSelector((state) => state.auth.cvu);
  const [userDeposit, setUserDeposit] = useState(null);

  const handleDeposit = async () => {
    if (id && amount) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/accounts/${id}/deposits`,
          {
            amount: parseFloat(amount),
            dated: new Date().toISOString(),
            destination: "Mi Cuenta Bancaria", // Modifica con valores reales
            origin: "Mi Tarjeta", // Modifica con valores reales
          },
          {
            headers: {
              Authorization: `${Cookies.get("token")}`,
            },
          }
        );
        const deposit = response.data;
        console.log(deposit);
        setUserDeposit(deposit);
        router.push("/load-money-okey"); // Navegamos a la página de confirmación
      } catch (error) {
        console.error("Error al hacer un depósito:", error);
      }
    }
  };

  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col justify-center w-full ml-10">
          <div className="bg-black md:w-[1000px] sm:w-[500px] w-[350px] md:h-[350px] h-[300px] md:p-6 p-4 md:mr-60 rounded-xl">
            <h2 className="text-lg text-[#C1FD35] font-semibold mb-4">
              Revisá que está todo bien
            </h2>
            <div className="flex justify-between md:mr-[820px] mr-[180px]">
              <h3 className="text-sm">Vas a transferir</h3>
              <spam>
                <Note />
              </spam>
            </div>
            <p className="font-bold">${amount}</p>
            <h4 className="text-sm mt-6">para</h4>
            <h5 className="font-bold">Cuenta propia</h5>
            <h6 className="text-sm mt-6">Brubank</h6>
            <p className="text-sm">CVU: {cvu}</p>

            <div className="flex justify-end text-[#C1FD35] md:mt-6 mt-20">
              <Link href="/load-money-okey">
                <button
                  onClick={handleDeposit}
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

export default LoadMoneyCheckPage;
