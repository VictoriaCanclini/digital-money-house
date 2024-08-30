"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import useInput from "@/hooks/useInput";
import { useState } from "react";

export default function Login() {
  const [messageAlert, setmessageAlert] = useState("");
  const [messageAlertOk, setmessageAlertOk] = useState("");

  const {
    OnChange: OnChangeMail,
    value: valueEmail,
    blur: BlurEmail,
    focus: FocusEmail,
    message: MessageEmail,
  } = useInput("email");

  const {
    OnChange: OnChangePassword,
    value: valuePassword,
    blur: BlurPassword,
    focus: FocusPassword,
    message: MessagePassword,
    isPasswordVisible,
    setIsPasswordVisible,
  } = useInput("password");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (valueEmail.trim() == "" || valuePassword.trim() == "") {
      setmessageAlert("¡Completar todos los campos!");
      setTimeout(() => {
        setmessageAlert("");
      }, 1300);
    } else {
      //Verificacion campos de los mensajes de error
      if (MessageEmail || MessagePassword) {
        setmessageAlert("¡Verificar campos!");
        setTimeout(() => {
          setmessageAlert("");
        }, 1300);
      } else {
        //Registro de usuario
        // try {
        //   const response = await axios.post(
        //     `${process.env.NEXT_PUBLIC_API_URL}/api/user/login`,
        //     {
        //       email: valueEmail,
        //       password: valuePassword,
        //     },
        //     { withCredentials: true }
        //   );
        //   const data = response.data;
        //   dispatch(
        //     setCredentials({
        //       dni: data.user.dni,
        //       name: data.user.name,
        //       lastname: data.user.lastname,
        //       email: data.user.email,
        //       id: data.user._id,
        //     })
        //   );
        //   setmessageAlert("");
        //   setmessageAlertOk("¡Bienvenido!");
        //   router.push("/");
        // } catch (error) {
        //   console.error(error);
        //   setmessageAlert("Error en el login");
        //   setTimeout(() => {
        //     setmessageAlert("");
        //   }, 1300);
        // }
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
            ¡Hola! Ingresá tu e-mail
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
      mb-6 
      w-[100%] 
      sm:px-3
      flex justify-start items-center
      flex-col
      "
            >
              <input
                label={"email"}
                name={"email"}
                type={"text"}
                className={
                  "w-full h-[60px] sm:max-w-[85%] rounded-lg text-black p-2"
                }
                placeholder={"Correo electrónico"}
                onFocus={FocusEmail}
                value={valueEmail}
                onChange={OnChangeMail}
                onBlur={BlurEmail}
              />
              <div className="h-[.5rem]">
                {MessageEmail && (
                  <p className="text-red-500 text-[.9rem] leading-3 mt-2">
                    {MessageEmail}
                  </p>
                )}
              </div>
            </div>
            <div
              className="mb-4 w-[100%] flex justify-start items-center flex-col
      sm:px-3"
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
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisibility={() =>
                  setIsPasswordVisible(!isPasswordVisible)
                }
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
            <button
              className="w-full h-[60px] sm:max-w-[80%] rounded-lg p-2
              text-[20px]
               text-black border-lg bg-[#CECECE] mt-8"
            >
              <Link href="/register">Crear cuenta</Link>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
