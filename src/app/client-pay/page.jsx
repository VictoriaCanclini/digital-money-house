import { Circle, SelectCircle } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import Link from "next/link";

const ClientPage = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col justify-center w-full ml-10">
          <div className="bg-black md:w-[1000px] sm:w-[500px] w-[350px] md:h-[150px] h-[130px] p-8 mr-60 rounded-xl">
            <div className="flex justify-between">
              <h2 className="font-semibold mb-4 text-[#C1FD35] text-lg">
                Cablevisión
              </h2>
              <button className="underline text-sm">
                Ver detalles del pago
              </button>
            </div>
            <hr className="border-gray-600 my-3 mr-6 ml-6" />
            <div className="flex justify-between  text-white text-lg">
              <spam className="md:mr-[750px] mr-[80px] md:mt-1">
                Total a pagar
              </spam>
              <spam className="">$1153,75</spam>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="md:w-[1000px] sm:w-[500px] w-[350px] md:h-[285px] h-[320px] bg-white rounded-md text-black border-2 border-gray-300 shadow-md flex flex-col">
              <span className="ml-6 mt-4 font-bold">Tus tarjetas</span>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              <div className="flex items-center md:ml-6 ml-4 text-sm">
                <Circle color={"[#C1FD35]"} className="md:mr-2" />
                <span className="ml-2">Terminada en 0000</span>
                <span className="md:ml-[700px] ml-20">
                  <SelectCircle />
                </span>
              </div>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              <div className="flex items-center md:ml-6 ml-4 text-sm">
                <Circle className="mr-2" />
                <span className="ml-2">Terminada en 0000</span>
                <span className="md:ml-[700px] ml-20">
                  <SelectCircle />
                </span>
              </div>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              <div className="flex items-center md:ml-6 ml-4  text-sm">
                <Circle className="mr-2" />
                <span className="ml-2">Terminada en 0000</span>
                <span className="md:ml-[700px] ml-20">
                  <SelectCircle />
                </span>
              </div>
              <hr className="border-gray-300 my-4 mr-6 ml-6" />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="rounded-lg p-4 text-[15px] text-black font-bold border-lg bg-[#C1FD35] text-center mr-[22%] mt-2 w-[20%]">
              <Link href="/pay-ok">Pagar</Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClientPage;
