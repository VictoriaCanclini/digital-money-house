import { Check } from "@/common/Icons";
import Footer from "@/components/Footer";
import Link from "next/link";

const Successful = () => {
  return (
    <>
      <div className="flex justify-between bg-[#C1FD35]">
        <div className="mt-6 ml-2 mb-4">
          <Link href="/">
            <img src="/img/Logo-black.png" alt="Logo1" width={70} />
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center  w-full h-full py-[115px]">
        <h2 className="text-[30px] mb-[10px] sm:text-[40px] sm:mb-[20px] leading-3">
          Registro Exitoso
        </h2>
        <div className="mt-8">
          <Check />
        </div>
        <div
          className="
      flex
      flex-col 
      justify-center 
      items-center 
      mt-[10px]"
        >
          <div className="h-[.5rem] mb-[1.2rem]">
            <p className="text-[#ff0000] text-[1rem] leading-3"></p>

            <p className="text-darkGreen text-[1rem] leading-3"></p>
          </div>
          <Link href="/login">
            <button
              className={`
        py-[16px] 
        px-[55px] 
        leading-3 
        text-[20px]
        mt-[50px]
        sm:w-[13rem]
        md:w-[14rem]
        h-[60px] sm:max-w-[100%] rounded-lg bg-[#C1FD35] text-black`}
            >
              Continuar
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-[165px]">
        <Footer />
      </div>
    </>
  );
};

export default Successful;
