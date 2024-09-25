"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import React, { useEffect, useState } from "react";
import Cards from "react-credit-cards-2";
import styles from "./cardCredit.module.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreditCardPage2 = () => {
  const router = useRouter();
  const id = useSelector((state) => state.auth.id);
  const [userCards, setUserCards] = useState(null);
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const { number, name, expiry, cvc } = cardData;

  const handleInputChange = (e) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputFocus = (e) => {
    setCardData({
      ...cardData,
      focus: e.target.name,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([number, name, expiry, cvc].includes("")) {
      // Mostrar error si falta algún campo
      return;
    }

    const body = {
      cod: parseInt(cvc),
      expiration_date: expiry,
      first_last_name: name,
      number_id: parseInt(number),
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/accounts/${id}/cards`,
        body,
        {
          headers: {
            Authorization: `${Cookies.get("token")}`,
          },
        }
      );
      toast("tarjeta registrada correctamente");
      router.push("/credit-card");
      console.log("Tarjeta registrada:", response.data);

      // Limpiar el formulario
      setCardData({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: "",
      });
    } catch (error) {
      console.error("Error al registrar la tarjeta:", error);
    }
  };

  useEffect(() => {
    if (id) {
      const fetchUserCards = async () => {
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
          setUserCards(cards); // Guardamos los datos del usuario en el estado
        } catch (error) {
          console.error("Error al obtener las tarjetas del usuario:", error);
        }
      };
      fetchUserCards();
    }
  }, [id]);

  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col justify-center w-full p-6">
          <div className="md:w-[1100px] sm:w-[500px] w-[360px] md:h-[500px] h-[570px] bg-white rounded-md border-2 border-gray-300 shadow-md flex flex-col">
            <div className={styles.container}>
              <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={cardData.focus}
              />
              <form onSubmit={handleSubmit}>
                <div className={styles.formInputGrup}>
                  <div className={styles.formControl}>
                    <label htmlFor="number">Número de la tarjeta*</label>
                    <input
                      type="text"
                      name="number"
                      id="number"
                      value={number}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    />
                  </div>
                  <div className={styles.formControl}>
                    <label htmlFor="name">Nombre y apellido*</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    />
                  </div>
                </div>
                <div className={styles.formInputGrup}>
                  <div className={styles.formControl}>
                    <label htmlFor="expiry">Fecha de vencimiento (MMYY)*</label>
                    <input
                      type="text"
                      name="expiry"
                      id="expiry"
                      value={expiry}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    />
                  </div>
                  <div className={styles.formControl}>
                    <label htmlFor="cvc">Código de seguridad*</label>
                    <input
                      type="text"
                      name="cvc"
                      id="cvc"
                      value={cvc}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <button type="submit" className={styles.buyButton}>
                  Continuar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default CreditCardPage2;
