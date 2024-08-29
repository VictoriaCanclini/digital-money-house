import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-black h-[30px]">
      <div className="mt-6 ml-2">
        <img src="/img/Logo 01.png" alt="Logo1" width={70} />
      </div>
      <div className="flex justify-end gap-2 m-6">
        <button>
          <Link
            href="/login"
            className="text-[#C1FD35] border-2 border-[#C1FD35] rounded-md pl-4 pr-4 pt-2 pb-2"
          >
            Ingresar
          </Link>
        </button>
        <button>
          <Link
            href="/register"
            className="bg-[#C1FD35] text-black rounded-md pl-4 pr-4 pt-2 pb-2"
          >
            Crear cuenta
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
