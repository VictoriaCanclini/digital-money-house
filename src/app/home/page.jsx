import { Arrow, Circle, Search } from "@/common/Icons";
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
        <div className="flex flex-col justify-center w-full p-4 ml-8">
          <Card />
          <div className="flex flex-row mt-6 gap-1">
            <button className="bg-[#C1FD35] text-black font-bold md:w-[500px] sm:w-[250px] w-[150px] h-[106px] rounded-md">
              Cargar dinero
            </button>
            <button className="bg-[#C1FD35] text-black md:w-[500px] sm:w-[250px] w-[150px] font-bold h-[106px] rounded-md">
              Pagar servicios
            </button>
          </div>
          <div className="flex flex-row mt-6">
            <div className="bg-white p-2 md:w-[1000px] sm:w-[500px] w-[300px] gap-1 rounded-md text-gray-400 border-2 border-gray-300 shadow-md flex items-center">
              <Search className="mr-2" />
              <span>Buscar en tu actividad</span>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="md:w-[1000px] sm:w-[500px] w-[300px] md:h-[285px] h-[320px] bg-white rounded-md text-black border-2 border-gray-300 shadow-md flex flex-col">
              <span className="ml-6 mt-4 font-bold">Tu actividad</span>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              <div className="flex items-center ml-6 text-sm">
                <Circle color={"[#C1FD35]"} className="mr-2" />
                <span className="ml-2">Transferiste a Rodrigo</span>
                <span className="ml-[700px]">-$1265,57</span>
              </div>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              <div className="flex items-center ml-6 text-sm">
                <Circle className="mr-2" />
                <span className="ml-2">Transferiste a Consorcio</span>
                <span className="ml-[685px]">-$1265,57</span>
              </div>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              <div className="flex items-center ml-6 text-sm">
                <Circle className="mr-2" />
                <span className="ml-2">Ingresaste dinero</span>
                <span className="ml-[730px]">$1265,57</span>
              </div>
              <hr className="border-gray-300 my-4 mr-6 ml-6" />
              <div className="flex justify-between mr-6">
                <span className="ml-6 font-bold">Ver toda tu actividad</span>
                <Arrow color={"#A9A9A9"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
