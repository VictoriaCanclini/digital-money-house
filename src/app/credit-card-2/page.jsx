import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";

const CreditCardPage2 = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex">
        <Sibvar />
        <div className="flex flex-col justify-center w-full p-4 ml-8">
          <div className="flex flex-row mt-4">
            <div className="md:w-[1100px] sm:w-[500px] w-[300px] md:h-[500px] h-[520px] bg-white rounded-md text-black border-2 border-gray-300 shadow-md flex flex-col">
              <div className="flex items-center ml-6 text-sm"></div>

              <div className="flex items-center ml-6 text-sm"></div>

              <div className="flex items-center ml-6 text-sm"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreditCardPage2;
