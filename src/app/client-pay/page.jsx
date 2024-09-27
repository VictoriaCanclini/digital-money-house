"use client";

import { Circle, CompleteCircle, SelectCircle } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const ClientPage = () => {
  const id = useSelector((state) => state.auth.id);
  const [userCards, setUserCards] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

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
          console.log(cards);
          setUserCards(cards); // Guardamos los datos del usuario en el estado
        } catch (error) {
          console.error("Error al obtener la actividad del usuario:", error);
        }
      };
      fetchActivityData();
    }
  }, [id]);

  const handleSelectCard = (cardId) => {
    setSelectedCard((prevSelected) =>
      prevSelected === cardId ? null : cardId
    );
  };

  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col justify-center w-full ml-10">
          <div className="bg-black md:w-[1000px] sm:w-[500px] w-[350px] md:h-[150px] h-[130px] p-8 mr-60 rounded-xl">
            <div className="flex justify-between">
              <h2 className="font-semibold text-[#C1FD35] text-lg">
                Cablevisión
              </h2>
              <button className="underline text-sm">
                Ver detalles del pago
              </button>
            </div>
            <hr className="border-gray-600 my-3 mr-6 ml-6" />
            <div className="flex justify-between  text-white text-lg">
              <h3 className="md:mr-[750px] mr-[80px] md:mt-1">Total a pagar</h3>
              <p className="">$1153,75</p>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="md:w-[1000px] sm:w-[500px] w-[350px] md:h-[285px] h-[320px] bg-white rounded-md text-black border-2 border-gray-300 shadow-md flex flex-col">
              <h4 className="ml-6 mt-6 font-bold">Tus tarjetas</h4>
              <hr className="border-gray-300 my-4 mr-6 ml-6" />
              {userCards ? (
                userCards.map((card, index) => (
                  <div key={index}>
                    <div className="flex items-center md:ml-6 ml-4 text-sm">
                      <Circle color={"[#C1FD35]"} className="md:mr-2" />
                      <h5 className="ml-2">
                        Terminada en {String(card.number_id).slice(-4)}
                      </h5>
                      <button
                        className="md:ml-[600px] ml-20"
                        onClick={() => handleSelectCard(card.number_id)}
                      >
                        {selectedCard === card.number_id ? (
                          <CompleteCircle />
                        ) : (
                          <SelectCircle />
                        )}
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
          <div className="flex justify-end">
            <button className="rounded-lg p-4 text-[15px] text-black font-bold border-lg bg-[#C1FD35] text-center mr-[22%] mt-2 w-[20%]">
              <Link href="/pay-ok">Pagar</Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClientPage;
