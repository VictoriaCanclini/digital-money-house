import { Circle, Search } from "@/common/Icons";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";

const HomePage = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex">
        <Sibvar />
        <div className="flex flex-col w-full p-4">
          <Card />
          <div className="flex flex-row mt-6 gap-1">
            <button className="bg-[#C1FD35] text-black font-bold w-[500px] h-[106px] rounded-md">
              Cargar dinero
            </button>
            <button className="bg-[#C1FD35] text-black w-[500px] font-bold h-[106px] rounded-md">
              Pagar servicios
            </button>
          </div>
          <div className="flex flex-row mt-6">
            <div className="bg-white p-2 w-[1000px] gap-1 rounded-md text-gray-400 border-2 border-gray-300 shadow-md flex items-center">
              <Search className="mr-2" />
              <span>Buscar en tu actividad</span>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="w-[1000px] h-[285px] bg-white rounded-md text-black border-2 border-gray-300 shadow-md flex flex-col">
              <span className="ml-6 mt-4 font-bold">Tu actividad</span>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              <div className="flex items-center ml-6 text-sm">
                <Circle color={"[#C1FD35]"} className="mr-2" />
                <span className="ml-2">Transferiste a Rodrigo</span>
              </div>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              <div className="flex items-center ml-6 text-sm">
                <Circle className="mr-2" />
                <span className="ml-2">Transferiste a Consorcio</span>
              </div>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              <div className="flex items-center ml-6 text-sm">
                <Circle className="mr-2" />
                <span className="ml-2">Ingresaste dinero</span>
              </div>
              <hr className="border-gray-300 my-4 mr-6 ml-6" />
              <span className="ml-6 font-bold">Ver toda tu actividad</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
