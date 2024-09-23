import { Circle, Plus, SelectCircle } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import Link from "next/link";

const SelectCardPage = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col justify-center w-full ml-10">
          <div className="bg-black md:w-[1000px] sm:w-[500px] w-[350px] md:h-[450px] h-[480px] p-6 mr-60 rounded-xl">
            <h2 className="text-lg text-[#C1FD35] font-semibold mb-4">
              Seleccionar tarjeta
            </h2>
            <div className="flex flex-row mt-10 md:ml-6">
              <div className="md:w-[900px] sm:w-[500px] w-[350px] h-[250px] bg-white rounded-md text-black border-2 border-gray-300 shadow-md flex flex-col justify-center">
                <span className="ml-6 mt-4 font-bold">Tus tarjetas</span>
                <hr className="border-gray-300 my-3 mr-6 ml-6" />
                <div className="flex items-center md:ml-6 ml-4 text-sm">
                  <Circle color={"[#C1FD35]"} className="md:mr-2" />
                  <span className="ml-2">Terminada en 0000</span>
                  <span className="md:ml-[600px] ml-20">
                    <Link href="load-money">
                      <SelectCircle />
                    </Link>
                  </span>
                </div>
                <hr className="border-gray-300 my-3 mr-6 ml-6" />
                <div className="flex items-center md:ml-6 ml-4 text-sm">
                  <Circle className="mr-2" />
                  <span className="ml-2">Terminada en 0000</span>
                  <span className="md:ml-[600px] ml-20">
                    <Link href="load-money">
                      <SelectCircle />
                    </Link>
                  </span>
                </div>
                <hr className="border-gray-300 my-3 mr-6 ml-6" />
              </div>
            </div>
            <div className="flex justify-between  text-[#C1FD35] md:mt-8 mt-16">
              <Link href="credit-card-2">
                <Plus color={"#C1FD35"} />
              </Link>
              <spam className="md:mr-[700px] mr-[40px] mt-1">
                Nueva Tarjeta
              </spam>
              <Link href="credit-card-2">
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
