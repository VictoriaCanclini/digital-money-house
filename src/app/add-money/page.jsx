import { Arrow, Card, People } from "@/common/Icons";
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
        <div className="flex flex-col justify-center items-center w-full gap-10">
          <Link href="/my-data">
            <div className="bg-black md:w-[1000px] sm:w-[500px] w-[350px] h-[100px] p-6 rounded-xl">
              <div className="flex justify-between md:justify-between text-[#C1FD35] items-center mt-2">
                <div className="flex items-center gap-4">
                  <People color={"#C1FD35"} />
                  <span>Transferencia bancaria</span>
                </div>
                <Arrow color={"#C1FD35"} />
              </div>
            </div>
          </Link>
          <Link href="/select-card">
            <div className="bg-black md:w-[1000px] sm:w-[500px] w-[350px] h-[100px] p-6 rounded-xl">
              <div className="flex justify-between md:justify-between text-[#C1FD35] items-center mt-2">
                <div className="flex items-center gap-4">
                  <Card color={"#C1FD35"} />
                  <span>Seleccionar tarjeta</span>
                </div>
                <Arrow color={"#C1FD35"} />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddMoneyPage;
