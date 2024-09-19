"use client";

import { Copy } from "@/common/Icons";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import { useSelector } from "react-redux";

const MyData = () => {
  const cvu = useSelector((state) => state.auth.cvu);
  const alias = useSelector((state) => state.auth.alias);

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
            icon={<Copy />}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyData;