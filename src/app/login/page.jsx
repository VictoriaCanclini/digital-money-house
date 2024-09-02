"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import useInput from "@/hooks/useInput";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [messageAlert, setmessageAlert] = useState("");

  const {
    OnChange: OnChangeMail,
    value: valueEmail,
    blur: BlurEmail,
    focus: FocusEmail,
    message: MessageEmail,
  } = useInput("email");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (valueEmail.trim() == "") {
      setmessageAlert("¡Completar todos los campos!");
      setTimeout(() => {
        setmessageAlert("");
      }, 1300);
    } else {
      //Verificacion campos de los mensajes de error
      if (MessageEmail) {
        setmessageAlert("¡Verificar campos!");
        setTimeout(() => {
          setmessageAlert("");
        }, 1300);
      } else {
        router.push("/login-password");
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
            ></div>
            <button
              className="
                w-full h-[60px] sm:max-w-[80%] rounded-lg p-3
        text-[20px] text-black border-lg bg-[#C1FD35] text-center"
            >
              Continuar
            </button>
            <button
              className="w-full h-[60px] sm:max-w-[80%] rounded-lg p-2
              text-[20px]
               text-black border-lg bg-[#CECECE] mt-6"
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
