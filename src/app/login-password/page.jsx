"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import useInput from "@/hooks/useInput";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../state/features/authSlice";
import Cookies from "js-cookie";

export default function LoginPassword() {
  const email = useSelector((state) => state.auth.email);
  const user_id = useSelector((state) => state.auth.user_id);
  const firstname = useSelector((state) => state.auth.firstname);
  const dispatch = useDispatch();
  const router = useRouter();
  const [messageAlert, setmessageAlert] = useState("");
  const [messageAlertOk, setmessageAlertOk] = useState("");

  console.log(user_id);

  const {
    OnChange: OnChangePassword,
    value: valuePassword,
    blur: BlurPassword,
    focus: FocusPassword,
    message: MessagePassword,
  } = useInput("password");

  const fetchUserId = async (token) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/account`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      const userData = response.data;
      console.log("User data:", userData);
      return userData;
    } catch (error) {
      console.error("Error fetching user data:", error);
      setmessageAlert("Error al obtener los datos del usuario");
    }
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (valuePassword.trim() == "") {
      setmessageAlert("¡Completar todos los campos!");
      setTimeout(() => {
        setmessageAlert("");
      }, 1300);
    } else {
      //Verificacion campos de los mensajes de error
      if (MessagePassword) {
        setmessageAlert("¡Verificar campos!");
        setTimeout(() => {
          setmessageAlert("");
        }, 1300);
      } else {
        //Registro de usuario
        try {
          const response = await axios.post(
            `${`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`}`,
            {
              email: email,
              password: valuePassword,
            }
          );
          const data = response.data;
          console.log(data);

          console.log("Token:", data.token);
          Cookies.set("token", data.token, { expires: 7 });

          const userData = await fetchUserId(data.token);
          console.log("User ID:", userData?.user_id);
          console.log("CVU:", userData?.cvu);
          dispatch(
            setCredentials({
              user: data.user,
              email: email,
              user_id: userData.user_id,
              cvu: userData.cvu,
              alias: userData.alias,
            })
          );
          setmessageAlertOk("¡Bienvenido!");
          router.push("/home");
        } catch (error) {
          console.error(error);
          setmessageAlert("Error en el login");
          setTimeout(() => {
            setmessageAlert("");
          }, 1300);
        }
      }
    }
  };

  return (
    <>
      <div className="h-screen">
        <div className="flex justify-between bg-[#C1FD35]">
          <Link href="/">
            <img
              className="mt-6 ml-2 mb-4"
              src="/img/Logo-black.png"
              alt="Logo1"
              width={70}
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center  py-[100px]">
          <h2 className="text-[20px] mb-[10px] sm:text-[30px] sm:mb-[20px] leading-3">
            Ingresá tu contraseña
          </h2>
          <form
            onSubmit={onSubmitForm}
            className="
      mt-[50px] 
      w-[80%]
      min-[450px]:max-w-[350px]
      sm:max-w-[450px]
      md:flex md:flex-col md:items-center
          "
          >
            <div
              className=" 
      w-[100%] 
      sm:px-3
      flex justify-start items-center
      flex-col
      "
            >
              <input
                label={"password"}
                name={"password"}
                type={"password"}
                className={
                  "w-full h-[60px] sm:max-w-[85%] rounded-lg text-black p-2"
                }
                placeholder={"Contraseña"}
                value={valuePassword}
                onFocus={FocusPassword}
                onChange={OnChangePassword}
                onBlur={BlurPassword}
              />
              <div className="h-[.5rem] pb-6">
                {MessagePassword && (
                  <p className="text-red-500 text-[.9rem] leading-3 mt-2">
                    {MessagePassword}
                  </p>
                )}
              </div>
            </div>
            <button
              className="
                w-full h-[60px] sm:max-w-[80%] rounded-lg p-2
        text-[20px]
         text-black border-lg bg-[#C1FD35] "
            >
              Continuar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
