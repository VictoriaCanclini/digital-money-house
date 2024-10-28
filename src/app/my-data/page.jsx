"use client";

import { Copy } from "@/common/Icons";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyData = () => {
  const cvu = useSelector((state) => state.auth.cvu);
  const alias = useSelector((state) => state.auth.alias);

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast(`copiado: ` + text);
      })
      .catch((err) => {
        console.error("Error al copiar: ", err);
      });
  };

  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex justify-center w-full items-center">
          <Card
            title="Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta"
            button3Text="CVU"
            button4Text="Alias"
            number1={cvu}
            number2={alias}
            icon={<Copy onClick={handleCopy} />}
            onCopy={handleCopy}
          />
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MyData;
