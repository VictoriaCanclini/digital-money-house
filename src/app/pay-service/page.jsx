import {
  Cablevision,
  Circle,
  Claro,
  Filter,
  Personal,
  Search,
} from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";

const PayServicePage = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col md:mt-[10%] mt-[40%] w-full ml-10">
          <div className="flex flex-row gap-4">
            <div className="bg-white p-2 md:w-[1000px] sm:w-[500px] w-[350px] gap-1 rounded-md text-gray-400 border-2 border-gray-300 shadow-md flex items-center">
              <Search className="mr-2" />
              <span>Buscar entre más de 5.000 empresas</span>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="md:w-[1000px] sm:w-[500px] w-[350px] h-[450px] bg-white rounded-md text-black border-2 border-gray-300 shadow-md flex flex-col">
              <div className="flex items-center gap-2">
                <span className="ml-6 mt-4 font-bold">Más recientes</span>
              </div>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              <div className="flex items-center md:ml-6 ml-4 text-sm">
                <Claro color={"[#C1FD35]"} className="md:mr-2" />
                <span className="ml-2">Claro</span>
                <span className="md:ml-[780px] ml-[47%] font-bold">
                  Seleccionar
                </span>
              </div>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              <div className="flex items-center md:ml-6 ml-4 text-sm">
                <Personal className="mr-2" />
                <span className="ml-2">Personal</span>
                <span className="md:ml-[760px] ml-[40%] font-bold">
                  Seleccionar
                </span>
              </div>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              <div className="flex items-center md:ml-6 ml-4  text-sm">
                <Cablevision className="mr-2" />
                <span className="ml-2">Cablevisión</span>
                <span className="md:ml-[740px] ml-[35%] font-bold">
                  Seleccionar
                </span>
              </div>
              <hr className="border-gray-300 my-4 mr-6 ml-6" />
              <div className="flex items-center md:ml-6 ml-4 text-sm">
                <Claro color={"[#C1FD35]"} className="md:mr-2" />
                <span className="ml-2">Claro</span>
                <span className="md:ml-[780px] ml-[47%] font-bold">
                  Seleccionar
                </span>
              </div>
              <hr className="border-gray-300 my-4 mr-6 ml-6" />
              <div className="flex items-center md:ml-6 ml-4 text-sm">
                <Personal color={"[#C1FD35]"} className="md:mr-2" />
                <span className="ml-2">Personal</span>
                <span className="md:ml-[760px] ml-[40%] font-bold">
                  Seleccionar
                </span>
              </div>
              <hr className="border-gray-300 my-4 mr-6 ml-6" />
              <div className="flex items-center md:ml-6 ml-4 text-sm">
                <Cablevision color={"[#C1FD35]"} className="md:mr-2" />
                <span className="ml-2">Cablevisión</span>
                <span className="md:ml-[745px] ml-[35%] font-bold">
                  Seleccionar
                </span>
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

export default PayServicePage;
