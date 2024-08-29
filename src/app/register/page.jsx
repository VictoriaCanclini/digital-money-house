import Footer from "@/components/Footer";
import Link from "next/link";

export default function Register() {
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

      <div className="flex flex-col justify-center items-center  w-full h-full mt-[105px]">
        <h2 className="text-[20px] mb-[10px] sm:text-[30px] sm:mb-[20px] leading-3">
          Crear cuenta
        </h2>
        <form
          // onSubmit={onSubmitForm}
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
              // value={valueName}
              // onChange={OnChangeName}
              // onBlur={BlurName}
              // onFocus={FocusName}
              // classNameLabel={"block text-[23px]"}
              placeholder={"Nombre*"}
              name={"nombre"}
              // classNameInput={`p-[5px]
              // outline-none
              // w-[100%]
              // h-[40px]
              // bg-black/20`}
            />
            <div className="h-[.5rem]">
              <p className="text-red text-[.9rem] leading-3"></p>
            </div>
            <input
              className={
                "flex-none w-full h-[60px] sm:max-w-[85%] rounded-lg text-black p-2"
              }
              label={"Apellido"}
              // value={valueLastName}
              // onChange={OnChangeLastName}
              // onBlur={BlurLastName}
              // onFocus={FocusLastName}
              // classNameLabel={"block text-[23px]"}
              placeholder={"Apellido*"}
              name={"apellido"}
              // classNameInput={`p-[5px]
              // outline-none
              // w-[100%]
              // h-[40px]
              // bg-black/20`}
            />
            <div className="h-[.5rem]">
              <p className="text-red text-[.9rem] leading-3"></p>
            </div>
            <input
              className={
                "flex-none w-full h-[60px] sm:max-w-[85%] rounded-lg text-black p-2"
              }
              type={"text"}
              label={"DNI"}
              // value={valueDni}
              // onChange={OnChangeDni}
              // onBlur={BlurDni}
              // onFocus={FocusDni}
              // classNameLabel={"block text-[23px]"}
              name={"dni"}
              placeholder={"DNI*"}
              // classNameInput={`p-[4px]
              // outline-none
              // w-[100%]
              // h-[40px]
              // bg-black/20`}
            />
            <div className="h-[.5rem]">
              <p className="text-red text-[.9rem] leading-3"></p>
            </div>
            <input
              className={
                "flex-none w-full h-[60px] sm:max-w-[85%] rounded-lg text-black p-2"
              }
              type={"text"}
              label={"Telefono"}
              // value={valueDni}
              // onChange={OnChangeDni}
              // onBlur={BlurDni}
              // onFocus={FocusDni}
              // classNameLabel={"block text-[23px]"}
              name={"dni"}
              placeholder={"Telefono*"}
              // classNameInput={`p-[4px]
              // outline-none
              // w-[100%]
              // h-[40px]
              // bg-black/20`}
            />
            <div className="h-[.5rem]">
              <p className="text-red text-[.9rem] leading-3"></p>
            </div>
            <input
              label={"email"}
              name={"email"}
              // classNameLabel={"block text-[30px]"}
              type={"text"}
              className={
                "w-full h-[60px] sm:max-w-[85%] rounded-lg text-black p-2"
              }
              // classNameInput={`p-[20px] outline-none w-[100%] h-[40px] bg-black/20`}
              placeholder={"Correo electrónico*"}
              // onFocus={FocusMail}
              // value={valueMail}
              // onChange={OnChangeMail}
              // onBlur={BlurMail}
            />
            <div className="h-[.5rem]">
              <p className="text-red text-[.9rem] leading-3"></p>
            </div>
            <input
              label={"Contraseña"}
              name={"password"}
              // classNameLabel={"text-[30px]"}
              type={"password"}
              className={
                "w-full h-[60px] sm:max-w-[85%] rounded-lg text-black p-2"
              }
              // classNameInput={`p-[20px] outline-none w-[100%] h-[40px] bg-black/20`}
              placeholder={"Contraseña*"}
              // value={valuePassword}
              // onFocus={FocusPassword}
              // onChange={OnChangePassword}
              // onBlur={BlurPassword}
              // isPasswordVisible={isPasswordVisible}
              // togglePasswordVisibility={() =>
              //   setIsPasswordVisible(!isPasswordVisible)
              // }
            />
            {/* <div className="h-[.5rem] pb-6">
              <p className="text-red text-[.9rem] leading-3"></p>
            </div> */}
          </div>
          <Link
            href="/successful-registration"
            className="underline text-[#C1FD35]"
          >
            Crear cuenta
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
}
