"use client";

import { Arrow, Circle, Plus } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreditCardPage = () => {
  const id = useSelector((state) => state.auth.id);
  const [userCards, setUserCards] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchActivityData = async () => {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/accounts/${id}/cards`,
            {
              headers: {
                Authorization: `${Cookies.get("token")}`,
              },
            }
          );
          const cards = response.data;
          setUserCards(cards);
        } catch (error) {
          console.error("Error al obtener la actividad del usuario:", error);
        }
      };
      fetchActivityData();
    }
  }, [id]);

  const deleteCard = async (card_id) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/accounts/${id}/cards/${card_id}`,
        {
          headers: {
            Authorization: `${Cookies.get("token")}`,
          },
        }
      );
      // Actualiza el estado eliminando la tarjeta borrada
      setUserCards((prevCards) =>
        prevCards.filter((card) => card.id !== card_id)
      );
      toast("Tarjeta eliminada exitosamente");
    } catch (error) {
      console.error("Error al eliminar la tarjeta:", error);
    }
  };

  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col justify-center items-center w-full">
          <div className="bg-black md:w-[1000px] sm:w-[500px] w-[350px] md:h-[150px] h-[130px] p-8 rounded-xl">
            <h2 className="text-sm text-white font-semibold mb-4">
              Agregá tu tarjeta de débito o crédito
            </h2>
            <div className="flex justify-between  text-[#C1FD35]">
              <Link href="credit-card-2">
                <Plus color={"#C1FD35"} />
              </Link>
              <h3 className="md:mr-[760px] mr-[80px] md:mt-1">Nueva Tarjeta</h3>
              <Link href="credit-card-2">
                <Arrow color={"#C1FD35"} />
              </Link>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="md:w-[1000px] sm:w-[500px] w-[350px] md:h-[285px] h-[320px] bg-white rounded-md text-black border-2 border-gray-300 shadow-md flex flex-col">
              <h4 className="ml-6 mt-6 mb-2 font-bold">Tus tarjetas</h4>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              {userCards ? (
                userCards.map((card, index) => (
                  <div key={index}>
                    <div className="flex items-center md:ml-6 ml-4 text-sm">
                      <Circle color={"[#C1FD35]"} className="md:mr-2" />
                      <h5 className="ml-2">
                        Terminada en {String(card.number_id).slice(-4)}
                      </h5>
                      <button
                        className="md:ml-[730px] ml-20"
                        onClick={() => deleteCard(card.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                    <hr className="border-gray-300 my-3 mr-6 ml-6" />
                  </div>
                ))
              ) : (
                <p className="text-center">No tienes tarjetas registradas</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default CreditCardPage;
