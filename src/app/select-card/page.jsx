"use client";

import { Circle, CompleteCircle, Plus, SelectCircle } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import Link from "next/link";
import Cookies from "js-cookie";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const SelectCardPage = () => {
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
          setUserCards(cards);
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
        <div className="flex flex-col justify-center items-center w-full">
          <div className="bg-black md:w-[1000px] sm:w-[500px] w-[350px] md:h-[450px] h-[480px] p-6 rounded-xl">
            <h2 className="text-lg text-[#C1FD35] font-semibold mb-4">
              Seleccionar tarjeta
            </h2>
            <div className="flex flex-row mt-10 md:ml-6">
              <div className="md:w-[900px] sm:w-[500px] w-[350px] h-[250px] bg-white rounded-md text-black border-2 border-gray-300 shadow-md flex flex-col justify-center">
                <h3 className="ml-6 mt-4 font-bold">Tus tarjetas</h3>
                <hr className="border-gray-300 my-3 mr-6 ml-6" />
                {userCards ? (
                  userCards.map((card, index) => (
                    <div key={index}>
                      <div className="flex items-center md:ml-6 ml-4 text-sm">
                        <Circle color={"[#C1FD35]"} className="md:mr-2" />
                        <h4 className="ml-2">
                          Terminada en {String(card.number_id).slice(-4)}
                        </h4>
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
            <div className="flex justify-between  text-[#C1FD35] md:mt-8 mt-16">
              <Link href="credit-card-2">
                <Plus color={"#C1FD35"} />
              </Link>
              <Link href="credit-card-2">
                <h5 className="md:mr-[700px] mr-[40px] mt-1">Nueva Tarjeta</h5>
              </Link>
              <Link href="load-money">
                <button className="rounded-lg p-3 text-[15px] text-black font-bold border-lg bg-[#C1FD35] text-center mr-6">
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

export default SelectCardPage;
