"use client";

import { Arrow, Copy, Edit } from "@/common/Icons";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sibvar from "@/components/Sibvar";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfilePage = ({ params }) => {
  const user_id = params["user_id"];
  const [userData, setUserData] = useState(null);
  const [editableData, setEditableData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    dni: "",
  });

  // Usamos ref para enfocar los inputs
  const emailRef = useRef(null);
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const dniRef = useRef(null);
  const phoneRef = useRef(null);

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
                Authorization: `${Cookies.get("token")}`,
              },
            }
          );
          const user = response.data;
          setUserData(user);
          setEditableData({
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            phone: user.phone,
            dni: user.dni,
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
      toast("Usuario actualizado");
      setUserData(response.data);
    } catch (error) {
      console.error("Error al actualizar los datos del usuario:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleUpdateUser();
    }
  };

  // Función para copiar el texto
  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast("copiado: " + text);
      })
      .catch((err) => {
        console.error("Error al copiar: ", err);
      });
  };

  return (
    <div className="bg-[#D9D9D9]">
      <Navbar />
      <div className="flex h-screen mt-8">
        <Sibvar />
        <div className="flex flex-col justify-center items-center w-full">
          <div className="md:w-[1000px] sm:w-[500px] w-[300px] h-[285px] bg-white rounded-md text-black border-2 border-gray-300 shadow-md flex flex-col">
            <h1 className="ml-6 mt-6 font-bold">Tus datos</h1>
            <hr className="border-gray-300 my-2 mr-6 ml-6" />
            <div className="flex justify-between md:ml-6 ml-4 md:mr-6 mr-4 text-sm mt-1">
              <span className="ml-2 text-gray-500">Email</span>
              <input
                ref={emailRef}
                className=" text-gray-500"
                name="email"
                value={editableData.email}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
              <button onClick={() => emailRef.current.focus()}>
                <Edit color={"#CECECE"} />
              </button>
            </div>
            <hr className="border-gray-300 my-2 mr-6 ml-6" />
            <div className="flex justify-between md:ml-6 ml-4 md:mr-6 mr-4 text-sm mt-1">
              <span className="ml-2 text-gray-500">Nombre</span>
              <input
                ref={firstnameRef}
                className="text-gray-500"
                name="firstname"
                value={editableData.firstname}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
              <button onClick={() => firstnameRef.current.focus()}>
                <Edit color={"#CECECE"} />
              </button>
            </div>
            <hr className="border-gray-300 my-2 mr-6 ml-6" />
            <div className="flex justify-between md:ml-6 ml-4 md:mr-6 mr-4 text-sm mt-1">
              <span className="ml-2 text-gray-500">Apellido</span>
              <input
                ref={lastnameRef}
                className="text-gray-500"
                name="firstname"
                value={editableData.lastname}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
              <button onClick={() => lastnameRef.current.focus()}>
                <Edit color={"#CECECE"} />
              </button>
            </div>
            <hr className="border-gray-300 my-2 mr-6 ml-6" />
            <div className="flex justify-between md:ml-6 ml-4 md:mr-6 mr-4  text-sm mt-1">
              <span className="ml-2 text-gray-500">DNI</span>
              <input
                ref={dniRef}
                className="text-gray-500 ml-8"
                name="dni"
                value={editableData.dni}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
              <button onClick={() => dniRef.current.focus()}>
                <Edit color={"#CECECE"} />
              </button>
            </div>
            <hr className="border-gray-300 my-2 mr-6 ml-6" />
            <div className="flex justify-between md:ml-6 ml-4 md:mr-6 mr-4  text-sm mt-1">
              <span className="ml-2 text-gray-500">Telefono</span>
              <input
                ref={phoneRef}
                className="text-gray-500"
                name="phone"
                value={editableData.phone}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
              <button onClick={() => phoneRef.current.focus()}>
                <Edit color={"#CECECE"} />
              </button>
            </div>
            <hr className="border-gray-300 my-2 mr-6 ml-6" />
          </div>
          <div className="flex flex-row mt-2">
            <Link href="/credit-card">
              <button className="bg-[#C1FD35] text-black font-bold md:w-[1000px] sm:w-[500px] w-[300px] h-[106px] rounded-md flex justify-between items-center pl-6 pr-4">
                <span className="flex-grow flex justify-start">
                  Gestioná los medios de pago
                </span>
                <Arrow color={"#000000"} />
              </button>
            </Link>
          </div>
          <Card
            title="Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta"
            button3Text="CVU"
            button4Text="Alias"
            number1={cvu}
            number2={alias}
            icon={<Copy onClick={handleCopy} />}
            onCopy={handleCopy}
          />
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default ProfilePage;
