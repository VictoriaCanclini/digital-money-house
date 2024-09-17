import { Circle, Filter, Search } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";

const Activity = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col md:mt-[10%] mt-[40%] w-full ml-10">
          <div className="flex flex-row gap-4">
            <div className="bg-white p-2 md:w-[850px] sm:w-[500px] w-[350px] gap-1 rounded-md text-gray-400 border-2 border-gray-300 shadow-md flex items-center">
              <Search className="mr-2" />
              <span>Buscar en tu actividad</span>
            </div>
            <div className="bg-[#C1FD35] text-black rounded-md w-[10%] hidden sm:block">
              <button className="flex items-center justify-center gap-9 w-full p-2 font-bold">
                <span>Filtrar</span>
                <Filter />
              </button>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="md:w-[1000px] sm:w-[500px] w-[350px] md:h-[350px] h-[450px] bg-white rounded-md text-black border-2 border-gray-300 shadow-md flex flex-col">
              <div className="flex items-center gap-2">
                <span className="ml-6 mt-4 font-bold">Tu actividad</span>
                <div className="flex items-center ml-[40%] sm:hidden">
                  <span className="mt-1">Filtrar</span>
                  <Filter />
                </div>
              </div>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              <div className="flex items-center md:ml-6 ml-4 text-sm">
                <Circle color={"[#C1FD35]"} className="md:mr-2" />
                <span className="ml-2">Tranferiste a Rodrigo</span>
                <span className="md:ml-[730px] ml-20">$1265,57</span>
              </div>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              <div className="flex items-center md:ml-6 ml-4 text-sm">
                <Circle className="mr-2" />
                <span className="ml-2">Tranferiste a Rodrigo</span>
                <span className="md:ml-[730px] ml-20">$1265,57</span>
              </div>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              <div className="flex items-center md:ml-6 ml-4  text-sm">
                <Circle className="mr-2" />
                <span className="ml-2">Tranferiste a Rodrigo</span>
                <span className="md:ml-[730px] ml-20">$1265,57</span>
              </div>
              <hr className="border-gray-300 my-4 mr-6 ml-6" />
              <div className="flex items-center md:ml-6 ml-4 text-sm">
                <Circle color={"[#C1FD35]"} className="md:mr-2" />
                <span className="ml-2">Tranferiste a Rodrigo</span>
                <span className="md:ml-[730px] ml-20">$1265,57</span>
              </div>
              <hr className="border-gray-300 my-4 mr-6 ml-6" />
              <span className="flex justify-center items-center">
                1 2 3 4 5 6 7 8
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Activity;