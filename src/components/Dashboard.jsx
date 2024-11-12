import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";

const dashboard = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <section className="relative bg-[url('/img/Mask-group.png')] bg-no-repeat bg-cover bg-center flex-grow">
          <div className="m-10">
            <h1 className="text-[40px]">
              De ahora en adelante, hacés más con tu dinero
            </h1>
            <h2 className="text-[30px] text-[#C1FD35]">
              Tu nueva <strong>billetera virtual</strong>
            </h2>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4 mt-20 sm:mt-60">
            <Image
              src="/img/Card-landing.png"
              alt="card1"
              width={500}
              height={300}
              className="w-[80%] sm:w-[500px]"
              priority
            />
            <Image
              src="/img/Card-landing2.png"
              alt="card2"
              width={500}
              height={300}
              className="w-[80%] sm:w-[500px]"
              priority
            />
          </div>
          <div className="relative z-0">
            <Image
              src="/img/Main.png"
              alt="main"
              width={500}
              height={300}
              className="w-full h-[150px] object-cover"
              priority
            />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default dashboard;
