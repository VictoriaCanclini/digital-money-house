import { Cross } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col bg-black text-white font-bold md:w-[1000px] sm:w-[500px] w-[360px] h-[300px] rounded-md justify-center items-center mb-10">
            <Cross color={"#000000"} />
            <h1 className="text-md md:text-lg mt-4">
              No encontramos facturas asociadas a este dato
            </h1>
            <hr className="border-gray-300 my-4 mr-6 ml-6" />
            <h2 className="flex justify-center text-center text-sm text-[#CECECE] p-1">
              Revisá el dato ingresado. Si es correcto, es posible que la
              empresa aún no haya cargado tu factura.
            </h2>
          </div>
          <div className="flex justify-between p-3 text-[15px] text-black font-bold border-lg text-center">
            <Link href="/account-number">
              <button className=" bg-[#C1FD35] md:w-[200px] w-[150px] h-[50px] rounded-lg text-sm">
                Volver a intentarlo
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
