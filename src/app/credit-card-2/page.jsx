"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import styles from "./cardCredit.module.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const CreditCardPage2 = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([number, name, expiry, cvc].includes("")) {
      // toast.error("All fields are required");
      return;
    }
    setCardData({
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      focus: "",
    });
    // dispatch({ type: "CLEAR_CART", payload: {} as CartProduct });
  };

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
                    <label htmlFor="expiry">Fecha de vencimiento*</label>
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
    </div>
  );
};

export default CreditCardPage2;
