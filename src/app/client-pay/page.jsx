"use client";

import { Circle, CompleteCircle, SelectCircle } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { setAmount, setAvailableAmount } from "@/state/features/authSlice";
import { setServicesData } from "@/state/features/servicesSlice";
import {
  setCreditCardData,
  setSelectedCardId,
} from "@/state/features/creditCardSlice";

const ClientPage = () => {
  const id = useSelector((state) => state.auth.id);
  const amount = useSelector((state) => state.auth.amount);
  const available_amount = useSelector((state) => state.auth.available_amount);
  const cvu = useSelector((state) => state.auth.cvu);
  const selectedServiceId = useSelector(
    (state) => state.services.selectedServiceId
  );
  const [userCards, setUserCards] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [userTranfer, setUserTranfer] = useState(null);
  const [userService, setUserService] = useState([]);
  const dispatch = useDispatch();

  const handleSelectCard = (cardId) => {
    setSelectedCard((prevSelected) =>
      prevSelected === cardId ? null : cardId
    );
    // Guardamos la tarjeta seleccionada en Redux
    dispatch(setSelectedCardId(cardId));
  };

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/service/${selectedServiceId}`
        );
        const service = response.data;
        console.log(service);
        setUserService(service);
        dispatch(
          setServicesData({
            date: new Date().toISOString(),
            invoice_value: service.invoice_value,
            name: service.name,
          })
        );
      } catch (error) {
        console.error("Error al obtener el servicio:", error);
      }
    };
    fetchService();
  }, [selectedServiceId, dispatch]);

  const handleTranference = async () => {
    if (id && amount) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/accounts/${id}/transferences`,
          {
            amount: parseFloat(-userService.invoice_value),
            dated: new Date().toISOString(),
            destination: "pago de servicio",
            origin: cvu,
          },
          {
            headers: {
              Authorization: `${Cookies.get("token")}`,
            },
          }
        );
        const tranference = response.data;
        console.log(tranference);
        setUserTranfer(tranference);

        const newAvailableAmount = available_amount + parseFloat(amount);
        dispatch(setAvailableAmount(newAvailableAmount));
      } catch (error) {
        console.error("Error al hacer la transferencia:", error);
      }
    }
  };

  const handleContinue = () => {
    dispatch(setAmount(parseFloat(-userService.invoice_value))); // Guardamos el amount en el store
  };

  useEffect(() => {
    if (id) {
      const fetchCardsData = async () => {
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
          setUserCards(cards);
          dispatch(setCreditCardData(cards));
        } catch (error) {
          console.error("Error al obtener la actividad del usuario:", error);
        }
      };
      fetchCardsData();
    }
  }, [id]);

  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col justify-center w-full ml-10">
          <div className="bg-black md:w-[1000px] sm:w-[500px] w-[350px] md:h-[150px] h-[150px] p-8 mr-60 rounded-xl">
            <div className="flex justify-between">
              <h2 className="font-semibold text-[#C1FD35] text-lg">
                {userService.name}
              </h2>
              <button className="underline text-sm">
                Ver detalles del pago
              </button>
            </div>
            <hr className="border-gray-600 my-3 mr-6 ml-6" />
            <div className="flex justify-between  text-white text-lg">
              <h3 className="md:mr-[750px] mr-[80px] md:mt-1">Total a pagar</h3>
              <p className="">${userService.invoice_value}</p>
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
          <Link href="/pay-ok">
            <button
              onClick={handleTranference}
              className="md:ml-[58%] ml-[60%] rounded-lg p-4 text-[15px] text-black font-bold border-lg bg-[#C1FD35] text-center mr-[22%] mt-4 w-[20%]"
            >
              Pagar
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClientPage;
