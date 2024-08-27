const Navbar = () => {
  return (
    <div className="flex justify-between bg-black">
      <div className="mt-6 ml-2">
        <img src="/img/Logo 01.png" alt="Logo1" width={70} />
      </div>
      <div className="flex justify-end gap-1">
        <button className="text-[#C1FD35] border-2 rounded-md pr-2 pl-2 pb-1 pt-1 m-4">
          Ingresar
        </button>
        <button className="bg-[#C1FD35] text-black rounded-md pr-2 pl-2 pb-1 pt-1 m-4">
          Crear cuenta
        </button>
      </div>
    </div>
  );
};

export default Navbar;
