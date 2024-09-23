import { Check } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import Link from "next/link";

const ActivityDetailPage = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col justify-center items-center w-full">
          <div className="bg-black md:w-[1000px] sm:w-[500px] w-[350px] h-[280px] md:p-6 p-4  rounded-xl">
            <div className="flex justify-between">
              <h1 className="text-[#C1FD35] flex flex-row gap-2">
                <Check width={20} height={20} /> Aprobada
              </h1>
              <h2 className="hidden sm:block">
                Creada el 17 de agosto 2022 a 16:34 hs.
              </h2>
            </div>
            <hr className="border-gray-300 my-4 mr-6 ml-6" />
            <h3 className="text-sm mt-2">Transferencia de dinero</h3>
            <p className="font-bold text-[#C1FD35]">$1.266,57</p>
            <h4 className="text-sm mt-6">Le transferiste a</h4>
            <h5 className="font-bold text-[#C1FD35]">Rodrigo Vaccaro</h5>
            <h6 className="text-sm mt-6">Número de la operación</h6>
            <p className="text-sm text-[#C1FD35]">27903047281</p>
          </div>

          <div className="flex justify-between md:mt-6 mt-10 p-3 text-[15px] text-black font-bold border-lg text-center">
            <button className=" bg-[#CECECE] md:w-[200px] w-[150px] h-[50px] rounded-lg mr-4">
              Ir al inicio
            </button>
            <Link href="/">
              <button className=" bg-[#C1FD35] md:w-[200px] w-[150px] h-[50px] rounded-lg text-sm">
                Descargar comprobante
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ActivityDetailPage;
