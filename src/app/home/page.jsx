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

const HomePage = () => {
  const available_amount = useSelector((state) => state.auth.available_amount);
  const id = useSelector((state) => state.auth.id);
  const user_id = useSelector((state) => state.auth.user_id);
  const [userActivity, setUserActivity] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para manejar el término de búsqueda

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
          const user = response.data;
          setUserActivity(user);
        } catch (error) {
          console.error("Error al obtener la actividad del usuario:", error);
        }
      };
      fetchActivityData();
    }
  }, [id]);

  // Filtramos la actividad basada en el término de búsqueda
  const filteredActivities = userActivity.filter((activity) =>
    activity.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col justify-center w-full p-10 ml-6">
          <Card
            title="Dinero disponible"
            button1Text="Ver tarjetas"
            button2Text="Ver CVU"
            amount={available_amount}
          />
          <div className="flex flex-row mt-6 gap-1">
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
          <div className="flex flex-row mt-6">
            <div className="bg-white p-2 md:w-[1000px] sm:w-[500px] w-[300px] gap-1 rounded-md text-gray-400 border-2 border-gray-300 shadow-md flex items-center">
              <Search className="mr-2" />
              <input
                type="text"
                placeholder="Buscar en tu actividad"
                className="bg-transparent outline-none w-full"
                value={searchTerm} // Vinculamos el término de búsqueda al estado
                onChange={(e) => setSearchTerm(e.target.value)} // Actualizamos el estado con el valor ingresado
              />
            </div>
          </div>

          {/* Listado de actividad filtrada */}
          <div className="flex flex-row mt-4">
            <div className="md:w-[1000px] sm:w-[500px] w-[300px] md:h-[285px] h-[320px] bg-white rounded-md text-black border-2 border-gray-300 shadow-md flex flex-col">
              <span className="ml-6 mt-4 font-bold">Tu actividad</span>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              {filteredActivities.length > 0 ? (
                filteredActivities.map((activity, index) => (
                  <div key={index}>
                    <div className="flex items-center md:ml-6 ml-4 text-sm">
                      <Circle color={"[#C1FD35]"} className="md:mr-2" />
                      <span className="ml-2">{activity.description}</span>
                      <span className="md:ml-[700px] ml-4">
                        {activity.amount}
                      </span>
                    </div>
                    <hr className="border-gray-300 my-3 mr-6 ml-6" />
                  </div>
                ))
              ) : (
                <span className="ml-6 text-gray-500">
                  No se encontró actividad para "{searchTerm}"
                </span>
              )}
              <div className="flex justify-between mr-6 md:mt-2 mt-4">
                <span className="ml-6 font-bold">Ver toda tu actividad</span>
                <Link href={`/activity/${user_id}`}>
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
