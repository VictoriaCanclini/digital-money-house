"use client";

import { Check } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const ActivityDetailPage = ({ params }) => {
  const router = useRouter();
  const activityId = params["id"];
  const activities = useSelector((state) => state.activity.activities);

  const activity = activities.find(
    (activity) => activity.id === parseInt(activityId)
  );

  if (!activity) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600">
          Cargando detalles de la actividad...
        </p>
        <button
          onClick={() => router.push("/home")}
          className="mt-4 bg-[#CECECE] p-2 rounded-md"
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  const { amount, dated, destination, id, type } = activity;
  const formattedDate = new Date(dated).toLocaleDateString("es-ES");

  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col justify-center items-center w-full">
          <div className="bg-black md:w-[1000px] sm:w-[500px] w-[350px] h-[280px] md:p-6 p-4  rounded-xl">
            <div className="flex justify-between">
              <h1 className="text-[#C1FD35] flex flex-row gap-2">
                <Check width={20} height={20} /> Aprobada
              </h1>
              <h2 className="hidden sm:block">Creada el {formattedDate}</h2>
            </div>
            <hr className="border-gray-300 my-4 mr-6 ml-6" />
            <h3 className="text-sm mt-2"></h3>
            <p className="font-bold text-[#C1FD35]">${amount}</p>
            <h4 className="text-sm mt-6">{type} a: </h4>
            <h5 className="font-bold text-[#C1FD35]">{destination}</h5>
            <h6 className="text-sm mt-6">Número de la operación</h6>
            <p className="text-sm text-[#C1FD35]">{id}</p>
          </div>
          <div className="flex justify-between md:mt-6 mt-10 p-3 text-[15px] text-black font-bold border-lg text-center">
            <Link href="/home">
              <button className=" bg-[#CECECE] md:w-[200px] w-[150px] h-[50px] rounded-lg mr-4">
                Ir al inicio
              </button>
            </Link>
            <button className=" bg-[#C1FD35] md:w-[200px] w-[150px] h-[50px] rounded-lg text-sm">
              Descargar comprobante
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ActivityDetailPage;
