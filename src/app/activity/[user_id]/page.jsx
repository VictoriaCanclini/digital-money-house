"use client";

import { Circle, Filter, Search } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useSelector } from "react-redux";

const Activity = ({ params }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú
  const user_id = params["user_id"];
  const id = useSelector((state) => state.auth.id);
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

  // Filtramos las actividades basado en el término de búsqueda
  const filteredActivities = userActivity.filter((activity) =>
    activity.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col md:mt-[10%] mt-[40%] w-full ml-10">
          <div className="flex flex-row gap-4">
            {/* Campo de búsqueda */}
            <div className="bg-white p-2 md:w-[850px] sm:w-[500px] w-[350px] gap-1 rounded-md text-gray-400 border-2 border-gray-300 shadow-md flex items-center">
              <Search className="mr-2" />
              <input
                type="text"
                placeholder="Buscar en tu actividad"
                className="bg-transparent outline-none w-full"
                value={searchTerm} // Vinculamos el término de búsqueda al estado
                onChange={(e) => setSearchTerm(e.target.value)} // Actualizamos el estado con el valor ingresado
              />
            </div>

            <div className="bg-[#C1FD35] text-black rounded-md w-[10%] hidden sm:block">
              <button
                className="flex items-center justify-center gap-9 w-full p-2 font-bold"
                onClick={toggleMenu}
              >
                <span>Filtrar</span>
                <Filter />
              </button>
            </div>
          </div>

          {/* Listado de actividades filtradas */}
          <div className="flex flex-row mt-4">
            <div className="md:w-[1000px] sm:w-[500px] w-[350px] md:h-[350px] h-[450px] bg-white rounded-md text-black border-2 border-gray-300 shadow-md flex flex-col">
              <div className="flex items-center gap-2">
                <span className="ml-6 mt-4 font-bold">Tu actividad</span>
                <div
                  className="flex items-center ml-[40%] sm:hidden"
                  onClick={toggleMenu}
                >
                  <span>Filtrar</span>
                  <Filter />
                </div>
              </div>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              {filteredActivities.length > 0 ? (
                filteredActivities.map((activity, index) => (
                  <div key={index}>
                    <Link href="/activity-details">
                      <div className="flex items-center md:ml-6 ml-4 text-sm p-2">
                        <Circle color={"[#C1FD35]"} className="md:mr-2" />
                        <span className="ml-2">{activity.description}</span>
                        <span className="md:ml-[730px] ml-20">
                          {activity.amount}
                        </span>
                      </div>
                    </Link>
                    <hr className="border-gray-300 my-3 mr-6 ml-6" />
                  </div>
                ))
              ) : (
                <span className="ml-6 text-gray-500">
                  No se encontró actividad para "{searchTerm}"
                </span>
              )}
              <span className="flex justify-center items-center mt-10">
                1-2-3-4-5-6-7-8
              </span>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute md:top-[256px] top-[330px] md:left-[1120px] left-[250px] bg-white text-sm text-black md:w-[9%] rounded-md border-2 flex justify-start">
            <ul className="flex flex-col items-center gap-4 p-4">
              <li>
                <button onClick={toggleMenu}>Hoy</button>
              </li>
              <li>
                <button onClick={toggleMenu}>Ayer</button>
              </li>
              <li>
                <button onClick={toggleMenu}>Última semana</button>
              </li>
              <li>
                <button onClick={toggleMenu}>Últimos 15 días</button>
              </li>
              <li>
                <button onClick={toggleMenu}>Último mes</button>
              </li>
              <li>
                <button onClick={toggleMenu}>Último año</button>
              </li>
              <li>
                <button onClick={toggleMenu}>Otro período</button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Activity;
