import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="flex justify-between bg-[#C1FD35]">
        <div className="mt-6 ml-2 mb-4">
          <Link href="/">
            <img src="/img/Logo-black.png" alt="Logo1" width={70} />
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center  w-full h-full py-[115px]">
        <h2 className="text-[20px] mb-[10px] sm:text-[30px] sm:mb-[20px] leading-3">
          ¡Hola! Ingresá tu e-mail
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
              label={"email"}
              name={"email"}
              classNameLabel={"block text-[30px]"}
              type={"text"}
              className={
                "w-full h-[60px] sm:max-w-[85%] rounded-lg text-black p-2"
              }
              classNameInput={`p-[20px] outline-none w-[100%] h-[40px] bg-black/20`}
              placeholder={"Correo electrónico"}
              // onFocus={FocusMail}
              // value={valueMail}
              // onChange={OnChangeMail}
              // onBlur={BlurMail}
            />
            <div className="h-[.5rem]">
              <p className="text-red text-[.9rem] leading-3"></p>
            </div>
          </div>
          <div
            className="mb-4 w-[100%] flex justify-start items-center flex-col
      sm:px-3"
          >
            <input
              label={"password"}
              name={"password"}
              classNameLabel={"text-[30px]"}
              type={"password"}
              className={
                "w-full h-[60px] sm:max-w-[85%] rounded-lg text-black p-2"
              }
              classNameInput={`p-[20px] outline-none w-[100%] h-[40px] bg-black/20`}
              placeholder={"Contraseña"}
              // value={valuePassword}
              // onFocus={FocusPassword}
              // onChange={OnChangePassword}
              // onBlur={BlurPassword}
              // isPasswordVisible={isPasswordVisible}
              // togglePasswordVisibility={() =>
              //   setIsPasswordVisible(!isPasswordVisible)
              // }
            />

            <div className="h-[.5rem] pb-6">
              <p className="text-red text-[.9rem] leading-3"></p>
            </div>
          </div>

          <div
            className="
      flex
      flex-col 
      justify-center 
      items-center 
      mt-[10px]"
          >
            <div className="h-[.5rem] mb-[1.2rem]">
              <p className="text-[#ff0000] text-[1rem] leading-3"></p>

              <p className="text-darkGreen text-[1rem] leading-3"></p>
            </div>
            <button
              className={`
        py-[16px] 
        px-[55px] 
        leading-3 
        text-[20px]
        block
        sm:w-[13rem]
        md:w-[14rem]
        w-full h-[60px] sm:max-w-[85%] text-[#C1FD35]`}
            >
              Continuar
            </button>
            <Link href="/register" className="underline">
              Crear cuenta
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
