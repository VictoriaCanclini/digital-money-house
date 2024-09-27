"use client";

import { Cablevision, Claro, Personal, Search } from "@/common/Icons";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
// import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const PayServicePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userService, setUserService] = useState([
    { description: "Claro" },
    { description: "Personal" },
    { description: "Cablevisión" },
  ]);

  // useEffect(() => {
  //   const fetchService = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.NEXT_PUBLIC_BASE_URL}/api/service`
  //       );
  //       const service = response.data;
  //       console.log(service);
  //       setUserService(service);
  //     } catch (error) {
  //       console.error("Error al obtener los servicios:", error);
  //     }
  //   };
  //   fetchService();
  // }, []);

  // Filtramos la actividad basada en el término de búsqueda
  const filteredServices = userService.filter((service) =>
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
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
            <div className="md:w-[1000px] sm:w-[500px] w-[350px] h-[300px] bg-white rounded-md text-black border-2 border-gray-300 shadow-md flex flex-col">
              <div className="flex items-center gap-2">
                <h1 className="ml-6 mt-8 font-bold">Más recientes</h1>
              </div>
              <hr className="border-gray-300 my-3 mr-6 ml-6" />
              {filteredServices.map((service, index) => (
                <div key={index}>
                  <div className="flex items-center md:ml-6 ml-4 text-sm">
                    {service.description === "Claro" && (
                      <>
                        <Claro />
                        <h2 className="ml-2">Claro</h2>
                        <button className="font-bold md:ml-[80%] ml-[40%]">
                          <Link href="/account-number">Seleccionar</Link>
                        </button>
                      </>
                    )}
                    {service.description === "Personal" && (
                      <>
                        <Personal />
                        <h2 className="ml-2">Personal</h2>
                        <button className="font-bold md:ml-[78%] ml-[34%]">
                          <Link href="/account-number">Seleccionar</Link>
                        </button>
                      </>
                    )}
                    {service.description === "Cablevisión" && (
                      <>
                        <Cablevision />
                        <h2 className="ml-2">Cablevision</h2>
                        <button className="font-bold md:ml-[76%] ml-[30%]">
                          <Link href="/account-number">Seleccionar</Link>
                        </button>
                      </>
                    )}
                  </div>
                  <hr className="border-gray-300 my-3 mr-6 ml-6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PayServicePage;
