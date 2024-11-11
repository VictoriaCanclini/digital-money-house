"use client";

import { Arrow, Circle, Search } from "@/common/Icons";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const available_amount = useSelector((state) => state.auth.available_amount);
  const id = useSelector((state) => state.auth.id);
  const [userActivity, setUserActivity] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const fetchActivityData = async () => {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/accounts/${id}/activity`,
            {
              headers: {
                Authorization: `${Cookies.get("token")}`,
              },
            }
          );
          let activities = response.data;
          activities = activities.sort(
            (a, b) => new Date(b.dated) - new Date(a.dated)
          );
          setUserActivity(activities);
        } catch (error) {
          console.error("Error al obtener la actividad del usuario:", error);
        }
      };
      fetchActivityData();
    }
  }, [id]);

  // Filtramos la actividad basada en el término de búsqueda y limitamos a un máximo de 3 actividades
  const filteredActivities = userActivity
    .filter((activity) =>
      activity.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 10); // Mostrar solo las primeras 10 actividades

  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col justify-center items-center w-full mt-6">
          <Card
            title="Dinero disponible"
            button1Text="Ver tarjetas"
            button2Text="Ver CVU"
            amount={
              available_amount
                ? `$ ${available_amount.toLocaleString("es-AR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`
                : "$0,00"
            }
          />
          <div className="flex flex-row mt-1 gap-1">
            <Link href="/add-money">
              <button className="bg-[#C1FD35] text-black font-bold md:w-[500px] sm:w-[250px] w-[150px] h-[106px] rounded-md">
                Cargar dinero
              </button>
            </Link>
            <Link href="/pay-service">
              <button className="bg-[#C1FD35] text-black md:w-[500px] sm:w-[250px] w-[150px] font-bold h-[106px] rounded-md">
                Pagar servicios
              </button>
            </Link>
          </div>

          {/* Campo de búsqueda */}
          <div className="flex flex-row mt-1">
            <div className="bg-white p-2 md:w-[1000px] sm:w-[500px] w-[300px] gap-1 rounded-md text-gray-400 border-2 border-gray-300 shadow-md flex items-center">
              <Search className="mr-2" />
              <input
                type="text"
                placeholder="Buscar en tu actividad"
                className="bg-transparent outline-none w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          {/* Listado de actividad filtrada */}
          <div className="flex flex-row mt-1">
            <div className="md:w-[1000px] sm:w-[500px] w-[300px] md:h-[285px] h-[290px] bg-white rounded-md text-black border-2 border-gray-300 shadow-md flex flex-col">
              <h1 className="ml-6 mt-4 font-bold">Tu actividad</h1>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />

              {/* Contenedor con scroll para las actividades */}
              <div className="overflow-y-auto h-[180px] px-4">
                {filteredActivities.length > 0 ? (
                  filteredActivities.map((activity, index) => (
                    <div key={index}>
                      <div
                        className="flex items-center text-sm"
                        onClick={() =>
                          router.push(`/activity-details/${activity.id}`)
                        }
                      >
                        <Circle color={"[#C1FD35]"} />
                        <h2 className="ml-2">{activity.description}</h2>
                        <h3 className="ml-auto mr-4">{activity.amount}</h3>
                      </div>
                      <hr className="border-gray-300 my-3 mr-6 ml-6" />
                    </div>
                  ))
                ) : (
                  <span className="ml-6 text-gray-500">
                    No se encontró actividad para {searchTerm}
                  </span>
                )}
              </div>
              <div className="flex justify-between items-center mr-6 mt-2">
                <button className="ml-6 font-bold">
                  Ver toda tu actividad
                </button>
                <Link href="/activity">
                  <Arrow color={"#A9A9A9"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
