import { Arrow, Plus } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import Link from "next/link";

const AddMoneyPage = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col justify-center w-full ml-10 gap-20">
          <div className="bg-black md:w-[1000px] sm:w-[500px] w-[350px] md:h-[100px] h-[130px] p-8 mr-60 rounded-xl">
            <div className="flex justify-between gap-4 text-[#C1FD35]">
              <Link href="/">
                <Plus color={"#C1FD35"} />
              </Link>
              <spam className="mr-[70%] mt-1">Transferencia bancaria</spam>
              <Link href="/">
                <Arrow color={"#C1FD35"} />
              </Link>
            </div>
          </div>
          <div className="bg-black md:w-[1000px] sm:w-[500px] w-[350px] md:h-[100px] h-[130px] p-8 mr-60 rounded-xl">
            <div className="flex justify-between  text-[#C1FD35]">
              <Link href="/">
                <Plus color={"#C1FD35"} />
              </Link>
              <spam className="mr-[70%] mt-1">Seleccionar tarjeta</spam>
              <Link href="/">
                <Arrow color={"#C1FD35"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddMoneyPage;
