import { Arrow, Circle, Plus } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import Link from "next/link";

const CreditCardPage = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex">
        <Sibvar />
        <div className="flex flex-col justify-center w-full p-4 ml-8">
          <div className="bg-black md:w-[1000px] sm:w-[500px] w-[300px] md:h-[150px] h-[130px] p-8 mr-60 rounded-xl">
            <h2 className="text-sm text-white font-semibold mb-4">
              Agregá tu tarjeta de débito o crédito
            </h2>
            <div className="flex justify-between  text-[#C1FD35]">
              <Link href="credit-card-2">
                <Plus color={"#C1FD35"} />
              </Link>
              <spam className="md:mr-[760px] mr-[80px] md:mt-1">
                Nueva Tarjeta
              </spam>
              <Arrow color={"#C1FD35"} />
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="md:w-[1000px] sm:w-[500px] w-[300px] md:h-[285px] h-[320px] bg-white rounded-md text-black border-2 border-gray-300 shadow-md flex flex-col">
              <span className="ml-6 mt-4 font-bold">Tus tarjetas</span>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              <div className="flex items-center ml-6 text-sm">
                <Circle color={"[#C1FD35]"} className="mr-2" />
                <span className="ml-2">Terminada en 0000</span>
                <span className="ml-[730px]">Eliminar</span>
              </div>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              <div className="flex items-center ml-6 text-sm">
                <Circle className="mr-2" />
                <span className="ml-2">Terminada en 0000</span>
                <span className="ml-[730px]">Eliminar</span>
              </div>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              <div className="flex items-center ml-6 text-sm">
                <Circle className="mr-2" />
                <span className="ml-2">Terminada en 0000</span>
                <span className="ml-[730px]">Eliminar</span>
              </div>
              <hr className="border-gray-300 my-4 mr-6 ml-6" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreditCardPage;
