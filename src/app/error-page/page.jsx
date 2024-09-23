import { Cross } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import Link from "next/link";

const ErrorPage = ({ title, subtitle, buttonText }) => {
  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col bg-black text-white font-bold md:w-[1000px] sm:w-[500px] w-[350px] h-[300px] rounded-md justify-center items-center mb-10">
            <Cross color={"#000000"} />
            <h1 className="text-lg mt-4">{title}</h1>
            <hr className="border-gray-300 my-4 mr-6 ml-6" />
            <h2 className="text-sm text-[#CECECE]">{subtitle}</h2>
          </div>

          <div className="flex justify-between md:mt-6 mt-10 p-3 text-[15px] text-black font-bold border-lg text-center">
            <Link href="/">
              <button className=" bg-[#C1FD35] md:w-[200px] w-[150px] h-[50px] rounded-lg text-sm">
                {buttonText}
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
