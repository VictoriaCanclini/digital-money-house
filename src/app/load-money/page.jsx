import { Circle, Plus, SelectCircle } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import Link from "next/link";

const LoadMoneyPage = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col justify-center w-full ml-10">
          <div className="bg-black md:w-[1000px] sm:w-[500px] w-[350px] md:h-[300px] h-[200px] md:p-6 p-4 md:mr-60 rounded-xl">
            <h2 className="text-lg text-[#C1FD35] font-semibold mb-4">
              ¿Cuánto querés ingresar a la cuenta?
            </h2>
            <div className="md:w-[300px] sm:w-[500px] w-[300px] h-[60px] bg-white rounded-md text-black p-4 mt-10 ml-2">
              <button>$0</button>
            </div>
            <div className="flex justify-end text-[#C1FD35] md:mt-16 mt-20">
              <Link href="load-money-check">
                <button className="rounded-lg p-3 text-[15px] text-black font-bold border-lg bg-[#C1FD35] text-center md:mr-6 md:w-[200px] w-[180px]">
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

export default LoadMoneyPage;
