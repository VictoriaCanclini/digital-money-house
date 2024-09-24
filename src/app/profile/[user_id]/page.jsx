"use client";

import { Arrow, Copy, Edit } from "@/common/Icons";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const ProfilePage = ({ params }) => {
  const user_id = params["user_id"];
  const [userData, setUserData] = useState(null);
  const [editableData, setEditableData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
  });
  const cvu = useSelector((state) => state.auth.cvu);
  const alias = useSelector((state) => state.auth.alias);

  useEffect(() => {
    if (user_id) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${user_id}`,
            {
              headers: {
                Authorization: `${Cookies.get("token")}`, // Si es necesario un token de autenticación
              },
            }
          );
          const user = response.data;
          setUserData(user); // Guardamos los datos del usuario en el estado
          setEditableData({
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            phone: user.phone,
          });
        } catch (error) {
          console.error("Error al obtener los datos del usuario:", error);
        }
      };
      fetchUserData();
    }
  }, [user_id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableData({ ...editableData, [name]: value });
  };

  const handleUpdateUser = async () => {
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${user_id}`,
        editableData,
        {
          headers: {
            Authorization: `${Cookies.get("token")}`,
          },
        }
      );
      alert("Usuario actualizado");
      console.log("Usuario actualizado:", response.data);
      // Opcional: Actualizar el estado con los nuevos datos del usuario si la respuesta devuelve datos actualizados
      setUserData(response.data);
    } catch (error) {
      console.error("Error al actualizar los datos del usuario:", error);
    }
  };

  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen">
        <Sibvar />
        <div className="flex flex-col justify-center w-full p-10 ml-6">
          <div className="md:w-[1000px] sm:w-[500px] w-[300px] md:h-[285px] h-[320px] bg-white rounded-md text-black border-2 border-gray-300 shadow-md flex flex-col">
            <span className="ml-6 mt-8 font-bold">Tus datos</span>
            <hr className="border-gray-300 my-2 mr-6 ml-6" />
            <div className="flex justify-between md:ml-6 ml-4 md:mr-6 mr-4 text-sm mt-1">
              <span className="ml-2 text-gray-500">Email</span>
              <input
                className="md:ml-[70%] ml-10 text-gray-500"
                name="email"
                value={editableData.email}
                onChange={handleInputChange}
              />
              <button onClick={handleUpdateUser}>
                <Edit color={"#CECECE"} />
              </button>
            </div>
            <hr className="border-gray-300 my-2 mr-6 ml-6" />
            <div className="flex justify-between md:ml-6 ml-4 md:mr-6 mr-4 text-sm mt-1">
              <span className="ml-2 text-gray-500">Nombre y apellido</span>
              <input
                className="text-gray-500 md:ml-[62%]"
                name="firstname"
                value={`${editableData.firstname} ${editableData.lastname}`}
                onChange={handleInputChange}
              />
              <button onClick={handleUpdateUser}>
                <Edit color={"#CECECE"} />
              </button>
            </div>
            <hr className="border-gray-300 my-2 mr-6 ml-6" />
            <div className="flex justify-between md:ml-6 ml-4 md:mr-6 mr-4  text-sm mt-1">
              <span className="ml-2 text-gray-500">CUIT</span>
              <input
                className="text-gray-500 md:ml-[70%] ml-10"
                name="firstname"
                value="27372738212"
                onChange={handleInputChange}
              />
              <button onClick={handleUpdateUser}>
                <Edit color={"#CECECE"} />
              </button>
            </div>
            <hr className="border-gray-300 my-2 mr-6 ml-6" />
            <div className="flex justify-between md:ml-6 ml-4 md:mr-6 mr-4  text-sm mt-1">
              <span className="ml-2 text-gray-500">Telefono</span>
              <input
                className="text-gray-500 md:ml-[70%] ml-8"
                name="phone"
                value={editableData.phone}
                onChange={handleInputChange}
              />
              <button onClick={handleUpdateUser}>
                <Edit color={"#CECECE"} />
              </button>
            </div>
            <hr className="border-gray-300 my-2 mr-6 ml-6" />
            <div className="flex justify-between items-center md:ml-6 ml-4 md:mr-6 mr-4  text-sm mt-1">
              <span className="ml-2 text-gray-500">Contraseña</span>
              <input
                className="md:ml-[70%] text-gray-500"
                name="phone"
                value="xxxxxxxxx"
                onChange={handleInputChange}
              />
              <button onClick={handleUpdateUser}>
                <Edit color={"#CECECE"} />
              </button>
            </div>
            <hr className="border-gray-300 my-3 mr-6 ml-6" />
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
            number1={cvu}
            number2={alias}
            icon={<Copy />}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
