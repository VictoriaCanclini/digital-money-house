import Link from "next/link";

const Navbar = () => {
  const handleLogout = async () => {
    try {
      await axios.post(
        `${process.env.BASE_URL}/api/logout`,
        {},
        { withCredentials: true }
      );
      router.push("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="flex justify-between bg-black h-[70px]">
      <div className="mt-6 ml-2">
        <img src="/img/Logo 01.png" alt="Logo1" width={70} />
      </div>
      <div className="flex justify-end gap-2 mt-2 mr-4">
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
        {/* {user && (
          <Link
            href="/logout"
            className="text-white bg-black border-2 border-black rounded-md m-3 p-2"
            onClick={handleLogout}
          >
            Cerrar sesión
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
