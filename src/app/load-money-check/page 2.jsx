import { Note } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import Link from "next/link";

const LoadMoneyCheckPage = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col justify-center w-full ml-10">
          <div className="bg-black md:w-[1000px] sm:w-[500px] w-[350px] md:h-[350px] h-[300px] md:p-6 p-4 md:mr-60 rounded-xl">
            <h2 className="text-lg text-[#C1FD35] font-semibold mb-4">
              Revisá que está todo bien
            </h2>
            <div className="flex justify-between md:mr-[820px] mr-[180px]">
              <h3 className="text-sm">Vas a transferir</h3>
              <spam>
                <Note />
              </spam>
            </div>
            <p className="font-bold">$300</p>
            <h4 className="text-sm mt-6">para</h4>
            <h5 className="font-bold">Cuenta propia</h5>
            <h6 className="text-sm mt-6">Brubank</h6>
            <p className="text-sm">CVU: 0000002100075990000000</p>

            <div className="flex justify-end text-[#C1FD35] md:mt-6 mt-20">
              <Link href="/load-money-okey">
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

export default LoadMoneyCheckPage;