"use client";

import { Search } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import { setSelectedServiceId } from "@/state/features/servicesSlice";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const PayServicePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userService, setUserService] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/service`
        );
        const services = response.data;
        console.log(services);
        setUserService(services);
      } catch (error) {
        console.error("Error al obtener los servicios:", error);
      }
    };
    fetchServices();
  }, []);

  // Filtramos la actividad basada en el término de búsqueda
  const filteredServices = userService.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col md:mt-[10%] mt-[40%] w-full ml-10">
          <div className="flex flex-row gap-4">
            <div className="bg-white p-2 md:w-[1000px] sm:w-[500px] w-[350px] gap-1 rounded-md text-gray-400 border-2 border-gray-300 shadow-md flex items-center">
              <Search className="mr-2" />
              <input
                type="text"
                placeholder="Buscar entre más de 5.000 empresas"
                className="bg-transparent outline-none w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <div className="md:w-[1000px] sm:w-[500px] w-[350px] h-[400px] bg-white rounded-md text-black border-2 border-gray-300 shadow-md flex flex-col overflow-y-auto">
              <div className="flex items-center gap-2">
                <h1 className="ml-6 mt-8 font-bold">Más recientes</h1>
              </div>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              <div className="flex-1 overflow-y-auto">
                {filteredServices.map((service, index) => (
                  <div key={index}>
                    <div className="flex items-center md:ml-6 ml-4 text-sm">
                      {/* <Claro /> */}
                      <h2 className="ml-2">{service.name}</h2>
                      <button
                        className="font-bold md:ml-[80%] ml-auto mr-8"
                        onClick={() =>
                          dispatch(setSelectedServiceId(service.id))
                        }
                      >
                        <Link href="/account-number">Seleccionar</Link>
                      </button>
                    </div>
                    <hr className="border-gray-300 my-3 mr-6 ml-6" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PayServicePage;
