import { Arrow, Copy, Edit } from "@/common/Icons";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";

const ProfilePage = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex">
        <Sibvar />
        <div className="flex flex-col justify-center w-full p-12">
          <div className="flex flex-row">
            <div className="md:w-[1000px] sm:w-[500px] w-[300px] md:h-[285px] h-[320px] bg-white rounded-md text-black border-2 border-gray-300 shadow-md flex flex-col">
              <span className="ml-6 mt-8 font-bold">Tus datos</span>
              <hr className="border-gray-300 my-2 mr-6 ml-6" />
              <div className="flex justify-between md:ml-6 ml-4 md:mr-6 mr-4 text-sm">
                <span className="ml-2 text-gray-500">Email</span>
                <span className="text-gray-500">viki@gmail.com</span>
                <Edit color={"#CECECE"} />
              </div>
              <hr className="border-gray-300 my-2 mr-6 ml-6" />
              <div className="flex justify-between md:ml-6 ml-4 md:mr-6 mr-4  text-sm">
                <span className="ml-2 text-gray-500">Nombre y apellido</span>
                <span className="text-gray-500">Victoria Canclini</span>
                <Edit color={"#CECECE"} />
              </div>
              <hr className="border-gray-300 my-2 mr-6 ml-6" />
              <div className="flex justify-between md:ml-6 ml-4 md:mr-6 mr-4  text-sm">
                <span className="ml-2 text-gray-500">CUIT</span>
                <span className="text-gray-500">123456</span>
                <Edit color={"#CECECE"} />
              </div>
              <hr className="border-gray-300 my-2 mr-6 ml-6" />
              <div className="flex justify-between md:ml-6 ml-4 md:mr-6 mr-4  text-sm">
                <span className="ml-2 text-gray-500">Telefono</span>
                <span className="text-gray-500">123456</span>
                <Edit color={"#CECECE"} />
              </div>
              <hr className="border-gray-300 my-2 mr-6 ml-6" />
              <div className="flex justify-between items-center md:ml-6 ml-4 md:mr-6 mr-4  text-sm">
                <span className="ml-2 text-gray-500">Contraseña</span>
                <span className="text-gray-500">xxxxxx</span>
                <Edit color={"#CECECE"} />
              </div>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
            </div>
          </div>
          <div className="flex flex-row mt-6">
            <button className="bg-[#C1FD35] text-black font-bold md:w-[1000px] sm:w-[500px] w-[300px] h-[106px] rounded-md flex justify-between items-center pl-6 pr-4">
              <span className="flex-grow flex justify-start">
                Gestioná los medios de pago
              </span>
              <Arrow color={"#000000"} />
            </button>
          </div>
          <Card
            title="Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta"
            button3Text="CVU"
            button4Text="Alias"
            number1="00000001001010101"
            number2="victoria.canclini"
            icon={<Copy />}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
