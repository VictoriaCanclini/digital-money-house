"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import useInput from "@/hooks/useInput";
import { useState } from "react";

export default function Register() {
  const [messageAlert, setmessageAlert] = useState("");
  const [messageAlertOk, setmessageAlertOk] = useState("");
  const {
    OnChange: OnChangeName,
    value: valueName,
    blur: BlurName,
    focus: FocusName,
    message: MessageName,
  } = useInput("name");
  const {
    OnChange: OnChangeLastName,
    value: valueLastName,
    blur: BlurLastName,
    focus: FocusLastName,
    message: MessageLastName,
  } = useInput("lastname");
  const {
    OnChange: OnChangeDni,
    value: valueDni,
    blur: BlurDni,
    focus: FocusDni,
    message: MessageDni,
  } = useInput("dni");
  const {
    OnChange: OnChangeTel,
    value: valueTel,
    blur: BlurTel,
    focus: FocusTel,
    message: MessageTel,
  } = useInput("tel");
  const {
    OnChange: OnChangeEmail,
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
    //Verificacion campos de los input
    if (
      valueName.trim() == "" ||
      valueLastName.trim() == "" ||
      valueDni.trim() == "" ||
      valueEmail.trim() == "" ||
      valuePassword.trim() == ""
    ) {
      setmessageAlert("¡Completar todos los campos!");
      setTimeout(() => {
        setmessageAlert("");
      }, 1300);
    } else {
      //Verificacion campos de los mensajes de error
      if (
        MessageLastName ||
        MessageName ||
        MessageDni ||
        MessageEmail ||
        MessagePassword
      ) {
        setmessageAlert("¡Verificar campos!");
        setTimeout(() => {
          setmessageAlert("");
        }, 1300);
      } else {
        //Registro de usuario
        // try {
        //   await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/add`, {
        //     name: valueName,
        //     lastname: valueLastName,
        //     dni: valueDni,
        //     mail: valueMail,
        //     password: valuePassword,
        //   });
        //   setmessageAlert("");
        //   setmessageAlertOk("¡Bienvenido!");
        //   setTimeout(() => {
        //     router.push("/login");
        //   }, 1300);
        // } catch (error) {
        //   console.error(error);
        //   const { data } = error.response;
        //   //Uso de las validaciones del back, si el correo esta registrado se le manda un alerta al cliente
        //   if (data == "Email is already registered") {
        //     setmessageAlert("El correo ya se encuentra en uso");
        //     setTimeout(() => {
        //       setmessageAlert("");
        //     }, 1300);
        //   }
        // }
      }
    }
  };

  return (
    <>
      <div className="flex justify-between bg-[#C1FD35]">
        <div className="mt-6 ml-2 mb-4">
          <Link href="/">
            <img src="/img/Logo-black.png" alt="Logo1" width={70} />
          </Link>
        </div>
        <div className="flex justify-end gap-1">
          <Link
            href="/login"
            className="text-white bg-black border-2 border-black rounded-md m-3 p-2"
          >
            Iniciar sesión
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center  w-full h-full mt-[80px]">
        <h2 className="text-[20px] mb-[10px] sm:text-[30px] sm:mb-[20px] leading-3">
          Crear cuenta
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
      mb-4 
      w-[100%] 
      sm:px-3
      flex justify-start items-center
      flex-col
      "
          >
            <input
              className={
                "flex-none w-full h-[60px] sm:max-w-[85%] rounded-lg text-black p-2"
              }
              label={"Nombre"}
              value={valueName}
              onChange={OnChangeName}
              onBlur={BlurName}
              onFocus={FocusName}
              placeholder={"Nombre*"}
              name={"nombre"}
            />
            <div className="h-[.5rem]">
              {MessageName && (
                <p className="text-red-500 text-[.9rem] leading-3 mt-2">
                  {MessageName}
                </p>
              )}
            </div>
            <input
              className={
                "flex-none w-full h-[60px] sm:max-w-[85%] rounded-lg text-black p-2 mt-4"
              }
              label={"Apellido"}
              value={valueLastName}
              onChange={OnChangeLastName}
              onBlur={BlurLastName}
              onFocus={FocusLastName}
              placeholder={"Apellido*"}
              name={"apellido"}
            />
            <div className="h-[.5rem]">
              {MessageLastName && (
                <p className="text-red-500 text-[.9rem] leading-3 mt-2">
                  {MessageLastName}
                </p>
              )}
            </div>
            <input
              className={
                "flex-none w-full h-[60px] sm:max-w-[85%] rounded-lg text-black p-2 mt-4"
              }
              type={"text"}
              label={"DNI"}
              value={valueDni}
              onChange={OnChangeDni}
              onBlur={BlurDni}
              onFocus={FocusDni}
              name={"dni"}
              placeholder={"DNI*"}
            />
            <div className="h-[.5rem]">
              {MessageDni && (
                <p className="text-red-500 text-[.9rem] leading-3 mt-2">
                  {MessageDni}
                </p>
              )}
            </div>
            <input
              className={
                "flex-none w-full h-[60px] sm:max-w-[85%] rounded-lg text-black p-2 mt-4"
              }
              type={"text"}
              label={"Telefono"}
              value={valueTel}
              onChange={OnChangeTel}
              onBlur={BlurTel}
              onFocus={FocusTel}
              name={"tel"}
              placeholder={"Telefono*"}
            />
            <div className="h-[.5rem]">
              {MessageTel && (
                <p className="text-red-500 text-[.9rem] leading-3 mt-2">
                  {MessageTel}
                </p>
              )}
            </div>
            <input
              label={"email"}
              name={"email"}
              type={"text"}
              className={
                "w-full h-[60px] sm:max-w-[85%] rounded-lg text-black p-2 mt-4"
              }
              placeholder={"Correo electrónico*"}
              onFocus={FocusEmail}
              value={valueEmail}
              onChange={OnChangeEmail}
              onBlur={BlurEmail}
            />
            <div className="h-[.5rem]">
              {MessageEmail && (
                <p className="text-red-500 text-[.9rem] leading-3 mt-2">
                  {MessageEmail}
                </p>
              )}
            </div>
            <input
              label={"Contraseña"}
              name={"password"}
              type={"password"}
              className={
                "w-full h-[60px] sm:max-w-[85%] rounded-lg text-black p-2 mt-4"
              }
              placeholder={"Contraseña*"}
              value={valuePassword}
              onFocus={FocusPassword}
              onChange={OnChangePassword}
              onBlur={BlurPassword}
              isPasswordVisible={isPasswordVisible}
              togglePasswordVisibility={() =>
                setIsPasswordVisible(!isPasswordVisible)
              }
            />
            <div className="h-[.5rem]">
              {MessagePassword && (
                <p className="text-red-500 text-[.9rem] leading-3 mt-2">
                  {MessagePassword}
                </p>
              )}
            </div>
            <Link
              href="/successful-registration"
              className="underline text-[#C1FD35] mt-8"
            >
              Crear cuenta
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
