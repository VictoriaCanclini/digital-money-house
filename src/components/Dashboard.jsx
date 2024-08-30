import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const dashboard = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <section className="relative bg-[url('/img/Mask-group.png')] bg-no-repeat bg-cover bg-center">
          <div className="m-10">
            <h1 className="text-[40px]">
              De ahora en adelante, hacés más con tu dinero
            </h1>
            <h2 className="text-[30px] text-[#C1FD35]">
              Tu nueva <strong>billetera virtual</strong>
            </h2>
          </div>

          {/* Contenedor para las tarjetas */}
          <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4 mt-30 ml-4 mr-4 sm:mt-60">
            <img
              src="/img/Card-landing.png"
              alt="card1"
              className="w-[80%] sm:w-[500px]"
            />
            <img
              src="/img/Card-landing2.png"
              alt="card2"
              className="w-[80%] sm:w-[500px]"
            />
          </div>
          {/* Imagen de fondo principal */}
          <div className="absolute inset-0 flex items-end mb-10">
            <img
              className="w-screen"
              src="/img/Main.png"
              alt="Main background"
            />
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default dashboard;
