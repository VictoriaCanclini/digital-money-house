"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import useInput from "@/hooks/useInput";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [messageAlert, setmessageAlert] = useState("");
  const [messageAlertOk, setmessageAlertOk] = useState("");
  const {
    OnChange: OnChangeName,
    value: valueName,
    blur: BlurName,
    focus: FocusName,
    message: MessageName,
  } = useInput("firstname");
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
    OnChange: OnChangePhone,
    value: valuePhone,
    blur: BlurPhone,
    focus: FocusPhone,
    message: MessagePhone,
  } = useInput("phone");
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
    // isPasswordVisible,
    // setIsPasswordVisible,
  } = useInput("password");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    // Verificación de campos de los inputs
    if (
      valueName.trim() === "" ||
      valueLastName.trim() === "" ||
      valueDni.trim() === "" ||
      valueEmail.trim() === "" ||
      valuePassword.trim() === ""
    ) {
      setmessageAlert("¡Completar todos los campos!");
      setTimeout(() => {
        setmessageAlert("");
      }, 1300);
    } else {
      // Verificación de mensajes de error
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
        try {
          const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`;
          await axios.post(url, {
            firstname: valueName,
            lastname: valueLastName,
            dni: parseInt(valueDni, 10),
            email: valueEmail,
            password: valuePassword,
            phone: valuePhone,
          });
          setmessageAlert("");
          setmessageAlertOk("¡Bienvenido!");
          setTimeout(() => {
            router.push("/successful-registration");
          }, 1300);
        } catch (error) {
          console.error(error);
          const { data } = error.response;
          console.log(data);
          // Uso de las validaciones del back, si el correo está registrado se le manda un alerta al cliente
          if (data.error === "Email already registered") {
            setmessageAlert("El correo ya se encuentra en uso");
            setTimeout(() => {
              setmessageAlert("");
            }, 1800);
          }
        }
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
      <div className="flex flex-col justify-center items-center w-full h-full mt-[80px]">
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
          md:grid 
          md:grid-cols-2 
          md:gap-x-4
          md:gap-y-6
          justify-items-center
          "
        >
          <div className="w-full mb-4">
            <input
              className="w-full h-[60px] rounded-lg text-black p-2"
              label={"Nombre"}
              value={valueName}
              onChange={OnChangeName}
              onBlur={BlurName}
              onFocus={FocusName}
              placeholder={"Nombre*"}
              name={"nombre"}
            />
            {MessageName && (
              <p className="text-red-500 text-[.9rem] leading-3 mt-2">
                {MessageName}
              </p>
            )}
          </div>

          <div className="w-full mb-4">
            <input
              className="w-full h-[60px] rounded-lg text-black p-2"
              label={"Apellido"}
              value={valueLastName}
              onChange={OnChangeLastName}
              onBlur={BlurLastName}
              onFocus={FocusLastName}
              placeholder={"Apellido*"}
              name={"apellido"}
            />
            {MessageLastName && (
              <p className="text-red-500 text-[.9rem] leading-3 mt-2">
                {MessageLastName}
              </p>
            )}
          </div>

          <div className="w-full mb-4">
            <input
              className="w-full h-[60px] rounded-lg text-black p-2"
              type={"text"}
              label={"DNI"}
              value={valueDni}
              onChange={OnChangeDni}
              onBlur={BlurDni}
              onFocus={FocusDni}
              name={"dni"}
              placeholder={"DNI*"}
            />
            {MessageDni && (
              <p className="text-red-500 text-[.9rem] leading-3 mt-2">
                {MessageDni}
              </p>
            )}
          </div>

          <div className="w-full mb-4">
            <input
              className="w-full h-[60px] rounded-lg text-black p-2"
              type={"text"}
              label={"Teléfono"}
              value={valuePhone}
              onChange={OnChangePhone}
              onBlur={BlurPhone}
              onFocus={FocusPhone}
              name={"phone"}
              placeholder={"Teléfono*"}
            />
            {MessagePhone && (
              <p className="text-red-500 text-[.9rem] leading-3 mt-2">
                {MessagePhone}
              </p>
            )}
          </div>

          <div className="w-full mb-4">
            <input
              className="w-full h-[60px] rounded-lg text-black p-2"
              label={"email"}
              name={"email"}
              type={"text"}
              placeholder={"Correo electrónico*"}
              onFocus={FocusEmail}
              value={valueEmail}
              onChange={OnChangeEmail}
              onBlur={BlurEmail}
            />
            {MessageEmail && (
              <p className="text-red-500 text-[.9rem] leading-3 mt-2">
                {MessageEmail}
              </p>
            )}
          </div>

          <div className="w-full mb-4">
            <input
              label={"Contraseña"}
              name={"password"}
              type={"password"}
              className="w-full h-[60px] rounded-lg text-black p-2"
              placeholder={"Contraseña*"}
              value={valuePassword}
              onFocus={FocusPassword}
              onChange={OnChangePassword}
              onBlur={BlurPassword}
              // isPasswordVisible={isPasswordVisible}
              // togglePasswordVisibility={() =>
              //   setIsPasswordVisible(!isPasswordVisible)
              // }
            />
            {MessagePassword && (
              <p className="text-red-500 text-[.9rem] leading-3 mt-2">
                {MessagePassword}
              </p>
            )}
          </div>

          <div className="h-[.5rem] mb-[1.2rem]">
            {messageAlert ? (
              <p className="text-red-500 text-[1rem] leading-3">
                {messageAlert}
              </p>
            ) : (
              <p className="text-green-500 text-[1rem] leading-3">
                {messageAlertOk}
              </p>
            )}
          </div>

          <div className="col-span-2 w-full">
            <button className="w-full h-[60px] rounded-lg p-2 text-[20px] text-black border-lg bg-[#C1FD35]">
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
      <div className="mt-[145px]">
        <Footer />
      </div>
    </>
  );
}
