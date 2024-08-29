import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-black">
      <div className="mt-6 ml-2">
        <img src="/img/Logo 01.png" alt="Logo1" width={70} />
      </div>
      <div className="flex justify-end gap-1">
        <Link
          href="/login"
          className="text-[#C1FD35] border-2 rounded-md m-3 p-2"
        >
          Ingresar
        </Link>
        <Link
          href="/register"
          className="bg-[#C1FD35] text-black rounded-md m-3 p-2 mr-6"
        >
          Crear cuenta
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
